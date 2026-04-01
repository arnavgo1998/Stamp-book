export default function BritishGuiana() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        {/* Heavy grain/noise filter for crude handmade appearance */}
        <filter id="bg-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" seed="42" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
        <filter id="bg-worn">
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
        <filter id="bg-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" seed="99" />
          <feColorMatrix type="saturate" values="0" />
          <feComposite in="SourceGraphic" operator="in" />
          <feBlend in="SourceGraphic" mode="overlay" />
        </filter>
        {/* Octagonal clip path */}
        <clipPath id="bg-octagon">
          <polygon points="58,4 142,4 196,58 196,142 142,196 58,196 4,142 4,58" />
        </clipPath>
        {/* Perforated octagonal edge */}
        <clipPath id="bg-perf">
          <path d={(() => {
            const pts = [
              [58, 4], [142, 4], [196, 58], [196, 142],
              [142, 196], [58, 196], [4, 142], [4, 58]
            ];
            let d = `M ${pts[0][0]} ${pts[0][1]} `;
            for (let i = 1; i < pts.length; i++) d += `L ${pts[i][0]} ${pts[i][1]} `;
            d += 'Z ';
            const r = 3;
            const sp = 11;
            for (let i = 0; i < pts.length; i++) {
              const [x1, y1] = pts[i];
              const [x2, y2] = pts[(i + 1) % pts.length];
              const dx = x2 - x1, dy = y2 - y1;
              const len = Math.sqrt(dx * dx + dy * dy);
              const steps = Math.floor(len / sp);
              for (let j = 1; j < steps; j++) {
                const t = j / steps;
                const cx = x1 + dx * t, cy = y1 + dy * t;
                d += `M ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} `;
              }
            }
            return d;
          })()} fillRule="evenodd" />
        </clipPath>
      </defs>

      <g clipPath="url(#bg-perf)">
        {/* Magenta background */}
        <polygon points="58,4 142,4 196,58 196,142 142,196 58,196 4,142 4,58" fill="#9a2b5e" />

        {/* Slightly darker inner region */}
        <polygon points="65,12 135,12 188,65 188,135 135,188 65,188 12,135 12,65" fill="#8b2252" />

        {/* Crude border lines (hand-set type feel) */}
        <polygon points="62,10 138,10 192,62 192,138 138,190 62,190 8,138 8,62" fill="none" stroke="#1a1a1a" strokeWidth="2" filter="url(#bg-worn)" />
        <polygon points="70,18 130,18 182,70 182,130 130,182 70,182 18,130 18,70" fill="none" stroke="#1a1a1a" strokeWidth="1.5" filter="url(#bg-worn)" />
        <polygon points="76,24 124,24 176,76 176,124 124,176 76,176 24,124 24,76" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />

        {/* "BRITISH" text - top, crude typeset */}
        <text x="100" y="44" textAnchor="middle" fill="#1a1a1a" fontFamily="serif" fontSize="9" fontWeight="bold" letterSpacing="2" filter="url(#bg-worn)">BRITISH</text>

        {/* "GUIANA" text - below */}
        <text x="100" y="56" textAnchor="middle" fill="#1a1a1a" fontFamily="serif" fontSize="9" fontWeight="bold" letterSpacing="2" filter="url(#bg-worn)">GUIANA</text>

        {/* Sailing ship silhouette in center */}
        <g transform="translate(100, 108)" filter="url(#bg-worn)">
          {/* Hull */}
          <path d="M-28,8 C-24,14 -10,18 0,18 C10,18 24,14 28,8 L24,8 C20,12 10,14 0,14 C-10,14 -20,12 -24,8 Z" fill="#1a1a1a" />
          <path d="M-30,6 L-26,8 L26,8 L30,6 C26,10 14,16 0,16 C-14,16 -26,10 -30,6 Z" fill="#2a1520" />

          {/* Waterline */}
          <path d="M-32,6 Q-20,4 0,4 Q20,4 32,6" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />

          {/* Mast 1 (leftmost) */}
          <line x1="-18" y1="6" x2="-18" y2="-28" stroke="#1a1a1a" strokeWidth="1.2" />
          {/* Sails on mast 1 */}
          <path d="M-18,-26 L-10,-24 L-10,-14 L-18,-12 Z" fill="#1a1a1a" opacity="0.9" />
          <path d="M-18,-12 L-8,-10 L-8,-2 L-18,0 Z" fill="#1a1a1a" opacity="0.85" />

          {/* Mast 2 */}
          <line x1="-6" y1="5" x2="-6" y2="-34" stroke="#1a1a1a" strokeWidth="1.2" />
          {/* Sails on mast 2 (tallest) */}
          <path d="M-6,-32 L4,-30 L4,-20 L-6,-18 Z" fill="#1a1a1a" opacity="0.9" />
          <path d="M-6,-18 L6,-16 L6,-6 L-6,-4 Z" fill="#1a1a1a" opacity="0.85" />

          {/* Mast 3 */}
          <line x1="8" y1="5" x2="8" y2="-30" stroke="#1a1a1a" strokeWidth="1.2" />
          {/* Sails on mast 3 */}
          <path d="M8,-28 L18,-26 L18,-16 L8,-14 Z" fill="#1a1a1a" opacity="0.9" />
          <path d="M8,-14 L16,-12 L16,-4 L8,-2 Z" fill="#1a1a1a" opacity="0.85" />

          {/* Mast 4 (rear) */}
          <line x1="20" y1="6" x2="20" y2="-22" stroke="#1a1a1a" strokeWidth="1" />
          {/* Sail on mast 4 */}
          <path d="M20,-20 L28,-18 L28,-8 L20,-6 Z" fill="#1a1a1a" opacity="0.85" />

          {/* Bowsprit */}
          <line x1="-28" y1="6" x2="-38" y2="-8" stroke="#1a1a1a" strokeWidth="0.8" />
          {/* Jib sail */}
          <path d="M-38,-8 L-18,-20 L-18,-8 Z" fill="#1a1a1a" opacity="0.7" />

          {/* Rigging lines */}
          <line x1="-18" y1="-28" x2="-6" y2="-34" stroke="#1a1a1a" strokeWidth="0.3" />
          <line x1="-6" y1="-34" x2="8" y2="-30" stroke="#1a1a1a" strokeWidth="0.3" />
          <line x1="8" y1="-30" x2="20" y2="-22" stroke="#1a1a1a" strokeWidth="0.3" />
          <line x1="-38" y1="-8" x2="-6" y2="-34" stroke="#1a1a1a" strokeWidth="0.3" />

          {/* Flag at top of main mast */}
          <path d="M-6,-34 L-6,-38 L2,-36 Z" fill="#1a1a1a" />
        </g>

        {/* Latin motto curved around the ship */}
        <path id="bg-motto-top" d="M 36,80 Q 100,62 164,80" fill="none" />
        <text fill="#1a1a1a" fontFamily="serif" fontSize="5.5" letterSpacing="0.8" filter="url(#bg-worn)">
          <textPath href="#bg-motto-top" textAnchor="middle" startOffset="50%">DAMUS PETIMUS QUE VICISSIM</textPath>
        </text>

        {/* "ONE CENT" denomination at bottom */}
        <text x="100" y="158" textAnchor="middle" fill="#1a1a1a" fontFamily="serif" fontSize="9" fontWeight="bold" letterSpacing="2" filter="url(#bg-worn)">ONE CENT</text>

        {/* Decorative dots around inner border (crude typeset ornaments) */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const cx = 100 + Math.cos(angle) * 68;
          const cy = 100 + Math.sin(angle) * 68;
          return <circle key={i} cx={cx} cy={cy} r="0.8" fill="#1a1a1a" opacity="0.6" />;
        })}

        {/* Postmaster initials (as on original) */}
        <text x="100" y="172" textAnchor="middle" fill="#1a1a1a" fontFamily="serif" fontSize="5" fontStyle="italic" opacity="0.6">E.D.W.</text>

        {/* Heavy grain overlay for worn, crude newspaper-press look */}
        <polygon points="58,4 142,4 196,58 196,142 142,196 58,196 4,142 4,58" filter="url(#bg-grain)" opacity="0.25" />
        <polygon points="58,4 142,4 196,58 196,142 142,196 58,196 4,142 4,58" filter="url(#bg-rough)" opacity="0.15" />
      </g>
    </svg>
  )
}
