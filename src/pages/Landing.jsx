import { motion } from 'framer-motion';
import FieldBackground from '../components/FieldBackground';
import PortalCard from '../components/PortalCard';
import './Landing.css';

const portals = [
  {
    to: '/software',
    accent: 'var(--accent-software)',
    eyebrow: 'Engineering',
    title: 'Software',
    tagline: 'Full-stack apps and systems, from idea to production.',
    glyph: '{ }',
  },
  {
    to: '/songwriting',
    accent: 'var(--accent-song)',
    eyebrow: 'Music',
    title: 'Songwriting',
    tagline: 'Original songs — lyrics, melody, and production.',
    glyph: '♪',
  },
  {
    to: '/game-development',
    accent: 'var(--accent-game)',
    eyebrow: 'Simple Reality Studios',
    title: 'Game Development',
    tagline: 'Worlds, characters, and systems built to be played.',
    glyph: '◈',
  },
];

export default function Landing() {
  return (
    <div className="landing">
      <FieldBackground color="#4fd1ff" density={0.00009} linkDistance={140} />

      <div className="landing-content">
        <motion.div
          className="landing-header"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="landing-eyebrow">Portfolio</span>
          <h1 className="landing-name">Ryan Beacham</h1>
          <p className="landing-subtitle">
            Software engineer &amp; creative — building products, writing songs,
            and designing worlds. Pick a lane.
          </p>
        </motion.div>

        <div className="portal-grid">
          {portals.map((portal, index) => (
            <PortalCard key={portal.to} index={index} {...portal} />
          ))}
        </div>

        <motion.div
          className="landing-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a href="mailto:beacham.ryan@gmail.com">beacham.ryan@gmail.com</a>
          <span className="landing-footer-divider">&middot;</span>
          <a href="https://github.com/rebeacham14" target="_blank" rel="noreferrer">GitHub</a>
          <span className="landing-footer-divider">&middot;</span>
          <a href="https://www.linkedin.com/in/ryanbeacham" target="_blank" rel="noreferrer">LinkedIn</a>
        </motion.div>
      </div>
    </div>
  );
}
