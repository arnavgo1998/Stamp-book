import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface EraArtworkProps {
  stampId: string
}

/** Era-appropriate decorative pattern that fades in from the right side of the story */
export default function EraArtwork({ stampId }: EraArtworkProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.1 })
  const artwork = ERA_ARTWORK[stampId]
  if (!artwork) return null

  return (
    <div
      ref={ref}
      className={`era-artwork ${isInView ? 'era-artwork-visible' : ''}`}
      dangerouslySetInnerHTML={{ __html: artwork }}
    />
  )
}

/** SVG pattern markup for each era — all purely decorative, CSS/SVG only */
const ERA_ARTWORK: Record<string, string> = {
  'penny-black': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.14">
    <defs><pattern id="ea-victorian" width="60" height="80" patternUnits="userSpaceOnUse">
      <path d="M30 0 Q15 10, 15 20 Q15 30, 30 40 Q45 30, 45 20 Q45 10, 30 0" fill="none" stroke="#2a2018" stroke-width="0.8"/>
      <path d="M0 40 Q15 50, 15 60 Q15 70, 0 80" fill="none" stroke="#2a2018" stroke-width="0.8"/>
      <path d="M60 40 Q45 50, 45 60 Q45 70, 60 80" fill="none" stroke="#2a2018" stroke-width="0.8"/>
      <circle cx="30" cy="20" r="2" fill="none" stroke="#2a2018" stroke-width="0.5"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-victorian)"/>
  </svg>`,

  'basel-dove': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.12">
    <defs><pattern id="ea-alpine" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect x="16" y="8" width="8" height="24" fill="none" stroke="#2a2520" stroke-width="0.6"/>
      <rect x="8" y="16" width="24" height="8" fill="none" stroke="#2a2520" stroke-width="0.6"/>
      <circle cx="4" cy="4" r="1.5" fill="none" stroke="#2a2520" stroke-width="0.4"/>
      <circle cx="36" cy="36" r="1.5" fill="none" stroke="#2a2520" stroke-width="0.4"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-alpine)"/>
  </svg>`,

  'mauritius-post-office': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.12">
    <defs><pattern id="ea-tropical" width="80" height="120" patternUnits="userSpaceOnUse">
      <path d="M40 0 Q42 30, 45 60 Q48 90, 50 120" fill="none" stroke="#2f2518" stroke-width="0.5"/>
      <path d="M42 20 Q55 15, 70 18" fill="none" stroke="#2f2518" stroke-width="0.4"/>
      <path d="M43 35 Q56 30, 72 34" fill="none" stroke="#2f2518" stroke-width="0.4"/>
      <path d="M44 50 Q58 44, 75 48" fill="none" stroke="#2f2518" stroke-width="0.4"/>
      <path d="M45 65 Q60 60, 76 64" fill="none" stroke="#2f2518" stroke-width="0.4"/>
      <path d="M40 25 Q28 18, 12 22" fill="none" stroke="#2f2518" stroke-width="0.4"/>
      <path d="M41 45 Q30 38, 14 42" fill="none" stroke="#2f2518" stroke-width="0.4"/>
      <path d="M42 65 Q32 58, 16 62" fill="none" stroke="#2f2518" stroke-width="0.4"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-tropical)"/>
  </svg>`,

  'hawaiian-missionaries': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.10">
    <defs><pattern id="ea-pacific" width="60" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 30 Q10 10, 20 20 Q30 30, 40 15 Q50 5, 60 20" fill="none" stroke="#2c5282" stroke-width="0.5"/>
      <path d="M0 35 Q15 25, 25 30 Q35 35, 45 22" fill="none" stroke="#2c5282" stroke-width="0.3"/>
      <circle cx="22" cy="18" r="0.8" fill="#2c5282" opacity="0.5"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-pacific)"/>
  </svg>`,

  'red-mercury': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.12">
    <defs><pattern id="ea-baroque" width="50" height="80" patternUnits="userSpaceOnUse">
      <path d="M25 0 Q10 10, 10 20 Q10 35, 25 40 Q40 35, 40 20 Q40 10, 25 0" fill="none" stroke="#2a2018" stroke-width="0.6"/>
      <path d="M25 40 Q10 50, 10 60 Q10 75, 25 80 Q40 75, 40 60 Q40 50, 25 40" fill="none" stroke="#2a2018" stroke-width="0.6"/>
      <path d="M25 20 Q20 25, 25 30" fill="none" stroke="#2a2018" stroke-width="0.4"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-baroque)"/>
  </svg>`,

  'cape-triangle': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.12">
    <defs><pattern id="ea-nautical" width="100" height="100" patternUnits="userSpaceOnUse">
      <line x1="50" y1="50" x2="50" y2="0" stroke="#1a2530" stroke-width="0.4"/>
      <line x1="50" y1="50" x2="100" y2="50" stroke="#1a2530" stroke-width="0.4"/>
      <line x1="50" y1="50" x2="50" y2="100" stroke="#1a2530" stroke-width="0.4"/>
      <line x1="50" y1="50" x2="0" y2="50" stroke="#1a2530" stroke-width="0.4"/>
      <line x1="50" y1="50" x2="85" y2="15" stroke="#1a2530" stroke-width="0.3"/>
      <line x1="50" y1="50" x2="85" y2="85" stroke="#1a2530" stroke-width="0.3"/>
      <line x1="50" y1="50" x2="15" y2="85" stroke="#1a2530" stroke-width="0.3"/>
      <line x1="50" y1="50" x2="15" y2="15" stroke="#1a2530" stroke-width="0.3"/>
      <circle cx="50" cy="50" r="5" fill="none" stroke="#1a2530" stroke-width="0.5"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-nautical)"/>
  </svg>`,

  'treskilling-yellow': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.10">
    <defs><pattern id="ea-nordic" width="30" height="30" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="30" y2="30" stroke="#2c2a28" stroke-width="0.5"/>
      <line x1="30" y1="0" x2="0" y2="30" stroke="#2c2a28" stroke-width="0.5"/>
      <polygon points="15,8 22,15 15,22 8,15" fill="none" stroke="#2c2a28" stroke-width="0.4"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-nordic)"/>
  </svg>`,

  'british-guiana': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.12">
    <defs><pattern id="ea-jungle" width="70" height="100" patternUnits="userSpaceOnUse">
      <path d="M10 0 Q20 20, 15 40 Q10 60, 20 80 Q30 100, 25 120" fill="none" stroke="#2a2018" stroke-width="0.5"/>
      <path d="M50 0 Q40 25, 45 50 Q50 75, 40 100" fill="none" stroke="#2a2018" stroke-width="0.5"/>
      <ellipse cx="20" cy="30" rx="8" ry="4" fill="none" stroke="#2a2018" stroke-width="0.3" transform="rotate(-20, 20, 30)"/>
      <ellipse cx="45" cy="65" rx="10" ry="5" fill="none" stroke="#2a2018" stroke-width="0.3" transform="rotate(15, 45, 65)"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-jungle)"/>
  </svg>`,

  'inverted-jenny': `<svg viewBox="0 0 200 600" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%" style="opacity:0.10">
    <defs><pattern id="ea-aviation" width="40" height="60" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="40" y2="60" stroke="#1a2030" stroke-width="0.4"/>
      <line x1="40" y1="0" x2="0" y2="60" stroke="#1a2030" stroke-width="0.4"/>
      <line x1="0" y1="15" x2="40" y2="15" stroke="#1a2030" stroke-width="0.3"/>
      <line x1="0" y1="30" x2="40" y2="30" stroke="#1a2030" stroke-width="0.3"/>
      <line x1="0" y1="45" x2="40" y2="45" stroke="#1a2030" stroke-width="0.3"/>
      <circle cx="20" cy="30" r="1.5" fill="none" stroke="#1a2030" stroke-width="0.4"/>
    </pattern></defs>
    <rect width="200" height="600" fill="url(#ea-aviation)"/>
  </svg>`,

  'whole-country-red': `<svg viewBox="0 0 400 800" width="100%" height="100%" style="opacity:0.12">
    <g transform="translate(350, 400)">
      ${Array.from({ length: 18 }, (_, i) =>
        `<polygon points="0,0 -12,-380 12,-380" fill="#c0392b" opacity="0.3" transform="rotate(${i * 20})"/>`
      ).join('')}
    </g>
  </svg>`,
}
