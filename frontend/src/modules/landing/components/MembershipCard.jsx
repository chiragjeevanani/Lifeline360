import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LogoMark } from './Logo';

// The digital membership card from Scope §9 — tilts toward the pointer.
export default function MembershipCard({ plan = 'Family', name = 'Priya Sharma', validity = 'Valid till 12 / 2027' }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(mx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(my, [0, 1], ['0%', '100%']);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="mcard-stage" onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div className="mcard" style={{ rotateX: rx, rotateY: ry }} role="img" aria-label={`${plan} membership card for ${name}, ${validity}`}>
        <motion.div className="mcard__glare" style={{ '--gx': glareX, '--gy': glareY }} />
        <div className="mcard__top">
          <span className="mcard__brand"><LogoMark size={26} light /> Lifeline 360</span>
          <span className="mcard__plan mono">{plan}</span>
        </div>
        <svg className="mcard__ring" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 5" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
        <p className="mcard__num mono">LL 360 · 4821 · 0937</p>
        <div className="mcard__bottom">
          <div>
            <p className="mcard__k mono">Member</p>
            <p className="mcard__v">{name}</p>
          </div>
          <div>
            <p className="mcard__k mono">Validity</p>
            <p className="mcard__v">{validity}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
