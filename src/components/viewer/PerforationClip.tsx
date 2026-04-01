/**
 * SVG-based perforation clip path for stamps.
 * Generates a rectangle with semicircular bites along all 4 edges.
 * Applied via clip-path: url(#perf-clip-{id}) on the stamp art wrapper.
 */

interface PerforationClipProps {
  id: string
  /** Radius of each perforation hole */
  radius?: number
  /** Spacing between hole centers */
  spacing?: number
}

export default function PerforationClip({ id, radius = 2.8, spacing = 11 }: PerforationClipProps) {
  // Generate the clip path as a single SVG path
  // The path traces the stamp outline with semicircular bites
  const clipId = `perf-clip-${id}`

  // We work in percentages (0-100) for the clipPath with clipPathUnits="objectBoundingBox"
  // But SVG arcs need absolute-ish values, so we use userSpaceOnUse and the viewBox trick
  // Instead, let's generate the path in a 200x260 coordinate space matching the stamp viewBox

  const w = 200
  const h = 260
  const r = radius
  const s = spacing

  // Build path segments for each edge
  const path: string[] = []

  // Top edge: left to right, bites pointing upward
  const topHoles = Math.floor(w / s)
  const topOffset = (w - topHoles * s) / 2 + s / 2
  path.push(`M 0,${r}`)
  // Left edge first point
  path.push(`L 0,${r}`)

  // Top-left corner
  path.push(`L ${topOffset - s / 2},0`)

  // Top edge with bites
  for (let i = 0; i < topHoles; i++) {
    const cx = topOffset + i * s
    path.push(`L ${cx - r},0`)
    path.push(`A ${r},${r} 0 1,1 ${cx + r},0`)
  }
  path.push(`L ${w},0`)

  // Right edge with bites
  const rightHoles = Math.floor(h / s)
  const rightOffset = (h - rightHoles * s) / 2 + s / 2
  for (let i = 0; i < rightHoles; i++) {
    const cy = rightOffset + i * s
    path.push(`L ${w},${cy - r}`)
    path.push(`A ${r},${r} 0 1,1 ${w},${cy + r}`)
  }
  path.push(`L ${w},${h}`)

  // Bottom edge: right to left, bites pointing downward
  const bottomHoles = topHoles
  const bottomOffset = topOffset
  for (let i = bottomHoles - 1; i >= 0; i--) {
    const cx = bottomOffset + i * s
    path.push(`L ${cx + r},${h}`)
    path.push(`A ${r},${r} 0 1,1 ${cx - r},${h}`)
  }
  path.push(`L 0,${h}`)

  // Left edge: bottom to top, bites pointing left
  const leftHoles = rightHoles
  const leftOffset = rightOffset
  for (let i = leftHoles - 1; i >= 0; i--) {
    const cy = leftOffset + i * s
    path.push(`L 0,${cy + r}`)
    path.push(`A ${r},${r} 0 1,1 0,${cy - r}`)
  }
  path.push('Z')

  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <clipPath id={clipId} clipPathUnits="objectBoundingBox"
          transform={`scale(${1 / w}, ${1 / h})`}
        >
          <path d={path.join(' ')} />
        </clipPath>
      </defs>
    </svg>
  )
}
