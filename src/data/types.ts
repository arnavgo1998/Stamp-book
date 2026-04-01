import type { ComponentType } from 'react'

export interface StampColors {
  primary: string
  secondary: string
  accent?: string
  background: string
}

export interface EraAtmosphere {
  background: string
  grain: {
    baseFrequency: number
    numOctaves: number
    opacity: number
    blendMode: string
  }
  light: {
    x: string
    y: string
    color: string
    spread: string
    opacity: number
  }
  ink: {
    title: string
    meta: string
    ghost: string
    ghostOpacity: number
  }
  accent: string
}

export interface StampData {
  id: string
  name: string
  year: number
  country: string
  denomination: string
  colors: StampColors
  shape: 'rectangle' | 'triangle' | 'octagon'
  story: string
  significance: string
  estimatedValue: string
  funFact?: string
  pocketVariant?: 1 | 2 | 3 | 4
  annotation?: string
  /** Path to vectorized SVG image from real stamp scans */
  svgImage?: string
}

export type StampArtComponent = ComponentType
