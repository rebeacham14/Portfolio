import BackButton from './BackButton';
import FieldBackground from './FieldBackground';
import './ComingSoon.css';

export default function ComingSoon({ label, tag, accent, description }) {
  return (
    <div className="coming-soon" style={{ '--section-accent': accent }}>
      <FieldBackground color={accent} density={0.00006} linkDistance={110} speed={0.6} />
      <BackButton />
      <div className="coming-soon-content">
        <span className="coming-soon-tag">{tag}</span>
        <h1 className="coming-soon-title">{label}</h1>
        <p className="coming-soon-copy">{description}</p>
        <span className="coming-soon-status">In development — check back soon</span>
      </div>
    </div>
  );
}
