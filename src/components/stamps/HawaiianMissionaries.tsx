export default function HawaiianMissionaries() {
  // Perforated edge cutouts
  const perfs: React.ReactElement[] = []
  const r = 3.5
  const spacing = 11
  // Top & bottom edges
  for (let x = spacing; x < 200; x += spacing) {
    perfs.push(<circle key={`t${x}`} cx={x} cy={0} r={r} fill="#f5f0e0" />)
    perfs.push(<circle key={`b${x}`} cx={x} cy={260} r={r} fill="#f5f0e0" />)
  }
  // Left & right edges
  for (let y = spacing; y < 260; y += spacing) {
    perfs.push(<circle key={`l${y}`} cx={0} cy={y} r={r} fill="#f5f0e0" />)
    perfs.push(<circle key={`r${y}`} cx={200} cy={y} r={r} fill="#f5f0e0" />)
  }

  return (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        {/* Aged paper grain filter */}
        <filter id="hw-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" result="blend" />
          <feComponentTransfer in="blend">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        {/* Thin pelure paper texture - faded, delicate */}
        <filter id="hw-paper">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="7" result="tex" />
          <feColorMatrix in="tex" type="saturate" values="0" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="soft-light" />
        </filter>
      </defs>

      {/* Background - aged cream pelure paper */}
      <rect x="0" y="0" width="200" height="260" fill="#f7f3e8" />
      {/* Paper aging stains */}
      <rect x="0" y="0" width="200" height="260" fill="#ede5d0" opacity="0.3" rx="0" />
      <ellipse cx="60" cy="70" rx="50" ry="40" fill="#e8dcc4" opacity="0.15" />
      <ellipse cx="150" cy="200" rx="45" ry="35" fill="#ddd3ba" opacity="0.12" />

      {/* Main stamp area with grain */}
      <g filter="url(#hw-paper)">
        {/* Outermost border frame */}
        <rect x="14" y="18" width="172" height="224" rx="1" ry="1"
          fill="none" stroke="#2c5282" strokeWidth="2.2" opacity="0.85" />

        {/* Second border frame */}
        <rect x="20" y="24" width="160" height="212" rx="1" ry="1"
          fill="none" stroke="#2c5282" strokeWidth="1.4" opacity="0.8" />

        {/* Third inner border frame */}
        <rect x="26" y="30" width="148" height="200" rx="0.5" ry="0.5"
          fill="none" stroke="#1a365d" strokeWidth="0.8" opacity="0.7" />

        {/* "Hawaiian Postage" header area */}
        <line x1="30" y1="55" x2="170" y2="55" stroke="#2c5282" strokeWidth="0.6" opacity="0.6" />

        {/* HAWAIIAN - hand-set typeface with slight irregularity */}
        <text x="100" y="48" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="13" fontWeight="bold" fill="#2c5282" letterSpacing="3" opacity="0.88">
          HAWAIIAN
        </text>

        {/* POSTAGE */}
        <text x="100" y="70" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="11" fill="#2c5282" letterSpacing="2.5" opacity="0.82">
          POSTAGE
        </text>

        <line x1="30" y1="76" x2="170" y2="76" stroke="#2c5282" strokeWidth="0.6" opacity="0.6" />

        {/* Decorative thin rule */}
        <line x1="55" y1="82" x2="145" y2="82" stroke="#1a365d" strokeWidth="0.4" opacity="0.5" />

        {/* Central denomination area - inner frame */}
        <rect x="50" y="88" width="100" height="80" rx="1" ry="1"
          fill="none" stroke="#2c5282" strokeWidth="1.2" opacity="0.75" />
        <rect x="54" y="92" width="92" height="72" rx="0.5" ry="0.5"
          fill="none" stroke="#1a365d" strokeWidth="0.6" opacity="0.6" />

        {/* Large "2" denomination */}
        <text x="100" y="147" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="52" fontWeight="bold" fill="#2c5282" opacity="0.9"
          style={{ fontVariant: 'normal' }}>
          2
        </text>

        {/* "Cents" below the 2 */}
        <text x="100" y="158" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="8" fill="#1a365d" letterSpacing="4" opacity="0.7">
          CENTS
        </text>

        {/* Decorative thin rule below denomination */}
        <line x1="55" y1="175" x2="145" y2="175" stroke="#1a365d" strokeWidth="0.4" opacity="0.5" />

        {/* H.I. & U.S. text */}
        <text x="100" y="192" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="9" fill="#2c5282" letterSpacing="1.5" opacity="0.82">
          H.I. &amp; U.S.
        </text>

        {/* POSTAGE at bottom */}
        <text x="100" y="207" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="10.5" fill="#2c5282" letterSpacing="2" opacity="0.82">
          POSTAGE
        </text>

        {/* Bottom decorative line */}
        <line x1="30" y1="214" x2="170" y2="214" stroke="#2c5282" strokeWidth="0.6" opacity="0.6" />

        {/* Small decorative dots at corners of inner frame */}
        <circle cx="52" cy="90" r="1" fill="#2c5282" opacity="0.5" />
        <circle cx="148" cy="90" r="1" fill="#2c5282" opacity="0.5" />
        <circle cx="52" cy="166" r="1" fill="#2c5282" opacity="0.5" />
        <circle cx="148" cy="166" r="1" fill="#2c5282" opacity="0.5" />

        {/* Slight ink bleed simulation - faint background noise */}
        <rect x="14" y="18" width="172" height="224" fill="#2c5282" opacity="0.015" />
      </g>

      {/* Overall grain filter overlay */}
      <rect x="0" y="0" width="200" height="260" filter="url(#hw-grain)" opacity="0.08" fill="#8B7D6B" />

      {/* Perforated edges */}
      {perfs}
    </svg>
  )
}
