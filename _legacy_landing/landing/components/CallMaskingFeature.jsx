import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  PhoneOutgoing, 
  PhoneIncoming, 
  CheckCircle2, 
  UserCheck, 
  Ambulance, 
  Sparkles,
  Server,
  Zap
} from 'lucide-react';
import { callMaskingFlow } from '../data/landingData';

export default function CallMaskingFeature() {
  const [simulatingCall, setSimulatingCall] = useState(false);
  const [callStatus, setCallStatus] = useState('Idle');

  const runSimulation = () => {
    setSimulatingCall(true);
    setCallStatus('Routing via Encrypted PBX...');
    setTimeout(() => {
      setCallStatus('Virtual Mask DID: +91 (800) 998-3600 Assigned');
      setTimeout(() => {
        setCallStatus('Connected! Real numbers 100% hidden.');
        setTimeout(() => {
          setSimulatingCall(false);
          setCallStatus('Idle');
        }, 3500);
      }, 1500);
    }, 1200);
  };

  return (
    <section id="callmasking" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge-pill badge-success" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} color="#10b981" />
            <span>PATIENT PRIVACY INFRASTRUCTURE (SCOPE ITEM 11)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Military-Grade <span className="gradient-text-emerald">Call Masking Privacy</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Users and emergency service providers communicate seamlessly through an encrypted virtual PBX bridge. Neither party ever sees the other’s personal mobile number.
          </p>
        </div>

        {/* Visual Architecture Relay Diagram */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(9, 14, 26, 0.95) 100%)',
          borderRadius: '28px',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          padding: '40px 30px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 35px rgba(16, 185, 129, 0.1)',
          marginBottom: '40px',
          position: 'relative'
        }}>
          {/* Simulation Status Badge */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: simulatingCall ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: simulatingCall ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
              color: simulatingCall ? '#6ee7b7' : 'var(--text-muted)',
              fontSize: '13px',
              fontWeight: 600
            }}>
              <span className={`pulse-dot ${simulatingCall ? 'pulse-dot-green' : ''}`} style={{ background: simulatingCall ? '#10b981' : '#64748b' }} />
              <span>System Relay Status: {callStatus}</span>
            </div>
          </div>

          {/* Three Node Diagram: User -> Gateway -> Driver/Nurse */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Left Node: Patient */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <PhoneOutgoing size={26} color="#06b6d4" />
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                Patient / Caller
              </div>
              <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px' }}>
                LifeLine 360 User App
              </div>
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: '#67e8f9',
                border: '1px dashed rgba(6, 182, 212, 0.3)'
              }}>
                +91 98XXX-XXXXX (Hidden)
              </div>
            </div>

            {/* Center Node: Proprietary Masked PBX */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.08))',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '24px',
              padding: '30px 20px',
              textAlign: 'center',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.15)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
              }}>
                <Server size={30} color="#fff" />
              </div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                LifeLine Masked Gateway
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Dynamic Session Proxy • 256-bit AES Tunneling
              </p>
              <button
                onClick={runSimulation}
                disabled={simulatingCall}
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: simulatingCall ? 'not-allowed' : 'pointer',
                  opacity: simulatingCall ? 0.7 : 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Zap size={14} />
                <span>{simulatingCall ? 'Simulating Call...' : 'Test Masked Call'}</span>
              </button>
            </div>

            {/* Right Node: Service Provider */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <PhoneIncoming size={26} color="#ef4444" />
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                Driver / Nurse / Vendor
              </div>
              <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px' }}>
                Dedicated Provider App
              </div>
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: '#fca5a5',
                border: '1px dashed rgba(239, 68, 68, 0.3)'
              }}>
                +91 91XXX-XXXXX (Hidden)
              </div>
            </div>
          </div>
        </div>

        {/* 4 Step Workflow Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {callMaskingFlow.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                {step.step}
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
