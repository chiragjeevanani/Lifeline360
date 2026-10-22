import { Link } from 'react-router-dom';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, wrap } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';
import { Arrow, Button, Eyebrow, MaskLines, Reveal, SectionHead } from '../components/ui';
import Lifeline from '../components/Lifeline';
import PhoneMock from '../components/PhoneMock';
import ServiceGlyph from '../components/ServiceGlyph';
import ServiceDial from '../components/ServiceDial';
import AmbulanceTracker from '../components/AmbulanceTracker';
import CallMasking from '../components/CallMasking';
import FlowLedger from '../components/FlowLedger';
import BloodChecker from '../components/BloodChecker';
import MembershipCard from '../components/MembershipCard';
import Ecosystem from '../components/Ecosystem';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { services } from '../data/services';
import { faqs, partnerRoles } from '../data/content';
import { ambulanceSteps, useTripPhase } from '../hooks/useTripPhase';
import { usePageTitle } from '../hooks/usePageTitle';

const ease = [0.22, 1, 0.36, 1];

export default function HomePage() {
  usePageTitle('Every kind of care, one tap away');
  return (
    <>
      <Hero />
      <Marquee />
      <ServiceDial />
      <Emergency />
      <Journeys />
      <Blood />
      <Membership />
      <Platform />
      <Partners />
      <HomeFaq />
      <CtaBand />
    </>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Healthcare, all in one place
          </motion.p>
          <MaskLines
            as="h1"
            inView={false}
            delay={0.15}
            className="display h-xl hero__title"
            lines={['Every kind', 'of care,', <><em>one tap</em> away.</>]}
          />
          <motion.p className="lede hero__lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.9, ease }}>
            Doctors, nurses, ambulances, medicines, lab tests and blood — booked, tracked and paid for in a single app.
          </motion.p>
          <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9, ease }}>
            <Button to="/services/ambulance" variant="red">Book an ambulance</Button>
            <Button to="/services" variant="ghost">Explore services</Button>
          </motion.div>
          <motion.ul className="hero__chips" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.05, delayChildren: 0.9 } } }}>
            {services.map((s) => (
              <motion.li key={s.slug} variants={{ h: { opacity: 0, y: 10 }, s: { opacity: 1, y: 0 } }}>
                <Link to={`/services/${s.slug}`} className="hero__chip" style={{ '--accent': s.accent, '--tint': s.tint }}>
                  <ServiceGlyph slug={s.slug} size={18} stroke={1.6} />
                  {s.short}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="hero__visual">
          <motion.div className="hero__disc" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, ease }} />
          <motion.div style={{ y: phoneY }} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease, delay: 0.25 }}>
            <PhoneMock />
          </motion.div>

          <motion.div className="hero__floats" style={{ y: cardsY }}>
            <Float className="hero__float hero__float--a" delay={1.1}>
              <span className="float__icon" style={{ '--tint': 'var(--red-soft)', color: 'var(--red)' }}><ServiceGlyph slug="ambulance" size={18} stroke={1.7} /></span>
              <span>
                <b>Driver assigned</b>
                <small>Arriving in 6 min · masked call</small>
              </span>
            </Float>
            <Float className="hero__float hero__float--b" delay={1.3}>
              <span className="float__icon" style={{ '--tint': '#f0e2c6', color: 'var(--c-lab)' }}><ServiceGlyph slug="laboratory" size={18} stroke={1.7} /></span>
              <span>
                <b>Report ready</b>
                <small>Complete blood count</small>
              </span>
            </Float>
            <Float className="hero__float hero__float--c" delay={1.5}>
              <span className="float__blood">O−</span>
              <span>
                <b>4 units available</b>
                <small>City Blood Centre · 2.1 km</small>
              </span>
            </Float>
          </motion.div>
        </div>
      </div>

      <Lifeline className="hero__line" delay={0.6} duration={2.8} />
    </section>
  );
}

function Float({ children, className, delay }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay, duration: 0.9, ease }}>
      <div className="float">{children}</div>
    </motion.div>
  );
}

// Drifts on its own, then speeds up, leans and follows the scroll direction
// using Lenis' smoothed velocity.
function Marquee() {
  const items = [...services.map((s) => s.name), 'Membership'];
  const offset = useMotionValue(0);
  const velocity = useMotionValue(0);
  const direction = useRef(1);
  const skewX = useSpring(useTransform(velocity, [-40, 0, 40], [-7, 0, 7], { clamp: true }), { stiffness: 220, damping: 30 });
  const x = useTransform(offset, (v) => `${wrap(-50, 0, v)}%`);
  const reduced = useReducedMotion();

  useLenis(({ velocity: v }) => {
    velocity.set(v);
    if (v !== 0) direction.current = v > 0 ? 1 : -1;
  });

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const boost = 1 + Math.min(Math.abs(velocity.get()) * 0.18, 8);
    offset.set(offset.get() - direction.current * 1.6 * boost * (delta / 1000));
  });

  const row = (
    <div className="marquee__row">
      {items.map((t) => (
        <span key={t} className="marquee__item">
          <span className="display">{t}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M11 2v18M2 11h18" stroke="var(--red)" strokeWidth="2.4" strokeLinecap="round" /></svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee__track" style={{ x, skewX }}>{row}{row}</motion.div>
    </div>
  );
}

function Emergency() {
  const [phase, setPhase] = useTripPhase(3000);
  return (
    <section className="section section--night emer">
      <div className="wrap">
        <div className="emer__grid">
          <div className="emer__copy">
            <Eyebrow><span className="dot dot--live" style={{ marginRight: 4 }} /> Ambulance</Eyebrow>
            <MaskLines lines={['When minutes matter,', <>help is <em>already moving.</em></>]} className="display h-lg" />
            <ol className="emer__steps">
              {ambulanceSteps.map((s, i) => (
                <li key={s.k}>
                  <button className={`emer__step ${i === phase ? 'is-on' : ''} ${i < phase ? 'is-done' : ''}`} onClick={() => setPhase(i)}>
                    <span className="mono emer__n">0{i + 1}</span>
                    <span>
                      <span className="emer__k">{s.k}</span>
                      <span className="emer__d">{s.d}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <Button to="/services/ambulance" variant="red">How ambulance booking works</Button>
          </div>
          <Reveal className="emer__visual" y={40}>
            <AmbulanceTracker phase={phase} />
            <CallMasking dark />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Journeys() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="How it flows"
          title={['Six journeys.', <><em>One</em> app.</>]}
          aside="Log in with your mobile number, pick a service and follow it from request to result — every step visible, every step notified."
        />
        <FlowLedger />
      </div>
    </section>
  );
}

function Blood() {
  return (
    <section className="section section--paper2">
      <div className="wrap blood-sec">
        <div className="blood-sec__copy">
          <Eyebrow>Blood bank</Eyebrow>
          <MaskLines lines={['Check before', <><em>you rush.</em></>]} className="display h-lg" />
          <Reveal delay={0.15}>
            <p className="lede">Pick a blood group, see what nearby blood banks have, raise a request and get a confirmation — without a single phone tree.</p>
            <Link to="/services/blood-bank" className="arrow-link">More on the blood bank service <Arrow /></Link>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={40}>
          <BloodChecker />
        </Reveal>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section className="section member">
      <div className="wrap member__grid">
        <Reveal className="member__card" y={50}>
          <MembershipCard />
        </Reveal>
        <div className="member__copy">
          <Eyebrow>Membership</Eyebrow>
          <MaskLines lines={['One card for', <>the whole family’s <em>care.</em></>]} className="display h-md" />
          <Reveal delay={0.15}>
            <p className="lede">Monthly or annual plans with consultation benefits, laboratory discounts and priority healthcare services — carried as a digital card in the app.</p>
            <ul className="member__list">
              {['Consultation benefits', 'Laboratory discounts', 'Priority healthcare services', 'Renewal & expiry reminders'].map((b) => (
                <li key={b}><span className="member__tick" aria-hidden="true" />{b}</li>
              ))}
            </ul>
            <Button to="/membership">Compare plans</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="section section--paper2">
      <div className="wrap">
        <SectionHead
          eyebrow="The platform"
          title={['Seven products,', <><em>one</em> backbone.</>]}
          aside="Lifeline 360 isn’t only an app for patients. Drivers, pharmacies, caretakers, labs and blood banks each get a tool built for their job — all connected to one admin."
        />
        <Ecosystem />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="Partners"
          title={['Grow with', <><em>Lifeline 360.</em></>]}
          aside="Five ways to join the network. Register online, complete KYC and document verification, and start receiving requests."
        />
        <div className="pgrid">
          {partnerRoles.map((r, i) => {
            const s = services.find((x) => x.slug === r.service);
            return (
              <Reveal key={r.id} delay={i * 0.06}>
                <Link to={`/partners?role=${r.id}`} className="pcard" style={{ '--accent': s.accent, '--tint': s.tint }}>
                  <span className="pcard__icon"><ServiceGlyph slug={r.service} size={28} /></span>
                  <span className="pcard__title display">{r.title}</span>
                  <span className="pcard__pitch">{r.pitch}</span>
                  <span className="pcard__app mono">{r.app}</span>
                  <span className="pcard__go"><Arrow dir="up-right" /></span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={0.3}>
            <div className="pcard pcard--cta">
              <span className="pcard__title display">Ready to <em>join?</em></span>
              <Button to="/partners" variant="light" size="sm">Register as a partner</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  const top = [faqs[0].items[0], faqs[1].items[0], faqs[2].items[0], faqs[3].items[0], faqs[1].items[1]];
  return (
    <section className="section section--tight">
      <div className="wrap faq-sec">
        <div>
          <Eyebrow>FAQs</Eyebrow>
          <MaskLines lines={['Questions,', <em key="a">answered.</em>]} className="display h-md" />
          <Reveal delay={0.2}>
            <Link to="/faqs" className="arrow-link">All questions <Arrow /></Link>
          </Reveal>
        </div>
        <Faq items={top} />
      </div>
    </section>
  );
}
