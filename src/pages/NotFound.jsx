import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found-code">404</span>
      <p className="not-found-message">This page doesn't exist.</p>
      <Link to="/" className="not-found-link">&larr; Back home</Link>
    </div>
  );
}
