import PageHero from '../components/PageHero';
import { legal } from '../data/legal';
import { usePageTitle } from '../hooks/usePageTitle';
import { preventHashJump } from '../hooks/useLenis';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function LegalPage({ doc }) {
  const d = legal[doc];
  usePageTitle(d.title);

  return (
    <>
      <PageHero crumbs={[[d.title]]} label={d.updated} title={[d.title]} lede={d.intro} />
      <section className="section section--tight">
        <div className="wrap legal">
          <nav className="legal__toc" aria-label="On this page">
            <p className="mono">On this page</p>
            {d.sections.map(([h]) => (
              <a key={h} href={`#${slugify(h)}`} onClick={preventHashJump} className="link-u">{h}</a>
            ))}
          </nav>
          <article className="legal__body">
            {d.sections.map(([h, paras], i) => (
              <section key={h} id={slugify(h)}>
                <h2><span className="mono">{String(i + 1).padStart(2, '0')}</span>{h}</h2>
                {paras.map((p) => <p key={p}>{p}</p>)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
