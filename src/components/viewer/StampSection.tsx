import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { StampData, EraAtmosphere } from '../../data/types'
import StampHero from './StampHero'
import StampStory from './StampStory'
import LetterEnvelope from './LetterEnvelope'
import EraArtwork from './EraArtwork'

interface StampSectionProps {
  stamp: StampData
  index: number
  total: number
  era?: EraAtmosphere
}

export default function StampSection({ stamp, index, total, era }: StampSectionProps) {
  return (
    <div className="stamp-section-wrapper">
      {/* Act 1: The Encounter — full viewport hero */}
      <div className="stamp-hero-area">
        <StampHero stamp={stamp} index={index} era={era} />
      </div>

      {/* Act 2: The Story — two-column with letter sidebar + era artwork */}
      <div className="stamp-story-layout">
        {/* Era artwork fading in from the right */}
        <EraArtwork stampId={stamp.id} />

        {/* Left column: stamp on era-appropriate letter (sticky) */}
        <div className="story-stamp-col">
          <div className="story-stamp-sticky">
            <LetterEnvelope stamp={stamp} />
          </div>
        </div>

        {/* Right column: story scrolls */}
        <div className="story-text-col">
          <StampStory stamp={stamp} index={index} total={total} era={era} />
        </div>
      </div>
    </div>
  )
}

/** Reveal-on-scroll wrapper for story paragraphs */
export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
