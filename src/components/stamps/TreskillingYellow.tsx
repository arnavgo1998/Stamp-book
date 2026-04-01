export default function TreskillingYellow() {
  return (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        {/* Grain filter for aged engraving quality */}
        <filter id="ty-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="33" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
        <filter id="ty-engrave">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="3" seed="12" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="soft-light" />
        </filter>
        {/* Perforation clip path */}
        <clipPath id="ty-perf">
          <path d={(() => {
            const w = 200, h = 260, r = 3.5, sp = 11;
            let d = `M 0 0 H ${w} V ${h} H 0 Z `;
            for (let x = sp; x < w; x += sp) d += `M ${x + r} 0 A ${r} ${r} 0 1 0 ${x - r} 0 A ${r} ${r} 0 1 0 ${x + r} 0 `;
            for (let x = sp; x < w; x += sp) d += `M ${x + r} ${h} A ${r} ${r} 0 1 0 ${x - r} ${h} A ${r} ${r} 0 1 0 ${x + r} ${h} `;
            for (let y = sp; y < h; y += sp) d += `M 0 ${y + r} A ${r} ${r} 0 1 0 0 ${y - r} A ${r} ${r} 0 1 0 0 ${y + r} `;
            for (let y = sp; y < h; y += sp) d += `M ${w} ${y + r} A ${r} ${r} 0 1 0 ${w} ${y - r} A ${r} ${r} 0 1 0 ${w} ${y + r} `;
            return d;
          })()} fillRule="evenodd" />
        </clipPath>
      </defs>

      <g clipPath="url(#ty-perf)">
        {/* Golden yellow background */}
        <rect width="200" height="260" fill="#e8b820" />

        {/* Fine horizontal engraving lines across entire background */}
        {Array.from({ length: 130 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 2} x2="200" y2={i * 2}
            stroke="#d4a017" strokeWidth="0.3" opacity="0.5" />
        ))}

        {/* Elaborate scrollwork frame border */}
        <rect x="8" y="8" width="184" height="244" rx="3" fill="none" stroke="#8b6914" strokeWidth="2.5" />
        <rect x="12" y="12" width="176" height="236" rx="2" fill="none" stroke="#2d1810" strokeWidth="1.2" />
        <rect x="15" y="15" width="170" height="230" rx="1.5" fill="none" stroke="#8b6914" strokeWidth="0.6" />

        {/* Ornate corner scrollwork flourishes */}
        {[
          [18, 18, 1, 1], [182, 18, -1, 1], [18, 242, 1, -1], [182, 242, -1, -1]
        ].map(([cx, cy, sx, sy], i) => (
          <g key={i} transform={`translate(${cx},${cy}) scale(${sx},${sy})`}>
            <path d="M0,0 C3,0 8,2 10,5 C12,8 12,12 10,15 C8,12 6,10 3,10 C5,8 6,5 5,3 C4,1 2,0 0,0" fill="none" stroke="#2d1810" strokeWidth="0.8" />
            <path d="M0,3 C2,3 5,4 7,7 C9,10 8,14 6,16" fill="none" stroke="#8b6914" strokeWidth="0.5" />
            <circle cx="4" cy="4" r="1" fill="#2d1810" />
          </g>
        ))}

        {/* Decorative scroll patterns along top and bottom edges */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`top${i}`}>
            <path d={`M${25 + i * 13},20 C${28 + i * 13},16 ${32 + i * 13},16 ${35 + i * 13},20`}
              fill="none" stroke="#2d1810" strokeWidth="0.5" />
          </g>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`bot${i}`}>
            <path d={`M${25 + i * 13},240 C${28 + i * 13},244 ${32 + i * 13},244 ${35 + i * 13},240`}
              fill="none" stroke="#2d1810" strokeWidth="0.5" />
          </g>
        ))}

        {/* Side scroll ornaments */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`ls${i}`}>
            <path d={`M20,${25 + i * 13} C16,${28 + i * 13} 16,${32 + i * 13} 20,${35 + i * 13}`}
              fill="none" stroke="#2d1810" strokeWidth="0.5" />
            <path d={`M180,${25 + i * 13} C184,${28 + i * 13} 184,${32 + i * 13} 180,${35 + i * 13}`}
              fill="none" stroke="#2d1810" strokeWidth="0.5" />
          </g>
        ))}

        {/* "TRE SKILL. BCO" text at top */}
        <text x="100" y="42" textAnchor="middle" fill="#2d1810" fontFamily="serif" fontSize="10" fontWeight="bold" letterSpacing="2">TRE SKILL. BCO</text>

        {/* Denomination "3" prominently displayed */}
        <text x="100" y="72" textAnchor="middle" fill="#2d1810" fontFamily="serif" fontSize="28" fontWeight="bold">3</text>

        {/* Inner oval frame for coat of arms */}
        <ellipse cx="100" cy="140" rx="55" ry="52" fill="none" stroke="#2d1810" strokeWidth="1.5" />
        <ellipse cx="100" cy="140" rx="52" ry="49" fill="none" stroke="#8b6914" strokeWidth="0.7" />
        <ellipse cx="100" cy="140" rx="48" ry="46" fill="#d4a017" stroke="#2d1810" strokeWidth="0.5" />

        {/* Fine concentric line work inside oval */}
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="140" rx={48 - i * 2} ry={46 - i * 1.8}
            fill="none" stroke="#c49a15" strokeWidth="0.3" opacity="0.4" />
        ))}

        {/* Swedish Coat of Arms - Three Crowns (Tre Kronor) */}
        {/* Shield shape */}
        <path d="M80,120 L80,148 Q80,162 100,168 Q120,162 120,148 L120,120 Z" fill="#d4a017" stroke="#2d1810" strokeWidth="1" />

        {/* Crown 1 - top left */}
        <g transform="translate(88, 128)">
          <path d="M-6,2 L-6,-2 L-4,-4 L-2,-1 L0,-5 L2,-1 L4,-4 L6,-2 L6,2 Z" fill="#2d1810" />
          <rect x="-5" y="2" width="10" height="3" fill="#2d1810" rx="0.5" />
          <circle cx="0" cy="-3" r="0.8" fill="#d4a017" />
          <circle cx="-3" cy="-2" r="0.6" fill="#d4a017" />
          <circle cx="3" cy="-2" r="0.6" fill="#d4a017" />
        </g>

        {/* Crown 2 - top right */}
        <g transform="translate(112, 128)">
          <path d="M-6,2 L-6,-2 L-4,-4 L-2,-1 L0,-5 L2,-1 L4,-4 L6,-2 L6,2 Z" fill="#2d1810" />
          <rect x="-5" y="2" width="10" height="3" fill="#2d1810" rx="0.5" />
          <circle cx="0" cy="-3" r="0.8" fill="#d4a017" />
          <circle cx="-3" cy="-2" r="0.6" fill="#d4a017" />
          <circle cx="3" cy="-2" r="0.6" fill="#d4a017" />
        </g>

        {/* Crown 3 - bottom center */}
        <g transform="translate(100, 148)">
          <path d="M-6,2 L-6,-2 L-4,-4 L-2,-1 L0,-5 L2,-1 L4,-4 L6,-2 L6,2 Z" fill="#2d1810" />
          <rect x="-5" y="2" width="10" height="3" fill="#2d1810" rx="0.5" />
          <circle cx="0" cy="-3" r="0.8" fill="#d4a017" />
          <circle cx="-3" cy="-2" r="0.6" fill="#d4a017" />
          <circle cx="3" cy="-2" r="0.6" fill="#d4a017" />
        </g>

        {/* Heraldic rampant lion beneath the shield */}
        <g transform="translate(100, 198)" filter="url(#ty-engrave)">
          {/* Body */}
          <path d="M-4,8 C-8,4 -10,-2 -8,-6 C-6,-10 -2,-12 0,-14 C2,-12 4,-10 6,-8 C8,-4 6,2 4,6 L2,8 Z" fill="#2d1810" />
          {/* Head */}
          <circle cx="0" cy="-16" r="4" fill="#2d1810" />
          {/* Mane */}
          <path d="M-3,-18 C-5,-20 -6,-16 -4,-14 M3,-18 C5,-20 6,-16 4,-14 M0,-20 C-1,-22 1,-22 0,-20" fill="none" stroke="#8b6914" strokeWidth="0.5" />
          {/* Front legs raised (rampant pose) */}
          <path d="M-6,-4 L-12,-10 L-10,-12 L-6,-6" fill="#2d1810" stroke="#8b6914" strokeWidth="0.3" />
          <path d="M-2,-6 L-6,-14 L-4,-15 L-1,-8" fill="#2d1810" stroke="#8b6914" strokeWidth="0.3" />
          {/* Hind legs */}
          <path d="M-2,8 L-4,14 L-2,14 L0,10" fill="#2d1810" />
          <path d="M2,8 L4,14 L6,14 L4,10" fill="#2d1810" />
          {/* Tail curling up */}
          <path d="M4,6 C8,4 12,0 14,-4 C16,-8 14,-10 12,-8 C10,-6 10,-2 8,0" fill="none" stroke="#2d1810" strokeWidth="1.5" />
          {/* Claws */}
          <path d="M-12,-10 L-14,-11 M-12,-10 L-13,-12 M-12,-10 L-11,-12" stroke="#2d1810" strokeWidth="0.5" />
        </g>

        {/* "SVERIGE" (Sweden) text hint at bottom */}
        <text x="100" y="234" textAnchor="middle" fill="#2d1810" fontFamily="serif" fontSize="7" letterSpacing="3" opacity="0.8">SVERIGE</text>

        {/* Fine cross-hatch engraving pattern */}
        {Array.from({ length: 50 }).map((_, i) => (
          <line key={`d1${i}`} x1={16} y1={16 + i * 4.6} x2={16 + i * 4.6} y2={16}
            stroke="#c49a15" strokeWidth="0.15" opacity="0.3" />
        ))}
        {Array.from({ length: 50 }).map((_, i) => (
          <line key={`d2${i}`} x1={184} y1={16 + i * 4.6} x2={184 - i * 4.6} y2={16}
            stroke="#c49a15" strokeWidth="0.15" opacity="0.3" />
        ))}

        {/* Overall grain overlay */}
        <rect width="200" height="260" filter="url(#ty-grain)" opacity="0.12" />
      </g>
    </svg>
  )
}
