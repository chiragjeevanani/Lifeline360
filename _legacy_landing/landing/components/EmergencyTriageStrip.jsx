import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ambulance, 
  Droplets, 
  UserCheck, 
  Pill, 
  FlaskConical, 
  Stethoscope,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function EmergencyTriageStrip({ onSelectService, onOpenEmergencyModal }) {
  const triageItems = [
    {
      id: 'ambulance',
      title: 'Emergency Ambulance',
      subtitle: 'Average 7.8 min arrival',
      icon: Ambulance,
      color: '#ef4444',
      glow: 'rgba(239, 68, 68, 0.4)',
      action: onOpenEmergencyModal
    },
    {
      id: 'bloodbank',
      title: 'Find Rare Blood Units',
      subtitle: 'Real-time bank inventory',
      icon: Droplets,
      color: '#f43f5e',
      glow: 'rgba(244, 63, 94, 0.4)',
      action: () => {
        const el = document.getElementById('bloodbank');
        if (el) {
          if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'nursing',
      title: 'At-Home Nurse / Caretaker',
      subtitle: 'Verified attendants & ICU nurses',
      icon: UserCheck,
      color: '#10b981',
      glow: 'rgba(16, 185, 129, 0.4)',
      action: () => onSelectService('nursing')
    },
    {
      id: 'doctor',
      title: 'Doctor Teleconsult',
      subtitle: 'Video call in 15 mins',
      icon: Stethoscope,
      color: '#06b6d4',
      glow: 'rgba(6, 182, 212, 0.4)',
      action: () => onSelectService('doctor')
    },
    {
      id: 'medicine',
      title: 'Rush Medicine Delivery',
      subtitle: 'Prescription upload & dispatch',
      icon: Pill,
      color: '#8b5cf6',
      glow: 'rgba(139, 92, 246, 0.4)',
      action: () => onSelectService('medicine')
    }
  ];

  return (
    <div style={{ position: 'relative', zIndex: 10, marginTop: '-30px', marginBottom: '60px' }}>
      <div className="landing-container">
        <div style={{
          background: 'rgba(13, 20, 36, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 20px',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '12px'
          }}>
            {triageItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={item.action}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 14px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                    border: `1px solid ${item.color}66`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 0 15px ${item.glow}`
                  }}>
                    <Icon size={20} color={item.color} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.subtitle}
                    </div>
                  </div>
                  <ChevronRight size={14} color="var(--text-dim)" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
