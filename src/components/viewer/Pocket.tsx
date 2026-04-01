interface PocketProps {
  variant: 1 | 2 | 3 | 4
  className?: string
}

const ghost = '#b5afa6'
const trace = '#d4cfc8'

export default function Pocket({ variant, className }: PocketProps) {
  return (
    <svg
      viewBox="0 0 220 290"
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      {variant === 1 && <SleeveVariant />}
      {variant === 2 && <GlassineVariant />}
      {variant === 3 && <CornerMountVariant />}
      {variant === 4 && <WaxPaperVariant />}
    </svg>
  )
}

/* Variant 1: Rectangular sleeve with top flap */
function SleeveVariant() {
  return (
    <g>
      <rect x="8" y="8" width="204" height="274" rx="2" fill="none" stroke={ghost} strokeWidth="0.75" />
      {/* Fold line */}
      <line x1="8" y1="60" x2="212" y2="60" stroke={trace} strokeWidth="0.5" strokeDasharray="4 6" />
      {/* Top flap */}
      <path d="M8,8 L110,45 L212,8" fill="none" stroke={ghost} strokeWidth="0.75" />
      {/* Bottom corner mounts */}
      <path d="M8,260 L32,282 L8,282 Z" fill="none" stroke={trace} strokeWidth="0.5" />
      <path d="M212,260 L188,282 L212,282 Z" fill="none" stroke={trace} strokeWidth="0.5" />
    </g>
  )
}

/* Variant 2: Glassine envelope — translucent, stroke-only */
function GlassineVariant() {
  return (
    <g>
      <rect x="6" y="6" width="208" height="278" rx="3" fill="none" stroke={ghost} strokeWidth="0.5" />
      <rect x="10" y="10" width="200" height="270" rx="2" fill="none" stroke={trace} strokeWidth="0.3" />
      {/* Crease lines */}
      <line x1="6" y1="145" x2="214" y2="145" stroke={trace} strokeWidth="0.3" strokeDasharray="2 5" />
      <line x1="110" y1="6" x2="110" y2="284" stroke={trace} strokeWidth="0.2" strokeDasharray="3 8" />
      {/* Flap fold */}
      <path d="M6,6 Q110,30 214,6" fill="none" stroke={ghost} strokeWidth="0.4" />
    </g>
  )
}

/* Variant 3: Photo corner mounts — triangles at corners */
function CornerMountVariant() {
  return (
    <g>
      {/* Top-left corner */}
      <path d="M14,14 L38,14 L14,38 Z" fill="none" stroke={ghost} strokeWidth="0.75" />
      {/* Top-right corner */}
      <path d="M206,14 L182,14 L206,38 Z" fill="none" stroke={ghost} strokeWidth="0.75" />
      {/* Bottom-left corner */}
      <path d="M14,276 L38,276 L14,252 Z" fill="none" stroke={ghost} strokeWidth="0.75" />
      {/* Bottom-right corner */}
      <path d="M206,276 L182,276 L206,252 Z" fill="none" stroke={ghost} strokeWidth="0.75" />
      {/* Faint guide rectangle */}
      <rect x="14" y="14" width="192" height="262" fill="none" stroke={trace} strokeWidth="0.3" strokeDasharray="2 6" />
    </g>
  )
}

/* Variant 4: Wax-paper sleeve — multiple fold lines */
function WaxPaperVariant() {
  return (
    <g>
      <rect x="5" y="5" width="210" height="280" rx="1" fill="none" stroke={ghost} strokeWidth="0.6" />
      {/* Multiple fold creases */}
      <line x1="5" y1="50" x2="215" y2="48" stroke={trace} strokeWidth="0.4" strokeDasharray="5 4" />
      <line x1="5" y1="100" x2="215" y2="102" stroke={trace} strokeWidth="0.3" strokeDasharray="3 6" />
      <line x1="5" y1="190" x2="215" y2="188" stroke={trace} strokeWidth="0.4" strokeDasharray="5 4" />
      <line x1="5" y1="240" x2="215" y2="242" stroke={trace} strokeWidth="0.3" strokeDasharray="3 6" />
      {/* Corner fold */}
      <path d="M185,5 L215,5 L215,35" fill="none" stroke={trace} strokeWidth="0.4" />
      <line x1="185" y1="5" x2="215" y2="35" stroke={trace} strokeWidth="0.3" />
    </g>
  )
}
