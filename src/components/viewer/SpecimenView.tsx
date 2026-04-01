import { useRef, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import type { StampData, EraAtmosphere } from '../../data/types'
import PerforationClip from './PerforationClip'

interface SpecimenViewProps {
  stamp: StampData
  index: number
  onStampClick: () => void
  storyOpen: boolean
  era?: EraAtmosphere
}

export default function SpecimenView({ stamp, index, onStampClick, storyOpen, era }: SpecimenViewProps) {
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

  // Era-aware colors
  const titleColor = era?.ink.title ?? '#2f2a26'
  const metaColor = era?.ink.meta ?? '#6b6560'
  const ghostColor = era?.ink.ghost ?? '#d4cfc8'
  const ghostOpacity = era?.ink.ghostOpacity ?? 0.07
  const accentColor = era?.accent ?? stamp.colors.primary

  return (
    <div className="specimen-layout">
      {/* Ghosted year */}
      <motion.span
        className="ghosted-year"
        style={{ color: ghostColor, transition: 'color 0.6s ease, opacity 0.6s ease' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: ghostOpacity }}
        transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
      >
        {stamp.year}
      </motion.span>

      {/* LEFT: Stamp in its mount */}
      <motion.div
        className="specimen-stamp"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: storyOpen ? -30 : 0,
          scale: storyOpen ? 0.7 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 0.68, 0.35, 1.0] }}
      >
        {/* SVG clip path definition for perforated edges */}
        <PerforationClip id={stamp.id} />

        {/* The stamp mount — dark backing card like a collector's mount */}
        <div className="stamp-mount">
          {/* The stamp — physical, alive */}
          <motion.div
            ref={stampRef}
            className="stamp-inner cursor-pointer stamp-physical"
            onClick={onStampClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{
              y: -4,
              rotateX: 1.5,
              rotateY: -0.8,
              transition: { duration: 0.35, ease: 'easeOut' },
            }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            animate={{ y: storyOpen ? -16 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 0.68, 0.35, 1.0] }}
          >
            {/* Perforated edge via SVG clip path */}
            <div className="stamp-perforated" style={{ clipPath: `url(#perf-clip-${stamp.id})` }}>
              {/* The stamp art — real vectorized scans from Wikimedia Commons */}
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
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: stamp.colors.background }} />
                )}
              </div>

              {/* Aged patina */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(135deg, rgba(200,180,140,0.06) 0%, transparent 40%, rgba(180,160,120,0.04) 100%)',
                mixBlendMode: 'multiply',
              }} />

              {/* Paper grain */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06, mixBlendMode: 'multiply' }}>
                <filter id={`sg-${index}`}>
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed={index * 7 + 3} stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter={`url(#sg-${index})`} />
              </svg>

              {/* Mouse-reactive specular highlight */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `radial-gradient(ellipse 60% 50% at ${lightPos.x}% ${lightPos.y}%, rgba(255,252,245,0.18) 0%, transparent 70%)`,
                mixBlendMode: 'overlay',
                transition: 'background 0.15s ease',
              }} />

              {/* Shimmer */}
              <div className="absolute inset-0 pointer-events-none stamp-shimmer" style={{
                background: 'linear-gradient(105deg, transparent 30%, rgba(255,252,245,0.08) 45%, rgba(255,250,240,0.14) 50%, rgba(255,252,245,0.08) 55%, transparent 70%)',
                backgroundSize: '300% 100%',
                mixBlendMode: 'overlay',
              }} />

              {/* Foxing spots */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
                <circle cx="15%" cy="20%" r="1.5" fill="#8b7355" />
                <circle cx="82%" cy="75%" r="1" fill="#8b7355" />
                <circle cx="70%" cy="15%" r="0.8" fill="#8b7355" />
                <circle cx="25%" cy="85%" r="1.2" fill="#8b7355" />
              </svg>

              {/* Edge wear */}
              <div className="absolute inset-0 pointer-events-none" style={{
                boxShadow: 'inset 0 0 8px rgba(244,241,235,0.15), inset 0 0 2px rgba(244,241,235,0.1)',
              }} />
            </div>
          </motion.div>
        </div>

        {/* Annotations */}
        {isInvertedJenny && (
          <motion.div className="absolute font-mono italic select-none"
            style={{ bottom: '-2%', right: '-12%', fontSize: '8px', letterSpacing: '0.08em', color: metaColor, opacity: 0.7, transform: 'rotate(-3deg)', transition: 'color 0.6s ease' }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.8, duration: 0.4 }}
          >note: inverted</motion.div>
        )}
        {stamp.annotation && !isInvertedJenny && (
          <motion.div className="absolute font-mono italic select-none"
            style={{ bottom: '-2%', right: '-8%', fontSize: '8px', letterSpacing: '0.08em', color: metaColor, opacity: 0.7, transform: 'rotate(-2deg)', transition: 'color 0.6s ease' }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.8, duration: 0.4 }}
          >{stamp.annotation}</motion.div>
        )}
      </motion.div>

      {/* RIGHT: Display type + metadata */}
      <motion.div
        className="specimen-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: storyOpen ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Country + year — orientating data, now more legible */}
        <motion.div
          className="font-mono uppercase specimen-origin"
          style={{
            fontSize: '10px',
            letterSpacing: '0.14em',
            color: metaColor,
            transition: 'color 0.6s ease',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {stamp.country}
          <span style={{ color: accentColor, opacity: 0.5, margin: '0 0.6em', transition: 'color 0.6s ease' }}>/</span>
          {stamp.year}
        </motion.div>

        {/* Title — enormous, era-tinted */}
        <motion.h1
          className="font-display specimen-title"
          style={{
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            fontWeight: 400,
            color: titleColor,
            transition: 'color 0.6s ease',
            marginTop: '0.4rem',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {stamp.name}
        </motion.h1>

        {/* Denomination + value */}
        <motion.div
          className="font-mono lowercase specimen-subtitle"
          style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: metaColor,
            opacity: 0.7,
            transition: 'color 0.6s ease',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {stamp.denomination.toLowerCase()}
          <span style={{ margin: '0 0.5em', opacity: 0.4 }}>·</span>
          est. {stamp.estimatedValue}
        </motion.div>

        {/* Significance — the one-line hook */}
        <motion.p
          className="font-body italic specimen-significance"
          style={{
            fontSize: '14px',
            lineHeight: 1.55,
            color: titleColor,
            opacity: 0.6,
            marginTop: '1.2rem',
            maxWidth: '42ch',
            transition: 'color 0.6s ease',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {stamp.significance}
        </motion.p>

        {/* Interaction hint — more visible */}
        <motion.button
          className="specimen-story-hint"
          onClick={onStampClick}
          style={{
            marginTop: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4em',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: storyOpen ? 0 : 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <span className="font-display italic" style={{
            fontSize: '13px',
            color: accentColor,
            transition: 'color 0.6s ease',
          }}>
            Read the story
          </span>
          <span className="font-mono" style={{
            fontSize: '10px',
            color: accentColor,
            opacity: 0.6,
            transition: 'color 0.6s ease',
          }}>→</span>
        </motion.button>
      </motion.div>
    </div>
  )
}
