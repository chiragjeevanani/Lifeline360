import React, { useState } from 'react';
import { useLenisScroll } from '../hooks/useLenisScroll';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EmergencyTriageStrip from '../components/EmergencyTriageStrip';
import ServicesShowcase from '../components/ServicesShowcase';
import LiveBloodBankWidget from '../components/LiveBloodBankWidget';
import CallMaskingFeature from '../components/CallMaskingFeature';
import MembershipPlans from '../components/MembershipPlans';
import AppsEcosystem from '../components/AppsEcosystem';
import PartnerOnboarding from '../components/PartnerOnboarding';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import EmergencyModal from '../components/EmergencyModal';
import PartnerModal from '../components/PartnerModal';

export default function LandingPage() {
  // Initialize Lenis smooth scrolling
  useLenisScroll();

  const [lang, setLang] = useState('en'); // 'en' | 'hi'
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedPartnerData, setSelectedPartnerData] = useState(null);

  const handleOpenEmergencyModal = () => {
    setEmergencyModalOpen(true);
  };

  const handleOpenPartnerModal = (partnerData = null) => {
    setSelectedPartnerData(partnerData);
    setPartnerModalOpen(true);
  };

  const handleSelectService = (serviceId) => {
    if (serviceId === 'ambulance') {
      setEmergencyModalOpen(true);
    } else {
      const el = document.getElementById('services');
      if (el) {
        if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectPlan = (plan, cycle) => {
    alert(`LifeLine 360 Checkout Simulation: You selected ${plan.name} (${cycle} plan at ${cycle === 'annual' ? plan.priceAnnual : plan.priceMonthly}). Initiating secure payment gateway...`);
  };

  return (
    <div className="landing-page-wrapper" style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      {/* Top Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenPartnerModal={() => handleOpenPartnerModal()}
      />

      {/* Hero Section */}
      <HeroSection 
        lang={lang}
        onOpenEmergencyModal={handleOpenEmergencyModal}
      />

      {/* Emergency Triage Strip */}
      <EmergencyTriageStrip 
        onSelectService={handleSelectService}
        onOpenEmergencyModal={handleOpenEmergencyModal}
      />

      {/* 6 Core Healthcare Services Showcase */}
      <ServicesShowcase 
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenServiceModal={(service) => {
          alert(`LifeLine 360: Direct booking for ${service.name} will open the ${service.name} service flow.`);
        }}
      />

      {/* Real-Time Live Blood Bank & Availability Tracker */}
      <LiveBloodBankWidget />

      {/* Proprietary Call Masking System Feature */}
      <CallMaskingFeature />

      {/* LifeLine 360 Membership Shield */}
      <MembershipPlans onSelectPlan={handleSelectPlan} />

      {/* Complete Software Ecosystem & Panels */}
      <AppsEcosystem />

      {/* Partner & Provider Onboarding */}
      <PartnerOnboarding onOpenPartnerModal={handleOpenPartnerModal} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer 
        onOpenEmergencyModal={handleOpenEmergencyModal}
        onOpenPartnerModal={() => handleOpenPartnerModal()}
      />

      {/* Global Interactive Modals */}
      <EmergencyModal 
        isOpen={emergencyModalOpen} 
        onClose={() => setEmergencyModalOpen(false)} 
      />

      <PartnerModal 
        isOpen={partnerModalOpen} 
        onClose={() => setPartnerModalOpen(false)} 
        initialData={selectedPartnerData}
      />
    </div>
  );
}
