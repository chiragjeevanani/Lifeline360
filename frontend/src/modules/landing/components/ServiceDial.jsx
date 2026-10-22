import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import ServiceGlyph from './ServiceGlyph';
import { Arrow, Button, Eyebrow, MaskLines, Reveal } from './ui';
import { services } from '../data/services';
import { useMedia } from '../hooks/useMedia';

const ease = [0.22, 1, 0.36, 1];
const STEP = 360 / services.length;
const TICKS = Array.from({ length: 120 }, (_, i) => i);

// The 360: a scroll-driven dial. Each service sits on the ring; scrolling turns
// the ring so the active one arrives at twelve o'clock.
export default function ServiceDial() {
  const desktop = useMedia('(min-width: 961px)');
  return desktop ? <Dial /> : <DialList />;
}

function Dial() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });
  const rotate = useTransform(smooth, [0, 1], [0, -STEP * (services.length - 1)]);
  const counter = useTransform(rotate, (r) => -r);
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(services.length - 1, Math.max(0, Math.round(v * (services.length - 1))));
    setActive(i);
  });

  const s = services[active];

  const jump = (i) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    const y = top + (span * i) / (services.length - 1);
    if (lenis) lenis.scrollTo(y, { duration: 1.4 });
    else window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="dial" style={{ height: `${services.length * 70 + 60}vh` }} aria-label="Lifeline 360 services">
      <div className="dial__sticky">
        <div className="wrap dial__inner">
          <div className="dial__copy">
            <Eyebrow>The 360</Eyebrow>
            <MaskLines lines={['Six services.', <>One circle <em>of care.</em></>]} className="display h-md dial__title" />

            <div className="dial__detail">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <p className="dial__no mono" style={{ color: s.accent }}>{s.no} / 0{services.length}</p>
                  <h3 className="dial__name display">{s.name}</h3>
                  <p className="dial__intro">{s.intro}</p>
                  <ol className="dial__flow">
                    {s.flow.slice(0, 4).map((f, i) => (
                      <li key={f}><span className="mono">{i + 1}</span>{f}</li>
                    ))}
                  </ol>
                  <Button to={`/services/${s.slug}`} variant={s.emergency ? 'red' : undefined} size="sm">
                    Explore {s.short.toLowerCase()}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="dial__progress"><motion.span style={{ width: progress }} /></div>
          </div>

          <div className="dial__stage">
            <motion.div className="dial__ring" style={{ rotate }}>
              <svg viewBox="0 0 600 600" className="dial__ticks" aria-hidden="true">
                <circle cx="300" cy="300" r="250" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
                {TICKS.map((i) => (
                  <line
                    key={i}
                    x1="300"
                    y1={i % 20 === 0 ? 34 : i % 5 === 0 ? 40 : 44}
                    x2="300"
                    y2="50"
                    stroke="var(--ink)"
                    strokeOpacity={i % 5 === 0 ? 0.55 : 0.22}
                    strokeWidth="1"
                    transform={`rotate(${i * 3} 300 300)`}
                  />
                ))}
              </svg>
              {services.map((sv, i) => (
                <div key={sv.slug} className="dial__arm" style={{ transform: `rotate(${i * STEP}deg)` }}>
                  <motion.button
                    className={`dial__node ${i === active ? 'is-active' : ''}`}
                    style={{ '--accent': sv.accent, '--tint': sv.tint, rotate: counter }}
                    onClick={() => jump(i)}
                    aria-label={sv.name}
                    aria-pressed={i === active}
                  >
                    <motion.span style={{ rotate: -i * STEP, display: 'grid' }}>
                      <ServiceGlyph slug={sv.slug} size={30} />
                    </motion.span>
                  </motion.button>
                </div>
              ))}
            </motion.div>

            <div className="dial__core">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.slug}
                  className="dial__core-inner"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <span className="dial__deg mono">{Math.round(active * STEP)}°</span>
                  <span className="dial__big display" style={{ color: s.accent }}>{s.no}</span>
                  <span className="dial__core-name">{s.short}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="dial__pointer" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Small screens: the same content as an editorial stack.
function DialList() {
  return (
    <section className="section dial-list" aria-label="Lifeline 360 services">
      <div className="wrap">
        <Eyebrow>The 360</Eyebrow>
        <MaskLines lines={['Six services.', <>One circle <em>of care.</em></>]} className="display h-md dial__title" />
        <div className="dial-list__items">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link to={`/services/${s.slug}`} className="dial-list__item" style={{ '--accent': s.accent, '--tint': s.tint }}>
                <span className="dial-list__icon"><ServiceGlyph slug={s.slug} size={26} /></span>
                <span className="dial-list__body">
                  <span className="mono" style={{ color: s.accent }}>{s.no}</span>
                  <span className="dial-list__name display">{s.name}</span>
                  <span className="dial-list__flow">{s.flow.slice(0, 4).join(' → ')}</span>
                </span>
                <Arrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
