import { Button, MaskLines, Reveal } from './ui';
import Lifeline from './Lifeline';

export default function CtaBand({
  title = ['Help, the moment', <><em>you need it.</em></>],
  lede = 'Book an ambulance, a doctor, a nurse, a test or a medicine order — from one app.',
}) {
  return (
    <section className="cta section--night">
      <Lifeline className="cta__line" delay={0.2} duration={2.2} />
      <div className="wrap cta__inner">
        <MaskLines lines={title} className="display h-lg" />
        <Reveal delay={0.2} className="cta__side">
          <p className="lede">{lede}</p>
          <div className="cta__btns">
            <Button to="/services/ambulance" variant="red">Book an ambulance</Button>
            <Button to="/services" variant="ghost">All services</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
