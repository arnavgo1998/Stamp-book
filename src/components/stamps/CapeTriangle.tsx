export default function CapeTriangle() {
  // Equilateral triangle points for clipPath
  const triTop = { x: 115, y: 8 };
  const triLeft = { x: 5, y: 198 };
  const triRight = { x: 225, y: 198 };

  // Generate perforations along each edge
  const perforations = (x1: number, y1: number, x2: number, y2: number, count: number) => {
    const circles = [];
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const cx = x1 + (x2 - x1) * t;
      const cy = y1 + (y2 - y1) * t;
      circles.push(<circle key={`${x1}-${y1}-${i}`} cx={cx} cy={cy} r={3} fill="white" />);
    }
    return circles;
  };

  return (
    <svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cape of Good Hope triangular stamp, 1853 South Africa">
      <defs>
        {/* Aged grain filter for steel-engraved look */}
        <filter id="capeGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="grained" />
          <feComponentTransfer in="grained">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        {/* Steel engraving line filter */}
        <filter id="engravingDetail">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.8" numOctaves="2" result="lines" />
          <feColorMatrix type="saturate" values="0" in="lines" result="grayLines" />
          <feBlend in="SourceGraphic" in2="grayLines" mode="soft-light" result="engraved" />
        </filter>
        {/* Triangle clip path */}
        <clipPath id="triangleClip">
          <polygon points={`${triTop.x},${triTop.y} ${triLeft.x},${triLeft.y} ${triRight.x},${triRight.y}`} />
        </clipPath>
        {/* Inner triangle for frame */}
        <clipPath id="innerTriangle">
          <polygon points="115,22 16,192 214,192" />
        </clipPath>
      </defs>

      {/* Perforated edges along all three sides */}
      {perforations(triTop.x, triTop.y, triLeft.x, triLeft.y, 18)}
      {perforations(triLeft.x, triLeft.y, triRight.x, triRight.y, 20)}
      {perforations(triRight.x, triRight.y, triTop.x, triTop.y, 18)}

      {/* Main triangle with grain */}
      <g clipPath="url(#triangleClip)" filter="url(#capeGrain)">
        {/* Base blue fill */}
        <polygon points={`${triTop.x},${triTop.y} ${triLeft.x},${triLeft.y} ${triRight.x},${triRight.y}`} fill="#3498db" />

        {/* Outer border frame */}
        <polygon points={`${triTop.x},${triTop.y} ${triLeft.x},${triLeft.y} ${triRight.x},${triRight.y}`} fill="none" stroke="#1a5276" strokeWidth="4" />

        {/* Inner frame line */}
        <polygon points="115,18 12,194 218,194" fill="none" stroke="#1a5276" strokeWidth="1.5" />
        <polygon points="115,26 18,190 212,190" fill="none" stroke="#1a5276" strokeWidth="2" />

        {/* Darker inner region */}
        <polygon points="115,30 22,188 208,188" fill="#2980b9" />

        {/* Fine decorative inner border */}
        <polygon points="115,36 28,184 202,184" fill="none" stroke="#1a5276" strokeWidth="0.8" />

        {/* "CAPE OF GOOD HOPE" text along top-left edge */}
        <g transform="translate(0,0)">
          <text x="56" y="118" textAnchor="middle" fontFamily="serif" fontSize="7.5" fontWeight="bold" fill="#f0f0e8" letterSpacing="1.5" transform="rotate(-60, 56, 118)">CAPE OF GOOD</text>
        </g>

        {/* "HOPE" along top-right edge */}
        <g transform="translate(0,0)">
          <text x="175" y="118" textAnchor="middle" fontFamily="serif" fontSize="7.5" fontWeight="bold" fill="#f0f0e8" letterSpacing="1.5" transform="rotate(60, 175, 118)">HOPE</text>
        </g>

        {/* "FOUR PENCE" along the bottom edge */}
        <text x="115" y="183" textAnchor="middle" fontFamily="serif" fontSize="7" fontWeight="bold" fill="#f0f0e8" letterSpacing="2">FOUR PENCE</text>

        {/* Small decorative dots along text lines */}
        <circle cx="72" cy="185" r="1" fill="#f0f0e8" opacity="0.6" />
        <circle cx="158" cy="185" r="1" fill="#f0f0e8" opacity="0.6" />

        {/* Central figure of Hope - classical seated woman with anchor */}
        <g transform="translate(115, 120)" filter="url(#engravingDetail)">
          {/* Ground/rock she sits on */}
          <path d="M-30,38 Q-20,32 -8,36 Q5,34 15,38 Q25,36 35,40 L35,50 L-35,50 L-35,42 Z" fill="#1a5276" opacity="0.7" />
          <path d="M-25,40 Q-15,36 0,38 Q10,36 20,40" fill="none" stroke="#0d3b5e" strokeWidth="0.5" />

          {/* Seated body - classical draped robes */}
          {/* Torso */}
          <path d="M-3,-20 Q-8,-10 -10,0 Q-12,10 -14,20 Q-10,24 0,26 Q8,24 10,20 Q8,10 6,0 Q4,-10 0,-20 Z" fill="#a0c4e0" stroke="#1a5276" strokeWidth="0.6" />

          {/* Draping folds on robe */}
          <path d="M-6,-12 Q-8,-4 -10,4" fill="none" stroke="#1a5276" strokeWidth="0.4" opacity="0.7" />
          <path d="M-4,-8 Q-7,0 -9,8" fill="none" stroke="#1a5276" strokeWidth="0.4" opacity="0.7" />
          <path d="M2,-12 Q4,-4 5,4" fill="none" stroke="#1a5276" strokeWidth="0.4" opacity="0.7" />
          <path d="M4,-8 Q6,0 7,8" fill="none" stroke="#1a5276" strokeWidth="0.4" opacity="0.7" />

          {/* Legs (draped, seated) */}
          <path d="M-14,20 Q-18,28 -16,36 Q-12,38 -8,36 Q-4,30 -2,24" fill="#a0c4e0" stroke="#1a5276" strokeWidth="0.5" />
          <path d="M10,20 Q14,26 18,32 Q20,36 16,38 Q12,36 8,30 Q4,26 2,22" fill="#a0c4e0" stroke="#1a5276" strokeWidth="0.5" />
          {/* Leg fold lines */}
          <path d="M-10,24 Q-12,28 -12,34" fill="none" stroke="#1a5276" strokeWidth="0.3" />
          <path d="M8,24 Q12,28 14,34" fill="none" stroke="#1a5276" strokeWidth="0.3" />

          {/* Head */}
          <circle cx="0" cy="-26" r="6" fill="#a0c4e0" stroke="#1a5276" strokeWidth="0.6" />
          {/* Hair */}
          <path d="M-5,-30 Q-6,-34 -3,-33 Q0,-35 3,-33 Q6,-34 5,-30" fill="#1a5276" opacity="0.5" />
          {/* Face details */}
          <circle cx="-2" cy="-27" r="0.5" fill="#1a5276" />
          <path d="M-1,-24 L1,-24" stroke="#1a5276" strokeWidth="0.3" />
          <path d="M-3,-25.5 Q-1,-25 1,-25.5" fill="none" stroke="#1a5276" strokeWidth="0.3" />

          {/* Left arm reaching toward/near anchor */}
          <path d="M-10,0 Q-16,-4 -20,-2 Q-22,0 -20,4" fill="none" stroke="#a0c4e0" strokeWidth="3" />
          <path d="M-10,0 Q-16,-4 -20,-2 Q-22,0 -20,4" fill="none" stroke="#1a5276" strokeWidth="0.5" />

          {/* Right arm resting */}
          <path d="M6,2 Q12,4 16,10 Q18,14 16,18" fill="none" stroke="#a0c4e0" strokeWidth="2.5" />
          <path d="M6,2 Q12,4 16,10 Q18,14 16,18" fill="none" stroke="#1a5276" strokeWidth="0.5" />

          {/* Anchor (symbol of Hope) */}
          <g transform="translate(-22, 6)">
            {/* Anchor ring at top */}
            <circle cx="0" cy="-8" r="3" fill="none" stroke="#f0f0e8" strokeWidth="1" />
            {/* Anchor shaft */}
            <line x1="0" y1="-5" x2="0" y2="20" stroke="#f0f0e8" strokeWidth="1.2" />
            {/* Cross bar */}
            <line x1="-6" y1="2" x2="6" y2="2" stroke="#f0f0e8" strokeWidth="1" />
            {/* Anchor flukes (curved arms at bottom) */}
            <path d="M0,20 Q-8,18 -10,12" fill="none" stroke="#f0f0e8" strokeWidth="1.2" />
            <path d="M0,20 Q8,18 10,12" fill="none" stroke="#f0f0e8" strokeWidth="1.2" />
            {/* Fluke tips */}
            <path d="M-10,12 L-12,14 L-9,13" fill="#f0f0e8" />
            <path d="M10,12 L12,14 L9,13" fill="#f0f0e8" />
          </g>

          {/* Distant sea horizon behind figure */}
          <line x1="-40" y1="32" x2="40" y2="32" stroke="#1a5276" strokeWidth="0.3" opacity="0.5" />
          <path d="M-38,34 Q-30,32 -22,34 Q-14,32 -6,34 Q2,32 10,34 Q18,32 26,34 Q34,32 40,34" fill="none" stroke="#1a5276" strokeWidth="0.3" opacity="0.4" />

          {/* Fine engraving lines radiating around figure (steel-engraved background) */}
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const r1 = 42;
            const r2 = 60;
            return (
              <line
                key={`eng${i}`}
                x1={Math.cos(angle) * r1}
                y1={Math.sin(angle) * r1 - 4}
                x2={Math.cos(angle) * r2}
                y2={Math.sin(angle) * r2 - 4}
                stroke="#1a5276"
                strokeWidth="0.2"
                opacity="0.3"
              />
            );
          })}
        </g>

        {/* Decorative corner elements near triangle corners */}
        <circle cx="115" cy="25" r="2" fill="#f0f0e8" opacity="0.4" />
        <circle cx="25" cy="188" r="2" fill="#f0f0e8" opacity="0.4" />
        <circle cx="205" cy="188" r="2" fill="#f0f0e8" opacity="0.4" />

        {/* Fine ruling lines across background for engraved feel */}
        <g opacity="0.08">
          {Array.from({ length: 40 }, (_, i) => (
            <line key={`rule${i}`} x1="10" y1={20 + i * 4.5} x2="220" y2={20 + i * 4.5} stroke="#0d3b5e" strokeWidth="0.4" />
          ))}
        </g>
      </g>
    </svg>
  );
}
