import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ambulance, 
  Stethoscope, 
  UserCheck, 
  Pill, 
  FlaskConical, 
  Droplets,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Zap,
  Star
} from 'lucide-react';
import { healthcareServices } from '../data/landingData';

const iconMap = {
  Ambulance,
  Stethoscope,
  UserCheck,
  Pill,
  FlaskConical,
  Droplets
};

export default function ServicesShowcase({ onOpenEmergencyModal, onOpenServiceModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(healthcareServices[0]);

  const categories = [
    { id: 'all', label: 'All 6 Pillars' },
    { id: 'Critical Emergency', label: '🚨 Emergency & Blood' },
    { id: 'Home Healthcare', label: '🏠 At-Home Nursing' },
    { id: 'Clinical Care', label: '🩺 Doctors & Pharmacy' },
    { id: 'Diagnostics', label: '🔬 Lab Testing' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? healthcareServices 
    : healthcareServices.filter(s => s.category.includes(activeCategory) || (activeCategory === 'Critical Emergency' && (s.id === 'ambulance' || s.id === 'bloodbank')) || (activeCategory === 'Clinical Care' && (s.id === 'doctor' || s.id === 'medicine')));

  return (
    <section id="services" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge-pill badge-info" style={{ marginBottom: '16px' }}>
            <Zap size={14} color="#06b6d4" />
            <span>UNIFIED 360° HEALTHCARE ECOSYSTEM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Six Core Pillars. <span className="gradient-text-cyan">One Single Lifeline.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Every critical medical requirement—from acute ambulance emergencies to daily elder care and prescription fulfillment—integrated into a seamless digital infrastructure.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '6px',
            borderRadius: '16px',
            border: '1px solid var(--border-glass)'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background: activeCategory === cat.id ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                  border: activeCategory === cat.id ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || Stethoscope;
            const isRed = service.color === '#ef4444' || service.color === '#f43f5e';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.25)' }}
                style={{
                  background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(10, 16, 30, 0.95) 100%)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent glow corner */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: service.color,
                  opacity: 0.12,
                  filter: 'blur(30px)',
                  pointerEvents: 'none'
                }} />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`,
                      border: `1px solid ${service.color}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${service.glowColor}`
                    }}>
                      <Icon size={26} color={service.color} />
                    </div>

                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: service.color,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      letterSpacing: '0.02em'
                    }}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Title & Category */}
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '6px' }}>
                    {service.category}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
                    {service.name}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '22px' }}>
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#cbd5e1' }}>
                        <CheckCircle2 size={15} color={service.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metric and Action */}
                <div style={{
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#94a3b8' }}>
                    {service.metric}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (service.id === 'ambulance') {
                        onOpenEmergencyModal();
                      } else if (service.id === 'bloodbank') {
                        const el = document.getElementById('bloodbank');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        onOpenServiceModal(service);
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: isRed ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                      border: isRed ? '1px solid rgba(239, 68, 68, 0.35)' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: isRed ? '#fca5a5' : '#fff',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700
                    }}
                  >
                    <span>Request Now</span>
                    <ArrowRight size={13} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
