import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Plus, Minus, MessageSquare } from 'lucide-react';
import { faqsList } from '../data/landingData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="landing-container" style={{ maxWidth: '960px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill badge-info" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} color="#06b6d4" />
            <span>FREQUENTLY ASKED QUESTIONS (SCOPE ITEM 13)</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Got Questions? <span className="gradient-text-cyan">We Have Answers.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Understand how LifeLine 360’s dispatch algorithms, call masking privacy, partner verification, and emergency guarantees operate.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                style={{
                  background: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '18px',
                  border: isOpen ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                  boxShadow: isOpen ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    color: '#fff',
                    fontSize: '1.05rem',
                    fontWeight: 700
                  }}
                >
                  <span>{faq.question}</span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? '#06b6d4' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                    color: isOpen ? '#070a12' : '#fff'
                  }}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{
                        padding: '0 26px 24px',
                        color: 'var(--text-muted)',
                        fontSize: '0.96rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                        paddingTop: '16px'
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '16px',
          border: '1px dashed rgba(255, 255, 255, 0.1)'
        }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginRight: '12px' }}>
            Need direct technical or medical assistance?
          </span>
          <a
            href="tel:18005433546"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontWeight: 700,
              fontSize: '14px'
            }}
          >
            <MessageSquare size={14} />
            <span>Speak with 24/7 Support Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
