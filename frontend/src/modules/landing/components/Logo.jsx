import { Link } from 'react-router-dom';

// Mark: a 360° ring broken by a heartbeat line.
export function LogoMark({ size = 34, light = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={light ? 'var(--paper)' : 'var(--ink)'} />
      <circle cx="16" cy="16" r="9.5" fill="none" stroke={light ? 'var(--ink)' : 'var(--paper)'} strokeWidth="1.4" strokeDasharray="52 8" transform="rotate(-20 16 16)" />
      <path d="M4 16h7l2-4 3 9 2.5-7 1.5 2H28" fill="none" stroke="var(--red)" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" className="logo" aria-label="Lifeline 360 home" onClick={onClick}>
      <LogoMark light={light} />
      <span className="logo__word">
        Lifeline<span className="logo__num">360</span>
      </span>
    </Link>
  );
}
