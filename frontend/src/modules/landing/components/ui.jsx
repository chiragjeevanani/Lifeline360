import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function Arrow({ size = 16, dir = 'right' }) {
  const rot = { right: 0, down: 90, up: -90, 'up-right': -45 }[dir];
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ transform: `rotate(${rot}deg)` }} aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Pill button with a circular arrow. Renders a router Link, an <a> or a <button>.
export function Button({ to, href, variant, size, children, arrow = 'right', className = '', ...rest }) {
  const cls = ['btn', variant && `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(' ');
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn__arrow"><Arrow size={14} dir={arrow} /></span>
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
}

// Fade-and-rise when scrolled into view.
export function Reveal({ children, delay = 0, y = 28, as = 'div', className, style }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Tag>
  );
}

// Headline whose lines slide up from behind a mask. `lines` is an array of strings or nodes.
// The heading itself is observed (the inner lines start clipped by their mask,
// so observing them directly would never report an intersection).
const lineVariants = {
  hidden: { y: '105%' },
  show: (i) => ({ y: '0%', transition: { duration: 1.05, ease, delay: i } }),
};

export function MaskLines({ lines, as = 'h2', className = '', delay = 0, inView = true }) {
  const Tag = motion[as];
  const trigger = inView ? { whileInView: 'show', viewport: { once: true, amount: 0.2 } } : { animate: 'show' };
  return (
    <Tag className={className} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span className="mask-line__inner" variants={lineVariants} custom={delay + i * 0.09}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Eyebrow({ children, className = '' }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, aside, titleClass = 'display h-lg' }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <MaskLines lines={Array.isArray(title) ? title : [title]} className={titleClass} />
      </div>
      {aside && <Reveal delay={0.2}><div className="lede">{aside}</div></Reveal>}
    </div>
  );
}
