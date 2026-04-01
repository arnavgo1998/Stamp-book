import type { StampData, EraAtmosphere } from '../../data/types'

interface NavigationProps {
  stamps: StampData[]
  currentIndex: number
  onNavigate: (index: number) => void
  activeEra?: EraAtmosphere
}

/** Check if era background is dark */
function isDarkEra(bg?: string): boolean {
  if (!bg) return false
  const hex = bg.replace('#', '')
  if (hex.length < 6) return false
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 100
}

export default function Navigation({ stamps, currentIndex, onNavigate, activeEra }: NavigationProps) {
  const accent = activeEra?.accent ?? '#b44233'
  const dark = isDarkEra(activeEra?.background)
  const metaColor = dark ? '#e0d5c5' : (activeEra?.ink.meta ?? '#b5afa6')

  return (
    <>
      {/* Desktop: vertical timeline rail on the right */}
      <nav className="timeline-rail" aria-label="Stamp timeline">
        <div className="timeline-line" style={{ background: `${metaColor}${dark ? '50' : '30'}`, transition: 'background 0.6s ease' }} />
        {stamps.map((stamp, i) => {
          const isActive = i === currentIndex
          return (
            <button
              key={stamp.id}
              onClick={() => onNavigate(i)}
              className="timeline-marker"
              aria-label={`${stamp.name}, ${stamp.year}`}
              style={{
                top: `${((i + 0.5) / stamps.length) * 100}%`,
              }}
            >
              <span
                className="timeline-dot"
                style={{
                  background: isActive ? accent : `${metaColor}${dark ? '90' : '60'}`,
                  transform: isActive ? 'scale(1.4)' : 'scale(1)',
                  boxShadow: isActive ? `0 0 6px ${accent}40` : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
              <span
                className="timeline-year"
                style={{
                  color: isActive ? accent : metaColor,
                  opacity: isActive ? 1 : (dark ? 0.6 : 0.4),
                  transition: 'all 0.3s ease',
                }}
              >
                {stamp.year}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Mobile: bottom dots (simplified) */}
      <nav className="mobile-nav" aria-label="Stamp navigation">
        <div className="flex gap-2 pointer-events-auto">
          {stamps.map((stamp, i) => (
            <button
              key={stamp.id}
              onClick={() => onNavigate(i)}
              aria-label={`Go to ${stamp.name}`}
              className="w-[5px] h-[5px] rounded-full transition-all duration-300 cursor-pointer"
              style={{
                background: i === currentIndex ? accent : `${metaColor}60`,
                boxShadow: i === currentIndex ? `0 0 4px 1px ${accent}30` : 'none',
                transform: i === currentIndex ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
        <span
          className="font-mono pointer-events-none select-none"
          style={{
            fontSize: '8px',
            letterSpacing: '0.12em',
            color: metaColor,
            fontVariantNumeric: 'tabular-nums',
            transition: 'color 0.6s ease',
          }}
        >
          <span style={{ color: activeEra?.ink.title ?? '#6b6560', transition: 'color 0.6s ease' }}>
            {stamps[currentIndex]?.year}
          </span>
          <span style={{ margin: '0 0.5em', opacity: 0.4 }}>—</span>
          {String(currentIndex + 1).padStart(2, '0')} / {String(stamps.length).padStart(2, '0')}
        </span>
      </nav>
    </>
  )
}
