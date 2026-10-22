import PageHero from '../components/PageHero';
import Ecosystem from '../components/Ecosystem';
import CtaBand from '../components/CtaBand';
import Lifeline from '../components/Lifeline';
import { Eyebrow, MaskLines, Reveal, SectionHead } from '../components/ui';
import { usePageTitle } from '../hooks/usePageTitle';

const principles = [
  ['One place', 'Six essential services and a membership, in one app, with one login and one history — instead of six apps and a dozen phone numbers.'],
  ['Verified people', 'Every driver, vendor, caretaker, laboratory and blood bank completes KYC and document verification before they can accept a request.'],
  ['Private by design', 'Calls between you and a provider go through a masked line. Neither side sees the other’s personal number.'],
  ['Visible at every step', 'Live GPS for ambulances, status for every order and booking, and a notification each time something changes.'],
];

const integrations = ['Google Maps & GPS', 'Payment gateway', 'OTP & SMS', 'Push notifications', 'Calling & call masking', 'Cloud storage', 'Email notifications', 'Video consultation'];

export default function AboutPage() {
  usePageTitle('About');
  return (
    <>
      <PageHero
        crumbs={[['About']]}
        label="About Lifeline 360"
        title={['Healthcare is', <>a circle. We <em>closed it.</em></>]}
        lede="When someone you love needs care, the hard part shouldn’t be finding it. Lifeline 360 brings the services a family relies on into one connected platform."
      />

      <section className="section section--tight about-statement">
        <Lifeline className="about-statement__line" color="var(--ink)" width={1.2} />
        <div className="wrap">
          <Reveal>
            <p className="display h-md about-statement__text">
              A doctor’s call, a nurse at home, an ambulance on the way, medicines at the door, a lab report on your phone and blood when it’s needed — <em>all on one lifeline.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="What we believe" title={['Four promises.']} titleClass="display h-md" />
          <div className="principles">
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07} className="principle">
                <span className="principle__n display">0{i + 1}</span>
                <h3 className="principle__t">{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="wrap">
          <SectionHead
            eyebrow="The platform"
            title={['Seven products,', <><em>one</em> backbone.</>]}
            aside="Three mobile apps, three web panels and this website — all reporting to one Master Admin Panel."
          />
          <Ecosystem />
        </div>
      </section>

      <section className="section">
        <div className="wrap about-int">
          <div>
            <Eyebrow>Under the hood</Eyebrow>
            <MaskLines lines={['Built on', <em key="a">dependable rails.</em>]} className="display h-md" />
          </div>
          <Reveal delay={0.1}>
            <ul className="int-list">
              {integrations.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
