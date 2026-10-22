import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ServiceGlyph from '../components/ServiceGlyph';
import CtaBand from '../components/CtaBand';
import { Arrow, Reveal, SectionHead } from '../components/ui';
import { services } from '../data/services';
import { notifications } from '../data/content';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ServicesPage() {
  usePageTitle('Healthcare services');
  const all = [
    ...services,
    { slug: 'membership', no: '07', name: 'Membership', accent: 'var(--ink)', tint: 'var(--paper-3)', intro: 'Monthly or annual plans with consultation benefits, laboratory discounts and priority healthcare services.', flow: ['Plan', 'Payment', 'Benefits'], path: '/membership' },
  ];

  return (
    <>
      <PageHero
        crumbs={[['Services']]}
        label="07 services · 1 app"
        title={['Healthcare,', <><em>without</em> the runaround.</>]}
        lede="Doctor consultation, nursing and caretakers, ambulance, medicine, laboratory tests and blood bank — plus a membership that ties them together."
      />

      <section className="section section--tight">
        <div className="wrap">
          <div className="srows">
            {all.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={s.path ?? `/services/${s.slug}`} className="srow" style={{ '--accent': s.accent, '--tint': s.tint }}>
                  <span className="srow__no mono">{s.no}</span>
                  <span className="srow__name display">{s.name}</span>
                  <span className="srow__intro">{s.intro}</span>
                  <span className="srow__flow mono">{s.flow.slice(0, 4).join(' → ')}</span>
                  <span className="srow__icon"><ServiceGlyph slug={s.slug} size={34} /></span>
                  <span className="srow__go"><Arrow /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead
            eyebrow="Always in the loop"
            title={['You’ll never have', <>to <em>wonder.</em></>]}
            aside="Every booking, order and request sends a notification at the moments that matter."
          />
          <Reveal>
            <ul className="notif-cloud">
              {notifications.map((n, i) => (
                <li key={n} className="notif" style={{ '--d': `${i * 0.05}s` }}>
                  <span className="dot" style={{ color: i % 4 === 2 ? 'var(--red)' : 'var(--forest)' }} />
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
