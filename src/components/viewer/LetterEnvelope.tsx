import type { StampData } from '../../data/types'
import { LETTER_CONFIGS } from '../../data/letters'

/** Clip-paths for non-rectangular stamps to cut away the SVG background */
const STAMP_CLIPS: Record<string, string> = {
  'cape-triangle': 'polygon(50% 2%, 1% 98%, 99% 98%)',
  'british-guiana': 'polygon(16% 0%, 84% 0%, 100% 18%, 100% 82%, 84% 100%, 16% 100%, 0% 82%, 0% 18%)',
}

interface LetterEnvelopeProps {
  stamp: StampData
}

export default function LetterEnvelope({ stamp }: LetterEnvelopeProps) {
  const config = LETTER_CONFIGS[stamp.id]
  if (!config) return null

  const isInverted = stamp.id === 'inverted-jenny'
  const isScript = config.writingType === 'script'
  const isChinese = config.writingType === 'chinese'

  return (
    <div className="letter-envelope" style={{ background: config.paperGradient }}>
      {/* Fold lines */}
      <div className="letter-folds" />

      {/* Edge aging vignette */}
      <div className="letter-vignette" style={{
        opacity: config.agingIntensity === 'heavy' ? 1 : config.agingIntensity === 'moderate' ? 0.7 : 0.4,
      }} />

      {/* Foxing spots */}
      {config.agingIntensity !== 'light' && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2, opacity: config.agingIntensity === 'heavy' ? 0.08 : 0.04 }}>
          <circle cx="12%" cy="18%" r="2" fill="#a08060" />
          <circle cx="78%" cy="72%" r="1.5" fill="#a08060" />
          <circle cx="65%" cy="15%" r="1" fill="#907050" />
          <circle cx="20%" cy="80%" r="1.8" fill="#a08060" />
          {config.agingIntensity === 'heavy' && <>
            <circle cx="45%" cy="35%" r="1.2" fill="#908060" />
            <circle cx="88%" cy="50%" r="1.5" fill="#907050" />
          </>}
        </svg>
      )}

      {/* === Fictional address — era-appropriate text === */}
      <div className="letter-address" style={{
        color: config.inkColor,
        opacity: config.inkOpacity,
        transform: isScript ? `skewX(${config.writingSlant * 0.3}deg)` : undefined,
      }}>
        {config.addressLines.map((line, i) => (
          <div key={i} className={`letter-address-line ${
            isScript ? 'letter-script' :
            isChinese ? 'letter-chinese' :
            config.writingType === 'typed' ? 'letter-typed' :
            'letter-printed'
          }`}>
            {line}
          </div>
        ))}
      </div>

      {/* Sender / return address — small, top-left corner */}
      {config.sender && (
        <div className="letter-sender" style={{
          color: config.inkColor,
          opacity: config.inkOpacity * 0.6,
        }}>
          <span className={isScript ? 'letter-script' : 'letter-typed'} style={{ fontSize: '7px' }}>
            {config.sender}
          </span>
        </div>
      )}

      {/* Stamp on the letter */}
      <div className="letter-stamp" style={{
        transform: `rotate(${config.stampRotation}deg)`,
      }}>
        <img
          src={stamp.svgImage}
          alt={stamp.name}
          className="letter-stamp-img"
          draggable={false}
          loading="lazy"
          style={{
            transform: isInverted ? 'rotate(180deg)' : undefined,
            clipPath: STAMP_CLIPS[stamp.id],
          }}
        />
      </div>

      {/* Cancellation mark */}
      <div
        className="letter-cancellation"
        style={{ opacity: 0.14 }}
        dangerouslySetInnerHTML={{ __html: config.cancellation }}
      />

      {/* Airmail border */}
      {config.special === 'airmail' && <div className="letter-airmail-border" />}

      {/* Red star for China */}
      {config.special === 'red-star' && (
        <svg viewBox="0 0 30 30" className="absolute pointer-events-none" style={{ top: '8%', left: '8%', width: '12%', opacity: 0.08, zIndex: 2 }}>
          <polygon points="15,2 18.5,11 28,11 20.5,17 23,26.5 15,21 7,26.5 9.5,17 2,11 11.5,11" fill="#c0392b" />
        </svg>
      )}

      {/* Paper grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 3, opacity: 0.04, mixBlendMode: 'multiply' }}>
        <filter id={`letter-grain-${stamp.id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#letter-grain-${stamp.id})`} />
      </svg>
    </div>
  )
}
