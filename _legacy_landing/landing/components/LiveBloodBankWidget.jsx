import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Search, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  PhoneCall, 
  ShieldAlert, 
  Filter,
  Building2,
  Clock
} from 'lucide-react';
import { initialBloodInventory } from '../data/landingData';

export default function LiveBloodBankWidget() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [reservedBank, setReservedBank] = useState(null);
  const [notification, setNotification] = useState(null);

  const bloodGroups = ['All', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  const filteredInventory = initialBloodInventory.filter(item => {
    const matchesGroup = selectedGroup === 'All' || item.group === selectedGroup;
    const matchesSearch = item.bankName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  const handleHoldBlood = (item) => {
    setReservedBank(item);
    setNotification(`Emergency hold initiated for ${item.group} (${item.type}) at ${item.bankName}. Blood bank liaison alerted!`);
    setTimeout(() => {
      setNotification(null);
    }, 6000);
  };

  return (
    <section id="bloodbank" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient glow */}
      <div className="ambient-glow-red" style={{ top: '20%', right: '-150px', opacity: 0.2 }} />

      <div className="landing-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-pill badge-emergency" style={{ marginBottom: '16px' }}>
            <Droplets size={14} color="#f43f5e" />
            <span>REAL-TIME BLOOD BANK NETWORK (SCOPE ITEM 7)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Zero-Delay <span className="gradient-text-red">Live Blood Availability</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Direct API connection with licensed blood banks across regions. Verify available units, locate rare groups, and place emergency reservation holds in real time.
          </p>
        </div>

        {/* Live Notification Bar */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                background: 'linear-gradient(90deg, #991b1b, #ef4444)',
                borderRadius: '16px',
                padding: '14px 20px',
                color: '#fff',
                fontSize: '13.5px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
                boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="#fff" />
                <span>{notification}</span>
              </div>
              <button 
                onClick={() => setNotification(null)}
                style={{ color: '#fff', fontSize: '12px', textDecoration: 'underline' }}
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Filter Control Box */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          marginBottom: '24px'
        }}>
          {/* Blood Group Quick Buttons */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
              Select Required Blood Group:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {bloodGroups.map(grp => (
                <button
                  key={grp}
                  onClick={() => setSelectedGroup(grp)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    transition: 'all 0.2s',
                    background: selectedGroup === grp ? '#f43f5e' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedGroup === grp ? '#fff' : 'var(--text-muted)',
                    border: selectedGroup === grp ? '1px solid #f43f5e' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: selectedGroup === grp ? '0 0 15px rgba(244, 63, 94, 0.5)' : 'none'
                  }}
                >
                  {grp}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input Filter */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
            padding: '10px 16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <Search size={18} color="var(--text-dim)" />
            <input
              type="text"
              placeholder="Search by Hospital / Blood Bank Name or District (e.g. Metro Core, Apollo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: 'var(--text-dim)', fontSize: '12px' }}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Live Inventory Results Table */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
          {filteredInventory.length === 0 ? (
            <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <AlertCircle size={36} color="#f43f5e" style={{ margin: '0 auto 12px' }} />
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>No direct match found in this radius</div>
              <p style={{ fontSize: '13px', marginTop: '6px' }}>
                LifeLine 360 Emergency Dispatch can trigger a city-wide rare donor broadcast.
              </p>
              <button
                onClick={() => { setSelectedGroup('All'); setSearchQuery(''); }}
                style={{
                  marginTop: '16px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Blood Bank & Facility</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Blood Group</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Available Units</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Distance</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', textAlign: 'right' }}>Emergency Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInventory.map((item, idx) => (
                    <tr 
                      key={idx}
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {/* Facility */}
                      <td style={{ padding: '18px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Building2 size={18} color="#06b6d4" />
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{item.bankName}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{item.type} • {item.city}</div>
                          </div>
                        </div>
                      </td>

                      {/* Group */}
                      <td style={{ padding: '18px 20px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: 'rgba(244, 63, 94, 0.15)',
                          border: '1px solid rgba(244, 63, 94, 0.35)',
                          color: '#fda4af',
                          fontWeight: 800,
                          fontSize: '15px'
                        }}>
                          {item.group}
                        </span>
                      </td>

                      {/* Units */}
                      <td style={{ padding: '18px 20px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                          {item.units} <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: 500 }}>Units</span>
                        </div>
                      </td>

                      {/* Distance */}
                      <td style={{ padding: '18px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                          <MapPin size={14} color="#06b6d4" />
                          <span>{item.distance}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '18px 20px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: item.status === 'Urgent Rare' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.15)',
                          color: item.status === 'Urgent Rare' ? '#fca5a5' : '#6ee7b7',
                          border: item.status === 'Urgent Rare' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(16, 185, 129, 0.3)'
                        }}>
                          {item.status}
                        </span>
                      </td>

                      {/* Action */}
                      <td style={{ padding: '18px 20px', textAlign: 'right' }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleHoldBlood(item)}
                          style={{
                            background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 700,
                            padding: '8px 16px',
                            borderRadius: '8px',
                            boxShadow: '0 0 15px rgba(244, 63, 94, 0.35)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <ShieldAlert size={14} />
                          <span>Hold Units</span>
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
