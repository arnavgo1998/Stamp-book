import type { StampData, EraAtmosphere } from '../../data/types'
import { ScrollReveal } from './StampSection'

interface StampStoryProps {
  stamp: StampData
  index: number
  total: number
  era?: EraAtmosphere
}

/** Split story into paragraph-like blocks of 2-3 sentences for progressive reveal */
function splitStory(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text]
  const blocks: string[] = []
  for (let i = 0; i < sentences.length; i += 3) {
    blocks.push(sentences.slice(i, i + 3).join('').trim())
  }
  return blocks
}

/** Check if the era background is dark — if so, story needs a light surface */
function isDarkEra(bg?: string): boolean {
  if (!bg) return false
  const hex = bg.replace('#', '')
  if (hex.length < 6) return false
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 100
}

export default function StampStory({ stamp, index, total, era }: StampStoryProps) {
  const blocks = splitStory(stamp.story)
  const firstBlock = blocks[0] ?? ''
  const firstChar = firstBlock[0] ?? ''
  const firstBlockRest = firstBlock.slice(1)
  const restBlocks = blocks.slice(1)

  const dark = isDarkEra(era?.background)
  // On dark backgrounds, use high-contrast light text
  const titleColor = dark ? '#f5efe2' : (era?.ink.title ?? '#2f2a26')
  const bodyColor = dark ? '#ece4d4' : (era?.ink.title ?? '#3d3835')
  const metaColor = dark ? '#d0b8a0' : (era?.ink.meta ?? '#6b6560')
  const accentColor = era?.accent ?? stamp.colors.primary

  return (
    <div className="story-section">
      {/* Accent rule */}
      <ScrollReveal>
        <div className="story-rule" style={{ background: accentColor, opacity: 0.4, transition: 'background 0.6s ease' }} />
      </ScrollReveal>

      {/* Story body */}
      <div className="story-body">
        {/* First block with drop cap */}
        <ScrollReveal delay={0.1}>
          <p className="font-body story-text" style={{ color: bodyColor, transition: 'color 0.6s ease' }}>
            <span
              className="font-display story-drop-cap"
              style={{ color: titleColor, transition: 'color 0.6s ease' }}
            >
              {firstChar}
            </span>
            {firstBlockRest}
          </p>
        </ScrollReveal>

        {/* Remaining blocks */}
        {restBlocks.map((block, i) => (
          <ScrollReveal key={i} delay={0.05 * (i + 1)}>
            <p className="font-body story-text" style={{ color: bodyColor, transition: 'color 0.6s ease' }}>
              {block}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* Endnote: original + value today + fun fact */}
      <ScrollReveal delay={0.1}>
        <div className="story-endnote" style={{ borderColor: `${metaColor}30`, transition: 'border-color 0.6s ease' }}>
          <div className="story-endnote-row">
            <div>
              <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.12em', color: metaColor, opacity: 0.6, transition: 'color 0.6s ease' }}>
                Original
              </span>
              <div className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.05em', color: titleColor, opacity: 0.7, marginTop: '2px', transition: 'color 0.6s ease' }}>
                {stamp.denomination}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.12em', color: metaColor, opacity: 0.6, transition: 'color 0.6s ease' }}>
                Value Today
              </span>
              <div className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.05em', color: titleColor, opacity: 0.7, marginTop: '2px', transition: 'color 0.6s ease' }}>
                {stamp.estimatedValue}
              </div>
            </div>
          </div>
          {stamp.funFact && (
            <p className="font-body italic" style={{ fontSize: '13px', lineHeight: 1.6, color: metaColor, marginTop: '0.75rem', transition: 'color 0.6s ease' }}>
              * {stamp.funFact}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* Section footer */}
      <ScrollReveal delay={0.1}>
        <div className="story-footer" style={{ color: metaColor, transition: 'color 0.6s ease' }}>
          <span className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.14em' }}>
            No. {String(index + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
          </span>
        </div>
      </ScrollReveal>
    </div>
  )
}
