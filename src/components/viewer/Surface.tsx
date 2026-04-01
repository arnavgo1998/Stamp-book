import { type ReactNode } from 'react'
import Atmosphere from './Atmosphere'
import type { EraAtmosphere } from '../../data/types'

interface SurfaceProps {
  children: ReactNode
  eras: { id: string; atmosphere: EraAtmosphere }[]
  visibility: Record<string, number>
}

export default function Surface({ children, eras, visibility }: SurfaceProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Era atmosphere — crossfading backgrounds */}
      <Atmosphere eras={eras} visibility={visibility} />

      {/* Content layer */}
      <div className="relative w-full h-full z-10">
        {children}
      </div>
    </div>
  )
}
