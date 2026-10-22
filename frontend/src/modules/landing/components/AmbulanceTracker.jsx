import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import ServiceGlyph from './ServiceGlyph';
import { ambulanceSteps } from '../hooks/useTripPhase';

// Route through a stylised street grid — pickup (bottom-left) to hospital (top-right).
const ROUTE = 'M70 330 L70 262 L190 262 L190 190 L300 190 L300 118 L430 118 L430 64';

export default function AmbulanceTracker({ phase }) {
  const step = ambulanceSteps[phase];
  const progress = [0, 0.18, 0.5, 1][phase];
  const routeRef = useRef(null);
  const travelled = useMotionValue(0);
  const [pos, setPos] = useState({ x: 70, y: 330 });

  useEffect(() => {
    const controls = animate(travelled, progress, { duration: 1.6, ease: [0.65, 0, 0.35, 1] });
    return () => controls.stop();
  }, [progress, travelled]);

  useMotionValueEvent(travelled, 'change', (v) => {
    const path = routeRef.current;
    if (!path) return;
    const p = path.getPointAtLength(path.getTotalLength() * v);
    setPos({ x: p.x, y: p.y });
  });

  return (
    <div className="trk" aria-label={`Live tracking demo: ${step.status}`}>
      <div className="trk__head">
        <span className="trk__live"><span className="dot dot--live" /> Live</span>
        <span className="mono">Trip #LL-2041</span>
      </div>

      <svg className="trk__map" viewBox="0 0 500 380" aria-hidden="true">
        <defs>
          <pattern id="blocks" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect x="6" y="6" width="48" height="48" rx="6" fill="rgba(244,239,230,0.045)" />
          </pattern>
        </defs>
        <rect width="500" height="380" fill="url(#blocks)" />
        <path d="M0 262 H500 M0 190 H500 M0 118 H500 M70 0 V380 M190 0 V380 M300 0 V380 M430 0 V380" stroke="rgba(244,239,230,0.09)" strokeWidth="10" />
        <path d={ROUTE} fill="none" stroke="rgba(244,239,230,0.18)" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
        <path ref={routeRef} d={ROUTE} fill="none" stroke="none" />
        <motion.path
          d={ROUTE}
          fill="none"
          stroke="var(--red)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: progress }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        />
        <g transform="translate(70 330)">
          <circle r="16" fill="rgba(244,239,230,0.12)" />
          <circle r="6" fill="var(--paper)" />
        </g>
        <g transform="translate(430 64)">
          <rect x="-15" y="-15" width="30" height="30" rx="8" fill="var(--paper)" />
          <path d="M-6 0h12M0 -6v12" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform={`translate(${pos.x} ${pos.y})`}>
          <circle r="24" fill="var(--red)" opacity="0.22" className="trk__halo" />
          <circle r="15" fill="var(--red)" />
          <g transform="translate(-9 -9)" color="#fff">
            <ServiceGlyph slug="ambulance" size={18} stroke={1.9} />
          </g>
        </g>
      </svg>

      <div className="trk__card">
        <div className="trk__driver">
          <span className="trk__avatar">RK</span>
          <div>
            <p className="trk__name">Ravi K. · Driver</p>
            <p className="trk__veh mono">BLS · DL 01 AB 2041</p>
          </div>
          <span className="trk__call" title="Masked call">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>
          </span>
        </div>
        <div className="trk__status">
          <AnimatePresence mode="wait">
            <motion.p key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
              {step.status}
            </motion.p>
          </AnimatePresence>
          <span className="trk__eta"><span className="mono">ETA</span> {step.eta}</span>
        </div>
      </div>
    </div>
  );
}
