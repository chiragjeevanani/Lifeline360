import { motion } from 'framer-motion';

// Scope §11: User's number → masked calling system → driver/provider.
export default function CallMasking({ provider = 'Driver', dark = false }) {
  return (
    <div className={`mask ${dark ? 'mask--dark' : ''}`}>
      <div className="mask__node">
        <span className="mask__who mono">You</span>
        <span className="mask__num">+91 98<i>•••</i> <i>••</i>210</span>
      </div>
      <Wire />
      <div className="mask__node mask__node--hub">
        <span className="mask__who mono">Masked line</span>
        <span className="mask__num">Lifeline relay</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
      </div>
      <Wire reverse />
      <div className="mask__node">
        <span className="mask__who mono">{provider}</span>
        <span className="mask__num">+91 70<i>•••</i> <i>••</i>583</span>
      </div>
      <p className="mask__note">Neither side ever sees the other’s personal number.</p>
    </div>
  );
}

function Wire({ reverse }) {
  return (
    <svg className="mask__wire" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <motion.line
        x1="0" y1="5" x2="100" y2="5"
        stroke="var(--red)"
        strokeWidth="2"
        strokeDasharray="6 14"
        vectorEffect="non-scaling-stroke"
        animate={{ strokeDashoffset: reverse ? [0, 40] : [40, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}
