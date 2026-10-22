import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import MembershipCard from '../components/MembershipCard';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { Button, Eyebrow, MaskLines, Reveal, SectionHead } from '../components/ui';
import { faqs, membershipLifecycle, planMatrix, plans } from '../data/content';
import { usePageTitle } from '../hooks/usePageTitle';
import { preventHashJump } from '../hooks/useLenis';

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function MembershipPage() {
  usePageTitle('Membership');
  const [cycle, setCycle] = useState('annual');

  return (
    <>
      <PageHero
        crumbs={[['Membership']]}
        label="Lifeline 360 Membership"
        title={['Care that’s', <><em>already</em> paid for.</>]}
        lede="Choose a monthly or annual plan, pay online and carry a digital membership card in the app. Benefits apply automatically on every booking."
        aside={<MembershipCard />}
      >
        <Button href="#plans" onClick={preventHashJump} arrow="down">Compare plans</Button>
      </PageHero>

      <section id="plans" className="section section--tight">
        <div className="wrap">
          <div className="plans__bar">
            <Eyebrow>Plans</Eyebrow>
            <div className="toggle" role="radiogroup" aria-label="Billing cycle">
              {['monthly', 'annual'].map((c) => (
                <button key={c} role="radio" aria-checked={cycle === c} className={cycle === c ? 'is-on' : ''} onClick={() => setCycle(c)}>
                  {cycle === c && <motion.span layoutId="toggle-pill" className="toggle__pill" />}
                  <span>{c === 'monthly' ? 'Monthly' : 'Annual'}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="plans">
            {plans.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className={`plan ${p.featured ? 'plan--featured' : ''}`}>
                {p.featured && <span className="plan__flag mono">Most chosen</span>}
                <p className="plan__name display">{p.name}</p>
                <p className="plan__for">{p.for}</p>
                <div className="plan__price">
                  <AnimatePresence mode="popLayout">
                    <motion.span key={cycle} className="display" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.35 }}>
                      {inr(cycle === 'annual' ? p.annual : p.monthly)}
                    </motion.span>
                  </AnimatePresence>
                  <span className="plan__per">/{cycle === 'annual' ? 'year' : 'month'}</span>
                </div>
                <ul className="plan__list">
                  {p.benefits.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Button to="/contact" variant={p.featured ? 'light' : 'ghost'} size="sm">Choose {p.name}</Button>
              </Reveal>
            ))}
          </div>
          <p className="plans__note mono">Indicative pricing — final plans and benefits are confirmed at launch.</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <SectionHead eyebrow="Plan comparison" title={['Side by side.']} titleClass="display h-md" />
          <Reveal>
            <div className="matrix" role="table" aria-label="Plan comparison">
              <div className="matrix__row matrix__row--head" role="row">
                <span role="columnheader">Benefit</span>
                {plans.map((p) => <span key={p.id} role="columnheader">{p.name}</span>)}
              </div>
              {planMatrix.map(([label, ...vals]) => (
                <div key={label} className="matrix__row" role="row">
                  <span role="cell">{label}</span>
                  {vals.map((v, i) => (
                    <span key={i} role="cell" className={v ? 'yes' : 'no'} aria-label={v ? 'Included' : 'Not included'}>{v ? '●' : '—'}</span>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead eyebrow="How membership works" title={['From purchase', <>to <em>renewal.</em></>]} titleClass="display h-md" />
          <ol className="lifecycle">
            {membershipLifecycle.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="lifecycle__item">
                <span className="lifecycle__n mono">0{i + 1}</span>
                <span className="lifecycle__t display">{t}</span>
                <span className="lifecycle__d">{d}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap faq-sec">
          <div>
            <Eyebrow>Membership FAQs</Eyebrow>
            <MaskLines lines={['Good to know.']} className="display h-md" />
          </div>
          <Faq items={faqs.find((f) => f.group === 'Membership & payments').items} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
