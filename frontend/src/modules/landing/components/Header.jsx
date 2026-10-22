import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Logo from './Logo';
import ServiceGlyph from './ServiceGlyph';
import { Arrow } from './ui';
import { navLinks } from '../data/siteConfig';
import { services } from '../data/services';

const ease = [0.22, 1, 0.36, 1];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { pathname } = useLocation();
  const lenis = useLenis();

  // Close menus whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen, lenis]);

  const cls = ['hdr', scrolled && 'hdr--solid', hidden && !menuOpen && !megaOpen && 'hdr--hidden'].filter(Boolean).join(' ');

  return (
    <>
      <header className={cls}>
        <div className="wrap hdr__bar">
          <Logo onClick={() => setMenuOpen(false)} />

          <nav className="hdr__nav" aria-label="Primary">
            {navLinks.map((l) =>
              l.to === '/services' ? (
                <div key={l.to} className="hdr__mega-wrap" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                  <NavLink to={l.to} className="hdr__link" aria-expanded={megaOpen} onFocus={() => setMegaOpen(true)}>
                    {l.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="m2 4 3 3 3-3" stroke="currentColor" fill="none" strokeWidth="1.4" /></svg>
                  </NavLink>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        className="mega"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <div className="mega__grid">
                          {services.map((s) => (
                            <Link key={s.slug} to={`/services/${s.slug}`} className="mega__item" style={{ '--accent': s.accent, '--tint': s.tint }} onClick={() => setMegaOpen(false)}>
                              <span className="mega__icon"><ServiceGlyph slug={s.slug} size={26} /></span>
                              <span>
                                <span className="mega__name">{s.name}</span>
                                <span className="mega__flow">{s.flow.slice(0, 3).join(' → ')}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link to="/services" className="mega__all" onClick={() => setMegaOpen(false)}>
                          All services <Arrow size={14} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={l.to} to={l.to} className="hdr__link">{l.label}</NavLink>
              ),
            )}
          </nav>

          <div className="hdr__actions">
            <Link to="/services/ambulance" className="hdr__sos">
              <span className="dot dot--live" />
              Emergency
            </Link>
            <Link to="/contact" className="hdr__app">Get the app</Link>
            <button className={`hdr__burger ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mnav"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
            data-lenis-prevent
          >
            <div className="wrap mnav__inner">
              <nav className="mnav__links" aria-label="Mobile">
                {[{ to: '/', label: 'Home' }, ...navLinks, { to: '/faqs', label: 'FAQs' }].map((l, i) => (
                  <motion.div key={l.to} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease }}>
                    <NavLink to={l.to} end className="mnav__link">
                      <span className="mono">0{i + 1}</span>
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mnav__services">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="tag">
                    <span className="dot" style={{ color: s.accent }} />
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link to="/services/ambulance" className="btn btn--red mnav__sos">
                <span>Book an ambulance</span>
                <span className="btn__arrow"><Arrow size={14} /></span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
