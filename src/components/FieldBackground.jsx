import { useEffect, useRef } from 'react';
import './FieldBackground.css';

// An animated node graph — nodes drift, link to nearby neighbors, and
// gently react to the pointer. Reads as a network / constellation, a nod
// to the math & systems-thinking side of the work rather than decoration
// for its own sake.
function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export default function FieldBackground({
  color = '#4fd1ff',
  density = 0.00009,
  linkDistance = 130,
  interactive = true,
  speed = 1,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rgb = hexToRgb(color);
    const pointer = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(width * height * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * speed,
        vy: (Math.random() - 0.5) * 0.25 * speed,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }
    function onPointerLeave() {
      pointer.active = false;
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (interactive && pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const dist2 = dx * dx + dy * dy;
          const radius = 140;
          if (dist2 < radius * radius) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (radius - dist) / radius;
            n.x += (dx / dist) * force * 1.1;
            n.y += (dy / dist) * force * 1.1;
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * 0.35;
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.75)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    resize();
    step();
    if (reduceMotion) {
      // draw a single static frame instead of looping
      step();
    }

    window.addEventListener('resize', resize);
    if (interactive) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [color, density, linkDistance, interactive, speed]);

  return <canvas ref={canvasRef} className="field-background" aria-hidden="true" />;
}
