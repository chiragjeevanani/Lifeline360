import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  MapPin, 
  Navigation, 
  PhoneCall, 
  HeartPulse, 
  Clock, 
  CheckCircle2, 
  Droplet, 
  Stethoscope, 
  ArrowRight,
  ShieldCheck,
  Activity,
  Zap,
  Radio
} from 'lucide-react';
import { translations } from '../data/landingData';

export default function HeroSection({ lang, onOpenEmergencyModal }) {
  const [activeMode, setActiveMode] = useState('emergency'); // 'emergency' | 'healthcare'
  const t = translations[lang] || translations.en;

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -60, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '60px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
      className="bg-grid-pattern"
    >
      {/* Dynamic Ambient Glows */}
      <div className="ambient-glow-red" style={{ top: '-100px', left: '-100px' }} />
      <div className="ambient-glow-cyan" style={{ top: '20%', right: '-100px' }} />
      <div className="ambient-glow-purple" style={{ bottom: '-150px', left: '30%' }} />

      <div className="landing-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Headline, Value Proposition & Actions */}
          <div>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'inline-flex', marginBottom: '20px' }}
            >
              <div className="badge-pill badge-emergency">
                <span className="pulse-dot pulse-dot-red" />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '11px', fontWeight: 800 }}>
                  {t.heroBadge}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                marginBottom: '24px'
              }}
            >
              <span style={{ display: 'block' }}>{t.heroTitlePart1}</span>
              <span className="gradient-text-red" style={{ display: 'block' }}>
                {t.heroTitlePart2}
              </span>
              <span className="gradient-text-cyan">
                {t.heroTitlePart3}
              </span>
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '32px'
              }}
            >
              {t.heroDesc}
            </motion.p>

            {/* Mode Switcher Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                display: 'inline-flex',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid var(--border-glass)',
                marginBottom: '32px'
              }}
            >
              <button
                onClick={() => setActiveMode('emergency')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: activeMode === 'emergency' ? 'linear-gradient(135deg, #ef4444, #b91c1c)' : 'transparent',
                  color: activeMode === 'emergency' ? '#fff' : 'var(--text-muted)'
                }}
              >
                <Zap size={14} />
                <span>Emergency Mode</span>
              </button>
              <button
                onClick={() => setActiveMode('healthcare')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: activeMode === 'healthcare' ? 'linear-gradient(135deg, #06b6d4, #0284c7)' : 'transparent',
                  color: activeMode === 'healthcare' ? '#fff' : 'var(--text-muted)'
                }}
              >
                <HeartPulse size={14} />
                <span>Routine & Preventive</span>
              </button>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '44px'
              }}
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(239, 68, 68, 0.55)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenEmergencyModal}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '16px 28px',
                  borderRadius: '14px',
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                <ShieldAlert size={18} />
                <span>{t.requestAmbulanceNow}</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, background: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToServices}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-glass)',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '16px 26px',
                  borderRadius: '14px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span>{t.exploreServices}</span>
              </motion.button>
            </motion.div>

            {/* Live Telemetry Ticker Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f87171', fontFamily: 'var(--font-mono)' }}>
                  {t.avgDispatchTime}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 500 }}>
                  {t.avgDispatchLabel}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                  {t.activeAmbulances}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 500 }}>
                  {t.activeAmbulancesLabel}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  {t.verifiedPersonnel}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 500 }}>
                  {t.verifiedPersonnelLabel}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f43f5e', fontFamily: 'var(--font-mono)' }}>
                  {t.bloodUnitsReady}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 500 }}>
                  {t.bloodUnitsReadyLabel}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Tech 3D Device Showcase (Awwwards Style) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Pulsing Radar Ring Behind Device */}
            <div style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              width: '480px',
              height: '480px',
              borderRadius: '50%',
              border: '1px dashed rgba(239, 68, 68, 0.15)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }} />

            {/* Interactive Smartphone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ rotateY: 5, rotateX: -5 }}
              style={{
                width: '100%',
                maxWidth: '380px',
                background: 'linear-gradient(145deg, #131d31 0%, #0a1120 100%)',
                borderRadius: '40px',
                padding: '14px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.85), 0 0 40px rgba(6, 182, 212, 0.15)',
                position: 'relative'
              }}
            >
              {/* Dynamic Island / Speaker */}
              <div style={{
                width: '110px',
                height: '24px',
                background: '#05070d',
                borderRadius: '16px',
                margin: '0 auto 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0f172a' }} />
                <div style={{ width: '50px', height: '4px', borderRadius: '4px', background: '#1e293b' }} />
              </div>

              {/* Phone Internal Screen Container */}
              <div style={{
                background: '#090e1a',
                borderRadius: '28px',
                overflow: 'hidden',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
              }}>
                {/* App Screen Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="pulse-dot pulse-dot-red" />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#f87171', letterSpacing: '0.04em' }}>
                      DISPATCH ACTIVE
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    GPS LIVE • SECURE
                  </div>
                </div>

                {/* Simulated Real-Time Radar Map Card */}
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(180deg, #0d1627 0%, #080d18 100%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Grid Lines Map Simulation */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.2,
                    backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />

                  {/* Route Polyline Simulation */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <path
                      d="M 60 140 Q 140 120 180 80 T 300 40"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                    />
                  </svg>

                  {/* Ambulance Marker */}
                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      top: '55px',
                      left: '42%',
                      background: '#ef4444',
                      color: '#fff',
                      padding: '6px',
                      borderRadius: '50%',
                      boxShadow: '0 0 16px rgba(239, 68, 68, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3
                    }}
                  >
                    <Navigation size={14} style={{ transform: 'rotate(45deg)' }} />
                  </motion.div>

                  {/* Destination Hospital Pin */}
                  <div style={{
                    position: 'absolute',
                    top: '25px',
                    right: '35px',
                    background: '#10b981',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '10px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 0 14px rgba(16, 185, 129, 0.5)'
                  }}>
                    <MapPin size={10} />
                    <span>Apex Trauma</span>
                  </div>

                  {/* ETA Badge Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    background: 'rgba(7, 10, 18, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Clock size={12} color="#fca5a5" />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                      ETA: 04:18 MINS
                    </span>
                  </div>
                </div>

                {/* Driver / Paramedic Profile Card with Masked Calling */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>
                        Capt. Vikram Joshi (ALS Paramedic)
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
                        Ambulance # MH-02-EM-9921 • ICMR Certified
                      </div>
                    </div>
                    <span style={{ fontSize: '11px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                      ⭐ 4.98
                    </span>
                  </div>

                  {/* Proprietary Masked Call Button (Scope Item 11) */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    borderRadius: '10px',
                    padding: '8px 12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ShieldCheck size={14} color="#06b6d4" />
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 600, color: '#67e8f9' }}>
                          Masked Call Relay
                        </div>
                        <div style={{ fontSize: '9px', color: 'var(--text-dim)' }}>
                          Phone numbers 100% hidden
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Simulating LifeLine 360 Encrypted Call Relay: Connecting to driver without sharing your mobile number.")}
                      style={{
                        background: '#06b6d4',
                        color: '#070a12',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <PhoneCall size={10} />
                      <span>Call Driver</span>
                    </button>
                  </div>
                </div>

                {/* Instant Actions inside Mockup */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button
                    onClick={onOpenEmergencyModal}
                    style={{
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                      color: '#fff',
                      borderRadius: '10px',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <ShieldAlert size={12} />
                    <span>Trigger SOS</span>
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById('bloodbank');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      borderRadius: '10px',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Droplet size={12} color="#f43f5e" />
                    <span>Check Blood</span>
                  </button>
                </div>
              </div>

              {/* Floating Badge on Phone Bottom */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-16px',
                background: 'rgba(7, 10, 18, 0.95)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '14px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#6ee7b7' }}>
                  HIPAA & NABH Certified
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
