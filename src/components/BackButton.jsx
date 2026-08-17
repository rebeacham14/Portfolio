import { Link } from 'react-router-dom';
import './BackButton.css';

export default function BackButton({ to = '/', label = 'Home' }) {
  return (
    <Link to={to} className="back-button">
      <span className="back-button-arrow" aria-hidden="true">&larr;</span>
      {label}
    </Link>
  );
}
