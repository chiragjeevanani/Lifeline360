import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ShieldAlert, 
  Ambulance, 
  MapPin, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Navigation,
  ShieldCheck
} from 'lucide-react';

export default function EmergencyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: form, 2: dispatching, 3: confirmed
  const [formData, setFormData] = useState({
    serviceType: 'Ambulance (ALS Advanced Life Support)',
    patientName: '',
    phone: '',
    location: 'Current GPS Location (Detected)',
    hospitalPreference: 'Nearest Multi-Specialty Trauma Center'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 2400);
  };

  const resetAndClose = () => {
    setStep(1);
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
        transition={{ duration: 0.3 }}
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'linear-gradient(180deg, #131d31 0%, #0c1220 100%)',
          borderRadius: '28px',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9), 0 0 50px rgba(239, 68, 68, 0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(90deg, #991b1b, #ef4444)',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert size={22} color="#fff" />
            <div>
              <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '0.02em' }}>
                LIFELINE 360 RAPID SOS DISPATCH
              </div>
              <div style={{ fontSize: '11px', opacity: 0.9 }}>
                Direct Satellite & Cellular Triangulation
              </div>
            </div>
          </div>
          <button
            onClick={resetAndClose}
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

        {/* Modal Content */}
        <div style={{ padding: '28px' }}>
          {step === 1 && (
            <form onSubmit={handleSubmit}>
              <div style={{
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px',
                padding: '12px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <AlertTriangle size={20} color="#f87171" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '12px', color: '#fca5a5' }}>
                  Critical Emergency: Nearest available ambulance fleet will be alerted within 500ms of booking.
                </div>
              </div>

              {/* Service Selection */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Emergency Requirement:
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
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
                  <option value="Ambulance (ALS Advanced Life Support)" style={{ background: '#0f172a' }}>🚑 Advanced Life Support Ambulance (ALS - Ventilator & Oxygen)</option>
                  <option value="Ambulance (BLS Basic Life Support)" style={{ background: '#0f172a' }}>🚑 Basic Life Support Ambulance (BLS)</option>
                  <option value="Urgent Blood Request" style={{ background: '#0f172a' }}>🩸 Urgent Blood Requisition & Transport</option>
                  <option value="Emergency Doctor Triage" style={{ background: '#0f172a' }}>🩺 Emergency Tele-Doctor Connect (Immediate)</option>
                </select>
              </div>

              {/* Patient Name */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Patient / Caller Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
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

              {/* Contact Mobile */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Contact Mobile Number (Protected with Call Masking):
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

              {/* Location */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Pickup Address / Landmark:
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="Sector 62 / Connaught Place / GPS Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '10px',
                      padding: '12px 38px 12px 12px',
                      color: '#fff',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                  <MapPin size={18} color="#ef4444" style={{ position: 'absolute', right: '12px', top: '12px' }} />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)'
                }}
              >
                <ShieldAlert size={18} />
                <span>CONFIRM EMERGENCY DISPATCH</span>
              </button>
            </form>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid #ef4444',
                borderTopColor: 'transparent',
                margin: '0 auto 24px',
                animation: 'spin 1s linear infinite'
              }} />
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Triangulating Nearest Emergency Unit...
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Matching vehicle sensors, ICMR-certified paramedics, and optimal traffic routing...
              </p>
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center' }}>
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

              <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                Ambulance En Route!
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Paramedic dispatched from Apex Trauma Base. ETA: <strong>05:40 minutes</strong>.
              </p>

              {/* Driver Details Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'left',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Paramedic Vikram Joshi</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>ALS ICU Unit # MH-01-AX-9912</div>
                  </div>
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    color: '#f87171',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Navigation size={10} />
                    <span>1.8 km away</span>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={16} color="#06b6d4" />
                    <span style={{ fontSize: '11px', color: '#67e8f9' }}>Masked PBX Line Active</span>
                  </div>
                  <button
                    onClick={() => alert("Calling Paramedic Vikram Joshi via Encrypted Masked Proxy...")}
                    style={{
                      background: '#06b6d4',
                      color: '#070a12',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <PhoneCall size={12} />
                    <span>Call Driver</span>
                  </button>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                Close Window & Track in App
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
