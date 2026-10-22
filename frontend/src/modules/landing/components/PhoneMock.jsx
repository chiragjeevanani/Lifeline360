import ServiceGlyph from './ServiceGlyph';
import { services } from '../data/services';

// A faithful mock of the Lifeline 360 User App home screen (Scope §3).
export default function PhoneMock({ className = '' }) {
  return (
    <div className={`phone ${className}`} role="img" aria-label="Lifeline 360 app home screen showing an emergency button, six services and a membership card">
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__island" />
          <span className="phone__sig">
            <i /><i /><i />
          </span>
        </div>

        <div className="app">
          <div className="app__top">
            <div>
              <p className="app__hello">Good evening, Priya</p>
              <p className="app__loc">
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 9.5S1.5 6 1.5 4a3.5 3.5 0 0 1 7 0c0 2-3.5 5.5-3.5 5.5Z" fill="currentColor" /></svg>
                Home · Sector 21
              </p>
            </div>
            <span className="app__avatar">P</span>
          </div>

          <div className="app__sos">
            <div>
              <p className="app__sos-k">Emergency</p>
              <p className="app__sos-t">Request an ambulance</p>
            </div>
            <span className="app__sos-btn">
              <ServiceGlyph slug="ambulance" size={22} stroke={1.7} />
            </span>
          </div>

          <p className="app__label">Services</p>
          <div className="app__grid">
            {services.map((s) => (
              <div key={s.slug} className="app__tile" style={{ '--tint': s.tint, '--accent': s.accent }}>
                <ServiceGlyph slug={s.slug} size={20} stroke={1.6} />
                <span>{s.short}</span>
              </div>
            ))}
          </div>

          <div className="app__card">
            <div>
              <p className="app__card-k">Family membership</p>
              <p className="app__card-t">Active · renews 12 Mar</p>
            </div>
            <span className="app__card-chip">360</span>
          </div>

          <div className="app__row">
            <span className="app__row-icon" style={{ '--tint': '#f0e2c6', '--accent': 'var(--c-lab)' }}>
              <ServiceGlyph slug="laboratory" size={16} stroke={1.7} />
            </span>
            <div>
              <p className="app__row-t">Lipid profile · Home collection</p>
              <p className="app__row-s">Tomorrow, 7:30 – 8:30 AM</p>
            </div>
          </div>
        </div>

        <div className="app__tabs">
          {['Home', 'Bookings', 'Card', 'Profile'].map((t, i) => (
            <span key={t} className={i === 0 ? 'is-on' : ''}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
