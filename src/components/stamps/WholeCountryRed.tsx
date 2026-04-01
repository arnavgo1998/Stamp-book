export default function WholeCountryRed() {
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
        <filter id="wcr-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
          <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
        </filter>
        {/* Golden radial gradient for sunburst from Beijing */}
        <radialGradient id="wcr-sunburst" cx="0.48" cy="0.3" r="0.6" fx="0.48" fy="0.3">
          <stop offset="0%" stopColor="#f5c518" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#f5c518" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
        </radialGradient>
        <clipPath id="wcr-map-clip">
          <path d={`
            M 55 38 C 58 35, 65 32, 72 30 C 80 28, 88 30, 95 28
            C 100 26, 108 24, 115 26 C 120 28, 126 30, 132 28
            C 138 26, 144 28, 148 32 C 152 34, 155 38, 158 36
            C 162 34, 166 38, 164 42 C 162 46, 158 50, 160 54
            C 162 58, 160 62, 156 64 C 152 66, 148 70, 150 74
            C 152 78, 148 82, 144 84 C 140 86, 136 90, 138 94
            C 140 98, 136 100, 132 102 C 128 104, 126 108, 128 112
            C 130 116, 126 118, 122 118 C 118 118, 114 120, 112 124
            C 110 128, 106 130, 102 128 C 98 126, 94 128, 90 132
            C 86 136, 82 134, 78 130 C 74 126, 70 128, 66 132
            C 62 136, 58 134, 56 130 C 54 126, 50 124, 46 126
            C 42 128, 40 124, 42 120 C 44 116, 42 112, 38 110
            C 34 108, 36 104, 40 100 C 44 96, 42 92, 38 88
            C 34 84, 36 80, 40 78 C 44 76, 42 72, 40 68
            C 38 64, 40 60, 44 58 C 48 56, 46 52, 44 48
            C 42 44, 44 40, 48 38 C 52 36, 54 38, 55 38 Z
          `} />
        </clipPath>
      </defs>

      {/* Bold red background */}
      <rect x="0" y="0" width="200" height="260" fill="#c0392b" />

      <g filter="url(#wcr-grain)">
        {/* Outer gold border */}
        <rect x="6" y="8" width="188" height="244" rx="1" fill="none" stroke="#f5c518" strokeWidth="2" />
        <rect x="10" y="12" width="180" height="236" rx="1" fill="none" stroke="#f5c518" strokeWidth="0.8" />

        {/* Top text: China People's Post */}
        <text x="100" y="24" textAnchor="middle" fontFamily="'SimSun', 'STSong', serif"
          fontSize="7.5" fill="#f5c518" letterSpacing="1">
          中国人民邮政
        </text>

        {/* Map of China - solid red with golden sunburst */}
        <g transform="translate(0, 4)">
          {/* Sunburst rays from Beijing area */}
          <g clipPath="url(#wcr-map-clip)">
            {/* Golden sunburst background */}
            <rect x="30" y="22" width="145" height="120" fill="url(#wcr-sunburst)" />

            {/* Radiating golden rays */}
            {Array.from({ length: 24 }, (_, i) => {
              const angle = (i * 15) * Math.PI / 180
              const cx = 96
              const cy = 52
              const len = 120
              return (
                <line key={`ray${i}`}
                  x1={cx} y1={cy}
                  x2={cx + Math.cos(angle) * len} y2={cy + Math.sin(angle) * len}
                  stroke="#f5c518" strokeWidth={i % 2 === 0 ? 1.5 : 0.8} opacity={0.5} />
              )
            })}
          </g>

          {/* Map outline - China shape */}
          <path d={`
            M 55 38 C 58 35, 65 32, 72 30 C 80 28, 88 30, 95 28
            C 100 26, 108 24, 115 26 C 120 28, 126 30, 132 28
            C 138 26, 144 28, 148 32 C 152 34, 155 38, 158 36
            C 162 34, 166 38, 164 42 C 162 46, 158 50, 160 54
            C 162 58, 160 62, 156 64 C 152 66, 148 70, 150 74
            C 152 78, 148 82, 144 84 C 140 86, 136 90, 138 94
            C 140 98, 136 100, 132 102 C 128 104, 126 108, 128 112
            C 130 116, 126 118, 122 118 C 118 118, 114 120, 112 124
            C 110 128, 106 130, 102 128 C 98 126, 94 128, 90 132
            C 86 136, 82 134, 78 130 C 74 126, 70 128, 66 132
            C 62 136, 58 134, 56 130 C 54 126, 50 124, 46 126
            C 42 128, 40 124, 42 120 C 44 116, 42 112, 38 110
            C 34 108, 36 104, 40 100 C 44 96, 42 92, 38 88
            C 34 84, 36 80, 40 78 C 44 76, 42 72, 40 68
            C 38 64, 40 60, 44 58 C 48 56, 46 52, 44 48
            C 42 44, 44 40, 48 38 C 52 36, 54 38, 55 38 Z
          `} fill="#c0392b" stroke="#922b21" strokeWidth="1.5" />

          {/* Beijing marker - gold star */}
          <circle cx="96" cy="52" r="3" fill="#f5c518" />

          {/* Five gold stars (like Chinese flag) - near Beijing */}
          <g transform="translate(80, 42)">
            <polygon points="0,-5 1.2,-1.5 5,-1.5 2,0.8 3.1,4.5 0,2 -3.1,4.5 -2,0.8 -5,-1.5 -1.2,-1.5"
              fill="#f5c518" transform="translate(16,10) scale(0.7)" />
            <polygon points="0,-5 1.2,-1.5 5,-1.5 2,0.8 3.1,4.5 0,2 -3.1,4.5 -2,0.8 -5,-1.5 -1.2,-1.5"
              fill="#f5c518" transform="translate(24,5) scale(0.35)" />
            <polygon points="0,-5 1.2,-1.5 5,-1.5 2,0.8 3.1,4.5 0,2 -3.1,4.5 -2,0.8 -5,-1.5 -1.2,-1.5"
              fill="#f5c518" transform="translate(26,10) scale(0.35)" />
            <polygon points="0,-5 1.2,-1.5 5,-1.5 2,0.8 3.1,4.5 0,2 -3.1,4.5 -2,0.8 -5,-1.5 -1.2,-1.5"
              fill="#f5c518" transform="translate(26,16) scale(0.35)" />
            <polygon points="0,-5 1.2,-1.5 5,-1.5 2,0.8 3.1,4.5 0,2 -3.1,4.5 -2,0.8 -5,-1.5 -1.2,-1.5"
              fill="#f5c518" transform="translate(24,21) scale(0.35)" />
          </g>

          {/* Taiwan - in WHITE (the error that caused the recall) */}
          <path d="M 144 104 C 146 100, 148 96, 148 92 C 148 88, 146 86, 144 88 C 142 90, 140 94, 140 98 C 140 102, 142 106, 144 104 Z"
            fill="#f5f5f0" stroke="#922b21" strokeWidth="0.5" />
        </g>

        {/* Central text banner: "The Whole Country is Red" */}
        <rect x="20" y="140" width="160" height="18" fill="#c0392b" />
        <text x="100" y="153" textAnchor="middle" fontFamily="'SimSun', 'STSong', 'Microsoft YaHei', sans-serif"
          fontSize="11" fontWeight="bold" fill="#f5c518" letterSpacing="2">
          全国山河一片红
        </text>

        {/* Worker/peasant/soldier silhouettes with raised arms */}
        <g transform="translate(0, 158)">
          {/* Row of figures - silhouettes holding Little Red Books */}

          {/* Figure 1 - Worker with cap */}
          <g transform="translate(32, 0)">
            <circle cx="0" cy="10" r="5" fill="#922b21" />
            <rect x="-1" y="6" width="6" height="3" rx="1" fill="#922b21" />
            <rect x="-4" y="15" width="8" height="20" rx="1" fill="#922b21" />
            <line x1="4" y1="18" x2="10" y2="6" stroke="#922b21" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="8" y="2" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>

          {/* Figure 2 - Peasant woman */}
          <g transform="translate(52, 2)">
            <circle cx="0" cy="10" r="4.5" fill="#922b21" />
            <rect x="-4" y="14" width="8" height="22" rx="1" fill="#922b21" />
            <line x1="-4" y1="18" x2="-10" y2="4" stroke="#922b21" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="-14" y="0" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>

          {/* Figure 3 - Soldier (tallest, center) */}
          <g transform="translate(72, -2)">
            <circle cx="0" cy="10" r="5.5" fill="#922b21" />
            <polygon points="-5,8 5,8 6,5 -6,5" fill="#922b21" />
            <polygon points="-2,5 2,5 0,1" fill="#922b21" />
            <rect x="-5" y="15" width="10" height="24" rx="1" fill="#922b21" />
            <line x1="5" y1="20" x2="12" y2="4" stroke="#922b21" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="10" y="0" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>

          {/* Figure 4 - Worker */}
          <g transform="translate(95, 2)">
            <circle cx="0" cy="10" r="4.5" fill="#922b21" />
            <rect x="-4" y="14" width="8" height="20" rx="1" fill="#922b21" />
            <line x1="4" y1="18" x2="10" y2="2" stroke="#922b21" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="8" y="-2" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>

          {/* Figure 5 - Peasant */}
          <g transform="translate(115, 3)">
            <circle cx="0" cy="10" r="4.5" fill="#922b21" />
            <rect x="-4" y="14" width="8" height="20" rx="1" fill="#922b21" />
            <line x1="-4" y1="18" x2="-10" y2="3" stroke="#922b21" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="-14" y="-1" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>

          {/* Figure 6 - Worker */}
          <g transform="translate(135, 1)">
            <circle cx="0" cy="10" r="5" fill="#922b21" />
            <rect x="-1" y="6" width="6" height="3" rx="1" fill="#922b21" />
            <rect x="-4" y="15" width="8" height="21" rx="1" fill="#922b21" />
            <line x1="4" y1="18" x2="12" y2="5" stroke="#922b21" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="10" y="1" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>

          {/* Figure 7 - Peasant */}
          <g transform="translate(158, 3)">
            <circle cx="0" cy="10" r="4" fill="#922b21" />
            <rect x="-3.5" y="14" width="7" height="19" rx="1" fill="#922b21" />
            <line x1="-3" y1="18" x2="-8" y2="5" stroke="#922b21" strokeWidth="2" strokeLinecap="round" />
            <rect x="-12" y="1" width="5" height="6" rx="0.5" fill="#c0392b" stroke="#f5c518" strokeWidth="0.5" />
          </g>
        </g>

        {/* Bottom denomination area */}
        <rect x="20" y="232" width="160" height="14" fill="#c0392b" />
        <text x="60" y="243" textAnchor="middle" fontFamily="'SimSun', 'STSong', serif"
          fontSize="9" fill="#f5c518" letterSpacing="1">
          8分
        </text>
        <text x="145" y="243" textAnchor="middle" fontFamily="'Arial', sans-serif"
          fontSize="7" fill="#f5f5f0" letterSpacing="0.5">
          1968
        </text>
      </g>

      {/* Grain overlay */}
      <rect x="0" y="0" width="200" height="260" filter="url(#wcr-grain)" opacity="0.05" fill="#4a1a1a" />

      {/* Perforated edges */}
      {perfs}
    </svg>
  )
}
