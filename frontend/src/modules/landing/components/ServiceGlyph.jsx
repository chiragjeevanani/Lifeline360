// Hand-drawn line glyphs for each service — one consistent 1.5px stroke family.
const paths = {
  doctor: (
    <>
      <path d="M8 4v6a5 5 0 0 0 10 0V4" />
      <path d="M13 15v2a5 5 0 0 0 10 0v-2" />
      <circle cx="23" cy="13" r="2.2" />
      <path d="M6 4h4M16 4h4" />
    </>
  ),
  nursing: (
    <>
      <path d="M5 14 16 5l11 9" />
      <path d="M8 12v14h16V12" />
      <path d="M16 14v8M12 18h8" />
    </>
  ),
  ambulance: (
    <>
      <path d="M3 22V11h15v11M18 15h6l4 4v3h-3" />
      <circle cx="9" cy="23" r="2.5" />
      <circle cx="22" cy="23" r="2.5" />
      <path d="M10.5 13.5v5M8 16h5" />
      <path d="M11.5 22h8" />
    </>
  ),
  medicine: (
    <>
      <rect x="4" y="12" width="17" height="8" rx="4" transform="rotate(-40 12.5 16)" />
      <path d="m9.5 13.5 6 5" />
      <circle cx="23" cy="22" r="5" />
      <path d="m19.5 25.5 7-7" />
    </>
  ),
  laboratory: (
    <>
      <path d="M12 4h8M13 4v8l-7 12a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3l-7-12V4" />
      <path d="M9 19h14" />
    </>
  ),
  'blood-bank': (
    <>
      <path d="M16 4c5 6.5 8 11 8 15a8 8 0 0 1-16 0c0-4 3-8.5 8-15Z" />
      <path d="M12.5 19.5a3.5 3.5 0 0 0 3.5 3.5" />
    </>
  ),
  membership: (
    <>
      <rect x="3.5" y="8" width="25" height="17" rx="3" />
      <path d="M3.5 13h25M8 20h6" />
    </>
  ),
};

export default function ServiceGlyph({ slug, size = 32, stroke = 1.5 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[slug] ?? paths.membership}
    </svg>
  );
}
