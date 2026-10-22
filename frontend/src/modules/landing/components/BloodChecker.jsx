import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { bloodGroups } from '../data/services';

const banks = ['City Blood Centre', 'District Hospital Blood Bank', 'Community Blood Bank'];
const distances = ['2.1 km', '4.6 km', '7.3 km'];
const FLOW = ['Blood bank', 'Blood group', 'Availability', 'Request', 'Response', 'Confirmed'];

// Illustrative unit counts, stable per group so the demo reads consistently.
function unitsFor(group, bankIndex) {
  const seed = group.charCodeAt(0) * 7 + (group.includes('−') ? 3 : 11) + bankIndex * 13;
  const rare = group.includes('−');
  return (seed % (rare ? 5 : 18)) + (rare ? 0 : 3);
}

// Scope §7 user flow: Select Blood Bank → Blood Group → Check Availability →
// Raise Request → Blood Bank Response → Confirmation.
export default function BloodChecker({ compact = false }) {
  const [group, setGroup] = useState('O−');
  const [bank, setBank] = useState(null);
  const [stage, setStage] = useState('idle'); // idle | sent | confirmed

  const rows = useMemo(() => banks.map((name, i) => ({ name, dist: distances[i], units: unitsFor(group, i) })), [group]);
  const flowStep = stage === 'confirmed' ? 5 : stage === 'sent' ? 4 : bank !== null ? 2 : 1;

  const pickGroup = (g) => {
    setGroup(g);
    setBank(null);
    setStage('idle');
  };

  const request = () => {
    setStage('sent');
    setTimeout(() => setStage('confirmed'), 1600);
  };

  return (
    <div className={`blood ${compact ? 'blood--compact' : ''}`}>
      <ol className="blood__flow" aria-label="Request progress">
        {FLOW.map((f, i) => (
          <li key={f} className={i <= flowStep ? 'is-done' : ''} aria-current={i === flowStep ? 'step' : undefined}>
            <span className="blood__flow-bar" />
            <span className="mono">{f}</span>
          </li>
        ))}
      </ol>

      <div className="blood__body">
        <div>
          <p className="blood__label">Blood group</p>
          <div className="blood__groups" role="radiogroup" aria-label="Blood group">
            {bloodGroups.map((g) => (
              <button key={g} role="radio" aria-checked={g === group} className={`blood__g ${g === group ? 'is-on' : ''}`} onClick={() => pickGroup(g)}>
                {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="blood__label">
            Nearby availability <span className="blood__demo mono">Illustrative</span>
          </p>
          <ul className="blood__banks">
            {rows.map((r, i) => {
              const out = r.units === 0;
              return (
                <li key={r.name}>
                  <button
                    className={`blood__bank ${bank === i ? 'is-on' : ''}`}
                    disabled={out || stage !== 'idle'}
                    onClick={() => setBank(i)}
                    aria-pressed={bank === i}
                  >
                    <span>
                      <span className="blood__bank-n">{r.name}</span>
                      <span className="blood__bank-d mono">{r.dist}</span>
                    </span>
                    <span className={`blood__units ${out ? 'is-out' : r.units < 4 ? 'is-low' : ''}`}>
                      <AnimatePresence mode="popLayout">
                        <motion.b key={group + r.units} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }}>
                          {out ? '—' : r.units}
                        </motion.b>
                      </AnimatePresence>
                      {out ? 'none now' : r.units === 1 ? 'unit' : 'units'}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="blood__cta">
            <AnimatePresence mode="wait">
              {stage === 'idle' && (
                <motion.button key="req" className="btn btn--sm" disabled={bank === null} onClick={request} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <span>{bank === null ? 'Select a blood bank' : `Request ${group} from ${banks[bank].split(' ')[0]}`}</span>
                </motion.button>
              )}
              {stage === 'sent' && (
                <motion.p key="sent" className="blood__msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <span className="dot dot--live" /> Request sent — waiting for the blood bank…
                </motion.p>
              )}
              {stage === 'confirmed' && (
                <motion.div key="ok" className="blood__msg blood__msg--ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <span>✓ Confirmed by {banks[bank]}. They’ll call you through a masked line.</span>
                  <button className="link-u" onClick={() => { setStage('idle'); setBank(null); }}>Start again</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
