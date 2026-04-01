import type { EraAtmosphere } from '../../data/types'

interface AtmosphereProps {
  eras: { id: string; atmosphere: EraAtmosphere }[]
  /** 0-1 visibility per era, keyed by stamp id */
  visibility: Record<string, number>
}

export default function Atmosphere({ eras, visibility }: AtmosphereProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {eras.map(({ id, atmosphere }) => {
        const v = visibility[id] ?? 0
        if (v < 0.01) return null

        return (
          <div
            key={id}
            className="absolute inset-0"
            style={{ opacity: v, transition: 'opacity 0.15s ease-out' }}
          >
            {/* Background color */}
            <div className="absolute inset-0" style={{ background: atmosphere.background }} />

            {/* Grain texture */}
            <svg className="absolute inset-0 w-full h-full" style={{
              opacity: atmosphere.grain.opacity,
              mixBlendMode: atmosphere.grain.blendMode as React.CSSProperties['mixBlendMode'],
            }}>
              <filter id={`grain-${id}`}>
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency={atmosphere.grain.baseFrequency}
                  numOctaves={atmosphere.grain.numOctaves}
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter={`url(#grain-${id})`} />
            </svg>

            {/* Light source */}
            <div className="absolute inset-0" style={{
              background: `radial-gradient(ellipse ${atmosphere.light.spread} ${atmosphere.light.spread} at ${atmosphere.light.x} ${atmosphere.light.y}, ${atmosphere.light.color}, transparent)`,
              opacity: atmosphere.light.opacity,
            }} />
          </div>
        )
      })}
    </div>
  )
}
