import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoMark } from './Logo';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';

const columns = [
  { title: 'Services', links: [...services.map((s) => [s.name, `/services/${s.slug}`]), ['Membership', '/membership']] },
  { title: 'Company', links: [['About Lifeline 360', '/about'], ['Partner registration', '/partners'], ['Contact us', '/contact'], ['FAQs', '/faqs']] },
  { title: 'Legal', links: [['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms']] },
];

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__lead">
            <p className="display h-md">Care that comes <em>to you.</em></p>
            <p className="ftr__note">One app for doctor consultation, nursing, ambulance, medicine, lab tests, blood bank and membership.</p>
          </div>
          {columns.map((c) => (
            <div key={c.title} className="ftr__col">
              <p className="mono ftr__h">{c.title}</p>
              <ul>
                {c.links.map(([label, to]) => (
                  <li key={to}><Link to={to} className="link-u">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ftr__contact">
          <a href={`mailto:${siteConfig.email}`} className="link-u">{siteConfig.email}</a>
          <span>{siteConfig.phone}</span>
          <span className="ftr__emerg"><span className="dot dot--live" /> {siteConfig.emergencyNote}</span>
        </div>
      </div>

      <div className="ftr__word" aria-hidden="true">
        <motion.div
          initial={{ y: '40%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Lifeline<em>360</em>
        </motion.div>
      </div>

      <div className="wrap ftr__base">
        <span className="ftr__brand"><LogoMark size={22} light /> © {new Date().getFullYear()} Lifeline 360</span>
        <span>{siteConfig.appStatus}</span>
      </div>
    </footer>
  );
}
