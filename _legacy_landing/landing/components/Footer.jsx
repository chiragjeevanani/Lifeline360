import React from 'react';
import { 
  HeartPulse, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Smartphone, 
  Apple, 
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer({ onOpenEmergencyModal, onOpenPartnerModal }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: '#05070d',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '80px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="landing-container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <HeartPulse size={20} color="#fff" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                LifeLine 360°
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              India’s integrated healthcare super-app ecosystem connecting emergency ambulance dispatch, doctors, nurses, pharmacies, diagnostic labs, and live blood banks.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot pulse-dot-green" />
              <span style={{ fontSize: '12px', color: '#6ee7b7', fontWeight: 600 }}>
                24/7 National Dispatch Active
              </span>
            </div>
          </div>

          {/* 6 Core Services Links */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              Core Healthcare
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Emergency Ambulance Dispatch
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Doctor Teleconsultation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  At-Home Nursing & Caretakers
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Prescription Medicine Delivery
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Diagnostic Labs & Sample Pickup
                </a>
              </li>
              <li>
                <a href="#bloodbank" onClick={(e) => { e.preventDefault(); scrollTo('bloodbank'); }} style={{ color: '#f43f5e', fontSize: '13.5px', fontWeight: 600 }}>
                  Live Blood Bank Inventory
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Partner Links */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              Platform & Partners
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li>
                <a href="#callmasking" onClick={(e) => { e.preventDefault(); scrollTo('callmasking'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Call Masking Privacy System
                </a>
              </li>
              <li>
                <a href="#membership" onClick={(e) => { e.preventDefault(); scrollTo('membership'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  LifeLine 360 Shield Pass
                </a>
              </li>
              <li>
                <a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Driver & Vendor App Suite
                </a>
              </li>
              <li>
                <a href="#partners" onClick={(e) => { e.preventDefault(); onOpenPartnerModal(); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Join as Ambulance Driver
                </a>
              </li>
              <li>
                <a href="#partners" onClick={(e) => { e.preventDefault(); onOpenPartnerModal(); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Register Pharmacy / Diagnostic Lab
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => { e.preventDefault(); scrollTo('faqs'); }} style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Helpline & Compliance */}
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              Emergency Emergency Line
            </div>
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '11px', color: '#fca5a5', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Toll-Free Dispatch (24/7)
              </div>
              <a href="tel:18005433546" style={{ fontSize: '18px', fontWeight: 900, color: '#ef4444', fontFamily: 'var(--font-mono)' }}>
                1800-LIFELINE
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--text-dim)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="#10b981" />
                <span>NABH & HIPAA Compliant Data Vault</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} color="#06b6d4" />
                <span>dispatch@lifeline360.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ fontSize: '12.5px', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} LifeLine 360 Super App Platform. Developed with <span style={{ color: '#ef4444' }}>♥</span> for Appzeto & Healthcare Partners.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '12.5px', color: 'var(--text-dim)' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("LifeLine 360 Privacy Policy: Enterprise 256-bit encryption and HIPAA-standard data confidentiality."); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("LifeLine 360 Terms of Service: Standard emergency response and provider terms."); }}>Terms & Conditions</a>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '6px 12px',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
