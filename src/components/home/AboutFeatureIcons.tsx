const ICON_BG = "url(#about-icon-bg)";

function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="about-icon-bg" x1="37.0651" y1="-4.69565" x2="77.7599" y2="39.9666" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40454A" />
          <stop offset="1" stopColor="#292C2E" />
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="8" fill={ICON_BG} />
      {children}
    </svg>
  );
}

const dot = "var(--tgt-accent, #ff0d16)";

export function AboutIcon01() {
  return (
    <IconShell>
      <ellipse opacity="0.3" cx="19" cy="36" rx="2" ry="2" fill={dot} />
      <ellipse opacity="0.3" cx="53" cy="36" rx="2" ry="2" transform="rotate(180 53 36)" fill={dot} />
      <ellipse opacity="0.6" cx="25" cy="36" rx="2" ry="2" fill={dot} />
      <ellipse opacity="0.6" cx="47" cy="36" rx="2" ry="2" transform="rotate(180 47 36)" fill={dot} />
      <ellipse cx="30.5" cy="24" rx="2" ry="2" fill={dot} />
      <ellipse cx="41.5" cy="48" rx="2" ry="2" transform="rotate(180 41.5 48)" fill={dot} />
      <ellipse cx="36" cy="36" rx="2" ry="2" fill={dot} />
      <ellipse cx="34" cy="30" rx="2" ry="2" fill={dot} />
      <ellipse cx="39" cy="42" rx="2" ry="2" transform="rotate(180 39 42)" fill={dot} />
      <ellipse cx="28" cy="30" rx="2" ry="2" fill={dot} />
      <ellipse cx="44" cy="42" rx="2" ry="2" transform="rotate(180 44 42)" fill={dot} />
    </IconShell>
  );
}

export function AboutIcon02() {
  return (
    <IconShell>
      <circle cx="30.4" cy="41.6" r="1.4" fill={dot} />
      <circle cx="30.4" cy="37.4" r="1.4" fill={dot} />
      <circle cx="33.2" cy="34.6" r="1.4" fill={dot} />
      <circle cx="36" cy="31.8" r="1.4" fill={dot} />
      <circle cx="38.8" cy="29" r="1.4" fill={dot} />
      <circle cx="41.6" cy="26.2" r="1.4" fill={dot} />
      <circle cx="44.4" cy="23.4" r="1.4" fill={dot} />
      <circle cx="34.6" cy="41.6" r="1.4" fill={dot} />
      <circle cx="37.4" cy="38.8" r="1.4" fill={dot} />
      <circle cx="40.2" cy="36" r="1.4" fill={dot} />
      <circle cx="43" cy="33.2" r="1.4" fill={dot} />
      <circle cx="45.8" cy="30.4" r="1.4" fill={dot} />
      <circle cx="48.6" cy="27.6" r="1.4" fill={dot} />
      <circle cx="48.6" cy="23.4" r="1.4" fill={dot} />
      <circle opacity="0.6" cx="30.4" cy="26.2" r="1.4" fill={dot} />
      <circle opacity="0.3" cx="26.2" cy="26.2" r="1.4" fill={dot} />
      <circle opacity="0.3" cx="23.4" cy="30.4" r="1.4" fill={dot} />
      <circle opacity="0.6" cx="23.4" cy="34.2" r="1.4" fill={dot} />
      <circle cx="23.4" cy="38" r="1.4" fill={dot} />
      <circle cx="23.4" cy="41.9" r="1.4" fill={dot} />
      <circle cx="23.4" cy="45.7" r="1.4" fill={dot} />
      <circle cx="25.5" cy="48.6" r="1.4" fill={dot} />
      <circle cx="29.4" cy="48.6" r="1.4" fill={dot} />
      <circle cx="33.2" cy="48.6" r="1.4" fill={dot} />
      <circle cx="37.1" cy="48.6" r="1.4" fill={dot} />
      <circle opacity="0.6" cx="40.9" cy="48.6" r="1.4" fill={dot} />
      <circle opacity="0.3" cx="44.8" cy="48.6" r="1.4" fill={dot} />
      <circle opacity="0.3" cx="47.2" cy="45.8" r="1.4" fill={dot} />
      <circle opacity="0.6" cx="47.2" cy="41.6" r="1.4" fill={dot} />
    </IconShell>
  );
}

export function AboutIcon03() {
  return (
    <IconShell>
      <ellipse cx="38" cy="22.6" rx="1.62" ry="1.62" transform="rotate(180 38 22.6)" fill={dot} />
      <ellipse cx="33.6" cy="49.4" rx="1.62" ry="1.62" fill={dot} />
      <ellipse cx="33.2" cy="22.6" rx="1.62" ry="1.62" transform="rotate(180 33.2 22.6)" fill={dot} />
      <circle cx="38" cy="49.4" r="1.62" fill={dot} />
      <ellipse cx="29.5" cy="26.3" rx="1.62" ry="1.62" transform="rotate(180 29.5 26.3)" fill={dot} />
      <ellipse cx="42.5" cy="46.9" rx="1.62" ry="1.62" fill={dot} />
      <ellipse opacity="0.6" cx="25.9" cy="43.3" rx="1.62" ry="1.62" fill={dot} />
      <ellipse cx="39.5" cy="26.3" rx="1.62" ry="1.62" fill={dot} />
      <ellipse opacity="0.6" cx="25.9" cy="29.9" rx="1.62" ry="1.62" transform="rotate(180 25.9 29.9)" fill={dot} />
      <ellipse opacity="0.6" cx="46.1" cy="43.3" rx="1.62" ry="1.62" fill={dot} />
      <ellipse cx="29.9" cy="46.5" rx="1.62" ry="1.62" fill={dot} />
      <ellipse opacity="0.6" cx="46" cy="31.5" rx="1.62" ry="1.62" fill={dot} />
      <ellipse opacity="0.3" cx="22.6" cy="39.2" rx="1.62" ry="1.62" transform="rotate(-90 22.6 39.2)" fill={dot} />
      <ellipse opacity="0.3" cx="49.4" cy="34" rx="1.62" ry="1.62" transform="rotate(90 49.4 34)" fill={dot} />
      <ellipse opacity="0.3" cx="22.6" cy="34" rx="1.62" ry="1.62" transform="rotate(-90 22.6 34)" fill={dot} />
      <ellipse opacity="0.3" cx="49.4" cy="39.2" rx="1.62" ry="1.62" transform="rotate(90 49.4 39.2)" fill={dot} />
    </IconShell>
  );
}
