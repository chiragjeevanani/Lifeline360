import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ServicePage = lazy(() => import('../pages/ServicePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const MembershipPage = lazy(() => import('../pages/MembershipPage'));
const PartnersPage = lazy(() => import('../pages/PartnersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const LegalPage = lazy(() => import('../pages/LegalPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Website sections per Scope §13. Inner pages load on demand.
export default function LandingRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faqs" element={<FaqPage />} />
        <Route path="privacy" element={<LegalPage doc="privacy" />} />
        <Route path="terms" element={<LegalPage doc="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
