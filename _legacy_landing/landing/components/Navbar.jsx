import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  PhoneCall, 
  ShieldAlert, 
  Download, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  HeartPulse,
  Smartphone,
  Apple
} from 'lucide-react';
import { translations } from '../data/landingData';

export default function Navbar({ lang, setLang, onOpenEmergencyModal, onOpenPartnerModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const t = translations[lang] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Urgent Alert Strip */}
      <div style={{
        background: 'linear-gradient(90deg, #991b1b 0%, #dc2626 50%, #991b1b 100%)',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: '600',
        padding: '7px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 51,
        letterSpacing: '0.02em'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
          <span className="pulse-dot pulse-dot-red" style={{ background: '#fff' }} />
          <span>{t.emergencyLive}</span>
          <span style={{ opacity: 0.7 }}>•</span>
          <a 
            href="tel:18005433546" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px', 
              background: 'rgba(0,0,0,0.25)', 
              padding: '2px 10px', 
              borderRadius: '9999px',
              color: '#fff',
              textDecoration: 'none'
            }}
          >
            <PhoneCall size={12} />
            <span>{t.emergencyHotline}</span>
          </a>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(7, 10, 18, 0.88)' : 'rgba(7, 10, 18, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.7)' : 'none'
        }}
      >
        <div className="landing-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          {/* Logo Branding */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.45)',
              position: 'relative'
            }}>
              <HeartPulse size={24} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}>
                  LifeLine
                </span>
                <span style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: '#fff',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  letterSpacing: '0.04em'
                }}>
                  360°
                </span>
              </div>
              <span style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
                Super App Ecosystem
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
            <button 
              onClick={() => scrollToSection('services')}
              style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {t.navServices}
            </button>
            <button 
              onClick={() => scrollToSection('bloodbank')}
              style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '4px' }}
              onMouseEnter={(e) => e.target.style.color = '#f43f5e'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              <span className="pulse-dot pulse-dot-red" style={{ width: '6px', height: '6px' }} />
              {t.navBloodBank}
            </button>
            <button 
              onClick={() => scrollToSection('callmasking')}
              style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              Privacy Shield
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {t.navMembership}
            </button>
            <button 
              onClick={() => scrollToSection('ecosystem')}
              style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {t.navEcosystem}
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {t.navPartners}
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Language Switcher (Scope Item 10: Multi-language Support) */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                color: 'var(--text-main)',
                transition: 'background 0.2s'
              }}
              title="Toggle Language (English / हिन्दी)"
            >
              <Globe size={14} color="#06b6d4" />
              <span>{lang === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Quick SOS Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenEmergencyModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: '700',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <ShieldAlert size={16} />
              <span>SOS Dispatch</span>
            </motion.button>

            {/* Download App CTA with Dropdown */}
            <div style={{ position: 'relative', display: 'none' }} className="desktop-download">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setDownloadDropdown(!downloadDropdown)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                <Download size={15} />
                <span>{t.downloadApp}</span>
              </motion.button>

              <AnimatePresence>
                {downloadDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 'calc(100% + 8px)',
                      width: '220px',
                      background: '#0d1424',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '12px',
                      padding: '10px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
                      zIndex: 100
                    }}
                  >
                    <a
                      href="#download-android"
                      onClick={(e) => { e.preventDefault(); alert("LifeLine 360 Android APK & Google Play link will be accessible upon public deployment."); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '13px',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Smartphone size={18} color="#10b981" />
                      <div>
                        <div style={{ fontWeight: 600 }}>Google Play</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Android 8.0 & above</div>
                      </div>
                    </a>
                    <a
                      href="#download-ios"
                      onClick={(e) => { e.preventDefault(); alert("LifeLine 360 iOS App will be available on Apple App Store."); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '13px',
                        transition: 'background 0.2s',
                        marginTop: '4px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Apple size={18} color="#06b6d4" />
                      <div>
                        <div style={{ fontWeight: 600 }}>App Store</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>iOS 15.0 & above</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                border: '1px solid var(--border-glass)'
              }}
              className="mobile-hamburger"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden',
                background: 'rgba(7, 10, 18, 0.98)',
                borderTop: '1px solid var(--border-glass)',
                padding: '16px 24px 24px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <button
                  onClick={() => scrollToSection('services')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>{t.navServices}</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>
                <button
                  onClick={() => scrollToSection('bloodbank')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#f43f5e', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>{t.navBloodBank}</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>
                <button
                  onClick={() => scrollToSection('callmasking')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>Privacy Shield (Call Masking)</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>
                <button
                  onClick={() => scrollToSection('membership')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>{t.navMembership}</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>
                <button
                  onClick={() => scrollToSection('ecosystem')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>{t.navEcosystem}</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>
                <button
                  onClick={() => scrollToSection('partners')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>{t.navPartners}</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>
                <button
                  onClick={() => scrollToSection('faqs')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', fontSize: '15px', fontWeight: 600, padding: '8px 0' }}
                >
                  <span>{t.navFaq}</span>
                  <ChevronRight size={16} color="var(--text-dim)" />
                </button>

                <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenPartnerModal(); }}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 600
                    }}
                  >
                    Partner Onboarding
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenEmergencyModal(); }}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: '#ef4444',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 700
                    }}
                  >
                    SOS Ambulance
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-download {
            display: block !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
