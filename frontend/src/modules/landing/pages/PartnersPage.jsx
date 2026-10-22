import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ServiceGlyph from '../components/ServiceGlyph';
import { Button, Eyebrow, MaskLines, Reveal } from '../components/ui';
import { partnerRoles } from '../data/content';
import { getService } from '../data/services';
import { siteConfig } from '../data/siteConfig';
import { usePageTitle } from '../hooks/usePageTitle';

const ease = [0.22, 1, 0.36, 1];
const STEPS = ['Your role', 'Your details', 'Documents'];

export default function PartnersPage() {
  usePageTitle('Partner registration');
  const [params, setParams] = useSearchParams();
  const roleId = partnerRoles.some((r) => r.id === params.get('role')) ? params.get('role') : 'driver';
  const role = partnerRoles.find((r) => r.id === roleId);
  const service = getService(role.service);

  const setRole = (id) => setParams({ role: id }, { replace: true, preventScrollReset: true });

  return (
    <div style={{ '--accent': service.accent, '--tint': service.tint }}>
      <PageHero
        crumbs={[['Partners']]}
        label="Partner / vendor registration"
        title={['Bring your care', <><em>to more people.</em></>]}
        lede="Join Lifeline 360 as an ambulance driver, medicine vendor, nurse or caretaker, laboratory or blood bank. Register online, complete verification and start receiving requests."
      />

      <section className="section section--tight">
        <div className="wrap">
          <div className="roles" role="tablist" aria-label="Partner type">
            {partnerRoles.map((r) => {
              const s = getService(r.service);
              return (
                <button
                  key={r.id}
                  role="tab"
                  aria-selected={r.id === roleId}
                  className={`role ${r.id === roleId ? 'is-on' : ''}`}
                  style={{ '--accent': s.accent, '--tint': s.tint }}
                  onClick={() => setRole(r.id)}
                >
                  <ServiceGlyph slug={r.service} size={24} />
                  <span>{r.title}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={roleId}
              className="role-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="role-panel__intro">
                <p className="mono" style={{ color: service.accent }}>{role.app}</p>
                <h2 className="display h-md">{role.title}</h2>
                <p className="lede">{role.pitch}</p>
                <p className="role-panel__h">Documents for verification</p>
                <ul className="doclist">
                  {role.docs.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
              <div className="role-panel__feats">
                <p className="role-panel__h">What you get in the {role.app}</p>
                <ul className="checklist checklist--compact">
                  {(service.partner?.items ?? []).map((it) => (
                    <li key={it}><span className="checklist__mark" aria-hidden="true" />{it}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section section--paper2" id="register">
        <div className="wrap reg">
          <div>
            <Eyebrow>Register</Eyebrow>
            <MaskLines lines={['Three steps', <>to <em>get started.</em></>]} className="display h-md" />
            <Reveal delay={0.15}>
              <p className="lede">After you submit, our team reviews your KYC and documents through the Master Admin Panel and gets in touch to activate your account.</p>
              <p className="muted" style={{ marginTop: 16 }}>Questions? <a className="link-u" href={`mailto:${siteConfig.partnerEmail}`}>{siteConfig.partnerEmail}</a></p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <RegistrationForm roleId={roleId} setRole={setRole} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function RegistrationForm({ roleId, setRole }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', city: '', idType: 'Aadhaar', consent: false });
  const role = partnerRoles.find((r) => r.id === roleId);
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const canNext =
    step === 0 ||
    (step === 1 && form.name.trim() && /^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10)) && form.city.trim()) ||
    (step === 2 && form.consent);

  const submit = (e) => {
    e.preventDefault();
    if (!canNext) return;
    if (step < 2) setStep(step + 1);
    else setDone(true);
  };

  if (done) {
    return (
      <motion.div className="regform regform--done" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
        <span className="regform__ok" aria-hidden="true">✓</span>
        <h3 className="display h-sm">Thanks, {form.name.split(' ')[0]}.</h3>
        <p>Your application as a <b>{role.title.toLowerCase()}</b> has been received. We’ll contact you on {form.phone} to complete verification.</p>
        <Button onClick={() => { setDone(false); setStep(0); }} variant="ghost" size="sm">Submit another</Button>
      </motion.div>
    );
  }

  return (
    <form className="regform" onSubmit={submit} noValidate>
      <ol className="regform__steps">
        {STEPS.map((s, i) => (
          <li key={s} className={i <= step ? 'is-on' : ''}>
            <span className="mono">0{i + 1}</span>{s}
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.35, ease }} className="regform__body">
          {step === 0 && (
            <div className="regform__roles">
              {partnerRoles.map((r) => (
                <label key={r.id} className={`regrole ${r.id === roleId ? 'is-on' : ''}`}>
                  <input type="radio" name="role" checked={r.id === roleId} onChange={() => setRole(r.id)} />
                  <ServiceGlyph slug={r.service} size={22} />
                  <span>{r.title}</span>
                </label>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="regform__grid">
              <div className="field"><label htmlFor="f-name">Full name *</label><input id="f-name" value={form.name} onChange={update('name')} autoComplete="name" required /></div>
              <div className="field"><label htmlFor="f-biz">{['pharmacy', 'lab', 'bloodbank'].includes(roleId) ? 'Business name' : 'Vehicle / agency (optional)'}</label><input id="f-biz" value={form.business} onChange={update('business')} /></div>
              <div className="field"><label htmlFor="f-phone">Mobile number *</label><input id="f-phone" value={form.phone} onChange={update('phone')} inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" required /><span className="hint">We’ll verify this with an OTP.</span></div>
              <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" type="email" value={form.email} onChange={update('email')} autoComplete="email" /></div>
              <div className="field" style={{ gridColumn: '1 / -1' }}><label htmlFor="f-city">City / service area *</label><input id="f-city" value={form.city} onChange={update('city')} required /></div>
            </div>
          )}
          {step === 2 && (
            <div className="regform__docs">
              <div className="field">
                <label htmlFor="f-id">Identity proof (KYC)</label>
                <select id="f-id" value={form.idType} onChange={update('idType')}>
                  {['Aadhaar', 'PAN', 'Voter ID', 'Passport'].map((x) => <option key={x}>{x}</option>)}
                </select>
              </div>
              <p className="regform__doc-h">You’ll upload these during verification:</p>
              <ul className="doclist">
                {role.docs.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <label className="consent">
                <input type="checkbox" checked={form.consent} onChange={update('consent')} />
                <span>I agree to the <a href="/terms" className="link-u" target="_blank" rel="noreferrer">Terms</a> and <a href="/privacy" className="link-u" target="_blank" rel="noreferrer">Privacy Policy</a>, and consent to KYC verification.</span>
              </label>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="regform__nav">
        {step > 0 ? <button type="button" className="link-u" onClick={() => setStep(step - 1)}>← Back</button> : <span />}
        <button type="submit" className="btn btn--sm" disabled={!canNext}>
          <span>{step < 2 ? 'Continue' : 'Submit application'}</span>
        </button>
      </div>
    </form>
  );
}
