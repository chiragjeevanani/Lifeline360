import { motion } from 'framer-motion';

// The brand's heartbeat: a flat line that spikes into an ECG complex and settles.
const D =
  'M0 120 H420 L450 120 L462 104 L474 120 L500 120 L512 132 L534 20 L558 196 L576 108 L590 120 L640 120 L664 98 L700 120 H900 L930 120 L942 108 L954 120 L976 120 L986 128 L1004 52 L1024 170 L1038 112 L1050 120 H1440';

export default function Lifeline({ className = '', color = 'var(--red)', delay = 0.4, duration = 2.6, width = 1.6 }) {
  return (
    <svg className={`lifeline ${className}`} viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        d={D}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration, ease: [0.65, 0, 0.35, 1], delay }}
      />
    </svg>
  );
}
