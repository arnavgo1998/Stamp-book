import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { StampData, EraAtmosphere } from '../../data/types'

interface StoryDrawerProps {
  stamp: StampData
  open: boolean
  onClose: () => void
  era?: EraAtmosphere
}

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 8 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
})

export default function StoryDrawer({ stamp, open, onClose, era }: StoryDrawerProps) {
  const firstChar = stamp.story[0]
  const rest = stamp.story.slice(1)

  // Era-aware colors for the drawer
  const bgColor = era ? blendTowardLight(era.background) : '#faf8f4'
  const titleColor = isLightBackground(bgColor) ? '#1a1816' : '#1a1816'
  const bodyColor = isLightBackground(bgColor) ? '#3d3835' : '#3d3835'
  const borderColor = era?.accent ?? '#b44233'

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="story-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            className="story-drawer"
            style={{
              background: bgColor,
              borderTopColor: borderColor,
              transition: 'background 0.6s ease, border-color 0.6s ease',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="story-drawer-handle">
              <button onClick={onClose} className="story-drawer-pill" aria-label="Close story" />
            </div>

            <div className="story-drawer-content">
              {/* Title */}
              <motion.h2
                className="font-display"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.02em', color: titleColor }}
                {...stagger(0)}
              >
                {stamp.name}
              </motion.h2>

              {/* Metadata */}
              <motion.div
                className="font-mono lowercase"
                style={{ fontSize: '9px', letterSpacing: '0.12em', color: '#6b6560', marginTop: '0.5rem' }}
                {...stagger(0.08)}
              >
                {stamp.year} | {stamp.country.toLowerCase()} | {stamp.denomination.toLowerCase()}
              </motion.div>

              {/* Divider */}
              <motion.div
                style={{ width: '100%', height: '1px', margin: '1rem 0', background: '#ebe7de' }}
                {...stagger(0.12)}
              />

              {/* Significance */}
              <motion.p
                className="font-body italic"
                style={{ fontSize: '14px', lineHeight: '1.65', color: bodyColor, letterSpacing: '0.005em', fontWeight: 300, marginBottom: '1rem' }}
                {...stagger(0.18)}
              >
                {stamp.significance}
              </motion.p>

              {/* Story body */}
              <motion.p
                className="font-body"
                style={{ fontSize: '15px', lineHeight: '1.733', color: bodyColor, textAlign: 'justify', hyphens: 'auto' }}
                {...stagger(0.25)}
              >
                <span
                  className="font-display"
                  style={{ float: 'left', fontSize: '2.8em', lineHeight: 0.85, paddingTop: '0.05em', marginRight: '0.375rem', color: titleColor, fontWeight: 400 }}
                >
                  {firstChar}
                </span>
                {rest}
              </motion.p>

              {/* Bottom section */}
              <motion.div
                style={{ marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid #ebe7de' }}
                {...stagger(0.35)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="font-mono lowercase" style={{ fontSize: '9px', letterSpacing: '0.08em', color: '#b5afa6' }}>est. value</span>
                  <span className="font-mono lowercase" style={{ fontSize: '9px', letterSpacing: '0.08em', color: '#6b6560' }}>{stamp.estimatedValue}</span>
                </div>
                {stamp.funFact && (
                  <p className="font-body italic" style={{ fontSize: '12px', lineHeight: '1.6', color: '#b5afa6', marginTop: '0.75rem' }}>
                    * {stamp.funFact}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

/** Blend a dark bg color toward light for the drawer surface */
function blendTowardLight(bg: string): string {
  // For dark backgrounds, use a warm light surface
  if (isLightBackground(bg)) return '#faf8f4'
  return '#f8f5f0'
}

function isLightBackground(color: string): boolean {
  const hex = color.replace('#', '')
  if (hex.length < 6) return true
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}
