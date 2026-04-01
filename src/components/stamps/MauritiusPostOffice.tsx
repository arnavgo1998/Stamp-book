export default function MauritiusPostOffice() {
  return (
    <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mauritius Post Office stamp, 1847">
      <defs>
        {/* Heavy grain/wear filter for aged, hand-engraved look */}
        <filter id="mauritiusGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="5" seed="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="grained" />
        </filter>
        {/* Additional wear/age spots */}
        <filter id="wearFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="7" result="spots" />
          <feColorMatrix type="luminanceToAlpha" in="spots" result="spotAlpha" />
          <feComponentTransfer in="spotAlpha" result="threshold">
            <feFuncA type="discrete" tableValues="0 0 0 0.08 0.12 0.06 0 0" />
          </feComponentTransfer>
          <feFlood floodColor="#3d2000" floodOpacity="1" result="darkColor" />
          <feComposite in="darkColor" in2="threshold" operator="in" result="ageSpots" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="ageSpots" />
          </feMerge>
        </filter>
        {/* Rough/crude hand-engraved effect */}
        <filter id="crudeEngrave">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="2" seed="12" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Perforated edges - top */}
      {Array.from({ length: 21 }, (_, i) => (
        <circle key={`pt${i}`} cx={11 + i * 11} cy={0} r={3.5} fill="white" />
      ))}
      {/* Perforated edges - bottom */}
      {Array.from({ length: 21 }, (_, i) => (
        <circle key={`pb${i}`} cx={11 + i * 11} cy={300} r={3.5} fill="white" />
      ))}
      {/* Perforated edges - left */}
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={`pl${i}`} cx={0} cy={11 + i * 11} r={3.5} fill="white" />
      ))}
      {/* Perforated edges - right */}
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={`pr${i}`} cx={240} cy={11 + i * 11} r={3.5} fill="white" />
      ))}

      {/* Main stamp body with grain */}
      <g filter="url(#mauritiusGrain)">
        {/* Orange-vermillion base */}
        <rect x="5" y="5" width="230" height="290" fill="#d35400" />

        <g filter="url(#wearFilter)">
          {/* Simple rectangular frame - less ornate, handmade feel */}
          <rect x="10" y="10" width="220" height="280" fill="none" stroke="#af601a" strokeWidth="3" />
          <rect x="16" y="16" width="208" height="268" fill="none" stroke="#af601a" strokeWidth="1.5" />
          {/* Slightly uneven inner frame for handmade look */}
          <path d="M20,20 L219,20.5 L219.5,283 L20.5,283.5 Z" fill="none" stroke="#af601a" strokeWidth="0.8" />

          {/* "MAURITIUS" header */}
          <g filter="url(#crudeEngrave)">
            <text x="120" y="48" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="bold" fill="#af601a" letterSpacing="4">MAURITIUS</text>
          </g>

          {/* Thin divider under MAURITIUS */}
          <line x1="30" y1="56" x2="210" y2="56.5" stroke="#af601a" strokeWidth="0.8" />

          {/* "POST OFFICE" on left side - THE ERROR */}
          <g transform="translate(28, 170) rotate(-90)">
            <text textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#af601a" letterSpacing="2" filter="url(#crudeEngrave)">POST OFFICE</text>
          </g>

          {/* Right side text (denomination side) */}
          <g transform="translate(214, 170) rotate(90)">
            <text textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#af601a" letterSpacing="2" filter="url(#crudeEngrave)">ONE PENNY</text>
          </g>

          {/* Central oval frame for portrait - slightly irregular */}
          <ellipse cx="120" cy="160" rx="62" ry="78" fill="none" stroke="#af601a" strokeWidth="2" />
          <ellipse cx="120" cy="160" rx="58" ry="74" fill="#e67e22" stroke="#af601a" strokeWidth="0.8" />

          {/* Fine ruled background lines inside oval (engraving effect) */}
          <clipPath id="ovalClip">
            <ellipse cx="120" cy="160" rx="56" ry="72" />
          </clipPath>
          <g clipPath="url(#ovalClip)" opacity="0.12">
            {Array.from({ length: 36 }, (_, i) => (
              <line key={`rl${i}`} x1="60" y1={90 + i * 4} x2="180" y2={90 + i * 4} stroke="#af601a" strokeWidth="0.5" />
            ))}
          </g>

          {/* Crown above Victoria's head */}
          <g transform="translate(120, 100)" filter="url(#crudeEngrave)">
            {/* Crown base band */}
            <rect x="-12" y="0" width="24" height="5" fill="#af601a" rx="1" />
            {/* Crown arches */}
            <path d="M-12,0 Q-10,-8 -6,-4 Q-2,-12 0,-6 Q2,-12 6,-4 Q10,-8 12,0" fill="none" stroke="#af601a" strokeWidth="1.5" />
            {/* Crown orb at top */}
            <circle cx="0" cy="-10" r="2.5" fill="#af601a" />
            <line x1="0" y1="-12.5" x2="0" y2="-15" stroke="#af601a" strokeWidth="1" />
            <line x1="-2" y1="-14" x2="2" y2="-14" stroke="#af601a" strokeWidth="0.8" />
            {/* Crown jewels (dots) */}
            <circle cx="-6" cy="-3" r="1" fill="#e67e22" stroke="#af601a" strokeWidth="0.4" />
            <circle cx="0" cy="-5" r="1" fill="#e67e22" stroke="#af601a" strokeWidth="0.4" />
            <circle cx="6" cy="-3" r="1" fill="#e67e22" stroke="#af601a" strokeWidth="0.4" />
          </g>

          {/* Queen Victoria left-facing profile - crude, hand-engraved style */}
          <g transform="translate(120, 160)" filter="url(#crudeEngrave)">
            {/* Back of head / hair bun */}
            <path d="M8,-32 Q14,-30 16,-24 Q18,-18 16,-12 Q14,-8 10,-6" fill="#af601a" opacity="0.8" />
            {/* Hair bun detail */}
            <path d="M12,-28 Q16,-24 15,-18 Q14,-14 12,-10" fill="none" stroke="#d35400" strokeWidth="0.6" opacity="0.6" />
            <path d="M10,-26 Q14,-22 13,-16" fill="none" stroke="#d35400" strokeWidth="0.4" opacity="0.5" />

            {/* Head outline - facing left, crude */}
            <path d="M4,-36 Q-2,-38 -6,-34 Q-10,-30 -12,-24 Q-14,-18 -16,-14 Q-18,-10 -16,-6 Q-14,-2 -10,2 Q-6,4 -4,4 Q0,4 4,0 Q8,-4 10,-6 Q14,-8 16,-12 Q18,-18 16,-24 Q14,-30 8,-34 Z"
              fill="#e67e22" stroke="#af601a" strokeWidth="1.2" />

            {/* Forehead */}
            <path d="M-6,-34 Q-10,-30 -12,-24" fill="none" stroke="#af601a" strokeWidth="0.5" />

            {/* Eye (crude) */}
            <ellipse cx="-10" cy="-20" rx="2" ry="1.2" fill="#af601a" />
            {/* Eyebrow */}
            <path d="M-13,-22 Q-10,-24 -7,-22" fill="none" stroke="#af601a" strokeWidth="0.8" />

            {/* Nose - prominent, slightly crude */}
            <path d="M-14,-18 Q-18,-14 -16,-10 Q-14,-8 -12,-8" fill="none" stroke="#af601a" strokeWidth="1" />

            {/* Mouth */}
            <path d="M-14,-4 Q-12,-6 -10,-4" fill="none" stroke="#af601a" strokeWidth="0.7" />

            {/* Chin */}
            <path d="M-10,-2 Q-8,2 -4,4" fill="none" stroke="#af601a" strokeWidth="0.6" />

            {/* Ear hint */}
            <path d="M2,-18 Q4,-16 3,-12" fill="none" stroke="#af601a" strokeWidth="0.6" />

            {/* Neck */}
            <path d="M-4,4 Q-6,10 -8,18 Q-4,22 4,22 Q8,18 10,10 Q10,4 8,0" fill="#e67e22" stroke="#af601a" strokeWidth="0.8" />

            {/* Neckline / collar */}
            <path d="M-8,18 Q-14,22 -20,28 Q-10,26 0,24 Q10,26 20,28 Q14,22 8,18" fill="none" stroke="#af601a" strokeWidth="0.8" />

            {/* Shoulder/bust line (crude) */}
            <path d="M-20,28 Q-30,34 -36,42 Q-20,38 0,36 Q20,38 36,42 Q30,34 20,28" fill="#e67e22" stroke="#af601a" strokeWidth="0.8" />

            {/* Hair detail lines */}
            <path d="M-4,-36 Q0,-34 4,-34 Q8,-32 10,-28" fill="none" stroke="#af601a" strokeWidth="0.5" />
            <path d="M-2,-36 Q2,-34 6,-32" fill="none" stroke="#af601a" strokeWidth="0.4" />

            {/* Additional crude face shading lines (hand-engraved look) */}
            <path d="M-8,-16 Q-6,-14 -6,-10" fill="none" stroke="#af601a" strokeWidth="0.3" opacity="0.5" />
            <path d="M-12,-12 Q-10,-10 -10,-6" fill="none" stroke="#af601a" strokeWidth="0.3" opacity="0.5" />
            <path d="M0,-10 Q2,-6 2,-2" fill="none" stroke="#af601a" strokeWidth="0.3" opacity="0.5" />
          </g>

          {/* "ONE PENNY" at bottom */}
          <g filter="url(#crudeEngrave)">
            <text x="120" y="262" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="bold" fill="#af601a" letterSpacing="3">ONE PENNY</text>
          </g>

          {/* Thin divider above ONE PENNY */}
          <line x1="30" y1="246" x2="210" y2="246.5" stroke="#af601a" strokeWidth="0.8" />

          {/* Small corner decorations - simple, handmade */}
          <rect x="22" y="22" width="6" height="6" fill="none" stroke="#af601a" strokeWidth="0.6" />
          <rect x="212" y="22" width="6" height="6" fill="none" stroke="#af601a" strokeWidth="0.6" />
          <rect x="22" y="274" width="6" height="6" fill="none" stroke="#af601a" strokeWidth="0.6" />
          <rect x="212" y="274" width="6" height="6" fill="none" stroke="#af601a" strokeWidth="0.6" />

          {/* Age wear patches - subtle darker spots */}
          <circle cx="45" cy="80" r="12" fill="#af601a" opacity="0.06" />
          <circle cx="190" cy="240" r="15" fill="#af601a" opacity="0.05" />
          <circle cx="160" cy="70" r="8" fill="#af601a" opacity="0.04" />
          <ellipse cx="80" cy="260" rx="18" ry="10" fill="#af601a" opacity="0.05" />
        </g>
      </g>
    </svg>
  );
}
