import { Button } from '../components/ui';
import Lifeline from '../components/Lifeline';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Page not found');
  return (
    <section className="nf">
      <Lifeline className="nf__line" />
      <div className="wrap nf__inner">
        <p className="mono">Error 404</p>
        <h1 className="display h-xl">Flatline.</h1>
        <p className="lede">This page doesn’t exist — but help is still one tap away.</p>
        <div className="nf__btns">
          <Button to="/">Back to home</Button>
          <Button to="/services/ambulance" variant="red">Book an ambulance</Button>
        </div>
      </div>
    </section>
  );
}
