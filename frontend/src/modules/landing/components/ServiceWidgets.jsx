import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AmbulanceTracker from './AmbulanceTracker';
import BloodChecker from './BloodChecker';
import CallMasking from './CallMasking';
import { ambulanceSteps, useTripPhase } from '../hooks/useTripPhase';

const ease = [0.22, 1, 0.36, 1];

// One interactive demo per service, shown on its detail page.
export default function ServiceWidget({ slug }) {
  switch (slug) {
    case 'ambulance': return <AmbulanceWidget />;
    case 'blood-bank': return <BloodChecker />;
    case 'laboratory': return <LabWidget />;
    case 'medicine': return <MedicineWidget />;
    case 'nursing': return <NursingWidget />;
    case 'doctor': return <DoctorWidget />;
    default: return null;
  }
}

function AmbulanceWidget() {
  const [phase, setPhase] = useTripPhase(3000);
  return (
    <div className="w-amb section--night">
      <div className="w-amb__steps">
        {ambulanceSteps.map((s, i) => (
          <button key={s.k} className={`emer__step ${i === phase ? 'is-on' : ''} ${i < phase ? 'is-done' : ''}`} onClick={() => setPhase(i)}>
            <span className="mono emer__n">0{i + 1}</span>
            <span>
              <span className="emer__k">{s.k}</span>
              <span className="emer__d">{s.d}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="w-amb__visual">
        <AmbulanceTracker phase={phase} />
        <CallMasking dark />
      </div>
    </div>
  );
}

const labTests = [
  { name: 'Complete blood count', cat: 'Blood', price: 349 },
  { name: 'Lipid profile', cat: 'Heart', price: 599 },
  { name: 'HbA1c', cat: 'Diabetes', price: 449 },
  { name: 'Thyroid profile', cat: 'Hormones', price: 549 },
  { name: 'Full body package', cat: 'Package', price: 1999 },
];
const slots = ['06:30', '07:30', '08:30', '10:00', '17:00'];

function LabWidget() {
  const [picked, setPicked] = useState([0, 1]);
  const [slot, setSlot] = useState(1);
  const total = picked.reduce((a, i) => a + labTests[i].price, 0);
  const toggle = (i) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <div className="w-card w-lab">
      <div>
        <p className="w-label">Tests & packages <span className="blood__demo mono">Sample prices</span></p>
        <ul className="w-lab__tests">
          {labTests.map((t, i) => (
            <li key={t.name}>
              <button className={`w-lab__test ${picked.includes(i) ? 'is-on' : ''}`} onClick={() => toggle(i)} aria-pressed={picked.includes(i)}>
                <span className="w-check" aria-hidden="true" />
                <span className="w-lab__name">{t.name}<small className="mono">{t.cat}</small></span>
                <span className="w-lab__price">₹{t.price.toLocaleString('en-IN')}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-lab__side">
        <p className="w-label">Home collection · tomorrow</p>
        <div className="w-slots">
          {slots.map((s, i) => (
            <button key={s} className={`w-slot ${i === slot ? 'is-on' : ''}`} onClick={() => setSlot(i)} aria-pressed={i === slot}>{s}</button>
          ))}
        </div>
        <ol className="w-timeline">
          {['Booked', `Collector at ${slots[slot]}`, 'Sample at lab', 'Digital report in app'].map((s, i) => (
            <li key={s} className={i === 0 ? 'is-done' : ''}><span />{s}</li>
          ))}
        </ol>
        <div className="w-total">
          <span>{picked.length} item{picked.length === 1 ? '' : 's'}</span>
          <AnimatePresence mode="popLayout">
            <motion.b key={total} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
              ₹{total.toLocaleString('en-IN')}
            </motion.b>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const orderStages = ['Prescription uploaded', 'Vendor accepted', 'Preparing order', 'Handed over', 'Delivered'];

function MedicineWidget() {
  const [stage, setStage] = useState(0);
  return (
    <div className="w-card w-med">
      <div className="w-med__rx">
        <div className="w-rx">
          <p className="mono w-rx__h">℞ Prescription</p>
          {['Tab. Metformin 500mg — 1-0-1', 'Tab. Atorvastatin 10mg — 0-0-1', 'Cap. Vitamin D3 — weekly'].map((l, i) => (
            <motion.p key={l} className="w-rx__line" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.12 }} viewport={{ once: true }}>
              {l}
            </motion.p>
          ))}
          <svg className="w-rx__sign" viewBox="0 0 120 30" aria-hidden="true"><path d="M2 22c10-14 18-18 22-8s-6 12 2 4 14-14 18-6-2 10 6 4 16-10 22-6 10 6 18 2 16-6 26-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </div>
      </div>
      <div>
        <p className="w-label">Order status</p>
        <ol className="w-status">
          {orderStages.map((s, i) => (
            <li key={s} className={i <= stage ? 'is-done' : ''}>
              <span className="w-status__dot" />
              <span>{s}</span>
              {i === stage && <span className="mono w-status__now">now</span>}
            </li>
          ))}
        </ol>
        <button className="btn btn--sm" onClick={() => setStage((s) => (s + 1) % orderStages.length)}>
          <span>{stage === orderStages.length - 1 ? 'Start again' : 'Next step'}</span>
        </button>
      </div>
    </div>
  );
}

const careTypes = ['Post-surgery care', 'Elderly care', 'Injection & dressing', 'Day attendant', 'Night attendant', 'Physio support'];
const durations = ['A few hours', '12-hour shift', '24 hours'];

function NursingWidget() {
  const [care, setCare] = useState(1);
  const [dur, setDur] = useState(1);
  const [status, setStatus] = useState(0);
  const statuses = ['Request sent', 'Caretaker accepted', 'On the way', 'Service in progress', 'Completed · rate the service'];

  return (
    <div className="w-card w-nurse">
      <div>
        <p className="w-label">Service category</p>
        <div className="w-pills">
          {careTypes.map((c, i) => (
            <button key={c} className={`w-pill ${i === care ? 'is-on' : ''}`} onClick={() => { setCare(i); setStatus(0); }} aria-pressed={i === care}>{c}</button>
          ))}
        </div>
        <p className="w-label" style={{ marginTop: 28 }}>Duration</p>
        <div className="w-slots">
          {durations.map((d, i) => (
            <button key={d} className={`w-slot ${i === dur ? 'is-on' : ''}`} onClick={() => { setDur(i); setStatus(0); }} aria-pressed={i === dur}>{d}</button>
          ))}
        </div>
      </div>
      <div className="w-nurse__card">
        <div className="w-nurse__who">
          <span className="trk__avatar" style={{ background: 'var(--c-nursing)' }}>AM</span>
          <div>
            <p className="trk__name">Anita M. · Caretaker</p>
            <p className="mono muted">KYC verified · ★ 4.8</p>
          </div>
        </div>
        <p className="w-nurse__booking">{careTypes[care]} · {durations[dur]}</p>
        <div className="w-nurse__bar"><motion.span animate={{ width: `${(status / (statuses.length - 1)) * 100}%` }} transition={{ duration: 0.6, ease }} /></div>
        <AnimatePresence mode="wait">
          <motion.p key={status} className="w-nurse__status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {statuses[status]}
          </motion.p>
        </AnimatePresence>
        <button className="btn btn--sm" onClick={() => setStatus((s) => (s + 1) % statuses.length)}>
          <span>{status === statuses.length - 1 ? 'Book again' : 'Advance booking'}</span>
        </button>
      </div>
    </div>
  );
}

function DoctorWidget() {
  const [mode, setMode] = useState('video');
  return (
    <div className="w-card w-doc">
      <div className="w-doc__call">
        <div className="w-doc__screen">
          <span className="w-doc__badge mono"><span className="dot dot--live" /> {mode === 'video' ? 'Video' : 'Audio'} · 04:12</span>
          <div className="w-doc__face">
            <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="46" r="20" fill="currentColor" opacity=".55" /><path d="M22 112c4-24 20-36 38-36s34 12 38 36" fill="currentColor" opacity=".55" /></svg>
          </div>
          <p className="w-doc__name">Dr. S. Mehta · General physician</p>
        </div>
        <div className="w-doc__ctrl">
          {['video', 'audio'].map((m) => (
            <button key={m} className={`w-slot ${mode === m ? 'is-on' : ''}`} onClick={() => setMode(m)} aria-pressed={mode === m}>{m === 'video' ? 'Video call' : 'Phone call'}</button>
          ))}
        </div>
      </div>
      <div>
        <p className="w-label">After your consultation</p>
        <ul className="w-after">
          {[['Prescription saved', 'In your booking history'], ['Send to pharmacy', 'Order medicines in one tap'], ['Book a lab test', 'If your doctor recommends one']].map(([a, b]) => (
            <li key={a}><b>{a}</b><span>{b}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
