import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PortalCard.css';

export default function PortalCard({ to, accent, eyebrow, title, tagline, glyph, index }) {
  const cardRef = useRef(null);

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
      style={{ '--card-accent': accent }}
    >
      <Link
        to={to}
        ref={cardRef}
        onPointerMove={handlePointerMove}
        className="portal-card"
      >
        <span className="portal-card-glow" aria-hidden="true" />
        <span className="portal-card-glyph" aria-hidden="true">{glyph}</span>
        <span className="portal-card-eyebrow">{eyebrow}</span>
        <span className="portal-card-title">{title}</span>
        <span className="portal-card-tagline">{tagline}</span>
        <span className="portal-card-enter">
          Enter <span className="portal-card-enter-arrow">&rarr;</span>
        </span>
      </Link>
    </motion.div>
  );
}
