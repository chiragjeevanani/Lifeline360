import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Arrow, Button, Reveal } from '../components/ui';
import { siteConfig } from '../data/siteConfig';
import { usePageTitle } from '../hooks/usePageTitle';

const topics = ['General question', 'Booking or order support', 'Membership', 'Partner enquiry', 'Feedback or complaint'];

export default function ContactPage() {
  usePageTitle('Contact us');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: topics[0], message: '' });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const valid = form.name.trim() && (form.phone.trim() || form.email.trim()) && form.message.trim();

  return (
    <>
      <PageHero
        crumbs={[['Contact']]}
        label="Contact us"
        title={['We’re here.', <em key="b">Say hello.</em>]}
        lede="Questions about a booking, membership or partnering with us — send a message and our support team will get back to you."
      />

      <section className="section section--tight">
        <div className="wrap contact">
          <div className="contact__side">
            <Reveal className="contact__emerg">
              <span className="dot dot--live" />
              <div>
                <p className="contact__emerg-t">Need an ambulance now?</p>
                <p>Book from the Lifeline 360 app for live tracking. {siteConfig.emergencyNote}</p>
                <Link to="/services/ambulance" className="arrow-link">Ambulance service <Arrow /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="contact__list">
                <div><dt className="mono">Support</dt><dd><a className="link-u" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div>
                <div><dt className="mono">Partners</dt><dd><a className="link-u" href={`mailto:${siteConfig.partnerEmail}`}>{siteConfig.partnerEmail}</a></dd></div>
                <div><dt className="mono">Phone</dt><dd>{siteConfig.phone}</dd></div>
                <div><dt className="mono">Office</dt><dd>{siteConfig.address}</dd></div>
                <div><dt className="mono">The app</dt><dd>{siteConfig.appStatus}</dd></div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {sent ? (
              <motion.div className="regform regform--done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className="regform__ok" aria-hidden="true">✓</span>
                <h2 className="display h-sm">Message sent.</h2>
                <p>Thanks, {form.name.split(' ')[0]}. We’ll reply to you shortly.</p>
                <Button variant="ghost" size="sm" onClick={() => { setSent(false); setForm({ ...form, message: '' }); }}>Send another</Button>
              </motion.div>
            ) : (
              <form className="regform" onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true); }} noValidate>
                <div className="regform__grid">
                  <div className="field"><label htmlFor="c-name">Name *</label><input id="c-name" value={form.name} onChange={update('name')} autoComplete="name" /></div>
                  <div className="field"><label htmlFor="c-topic">Topic</label><select id="c-topic" value={form.topic} onChange={update('topic')}>{topics.map((t) => <option key={t}>{t}</option>)}</select></div>
                  <div className="field"><label htmlFor="c-phone">Mobile</label><input id="c-phone" value={form.phone} onChange={update('phone')} inputMode="tel" autoComplete="tel" /></div>
                  <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" value={form.email} onChange={update('email')} autoComplete="email" /></div>
                  <div className="field" style={{ gridColumn: '1 / -1' }}><label htmlFor="c-msg">Message *</label><textarea id="c-msg" value={form.message} onChange={update('message')} /><span className="hint">Add a mobile number or email so we can reply.</span></div>
                </div>
                <div className="regform__nav">
                  <span />
                  <button type="submit" className="btn btn--sm" disabled={!valid}><span>Send message</span></button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
