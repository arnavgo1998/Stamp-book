export default function PennyBlack() {
  return (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        {/* Grain filter for engraving print quality */}
        <filter id="pb-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
        <filter id="pb-engrave">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" seed="5" />
          <feColorMatrix type="saturate" values="0" />
          <feComposite in="SourceGraphic" operator="in" />
          <feBlend in="SourceGraphic" mode="soft-light" />
        </filter>
        {/* Engine-turned background pattern */}
        <pattern id="pb-lathe" width="40" height="40" patternUnits="userSpaceOnUse">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="20" cy="20" r={3 + i * 2.5} fill="none" stroke="#3d3d3d" strokeWidth="0.3" opacity="0.5" />
          ))}
        </pattern>
        <pattern id="pb-lathe2" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="translate(20 20)">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="20" cy="20" r={3 + i * 2.5} fill="none" stroke="#3d3d3d" strokeWidth="0.25" opacity="0.4" />
          ))}
        </pattern>
        {/* Clip path for perforation */}
        <clipPath id="pb-perf">
          <path d={(() => {
            const w = 200, h = 260, r = 3.5, sp = 11;
            let d = `M 0 0 H ${w} V ${h} H 0 Z `;
            // Top edge
            for (let x = sp; x < w; x += sp) d += `M ${x + r} 0 A ${r} ${r} 0 1 0 ${x - r} 0 A ${r} ${r} 0 1 0 ${x + r} 0 `;
            // Bottom edge
            for (let x = sp; x < w; x += sp) d += `M ${x + r} ${h} A ${r} ${r} 0 1 0 ${x - r} ${h} A ${r} ${r} 0 1 0 ${x + r} ${h} `;
            // Left edge
            for (let y = sp; y < h; y += sp) d += `M 0 ${y + r} A ${r} ${r} 0 1 0 0 ${y - r} A ${r} ${r} 0 1 0 0 ${y + r} `;
            // Right edge
            for (let y = sp; y < h; y += sp) d += `M ${w} ${y + r} A ${r} ${r} 0 1 0 ${w} ${y - r} A ${r} ${r} 0 1 0 ${w} ${y + r} `;
            return d;
          })()} fillRule="evenodd" />
        </clipPath>
      </defs>

      <g clipPath="url(#pb-perf)">
        {/* Background */}
        <rect width="200" height="260" fill="#2d2d2d" />

        {/* Engine-turned lathe background */}
        <rect width="200" height="260" fill="url(#pb-lathe)" />
        <rect width="200" height="260" fill="url(#pb-lathe2)" />

        {/* Radial engine turning from center */}
        {Array.from({ length: 30 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="130" rx={10 + i * 4} ry={10 + i * 3.2} fill="none"
            stroke="#3d3d3d" strokeWidth="0.3" opacity={0.3 + (i % 3) * 0.1} />
        ))}

        {/* Outer ornate border */}
        <rect x="8" y="8" width="184" height="244" rx="2" fill="none" stroke="#4a4a4a" strokeWidth="2" />
        <rect x="12" y="12" width="176" height="236" rx="1.5" fill="none" stroke="#3d3d3d" strokeWidth="1" />
        <rect x="15" y="15" width="170" height="230" rx="1" fill="none" stroke="#4a4a4a" strokeWidth="0.5" />

        {/* Decorative corner flourishes */}
        {[
          [18, 18, 1, 1], [182, 18, -1, 1], [18, 242, 1, -1], [182, 242, -1, -1]
        ].map(([cx, cy, sx, sy], i) => (
          <g key={i} transform={`translate(${cx},${cy}) scale(${sx},${sy})`}>
            <path d="M0,0 C8,0 12,4 12,12 M0,3 C6,3 9,6 9,12 M0,6 C4,6 6,8 6,12" fill="none" stroke="#5a5a5a" strokeWidth="0.7" />
          </g>
        ))}

        {/* Maltese crosses in upper corners */}
        {[35, 165].map((cx, i) => (
          <g key={i} transform={`translate(${cx}, 40)`}>
            <path d="M0,-5 L2,-2 5,0 2,2 0,5 -2,2 -5,0 -2,-2 Z" fill="#5a5a5a" />
            <path d="M0,-4 L1.5,-1.5 4,0 1.5,1.5 0,4 -1.5,1.5 -4,0 -1.5,-1.5 Z" fill="#4a4a4a" />
            <circle cx="0" cy="0" r="1.2" fill="#3d3d3d" />
          </g>
        ))}

        {/* "POSTAGE" text at top */}
        <text x="100" y="38" textAnchor="middle" fill="#6a6a6a" fontFamily="serif" fontSize="11" fontWeight="bold" letterSpacing="4">POSTAGE</text>

        {/* Central vignette frame */}
        <ellipse cx="100" cy="138" rx="52" ry="64" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="1" />
        <ellipse cx="100" cy="138" rx="49" ry="61" fill="none" stroke="#3a3a3a" strokeWidth="0.5" />

        {/* Queen Victoria profile silhouette - detailed cameo */}
        <g transform="translate(100, 135)" filter="url(#pb-engrave)">
          {/* Neck and shoulder base */}
          <path d="M-8,40 C-12,35 -15,28 -14,22 C-13,18 -10,15 -8,12" fill="#3d3d3d" stroke="none" />
          <path d="M8,40 C14,35 18,25 16,18 C14,12 10,10 8,8" fill="#3d3d3d" stroke="none" />

          {/* Full profile silhouette facing left */}
          <path d={`
            M -8,40 C -15,32 -16,22 -14,16
            C -13,12 -11,9 -10,6
            C -9,3 -10,0 -12,-4
            C -14,-8 -15,-12 -14,-16
            C -13,-18 -11,-20 -10,-22
            C -9,-24 -8,-26 -8,-28
            C -8,-32 -6,-36 -2,-38
            C 0,-39 2,-40 4,-40
            C 8,-40 10,-38 10,-34
            C 10,-32 8,-28 6,-26
            C 4,-24 2,-22 2,-20
            C 2,-18 4,-16 6,-14
            C 8,-12 10,-10 10,-6
            C 10,-2 8,2 6,4
            C 4,6 2,8 2,10
            C 2,14 6,16 8,18
            C 10,20 14,24 16,28
            C 18,32 16,36 12,40
            Z
          `} fill="#3d3d3d" />

          {/* Refined profile details - forehead, nose, chin */}
          <path d={`
            M -10,6 C -9,2 -10,-2 -12,-4
            C -14,-6 -16,-8 -16,-12
            C -16,-16 -14,-18 -12,-20
            C -10,-22 -10,-26 -8,-30
            C -6,-34 -3,-36 0,-37
            C 3,-38 6,-37 8,-34
            C 9,-32 8,-28 6,-25
          `} fill="none" stroke="#4d4d4d" strokeWidth="0.5" />

          {/* Hair bun at top-back */}
          <ellipse cx="4" cy="-34" rx="8" ry="6" fill="#3d3d3d" />
          <ellipse cx="6" cy="-32" rx="6" ry="5" fill="#353535" />

          {/* Small crown/tiara */}
          <path d="M-4,-38 L-3,-42 L-1,-39 L1,-43 L3,-39 L5,-42 L6,-38" fill="#4d4d4d" stroke="#5a5a5a" strokeWidth="0.4" />

          {/* Ear suggestion */}
          <path d="M2,-10 C4,-12 4,-8 2,-8" fill="#4a4a4a" stroke="none" />

          {/* Nose profile */}
          <path d="M-14,-4 C-16,-2 -18,2 -16,4 C-15,5 -13,5 -12,4" fill="#3d3d3d" stroke="#4a4a4a" strokeWidth="0.3" />

          {/* Chin */}
          <path d="M-12,8 C-13,10 -12,14 -10,16" fill="none" stroke="#4a4a4a" strokeWidth="0.3" />

          {/* Necklace/collar detail */}
          <path d="M-8,18 C-4,20 0,21 4,20 C8,19 12,18 14,16" fill="none" stroke="#5a5a5a" strokeWidth="0.5" />
          {Array.from({ length: 5 }).map((_, i) => (
            <circle key={i} cx={-4 + i * 4} cy={19 + Math.sin(i) * 0.5} r="0.6" fill="#5a5a5a" />
          ))}
        </g>

        {/* "ONE PENNY" text at bottom */}
        <text x="100" y="228" textAnchor="middle" fill="#6a6a6a" fontFamily="serif" fontSize="10" fontWeight="bold" letterSpacing="3">ONE PENNY</text>

        {/* Letter squares in bottom corners */}
        {[
          [30, 235, 'A'], [170, 235, 'B']
        ].map(([x, y, letter], i) => (
          <g key={i}>
            <rect x={Number(x) - 7} y={Number(y) - 8} width="14" height="14" fill="none" stroke="#5a5a5a" strokeWidth="0.7" rx="1" />
            <text x={Number(x)} y={Number(y) + 3} textAnchor="middle" fill="#6a6a6a" fontFamily="serif" fontSize="9" fontWeight="bold">{letter as string}</text>
          </g>
        ))}

        {/* Letter squares in top corners (mirroring bottom) */}
        {[
          [30, 55, 'A'], [170, 55, 'B']
        ].map(([x, y, letter], i) => (
          <g key={i}>
            <rect x={Number(x) - 7} y={Number(y) - 8} width="14" height="14" fill="none" stroke="#5a5a5a" strokeWidth="0.7" rx="1" />
            <text x={Number(x)} y={Number(y) + 3} textAnchor="middle" fill="#6a6a6a" fontFamily="serif" fontSize="9">{letter as string}</text>
          </g>
        ))}

        {/* Fine horizontal engraving lines over entire stamp */}
        {Array.from({ length: 65 }).map((_, i) => (
          <line key={i} x1="16" y1={15 + i * 3.5} x2="184" y2={15 + i * 3.5}
            stroke="#2a2a2a" strokeWidth="0.2" opacity="0.4" />
        ))}

        {/* Overall grain overlay */}
        <rect width="200" height="260" filter="url(#pb-grain)" opacity="0.15" />
      </g>
    </svg>
  )
}
