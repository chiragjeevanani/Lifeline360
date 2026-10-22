import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ambulance, 
  UserCheck, 
  Pill, 
  FlaskConical, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { partnerCategories } from '../data/landingData';

const iconMap = {
  Ambulance,
  UserCheck,
  Pill,
  FlaskConical,
  Droplets
};

export default function PartnerOnboarding({ onOpenPartnerModal }) {
  return (
    <section id="partners" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge-pill badge-success" style={{ marginBottom: '16px' }}>
            <Users size={14} color="#10b981" />
            <span>PROVIDER NETWORK & ONBOARDING (SCOPE ITEM 13)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Grow With India’s Largest <span className="gradient-text-emerald">Emergency Care Alliance</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Join thousands of ambulance drivers, verified nurses, pharmacies, diagnostic labs, and blood banks. Empowered by instant digital payouts, smart routing, and total privacy protection.
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {partnerCategories.map((partner, idx) => {
            const Icon = iconMap[partner.icon] || Building2;
            return (
              <motion.div
                key={partner.id}
                whileHover={{ y: -6, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <Icon size={24} color="#10b981" />
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    {partner.title}
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                      Partner Benefits
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {partner.benefits}
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                      Verification Standard
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      {partner.requirements}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenPartnerModal(partner)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#6ee7b7',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#10b981';
                    e.currentTarget.style.color = '#070a12';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.12)';
                    e.currentTarget.style.color = '#6ee7b7';
                  }}
                >
                  <span>Apply as Partner</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          padding: '32px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Are you a Hospital or Corporate Fleet Manager?
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Integrate your hospital fleet or laboratory chain directly via LifeLine 360 Open APIs.
            </div>
          </div>
          <button
            onClick={() => onOpenPartnerModal({ title: 'Enterprise & Hospital Partner' })}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: '#10b981',
              color: '#070a12',
              fontSize: '14px',
              fontWeight: 800,
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
            }}
          >
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </section>
  );
}
