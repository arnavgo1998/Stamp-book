export default function InvertedJenny() {
  return (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        {/* Aged print grain filter */}
        <filter id="ij-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="14" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
        <filter id="ij-soft">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>
        {/* Perforation clip path */}
        <clipPath id="ij-perf">
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

      <g clipPath="url(#ij-perf)">
        {/* White base */}
        <rect width="200" height="260" fill="#f5f5f0" />

        {/* Blue frame - outer */}
        <rect x="8" y="8" width="184" height="244" rx="2" fill="#1a3a6e" />
        {/* Inner frame cutout for white vignette area */}
        <rect x="18" y="50" width="164" height="155" rx="1" fill="#f5f5f0" />

        {/* Red decorative line accents on frame */}
        <rect x="11" y="11" width="178" height="238" rx="1.5" fill="none" stroke="#c0392b" strokeWidth="1.5" />
        <rect x="15" y="15" width="170" height="230" rx="1" fill="none" stroke="#c0392b" strokeWidth="0.5" />

        {/* Top frame area - "U.S. POSTAGE" */}
        <text x="100" y="33" textAnchor="middle" fill="#f5f5f0" fontFamily="serif" fontSize="10" fontWeight="bold" letterSpacing="3">U.S. POSTAGE</text>

        {/* "24" in upper corners */}
        <text x="33" y="44" textAnchor="middle" fill="#f5f5f0" fontFamily="serif" fontSize="14" fontWeight="bold">24</text>
        <text x="167" y="44" textAnchor="middle" fill="#f5f5f0" fontFamily="serif" fontSize="14" fontWeight="bold">24</text>

        {/* Bottom frame area */}
        <text x="100" y="228" textAnchor="middle" fill="#f5f5f0" fontFamily="serif" fontSize="9" fontWeight="bold" letterSpacing="1">24 CENTS 24</text>

        {/* "24" in bottom corners for emphasis */}
        <text x="33" y="245" textAnchor="middle" fill="#f5f5f0" fontFamily="serif" fontSize="12" fontWeight="bold">24</text>
        <text x="167" y="245" textAnchor="middle" fill="#f5f5f0" fontFamily="serif" fontSize="12" fontWeight="bold">24</text>

        {/* Decorative scrollwork on blue frame sides */}
        {[22, 178].map((x, i) => (
          <g key={i}>
            {Array.from({ length: 8 }).map((_, j) => (
              <circle key={j} cx={x} cy={60 + j * 18} r="1.5" fill="none" stroke="#2a5090" strokeWidth="0.5" />
            ))}
          </g>
        ))}

        {/* Blue ornamental border details */}
        <path d="M20,48 Q100,52 180,48" fill="none" stroke="#2a5090" strokeWidth="0.5" />
        <path d="M20,207 Q100,203 180,207" fill="none" stroke="#2a5090" strokeWidth="0.5" />

        {/* Central white vignette with faint radial lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="100" y1="128" x2={100 + Math.cos(i * Math.PI / 6) * 80}
            y2={128 + Math.sin(i * Math.PI / 6) * 75} stroke="#e8e8e0" strokeWidth="0.3" />
        ))}

        {/* THE INVERTED JENNY BIPLANE - rendered UPSIDE DOWN */}
        <g transform="translate(100, 128) rotate(180)">
          {/* Fuselage */}
          <path d="M-35,0 C-30,-2 -10,-3 15,-2 C25,-1.5 35,0 38,0 C35,0 25,1.5 15,2 C-10,3 -30,2 -35,0 Z" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.5" />

          {/* Upper wing */}
          <rect x="-28" y="-18" width="50" height="4" rx="1" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.4" />
          {/* Upper wing details - ribs */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={-25 + i * 6.5} y1="-18" x2={-25 + i * 6.5} y2="-14" stroke="#0f2850" strokeWidth="0.3" />
          ))}

          {/* Lower wing */}
          <rect x="-28" y="6" width="50" height="4" rx="1" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.4" />
          {/* Lower wing ribs */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={-25 + i * 6.5} y1="6" x2={-25 + i * 6.5} y2="10" stroke="#0f2850" strokeWidth="0.3" />
          ))}

          {/* Wing struts between upper and lower wings */}
          {[-22, -12, -2, 8, 18].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="-14" x2={x} y2="6" stroke="#1a3a6e" strokeWidth="0.8" />
              <line x1={x + 1.5} y1="-14" x2={x - 1.5} y2="6" stroke="#1a3a6e" strokeWidth="0.4" />
            </g>
          ))}

          {/* Tail section */}
          <path d="M30,-1 L40,-10 L42,-10 L38,0 L42,10 L40,10 L30,1 Z" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.4" />
          {/* Horizontal stabilizer */}
          <rect x="32" y="-2" width="12" height="3" rx="0.5" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.3" />
          {/* Vertical stabilizer / rudder */}
          <path d="M38,-1 L42,-8 L43,-8 L40,0" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.3" />

          {/* Propeller at front */}
          <ellipse cx="-35" cy="0" rx="1.5" ry="10" fill="#1a3a6e" stroke="#0f2850" strokeWidth="0.4" />
          <circle cx="-35" cy="0" r="2" fill="#0f2850" />

          {/* Landing gear (wheels at bottom, now at top since inverted) */}
          <line x1="-15" y1="10" x2="-18" y2="20" stroke="#1a3a6e" strokeWidth="0.8" />
          <line x1="-5" y1="10" x2="-2" y2="20" stroke="#1a3a6e" strokeWidth="0.8" />
          <circle cx="-18" cy="21" r="3" fill="none" stroke="#1a3a6e" strokeWidth="1" />
          <circle cx="-2" cy="21" r="3" fill="none" stroke="#1a3a6e" strokeWidth="1" />
          <line x1="-18" y1="20" x2="-2" y2="20" stroke="#1a3a6e" strokeWidth="0.5" />

          {/* Engine detail */}
          <rect x="-32" y="-3" width="5" height="6" rx="1" fill="#0f2850" stroke="#1a3a6e" strokeWidth="0.3" />

          {/* Cockpit */}
          <path d="M-8,-3 C-6,-5 0,-5 2,-3 L2,3 C0,5 -6,5 -8,3 Z" fill="#2a5090" stroke="#0f2850" strokeWidth="0.3" opacity="0.6" />

          {/* Wire details */}
          <line x1="-25" y1="-14" x2="20" y2="-14" stroke="#0f2850" strokeWidth="0.2" opacity="0.5" />
          <line x1="-25" y1="10" x2="20" y2="10" stroke="#0f2850" strokeWidth="0.2" opacity="0.5" />
        </g>

        {/* Frame inner border accent */}
        <rect x="18" y="50" width="164" height="155" rx="1" fill="none" stroke="#1a3a6e" strokeWidth="1.5" />

        {/* Fine crosshatch pattern in blue frame areas */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1="10" y1={12 + i * 2} x2="190" y2={12 + i * 2} stroke="#153060" strokeWidth="0.2" opacity="0.3" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`hb${i}`} x1="10" y1={210 + i * 2} x2="190" y2={210 + i * 2} stroke="#153060" strokeWidth="0.2" opacity="0.3" />
        ))}

        {/* Grain overlay for print quality */}
        <rect width="200" height="260" filter="url(#ij-grain)" opacity="0.1" />
      </g>
    </svg>
  )
}
