import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MaskLines } from './ui';

// Shared hero for inner pages: breadcrumb, index label, big serif title, lede.
export default function PageHero({ crumbs = [], label, title, lede, children, aside, accent }) {
  return (
    <section className="phero" style={accent ? { '--accent': accent } : undefined}>
      <div className="wrap">
        <nav className="phero__crumbs mono" aria-label="Breadcrumb">
          <Link to="/" className="link-u">Home</Link>
          {crumbs.map(([text, to]) => (
            <span key={text}>
              <span aria-hidden="true">/</span>
              {to ? <Link to={to} className="link-u">{text}</Link> : <span aria-current="page">{text}</span>}
            </span>
          ))}
        </nav>

        <div className={`phero__grid ${aside ? 'has-aside' : ''}`}>
          <div>
            {label && (
              <motion.p className="phero__label mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                {label}
              </motion.p>
            )}
            <MaskLines as="h1" lines={title} className="display h-lg phero__title" inView={false} delay={0.05} />
            {lede && (
              <motion.p className="lede phero__lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
                {lede}
              </motion.p>
            )}
            {children && (
              <motion.div className="phero__actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }}>
                {children}
              </motion.div>
            )}
          </div>
          {aside && (
            <motion.div className="phero__aside" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              {aside}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
