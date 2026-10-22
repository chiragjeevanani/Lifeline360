import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Ambulance, 
  UserCheck, 
  Pill, 
  FlaskConical, 
  Droplets,
  Server
} from 'lucide-react';
import { platformEcosystem } from '../data/landingData';

export default function AppsEcosystem() {
  const [activeTab, setActiveTab] = useState(0);
  const currentApp = platformEcosystem[activeTab];

  return (
    <section id="ecosystem" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-pill badge-info" style={{ marginBottom: '16px' }}>
            <Layers size={14} color="#06b6d4" />
            <span>PLATFORM & PANEL ARCHITECTURE (SCOPE ITEM 2 & 17)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Complete App Suite & <span className="gradient-text-cyan">Enterprise Panels</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            A coordinated ecosystem spanning native mobile apps for patients, ambulance drivers, vendors & caretakers, plus enterprise web panels for blood banks, pathology labs, and central administration.
          </p>

          {/* Interactive Nav Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px'
          }}>
            {platformEcosystem.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: activeTab === idx ? '#06b6d4' : 'rgba(255, 255, 255, 0.05)',
                  color: activeTab === idx ? '#070a12' : 'var(--text-muted)',
                  border: activeTab === idx ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {item.platforms.includes('iOS') ? <Smartphone size={15} /> : <Monitor size={15} />}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected App Detailed Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            style={{
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(9, 14, 26, 0.95) 100%)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '40px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.85)'
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Description & Feature Highlights */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: '#67e8f9',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}>
                    {currentApp.platforms}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-dim)', fontWeight: 600 }}>
                    Target Role: {currentApp.role}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                  {currentApp.name}
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
                  {currentApp.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {currentApp.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#e2e8f0' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(6, 182, 212, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <CheckCircle2 size={15} color="#06b6d4" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-Fidelity UI Blueprint Simulation */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '24px',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                    <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginLeft: '8px' }}>
                      lifeline-360://{currentApp.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 600 }}>● PRODUCTION READY</span>
                </div>

                {/* Simulated Panel / Screen Preview */}
                <div style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Module Telemetry & State</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>Sync Engine: WebSocket + REST Endpoints</div>
                    </div>
                    <span style={{ fontSize: '11px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '2px 8px', borderRadius: '4px' }}>
                      Active Sync
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>Status</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Online 99.9%</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>Call Masking</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#10b981' }}>Enabled</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>GPS Push</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8' }}>500ms Tick</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {'>'} Ready for production deployment on Google Cloud & AWS High-Availability Clusters.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
