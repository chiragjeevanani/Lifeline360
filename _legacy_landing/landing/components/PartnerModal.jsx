import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Building2, UploadCloud, UserCheck } from 'lucide-react';

export default function PartnerModal({ isOpen, onClose, initialData }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    role: initialData?.title || 'Ambulance Driver & Fleet Owner',
    name: '',
    phone: '',
    city: '',
    licenseNumber: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      backgroundColor: 'rgba(5, 7, 13, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'linear-gradient(180deg, #131d31 0%, #0c1220 100%)',
          borderRadius: '28px',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9), 0 0 40px rgba(16, 185, 129, 0.2)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(90deg, #065f46, #10b981)',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Building2 size={22} color="#fff" />
            <div>
              <div style={{ fontSize: '15px', fontWeight: 800 }}>
                PARTNER ONBOARDING (SCOPE ITEM 13)
              </div>
              <div style={{ fontSize: '11px', opacity: 0.9 }}>
                Direct Integration & Fast Verification
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle2 size={36} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Application Received!
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you for applying to the LifeLine 360 Partner Network. Our KYC verification officer will review your credentials and contact you within 24 hours.
              </p>
              <button
                onClick={handleClose}
                style={{
                  padding: '12px 24px',
                  background: '#10b981',
                  color: '#070a12',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Partner Category:
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '12px',
                    color: '#fff',
                    fontSize: '13.5px',
                    outline: 'none'
                  }}
                >
                  <option value="Ambulance Driver & Fleet Owner" style={{ background: '#0f172a' }}>Ambulance Driver & Fleet Owner</option>
                  <option value="Nurse & Trained Caretaker" style={{ background: '#0f172a' }}>Nurse & Trained Caretaker</option>
                  <option value="Medicine Vendor & Pharmacy" style={{ background: '#0f172a' }}>Medicine Vendor & Pharmacy</option>
                  <option value="Diagnostic Pathology Laboratory" style={{ background: '#0f172a' }}>Diagnostic Pathology Laboratory</option>
                  <option value="Licensed Blood Bank" style={{ background: '#0f172a' }}>Licensed Blood Bank</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Full Name / Legal Entity:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Diagnostics / Ramesh Medicals"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '12px',
                    color: '#fff',
                    fontSize: '13.5px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765-43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '12px',
                    color: '#fff',
                    fontSize: '13.5px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Registration / License # / City:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. DL-19284 / NABL-9921 / New Delhi"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '12px',
                    color: '#fff',
                    fontSize: '13.5px',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#070a12',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.35)'
                }}
              >
                <ShieldCheck size={18} />
                <span>SUBMIT PARTNER APPLICATION</span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
