export default function BaselDove() {
  return (
    <svg viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basel Dove stamp, 1845 Switzerland">
      <defs>
        {/* Aged grain filter */}
        <filter id="baselGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="grained" />
          <feComponentTransfer in="grained">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        {/* Emboss/shadow for dove */}
        <filter id="doveEmboss">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
          <feOffset in="blur" dx="1" dy="1.5" result="shadow" />
          <feFlood floodColor="#1a1a1a" floodOpacity="0.4" result="shadowColor" />
          <feComposite in="shadowColor" in2="shadow" operator="in" result="dropShadow" />
          <feMerge>
            <feMergeNode in="dropShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Subtle inner glow for embossed look */}
        <filter id="embossHighlight">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feOffset in="blur" dx="-0.5" dy="-0.8" result="highlight" />
          <feFlood floodColor="#ffffff" floodOpacity="0.2" result="hlColor" />
          <feComposite in="hlColor" in2="highlight" operator="in" result="hlComposite" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="hlComposite" />
          </feMerge>
        </filter>
      </defs>

      {/* Perforated edges - top */}
      {Array.from({ length: 22 }, (_, i) => (
        <circle key={`pt${i}`} cx={12 + i * 11.5} cy={0} r={3.5} fill="white" />
      ))}
      {/* Perforated edges - bottom */}
      {Array.from({ length: 22 }, (_, i) => (
        <circle key={`pb${i}`} cx={12 + i * 11.5} cy={320} r={3.5} fill="white" />
      ))}
      {/* Perforated edges - left */}
      {Array.from({ length: 27 }, (_, i) => (
        <circle key={`pl${i}`} cx={0} cy={12 + i * 11.5} r={3.5} fill="white" />
      ))}
      {/* Perforated edges - right */}
      {Array.from({ length: 27 }, (_, i) => (
        <circle key={`pr${i}`} cx={260} cy={12 + i * 11.5} r={3.5} fill="white" />
      ))}

      {/* Main stamp area with grain */}
      <g filter="url(#baselGrain)">
        {/* Crimson background */}
        <rect x="6" y="6" width="248" height="308" fill="#c0392b" />

        {/* Decorative outer border */}
        <rect x="12" y="12" width="236" height="296" fill="none" stroke="#2c3e50" strokeWidth="2.5" />
        <rect x="16" y="16" width="228" height="288" fill="none" stroke="#2c3e50" strokeWidth="1" />
        <rect x="19" y="19" width="222" height="282" fill="none" stroke="#f5f5f0" strokeWidth="0.5" opacity="0.4" />

        {/* Inner decorative frame with corner ornaments */}
        <rect x="24" y="24" width="212" height="272" fill="none" stroke="#2c3e50" strokeWidth="2" />
        {/* Corner ornaments */}
        <path d="M24,24 L36,24 L36,28 L28,28 L28,36 L24,36 Z" fill="#2c3e50" />
        <path d="M236,24 L224,24 L224,28 L232,28 L232,36 L236,36 Z" fill="#2c3e50" />
        <path d="M24,296 L36,296 L36,292 L28,292 L28,284 L24,284 Z" fill="#2c3e50" />
        <path d="M236,296 L224,296 L224,292 L232,292 L232,284 L236,284 Z" fill="#2c3e50" />

        {/* "STADT POST BASEL" header text area */}
        <rect x="30" y="30" width="200" height="36" fill="#2c3e50" />
        <text x="130" y="43" textAnchor="middle" fontFamily="serif" fontSize="9" fontWeight="bold" fill="#f5f5f0" letterSpacing="3">STADT</text>
        <text x="130" y="58" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#f5f5f0" letterSpacing="4">POST BASEL</text>

        {/* Central dark panel for dove */}
        <rect x="30" y="70" width="200" height="180" fill="#2c3e50" />
        {/* Subtle frame line inside panel */}
        <rect x="34" y="74" width="192" height="172" fill="none" stroke="#f5f5f0" strokeWidth="0.3" opacity="0.3" />

        {/* Basel cantonal shield - top left of panel */}
        <g transform="translate(42, 80)">
          <path d="M0,0 L20,0 L20,24 L10,30 L0,24 Z" fill="none" stroke="#f5f5f0" strokeWidth="0.8" />
          {/* Shield divided: left black, right white (Basel coat of arms - crosier) */}
          <clipPath id="shieldClip">
            <path d="M0.5,0.5 L19.5,0.5 L19.5,23.5 L10,29 L0.5,23.5 Z" />
          </clipPath>
          <g clipPath="url(#shieldClip)">
            <rect x="0" y="0" width="10" height="30" fill="#1a1a2e" />
            <rect x="10" y="0" width="10" height="30" fill="#f5f5f0" opacity="0.7" />
            {/* Crosier (bishop's staff) */}
            <line x1="10" y1="4" x2="10" y2="26" stroke="#f5f5f0" strokeWidth="1" opacity="0.6" />
            <path d="M10,4 Q14,2 13,7" fill="none" stroke="#f5f5f0" strokeWidth="0.8" opacity="0.6" />
          </g>
        </g>

        {/* THE DOVE - centered, detailed, with emboss effect */}
        <g filter="url(#doveEmboss)" transform="translate(130, 160)">
          <g filter="url(#embossHighlight)">
            {/* Dove body */}
            <ellipse cx="0" cy="0" rx="14" ry="9" fill="#f5f5f0" transform="rotate(-5)" />

            {/* Dove head */}
            <circle cx="18" cy="-8" r="6" fill="#f5f5f0" />
            {/* Eye */}
            <circle cx="20" cy="-9" r="1" fill="#2c3e50" />
            {/* Beak with letter */}
            <path d="M24,-8 L32,-7 L24,-6 Z" fill="#f5f5f0" />
            {/* Letter in beak */}
            <rect x="28" y="-10" width="10" height="7" fill="#f5f5f0" stroke="#2c3e50" strokeWidth="0.5" transform="rotate(-8, 33, -6)" />
            <line x1="28" y1="-10" x2="33" y2="-6" stroke="#2c3e50" strokeWidth="0.3" transform="rotate(-8, 33, -6)" />
            <line x1="38" y1="-10" x2="33" y2="-6" stroke="#2c3e50" strokeWidth="0.3" transform="rotate(-8, 33, -6)" />

            {/* Left wing (spread wide) */}
            <path d="M-5,-5 Q-35,-45 -55,-35 Q-45,-30 -35,-28 Q-30,-25 -20,-18 Q-12,-12 -5,-5 Z" fill="#f5f5f0" />
            {/* Left wing feather lines */}
            <line x1="-8" y1="-8" x2="-48" y2="-36" stroke="#c0c0b8" strokeWidth="0.5" opacity="0.6" />
            <line x1="-6" y1="-10" x2="-42" y2="-38" stroke="#c0c0b8" strokeWidth="0.5" opacity="0.6" />
            <line x1="-4" y1="-12" x2="-36" y2="-40" stroke="#c0c0b8" strokeWidth="0.5" opacity="0.6" />
            <line x1="-10" y1="-6" x2="-50" y2="-32" stroke="#c0c0b8" strokeWidth="0.4" opacity="0.5" />
            <line x1="-14" y1="-8" x2="-45" y2="-28" stroke="#c0c0b8" strokeWidth="0.4" opacity="0.5" />
            {/* Secondary feather details */}
            <path d="M-12,-4 Q-22,-16 -28,-20" fill="none" stroke="#c0c0b8" strokeWidth="0.3" opacity="0.5" />
            <path d="M-16,-6 Q-24,-14 -32,-22" fill="none" stroke="#c0c0b8" strokeWidth="0.3" opacity="0.5" />

            {/* Right wing (spread wide) */}
            <path d="M5,-5 Q35,-45 55,-35 Q45,-30 35,-28 Q30,-25 20,-18 Q12,-12 5,-5 Z" fill="#f5f5f0" />
            {/* Right wing feather lines */}
            <line x1="8" y1="-8" x2="48" y2="-36" stroke="#c0c0b8" strokeWidth="0.5" opacity="0.6" />
            <line x1="6" y1="-10" x2="42" y2="-38" stroke="#c0c0b8" strokeWidth="0.5" opacity="0.6" />
            <line x1="4" y1="-12" x2="36" y2="-40" stroke="#c0c0b8" strokeWidth="0.5" opacity="0.6" />
            <line x1="10" y1="-6" x2="50" y2="-32" stroke="#c0c0b8" strokeWidth="0.4" opacity="0.5" />
            <line x1="14" y1="-8" x2="45" y2="-28" stroke="#c0c0b8" strokeWidth="0.4" opacity="0.5" />
            {/* Secondary feather details */}
            <path d="M12,-4 Q22,-16 28,-20" fill="none" stroke="#c0c0b8" strokeWidth="0.3" opacity="0.5" />
            <path d="M16,-6 Q24,-14 32,-22" fill="none" stroke="#c0c0b8" strokeWidth="0.3" opacity="0.5" />

            {/* Tail feathers */}
            <path d="M-10,6 Q-18,18 -22,28 Q-14,22 -8,14 Q-4,10 -2,6 Z" fill="#f5f5f0" />
            <path d="M-8,6 Q-12,20 -14,28 Q-8,20 -4,12 Z" fill="#f5f5f0" />
            <path d="M-6,7 Q-6,22 -4,28 Q-2,20 -2,10 Z" fill="#f5f5f0" />
            {/* Tail feather lines */}
            <line x1="-9" y1="8" x2="-18" y2="24" stroke="#c0c0b8" strokeWidth="0.4" opacity="0.5" />
            <line x1="-6" y1="8" x2="-10" y2="24" stroke="#c0c0b8" strokeWidth="0.4" opacity="0.5" />

            {/* Breast detail */}
            <path d="M8,2 Q12,-2 16,-6" fill="none" stroke="#c0c0b8" strokeWidth="0.3" opacity="0.4" />
            <path d="M6,4 Q10,0 14,-4" fill="none" stroke="#c0c0b8" strokeWidth="0.3" opacity="0.4" />

            {/* Legs (small, tucked) */}
            <line x1="2" y1="8" x2="4" y2="14" stroke="#f5f5f0" strokeWidth="0.6" />
            <line x1="-2" y1="8" x2="-3" y2="14" stroke="#f5f5f0" strokeWidth="0.6" />
          </g>
        </g>

        {/* Decorative divider below dove panel */}
        <line x1="36" y1="254" x2="224" y2="254" stroke="#f5f5f0" strokeWidth="0.5" opacity="0.3" />

        {/* Denomination area */}
        <rect x="30" y="256" width="200" height="36" fill="#2c3e50" />
        <text x="130" y="270" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#f5f5f0" letterSpacing="1">2 1/2</text>
        <text x="130" y="285" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#f5f5f0" letterSpacing="2">RAPPEN</text>

        {/* Small decorative elements flanking denomination */}
        <path d="M50,270 L56,267 L56,273 Z" fill="#f5f5f0" opacity="0.5" />
        <path d="M210,270 L204,267 L204,273 Z" fill="#f5f5f0" opacity="0.5" />

        {/* Thin horizontal ornamental lines */}
        <line x1="60" y1="262" x2="100" y2="262" stroke="#f5f5f0" strokeWidth="0.3" opacity="0.4" />
        <line x1="160" y1="262" x2="200" y2="262" stroke="#f5f5f0" strokeWidth="0.3" opacity="0.4" />
      </g>
    </svg>
  );
}
