import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { StampData } from '../../data/types'

/** Sort stamps chronologically — earliest first */
function sortByYear(stamps: StampData[]): StampData[] {
  return [...stamps].sort((a, b) => a.year - b.year)
}
import { ERA_ATMOSPHERES } from '../../data/eras'
import Surface from './Surface'
import StampSection from './StampSection'
import Navigation from './Navigation'

interface StampViewerProps {
  stamps: StampData[]
}

const THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20)

export default function StampViewer({ stamps: unsortedStamps }: StampViewerProps) {
  const stamps = sortByYear(unsortedStamps)
  const [activeStampId, setActiveStampId] = useState(stamps[0]?.id ?? '')
  const [visibility, setVisibility] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {}
    stamps.forEach((s, i) => { init[s.id] = i === 0 ? 1 : 0 })
    return init
  })
  const [hasEntered, setHasEntered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())
  const isFirstLoad = useRef(true)

  // Entrance ceremony
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      const timer = setTimeout(() => setHasEntered(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  // IntersectionObserver — drives atmosphere crossfade
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibility(prev => {
          const next = { ...prev }
          let maxRatio = 0
          let maxId = activeStampId

          entries.forEach(entry => {
            const id = entry.target.getAttribute('data-stamp-id')
            if (!id) return
            next[id] = entry.intersectionRatio
          })

          // Find the most visible stamp
          for (const [id, ratio] of Object.entries(next)) {
            if (ratio > maxRatio) {
              maxRatio = ratio
              maxId = id
            }
          }

          setActiveStampId(maxId)
          return next
        })
      },
      {
        root: scrollRef.current,
        threshold: THRESHOLDS,
      }
    )

    sectionRefs.current.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [stamps, activeStampId])

  const setSectionRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el)
    else sectionRefs.current.delete(id)
  }, [])

  const navigateToIndex = useCallback((index: number) => {
    const stamp = stamps[index]
    if (!stamp) return
    const el = sectionRefs.current.get(stamp.id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [stamps])

  // Keyboard navigation (arrows scroll between section tops)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const currentIdx = stamps.findIndex(s => s.id === activeStampId)
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (currentIdx < stamps.length - 1) {
          e.preventDefault()
          navigateToIndex(currentIdx + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentIdx > 0) {
          e.preventDefault()
          navigateToIndex(currentIdx - 1)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [stamps, activeStampId, navigateToIndex])

  const eras = stamps.map(s => ({
    id: s.id,
    atmosphere: ERA_ATMOSPHERES[s.id] ?? ERA_ATMOSPHERES['penny-black'],
  }))

  const activeIndex = stamps.findIndex(s => s.id === activeStampId)
  const activeEra = ERA_ATMOSPHERES[activeStampId]

  return (
    <Surface eras={eras} visibility={visibility}>
      <motion.div
        ref={scrollRef}
        className="stamp-scroll-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {stamps.map((stamp, index) => (
          <div
            key={stamp.id}
            ref={(el) => setSectionRef(stamp.id, el)}
            data-stamp-id={stamp.id}
          >
            <StampSection
              stamp={stamp}
              index={index}
              total={stamps.length}
              era={ERA_ATMOSPHERES[stamp.id]}
            />
          </div>
        ))}

        {/* Colophon */}
        <footer className="colophon">
          <div className="colophon-rule" />
          <p className="colophon-title font-display">Finis</p>
          <p className="colophon-text font-body">
            A collection of ten stamps that changed the world,<br />
            assembled & designed by{' '}
            <a href="https://x.com/arnavgoel_" target="_blank" rel="noopener noreferrer" className="colophon-link">
              @arnavgoel_
            </a>
          </p>
          <p className="colophon-sub font-mono">MMXXVI</p>
        </footer>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: hasEntered ? 0 : 0.6, duration: 0.4 }}
      >
        <Navigation
          stamps={stamps}
          currentIndex={activeIndex}
          onNavigate={navigateToIndex}
          activeEra={activeEra}
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="fixed top-5 left-6 select-none"
        style={{ zIndex: 50 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: hasEntered ? 0 : 0.8, duration: 0.4 }}
      >
        <span className="font-display" style={{
          fontSize: '18px',
          letterSpacing: '-0.01em',
          color: activeEra?.ink.title ?? '#2f2a26',
          opacity: 0.7,
          transition: 'color 0.6s ease',
        }}>
          The Stamp Book
        </span>
      </motion.div>
    </Surface>
  )
}
