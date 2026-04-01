export default function RedMercury() {
  // Perforated edge cutouts
  const perfs: React.ReactElement[] = []
  const r = 3.5
  const spacing = 11
  for (let x = spacing; x < 200; x += spacing) {
    perfs.push(<circle key={`t${x}`} cx={x} cy={0} r={r} fill="#f5f0e0" />)
    perfs.push(<circle key={`b${x}`} cx={x} cy={260} r={r} fill="#f5f0e0" />)
  }
  for (let y = spacing; y < 260; y += spacing) {
    perfs.push(<circle key={`l${y}`} cx={0} cy={y} r={r} fill="#f5f0e0" />)
    perfs.push(<circle key={`r${y}`} cx={200} cy={y} r={r} fill="#f5f0e0" />)
  }

  return (
    <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <filter id="rm-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        {/* Hatching pattern - closely spaced parallel lines */}
        <pattern id="rm-hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="#922b21" strokeWidth="0.5" opacity="0.6" />
        </pattern>
        <pattern id="rm-hatch2" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="#922b21" strokeWidth="0.4" opacity="0.5" />
        </pattern>
        <pattern id="rm-crosshatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="#922b21" strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="0" x2="3" y2="0" stroke="#922b21" strokeWidth="0.5" opacity="0.5" />
        </pattern>
        {/* Oval clip for central medallion */}
        <clipPath id="rm-oval">
          <ellipse cx="100" cy="130" rx="72" ry="95" />
        </clipPath>
      </defs>

      {/* Background - warm paper */}
      <rect x="0" y="0" width="200" height="260" fill="#f5e6d0" />
      <rect x="0" y="0" width="200" height="260" fill="#ede0c8" opacity="0.4" />

      <g filter="url(#rm-grain)">
        {/* Outer border */}
        <rect x="10" y="12" width="180" height="236" rx="2" fill="none" stroke="#c0392b" strokeWidth="2.5" />
        <rect x="14" y="16" width="172" height="228" rx="1.5" fill="none" stroke="#c0392b" strokeWidth="1" />

        {/* Oval frame around Mercury head */}
        <ellipse cx="100" cy="130" rx="74" ry="97" fill="none" stroke="#c0392b" strokeWidth="2.5" />
        <ellipse cx="100" cy="130" rx="70" ry="93" fill="none" stroke="#c0392b" strokeWidth="1" />

        {/* Background hatching inside oval */}
        <ellipse cx="100" cy="130" rx="68" ry="91" fill="url(#rm-hatch)" clipPath="url(#rm-oval)" />

        {/* Mercury/Hermes head - left-facing classical profile */}
        <g clipPath="url(#rm-oval)">
          {/* Head/face silhouette - left-facing profile */}
          <path d={`
            M 120 185
            C 118 180, 115 175, 112 170
            C 109 165, 105 162, 103 158
            L 102 154
            C 101 150, 101 146, 102 142
            L 98 140
            C 94 138, 90 135, 88 130
            L 86 126
            C 85 122, 86 118, 88 115
            C 89 112, 90 110, 92 108
            L 90 105
            C 88 102, 86 98, 86 95
            C 86 90, 88 86, 92 83
            L 96 80
            C 100 78, 104 77, 108 77
            C 112 77, 116 78, 118 80
            C 122 82, 124 85, 125 88
            L 126 92
            C 126 96, 125 100, 123 103
            C 122 106, 120 108, 118 110
            L 119 114
            C 120 118, 120 122, 118 126
            L 117 130
            C 116 134, 115 138, 116 142
            C 117 146, 118 150, 120 155
            C 122 160, 124 165, 125 170
            C 126 176, 125 180, 122 184
            Z
          `} fill="#c0392b" opacity="0.85" />

          {/* Face detail - forehead, nose, lips, chin */}
          <path d={`
            M 92 83 C 94 80, 98 78, 104 78 C 110 78, 115 80, 118 83
            L 120 88 C 120 92, 118 95, 116 98
          `} fill="none" stroke="#922b21" strokeWidth="1.2" />

          {/* Nose bridge and tip */}
          <path d="M 116 98 C 114 102, 110 106, 106 108 L 88 115"
            fill="none" stroke="#922b21" strokeWidth="1" />

          {/* Nostril */}
          <path d="M 88 115 C 86 116, 86 118, 88 120 L 92 121"
            fill="none" stroke="#922b21" strokeWidth="0.8" />

          {/* Upper lip / mouth */}
          <path d="M 92 121 C 94 124, 92 126, 90 128 C 88 130, 90 133, 94 134"
            fill="none" stroke="#922b21" strokeWidth="0.8" />

          {/* Chin */}
          <path d="M 94 134 C 98 138, 102 142, 104 148 C 106 154, 108 160, 112 168"
            fill="none" stroke="#922b21" strokeWidth="1" />

          {/* Neck */}
          <path d="M 112 168 C 114 172, 118 178, 120 185"
            fill="none" stroke="#922b21" strokeWidth="1.2" />

          {/* Eye */}
          <ellipse cx="104" cy="98" rx="4" ry="2.5" fill="#922b21" opacity="0.9" />
          <ellipse cx="103" cy="98" rx="1.5" ry="1.5" fill="#f5e6d0" opacity="0.4" />

          {/* Eyebrow */}
          <path d="M 98 94 C 102 92, 108 92, 112 94" fill="none" stroke="#922b21" strokeWidth="0.8" />

          {/* Ear */}
          <ellipse cx="122" cy="108" rx="4" ry="7" fill="#c0392b" opacity="0.7"
            stroke="#922b21" strokeWidth="0.6" />

          {/* Hair lines - flowing back */}
          <path d="M 118 83 C 124 80, 130 78, 135 80" fill="none" stroke="#922b21" strokeWidth="0.7" />
          <path d="M 120 86 C 126 84, 132 82, 138 84" fill="none" stroke="#922b21" strokeWidth="0.6" />
          <path d="M 122 90 C 128 88, 134 87, 140 89" fill="none" stroke="#922b21" strokeWidth="0.6" />
          <path d="M 124 94 C 130 93, 136 92, 140 95" fill="none" stroke="#922b21" strokeWidth="0.5" />

          {/* Winged helmet (petasos) */}
          {/* Helmet base */}
          <path d={`
            M 88 83 C 90 74, 96 68, 106 66
            C 116 64, 124 66, 130 70
            C 134 73, 136 77, 135 82
            L 118 83 Z
          `} fill="#c0392b" stroke="#922b21" strokeWidth="1" />

          {/* Helmet brim */}
          <path d="M 82 84 C 84 80, 90 78, 96 78 L 130 78 C 138 78, 142 82, 140 86"
            fill="none" stroke="#922b21" strokeWidth="1.2" />

          {/* Left wing - sprouting from helmet side */}
          <path d={`
            M 130 72 C 136 64, 144 56, 155 48
            C 160 44, 158 50, 154 54
            C 150 58, 146 62, 140 66
          `} fill="#c0392b" opacity="0.8" stroke="#922b21" strokeWidth="0.8" />

          {/* Wing feather details */}
          <path d="M 132 70 C 138 62, 146 54, 152 50" fill="none" stroke="#922b21" strokeWidth="0.5" />
          <path d="M 134 68 C 140 60, 148 52, 156 46" fill="none" stroke="#922b21" strokeWidth="0.5" />
          <path d="M 130 74 C 136 66, 142 60, 148 56" fill="none" stroke="#922b21" strokeWidth="0.4" />

          {/* Second wing layer */}
          <path d={`
            M 128 70 C 132 60, 138 50, 148 42
            C 144 48, 140 54, 136 60
          `} fill="none" stroke="#922b21" strokeWidth="0.6" />

          {/* Contour hatching on face - following facial contours */}
          <g opacity="0.4">
            <path d="M 96 100 C 98 104, 94 108, 92 112" fill="none" stroke="#922b21" strokeWidth="0.4" />
            <path d="M 98 100 C 100 104, 96 108, 94 112" fill="none" stroke="#922b21" strokeWidth="0.4" />
            <path d="M 100 100 C 102 104, 98 108, 96 112" fill="none" stroke="#922b21" strokeWidth="0.4" />
            <path d="M 102 102 C 104 106, 100 110, 98 114" fill="none" stroke="#922b21" strokeWidth="0.4" />
            <path d="M 104 104 C 106 108, 102 112, 100 116" fill="none" stroke="#922b21" strokeWidth="0.4" />
          </g>

          {/* Cross-hatching on darker neck/shadow area */}
          <g opacity="0.35">
            <line x1="110" y1="140" x2="116" y2="160" stroke="#922b21" strokeWidth="0.4" />
            <line x1="112" y1="140" x2="118" y2="160" stroke="#922b21" strokeWidth="0.4" />
            <line x1="114" y1="140" x2="120" y2="160" stroke="#922b21" strokeWidth="0.4" />
            <line x1="116" y1="142" x2="122" y2="162" stroke="#922b21" strokeWidth="0.4" />
            <line x1="118" y1="155" x2="108" y2="145" stroke="#922b21" strokeWidth="0.3" />
            <line x1="120" y1="158" x2="110" y2="148" stroke="#922b21" strokeWidth="0.3" />
          </g>
        </g>

        {/* ZEITUNGS POST-STEMPEL text curved at top */}
        <text x="100" y="28" textAnchor="middle" fontFamily="'Georgia', serif"
          fontSize="7" fill="#c0392b" letterSpacing="2" opacity="0.8">
          ZEITUNGS-ST&Auml;MPEL
        </text>

        {/* Corner ornaments */}
        <g opacity="0.6" fill="#c0392b">
          <path d="M 16 18 L 26 18 L 16 28 Z" />
          <path d="M 184 18 L 174 18 L 184 28 Z" />
          <path d="M 16 242 L 26 242 L 16 232 Z" />
          <path d="M 184 242 L 174 242 L 184 232 Z" />
        </g>
      </g>

      {/* Grain overlay */}
      <rect x="0" y="0" width="200" height="260" filter="url(#rm-grain)" opacity="0.06" fill="#8B4513" />

      {/* Perforated edges */}
      {perfs}
    </svg>
  )
}
