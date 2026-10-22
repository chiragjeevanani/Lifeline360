import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import LandingRoutes from './modules/landing/routes/LandingRoutes';
import './modules/landing/styles/site.css';
import './modules/landing/styles/home.css';
import './modules/landing/styles/pages.css';

// Smooth scrolling. `lerp` (rather than a fixed duration) gives a continuous,
// frame-rate independent glide; Lenis falls back to native scrolling for
// users who prefer reduced motion.
const lenisOptions = {
  autoRaf: true,
  lerp: 0.075,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.4,
  anchors: { offset: -80, duration: 1.4 },
  stopInertiaOnNavigate: true,
  allowNestedScroll: true,
};

function App() {
  return (
    <ReactLenis root options={lenisOptions}>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <LandingRoutes />
        </BrowserRouter>
      </MotionConfig>
    </ReactLenis>
  );
}

export default App;
