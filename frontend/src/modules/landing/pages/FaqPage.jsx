import { useState } from 'react';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import { faqs } from '../data/content';
import { usePageTitle } from '../hooks/usePageTitle';

export default function FaqPage() {
  usePageTitle('FAQs');
  const [group, setGroup] = useState(faqs[0].group);
  const current = faqs.find((f) => f.group === group);

  return (
    <>
      <PageHero
        crumbs={[['FAQs']]}
        label="Frequently asked questions"
        title={['Questions,', <em key="b">answered.</em>]}
        lede="Everything about using Lifeline 360 — services, privacy, membership and partnering."
      />
      <section className="section section--tight">
        <div className="wrap faqp">
          <nav className="faqp__nav" aria-label="FAQ topics">
            {faqs.map((f) => (
              <button key={f.group} className={f.group === group ? 'is-on' : ''} onClick={() => setGroup(f.group)} aria-pressed={f.group === group}>
                {f.group}
                <span className="mono">{f.items.length}</span>
              </button>
            ))}
          </nav>
          <Faq key={group} items={current.items} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
