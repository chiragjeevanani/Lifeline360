import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Check, 
  Sparkles, 
  CreditCard, 
  QrCode, 
  Crown, 
  ArrowRight,
  Zap,
  HeartPulse
} from 'lucide-react';
import { membershipPlans } from '../data/landingData';

export default function MembershipPlans({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [selectedPlanId, setSelectedPlanId] = useState('shield');

  const activePlan = membershipPlans.find(p => p.id === selectedPlanId) || membershipPlans[1];

  return (
    <section id="membership" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-glow-purple" style={{ top: '30%', left: '-100px', opacity: 0.25 }} />

      <div className="landing-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-pill" style={{ background: 'rgba(99, 102, 241, 0.12)', borderColor: 'rgba(99, 102, 241, 0.3)', color: '#c4b5fd', marginBottom: '16px' }}>
            <Crown size={14} color="#a78bfa" />
            <span>LIFELINE 360 SHIELD MEMBERSHIP (SCOPE ITEM 9)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Guaranteed Care. <span className="gradient-text-purple">Predictable Family Safety.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Gain zero out-of-pocket emergency ambulance dispatch, unlimited family teleconsults, doorstep diagnostic subsidies, and priority healthcare access with your Digital 360 Pass.
          </p>

          {/* Billing Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '28px',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '6px 10px',
            borderRadius: '9999px',
            border: '1px solid var(--border-glass)'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'all 0.2s',
                background: billingCycle === 'monthly' ? '#6366f1' : 'transparent',
                color: billingCycle === 'monthly' ? '#fff' : 'var(--text-muted)'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: billingCycle === 'annual' ? '#6366f1' : 'transparent',
                color: billingCycle === 'annual' ? '#fff' : 'var(--text-muted)'
              }}
            >
              <span>Annual Shield</span>
              <span style={{
                background: '#10b981',
                color: '#070a12',
                fontSize: '10px',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '6px'
              }}>
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* Holographic Digital Membership Card Preview */}
        <div style={{ maxWidth: '500px', margin: '0 auto 50px' }}>
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 4 }}
            style={{
              background: activePlan.cardBg,
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.85), 0 0 35px rgba(99, 102, 241, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Shimmer light bar across card */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.06) 50%, transparent 55%)',
              pointerEvents: 'none'
            }} />

            {/* Card Top Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HeartPulse size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>LifeLine 360</div>
                  <div style={{ fontSize: '9px', color: '#cbd5e1', letterSpacing: '0.05em' }}>DIGITAL HEALTH PASS</div>
                </div>
              </div>

              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#fff',
                letterSpacing: '0.04em'
              }}>
                {activePlan.badge}
              </span>
            </div>

            {/* Smart EMV Chip simulation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: '42px',
                height: '32px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.5)'
              }} />
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>
                NFC & QR ENABLED • PRIORITY PASS
              </div>
            </div>

            {/* Cardholder Data */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Plan Membership Holder
                </div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>
                  DR. ARJUN VARMA & FAMILY
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                  ID: LL-360-9948-FAM • VALID 2026/27
                </div>
              </div>

              <div style={{ background: '#fff', padding: '6px', borderRadius: '8px' }}>
                <QrCode size={40} color="#070a12" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {membershipPlans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            const period = billingCycle === 'annual' ? plan.periodAnnual : plan.periodMonthly;

            return (
              <motion.div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                whileHover={{ y: -6 }}
                style={{
                  background: isSelected 
                    ? 'linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)' 
                    : 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '24px',
                  border: isSelected ? `2px solid ${plan.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: isSelected ? '0 25px 50px -12px rgba(0,0,0,0.85)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Popular Pill */}
                {plan.recommended && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    color: '#fff',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)'
                  }}>
                    MOST POPULAR FAMILY CHOICE
                  </div>
                )}

                <div>
                  {/* Title & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                      {plan.name}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: plan.accent, background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                      {plan.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
                    {plan.desc}
                  </p>

                  {/* Price Tag */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                      {price}
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
                      {period}
                    </span>
                  </div>

                  {billingCycle === 'annual' && (
                    <div style={{ fontSize: '12px', color: '#34d399', fontWeight: 600, marginBottom: '24px' }}>
                      ✓ {plan.savings}
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#e2e8f0' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={12} color="#10b981" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPlan(plan, billingCycle);
                  }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 700,
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: isSelected ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                    border: isSelected ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight size={15} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
