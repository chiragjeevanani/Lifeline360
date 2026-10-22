import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceGlyph from './ServiceGlyph';
import { Arrow } from './ui';
import { journeys, getService } from '../data/services';

// Scope §16 — "Select Service" → each journey, as an editorial ledger.
export default function FlowLedger() {
  return (
    <div className="ledger" role="list">
      <div className="ledger__head mono" aria-hidden="true">
        <span>Service</span>
        <span>Step 1</span>
        <span>Step 2</span>
        <span>Step 3</span>
        <span />
      </div>
      {journeys.map((j, i) => {
        const s = j.slug ? getService(j.slug) : null;
        const to = j.path ?? `/services/${j.slug}`;
        const accent = s?.accent ?? 'var(--ink)';
        const tint = s?.tint ?? 'var(--paper-3)';
        return (
          <motion.div
            key={j.name}
            role="listitem"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={to} className="ledger__row" style={{ '--accent': accent, '--tint': tint }}>
              <span className="ledger__name">
                <span className="ledger__icon"><ServiceGlyph slug={j.slug ?? 'membership'} size={22} /></span>
                <span className="display">{j.name}</span>
              </span>
              {j.steps.map((st, k) => (
                <span key={st} className="ledger__step">
                  <span className="mono ledger__k">0{k + 1}</span>
                  {st}
                </span>
              ))}
              <span className="ledger__go"><Arrow /></span>
            </Link>
          </motion.div>
        );
      })}
      <p className="ledger__foot">
        <span className="mono">↳</span> Every journey is monitored centrally through the Master Admin Panel.
      </p>
    </div>
  );
}
