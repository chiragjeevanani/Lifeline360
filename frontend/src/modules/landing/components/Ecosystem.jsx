import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { platform } from '../data/content';

const ease = [0.22, 1, 0.36, 1];

// Mini screens shown for each product — content mirrors the Scope's feature lists.
const screens = {
  'User App': { title: 'Home', rows: ['Emergency ambulance', 'Doctor consultation', 'Lab test · tomorrow 7:30', 'Membership · Family'] },
  'Driver / Ambulance App': { title: 'You are online', rows: ['New emergency request · 1.2 km', 'Pickup: Sector 21', 'Destination: City Hospital', 'Accept  ·  Reject'] },
  'Vendor + Caretaker App': { title: 'Orders · Pharmacy', rows: ['Prescription order #4471', 'Preparing · 3 items', 'Ready for handover', 'Earnings this week'] },
  'Blood Bank Panel': { title: 'Availability', rows: ['A+  18 units', 'O−  4 units', 'New request · B+ · 2 units', 'Accept  ·  Reject'] },
  'Laboratory Panel': { title: 'Today’s collections', rows: ['07:30 · Lipid profile · Home', '09:00 · CBC · Home', 'Report upload · 3 pending', 'Packages · 12 active'] },
  'Master Admin Panel': { title: 'Dashboard', rows: ['Active bookings', 'Ambulance requests', 'KYC awaiting review', 'Revenue · service-wise'] },
  'Lifeline 360 Website': { title: 'lifeline360.in', rows: ['Services', 'Membership', 'Partner registration', 'Contact · FAQs'] },
};

export default function Ecosystem() {
  const [active, setActive] = useState(0);
  const p = platform[active];
  const screen = screens[p.name];

  return (
    <div className="eco">
      <ol className="eco__list">
        {platform.map((item, i) => (
          <li key={item.name}>
            <button
              className={`eco__item ${i === active ? 'is-on' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span className="mono eco__no">0{i + 1}</span>
              <span className="eco__name display">{item.name}</span>
              <span className="eco__kind mono">{item.kind}</span>
            </button>
            <AnimatePresence initial={false}>
              {i === active && (
                <motion.p
                  className="eco__desc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <span className="eco__who">{item.who}</span> — {item.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ol>

      <div className="eco__stage" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.name}
            className={`eco__device eco__device--${p.device}`}
            initial={{ opacity: 0, y: 30, rotate: p.device === 'phone' ? -2 : 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease }}
          >
            {p.device === 'web' && (
              <div className="eco__chrome"><i /><i /><i /><span>{screen.title}</span></div>
            )}
            <div className="eco__screen">
              {p.device === 'web' && (
                <div className="eco__side">
                  {['Dashboard', 'Requests', 'Catalogue', 'Payments', 'Settings'].map((x, i) => (
                    <span key={x} className={i === 0 ? 'is-on' : ''}>{x}</span>
                  ))}
                </div>
              )}
              <div className="eco__main">
                <p className="eco__s-title">{screen.title}</p>
                {p.device === 'web' && (
                  <div className="eco__kpis">
                    {[38, 64, 22].map((h, i) => (
                      <div key={i} className="eco__kpi">
                        <span className="eco__kpi-bar" style={{ height: `${h}%` }} />
                      </div>
                    ))}
                  </div>
                )}
                {screen.rows.map((r, i) => (
                  <motion.div
                    key={r}
                    className="eco__row"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease }}
                  >
                    <span className="eco__row-dot" />
                    {r}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
