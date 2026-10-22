import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ServiceGlyph from '../components/ServiceGlyph';
import ServiceWidget from '../components/ServiceWidgets';
import CtaBand from '../components/CtaBand';
import { Arrow, Button, Eyebrow, MaskLines, Reveal, SectionHead } from '../components/ui';
import { getService, services } from '../data/services';
import { usePageTitle } from '../hooks/usePageTitle';
import { preventHashJump } from '../hooks/useLenis';

const ease = [0.22, 1, 0.36, 1];

export default function ServicePage() {
  const { slug } = useParams();
  const s = getService(slug);
  usePageTitle(s ? s.name : 'Service');
  if (!s) return <Navigate to="/services" replace />;

  const idx = services.indexOf(s);
  const next = services[(idx + 1) % services.length];
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <div style={{ '--accent': s.accent, '--tint': s.tint }}>
      <PageHero
        crumbs={[['Services', '/services'], [s.name]]}
        label={`${s.no} / ${s.name}`}
        title={[s.title[0], <em key="b">{s.title[1]}</em>]}
        lede={s.intro}
        accent={s.accent}
        aside={<HeroGlyph slug={s.slug} />}
      >
        <Button href="#how" variant={s.emergency ? 'red' : undefined} arrow="down" onClick={preventHashJump}>
          How it works
        </Button>
        {s.partner && <Button to={`/partners?role=${s.partner.role}`} variant="ghost">Join as a partner</Button>}
      </PageHero>

      {/* How it works — the Scope's user flow for this service */}
      <section id="how" className="section section--tight">
        <div className="wrap">
          <Eyebrow>How it works</Eyebrow>
          <ol className={`steps steps--${s.flow.length}`}>
            {s.flow.map((f, i) => (
              <motion.li
                key={f}
                className="step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                <span className="step__n display">{i + 1}</span>
                <span className="step__line" />
                <span className="step__t">{f}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Interactive demo */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal y={40}>
            <ServiceWidget slug={s.slug} />
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="What you get" title={['Designed around', <em key="a">the patient.</em>]} titleClass="display h-md" />
          <div className="feats">
            {s.features.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 0.07} className="feat">
                <span className="feat__n mono">0{i + 1}</span>
                <h3 className="feat__t">{t}</h3>
                <p className="feat__d">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner side */}
      {s.partner && (
        <section className="section section--paper2">
          <div className="wrap partner-side">
            <div>
              <Eyebrow>{s.partner.label}</Eyebrow>
              <MaskLines lines={[s.partner.title]} className="display h-md" />
              <Reveal delay={0.15}>
                <p className="lede">Partners use the <b>{s.partner.app}</b> — part of the Lifeline 360 platform and connected to the Master Admin Panel.</p>
                <Button to={`/partners?role=${s.partner.role}`}>Register now</Button>
              </Reveal>
            </div>
            <ul className="checklist">
              {s.partner.items.map((it, i) => (
                <Reveal as="li" key={it} delay={i * 0.04}>
                  <span className="checklist__mark" aria-hidden="true" />
                  {it}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related + next */}
      <section className="section section--tight">
        <div className="wrap">
          <Eyebrow>Also on Lifeline 360</Eyebrow>
          <div className="related">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="related__item" style={{ '--accent': r.accent, '--tint': r.tint }}>
                <span className="related__icon"><ServiceGlyph slug={r.slug} size={26} /></span>
                <span className="related__name">{r.name}</span>
                <Arrow />
              </Link>
            ))}
          </div>
          <Link to={`/services/${next.slug}`} className="next" style={{ '--accent': next.accent }}>
            <span className="mono">Next service · {next.no}</span>
            <span className="next__name display">{next.name} <Arrow size={40} /></span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}

function HeroGlyph({ slug }) {
  return (
    <div className="hglyph" aria-hidden="true">
      <svg viewBox="0 0 300 300" className="hglyph__ring">
        {Array.from({ length: 60 }, (_, i) => (
          <line key={i} x1="150" y1="8" x2="150" y2={i % 5 === 0 ? 22 : 16} stroke="currentColor" strokeOpacity={i % 5 === 0 ? 0.6 : 0.25} transform={`rotate(${i * 6} 150 150)`} />
        ))}
      </svg>
      <motion.div className="hglyph__core" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.1, ease, delay: 0.4 }}>
        <ServiceGlyph slug={slug} size={96} stroke={1.1} />
      </motion.div>
    </div>
  );
}
