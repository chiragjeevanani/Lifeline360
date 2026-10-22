import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span>{q}</span>
              <span className="faq__icon" aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="faq__a">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
