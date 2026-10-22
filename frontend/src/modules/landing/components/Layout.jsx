import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const lenis = useLenis();
  const { pathname } = useLocation();

  // New page: jump to the top instantly (inertia is already cut by stopInertiaOnNavigate).
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollProgress />
      <Header />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Outlet />
        </Suspense>
      </motion.main>
      <Footer />
    </>
  );
}

// A hairline at the top of the viewport that follows the smoothed scroll position.
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
