import { useRef, useCallback, useState } from 'react'
import type { StampData, EraAtmosphere } from '../../data/types'
import PerforationClip from './PerforationClip'

/** Clip-path + aspect-ratio overrides for non-rectangular stamps */
const NON_RECT_CONFIGS: Record<string, { clipPath: string; aspectRatio: string }> = {
  'cape-triangle': {
    clipPath: 'polygon(50% 2%, 1% 98%, 99% 98%)',
    aspectRatio: '900 / 482',
  },
  'british-guiana': {
    clipPath: 'polygon(16% 0%, 84% 0%, 100% 18%, 100% 82%, 84% 100%, 16% 100%, 0% 82%, 0% 18%)',
    aspectRatio: '900 / 778',
  },
}

interface StampHeroProps {
  stamp: StampData
  index: number
  era?: EraAtmosphere
}

export default function StampHero({ stamp, index, era }: StampHeroProps) {
  const isInvertedJenny = stamp.id === 'inverted-jenny'
  const stampRef = useRef<HTMLDivElement>(null)
  const [lightPos, setLightPos] = useState({ x: 30, y: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!stampRef.current) return
    const rect = stampRef.current.getBoundingClientRect()
    setLightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setLightPos({ x: 30, y: 20 })
  }, [])

  const isNonRect = stamp.shape !== 'rectangle'
  const nonRectConfig = isNonRect ? NON_RECT_CONFIGS[stamp.id] : undefined

  // Era-aware colors
  const titleColor = era?.ink.title ?? '#2f2a26'
  const metaColor = era?.ink.meta ?? '#6b6560'
  const ghostColor = era?.ink.ghost ?? '#d4cfc8'
  const ghostOpacity = era?.ink.ghostOpacity ?? 0.07
  const accentColor = era?.accent ?? stamp.colors.primary

  return (
    <div className="hero-layout">
      {/* Ghosted year */}
      <span
        className="ghosted-year"
        style={{ color: ghostColor, opacity: ghostOpacity, transition: 'color 0.6s ease' }}
      >
        {stamp.year}
      </span>

      {/* LEFT: Stamp in its mount */}
      <div className="hero-stamp" style={nonRectConfig ? { aspectRatio: nonRectConfig.aspectRatio } : undefined}>
        {!isNonRect && <PerforationClip id={stamp.id} />}

        <div className={`stamp-mount ${isNonRect ? 'stamp-mount-transparent' : ''}`} style={isNonRect ? { boxShadow: 'none', padding: 0 } : undefined}>
          <div
            ref={stampRef}
            className={`${isNonRect ? '' : 'stamp-inner '}stamp-physical`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="stamp-perforated" style={{
              clipPath: nonRectConfig ? nonRectConfig.clipPath : `url(#perf-clip-${stamp.id})`,
              filter: nonRectConfig ? 'drop-shadow(3px 5px 12px rgba(20,16,12,0.25)) drop-shadow(6px 12px 28px rgba(20,16,12,0.12))' : undefined,
            }}>
              <div
                className="stamp-art-container"
                style={{ transform: isInvertedJenny ? 'rotate(180deg)' : undefined }}
              >
                {stamp.svgImage ? (
                  <img
                    src={stamp.svgImage}
                    alt={`${stamp.name} — ${stamp.country}, ${stamp.year}`}
                    className="stamp-art-image"
                    draggable={false}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: stamp.colors.background }} />
                )}
              </div>

              {/* === Stamp texture overlays — give the flat SVG physical presence === */}

              {/* Aged patina — warm yellowing from age */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(145deg, rgba(180,160,120,0.12) 0%, transparent 35%, rgba(160,140,100,0.08) 70%, rgba(140,120,80,0.1) 100%)',
                mixBlendMode: 'multiply',
              }} />

              {/* Paper grain — visible tooth, heavier than before */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12, mixBlendMode: 'overlay' }}>
                <filter id={`sg-${index}`}>
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" seed={index * 7 + 3} stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter={`url(#sg-${index})`} />
              </svg>

              {/* Mouse-reactive specular highlight — the lamp catches the paper */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `radial-gradient(ellipse 50% 40% at ${lightPos.x}% ${lightPos.y}%, rgba(255,252,245,0.25) 0%, transparent 65%)`,
                mixBlendMode: 'overlay',
                transition: 'background 0.15s ease',
              }} />

              {/* Shimmer — slow desk lamp flicker */}
              <div className="absolute inset-0 pointer-events-none stamp-shimmer" style={{
                background: 'linear-gradient(105deg, transparent 25%, rgba(255,252,245,0.1) 42%, rgba(255,250,240,0.18) 50%, rgba(255,252,245,0.1) 58%, transparent 75%)',
                backgroundSize: '300% 100%',
                mixBlendMode: 'overlay',
              }} />

              {/* Foxing spots — visible age marks */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
                <circle cx="12%" cy="18%" r="2.5" fill="#8b7355" />
                <circle cx="85%" cy="78%" r="1.8" fill="#8b7355" />
                <circle cx="72%" cy="12%" r="1.2" fill="#8b7355" />
                <circle cx="22%" cy="88%" r="2" fill="#8b7355" />
                <circle cx="45%" cy="5%" r="1" fill="#a08060" />
                <circle cx="90%" cy="45%" r="1.5" fill="#907050" />
              </svg>

              {/* Edge wear + paper thickness — inset shadow gives depth */}
              <div className="absolute inset-0 pointer-events-none" style={{
                boxShadow: `
                  inset 0 0 15px rgba(40,30,20,0.15),
                  inset 0 0 4px rgba(40,30,20,0.1),
                  inset 2px 2px 6px rgba(40,30,20,0.08)
                `,
              }} />

              {/* Vignette — edges darken like an aged print */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 70% 65% at 50% 50%, transparent 50%, rgba(30,25,18,0.2) 100%)',
              }} />
            </div>
          </div>
        </div>

        {/* Annotations */}
        {stamp.annotation && (
          <div className="absolute font-mono italic select-none"
            style={{ bottom: '-2%', right: '-10%', fontSize: '9px', letterSpacing: '0.08em', color: metaColor, opacity: 0.7, transform: 'rotate(-3deg)', transition: 'color 0.6s ease' }}
          >{stamp.annotation}</div>
        )}
      </div>

      {/* RIGHT: Display type + metadata */}
      <div className="hero-meta">
        {/* Country + year */}
        <div
          className="font-mono uppercase"
          style={{ fontSize: '12px', letterSpacing: '0.14em', color: metaColor, transition: 'color 0.6s ease' }}
        >
          {stamp.country}
          <span style={{ color: accentColor, opacity: 0.5, margin: '0 0.6em', transition: 'color 0.6s ease' }}>/</span>
          {stamp.year}
        </div>

        {/* Title */}
        <h1
          className="font-display hero-title"
          style={{
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            fontWeight: 400,
            color: titleColor,
            transition: 'color 0.6s ease',
            marginTop: '0.5rem',
          }}
        >
          {stamp.name}
        </h1>

        {/* Original price + current value */}
        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1.5rem', transition: 'color 0.6s ease' }}>
          <div>
            <div className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: metaColor, opacity: 0.5 }}>Original</div>
            <div className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.05em', color: titleColor, opacity: 0.7, marginTop: '2px' }}>{stamp.denomination}</div>
          </div>
          <div>
            <div className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: metaColor, opacity: 0.5 }}>Value Today</div>
            <div className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.05em', color: titleColor, opacity: 0.7, marginTop: '2px' }}>{stamp.estimatedValue}</div>
          </div>
        </div>

        {/* Significance — the hook */}
        <p
          className="font-body italic"
          style={{
            fontSize: '16px',
            lineHeight: 1.55,
            color: titleColor,
            opacity: 0.6,
            marginTop: '1.5rem',
            maxWidth: '36ch',
            transition: 'color 0.6s ease',
          }}
        >
          {stamp.significance}
        </p>

        {/* Scroll hint */}
        <div
          className="font-mono lowercase"
          style={{ fontSize: '12px', color: metaColor, opacity: 0.4, marginTop: '2rem', transition: 'color 0.6s ease' }}
        >
          <span style={{ display: 'inline-block', animation: 'gentle-bounce 2s ease-in-out infinite' }}>↓</span>
          <span style={{ marginLeft: '0.5em' }}>scroll to read</span>
        </div>
      </div>
    </div>
  )
}
