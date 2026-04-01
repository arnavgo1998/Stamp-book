import type { EraAtmosphere } from './types'

/**
 * Each era's atmosphere is excavated from the material world
 * the stamp lived in — the paper, the ink, the light, the air.
 * These are starting points, dialed in by feel in the browser.
 */

export const ERA_ATMOSPHERES: Record<string, EraAtmosphere> = {
  /* ─── 1840 UK ─── Victorian parchment, copper-plate warmth ─── */
  'penny-black': {
    background: '#f0ece4',
    grain: { baseFrequency: 0.55, numOctaves: 5, opacity: 0.05, blendMode: 'multiply' },
    light: { x: '25%', y: '15%', color: 'rgba(200,170,120,0.25)', spread: '50%', opacity: 0.4 },
    ink: { title: '#2a2520', meta: '#6b6058', ghost: '#d4cfc8', ghostOpacity: 0.07 },
    accent: '#c8a46c',
  },

  /* ─── 1845 Switzerland ─── Alpine morning, fine-wove paper ─── */
  'basel-dove': {
    background: '#f5f2eb',
    grain: { baseFrequency: 0.9, numOctaves: 3, opacity: 0.03, blendMode: 'multiply' },
    light: { x: '50%', y: '20%', color: 'rgba(245,242,238,0.5)', spread: '70%', opacity: 0.4 },
    ink: { title: '#2a2520', meta: '#6b6560', ghost: '#d4cfc8', ghostOpacity: 0.06 },
    accent: '#c0392b',
  },

  /* ─── 1847 Mauritius ─── Tropical colonial heat, shuttered light ─── */
  'mauritius-post-office': {
    background: '#f0e8d8',
    grain: { baseFrequency: 0.6, numOctaves: 4, opacity: 0.06, blendMode: 'multiply' },
    light: { x: '15%', y: '30%', color: 'rgba(220,185,130,0.4)', spread: '45%', opacity: 0.55 },
    ink: { title: '#2f2518', meta: '#7a6a52', ghost: '#d8ccb5', ghostOpacity: 0.08 },
    accent: '#d35400',
  },

  /* ─── 1851 Hawaii ─── Pacific noon, bleached tissue paper ─── */
  'hawaiian-missionaries': {
    background: '#f8f5ef',
    grain: { baseFrequency: 1.1, numOctaves: 2, opacity: 0.02, blendMode: 'multiply' },
    light: { x: '50%', y: '10%', color: 'rgba(255,252,245,0.6)', spread: '80%', opacity: 0.35 },
    ink: { title: '#3a3530', meta: '#8a8478', ghost: '#e0dbd4', ghostOpacity: 0.05 },
    accent: '#2c5282',
  },

  /* ─── 1851 Austria ─── Viennese coffeehouse, newsprint warmth ─── */
  'red-mercury': {
    background: '#f2ece2',
    grain: { baseFrequency: 0.7, numOctaves: 4, opacity: 0.05, blendMode: 'multiply' },
    light: { x: '30%', y: '25%', color: 'rgba(210,185,145,0.35)', spread: '55%', opacity: 0.5 },
    ink: { title: '#2a2018', meta: '#6b5e50', ghost: '#d5cabb', ghostOpacity: 0.07 },
    accent: '#c0392b',
  },

  /* ─── 1853 Cape of Good Hope ─── Coastal morning, blued paper ─── */
  'cape-triangle': {
    background: '#eef1f5',
    grain: { baseFrequency: 0.75, numOctaves: 3, opacity: 0.035, blendMode: 'multiply' },
    light: { x: '60%', y: '20%', color: 'rgba(220,230,245,0.4)', spread: '65%', opacity: 0.45 },
    ink: { title: '#1a2530', meta: '#5a6a78', ghost: '#c8d0d8', ghostOpacity: 0.06 },
    accent: '#2980b9',
  },

  /* ─── 1855 Sweden ─── Nordic winter, thin austere light ─── */
  'treskilling-yellow': {
    background: '#edecea',
    grain: { baseFrequency: 0.85, numOctaves: 2, opacity: 0.025, blendMode: 'multiply' },
    light: { x: '70%', y: '40%', color: 'rgba(230,228,222,0.3)', spread: '40%', opacity: 0.35 },
    ink: { title: '#2c2a28', meta: '#706c66', ghost: '#d0cdc8', ghostOpacity: 0.05 },
    accent: '#d4a017',
  },

  /* ─── 1856 British Guiana ─── Tropical makeshift, newspaper ink ─── */
  'british-guiana': {
    background: '#f0e8dc',
    grain: { baseFrequency: 0.5, numOctaves: 5, opacity: 0.07, blendMode: 'multiply' },
    light: { x: '20%', y: '35%', color: 'rgba(215,190,150,0.35)', spread: '40%', opacity: 0.5 },
    ink: { title: '#2a2018', meta: '#6e5e4a', ghost: '#d5c8b5', ghostOpacity: 0.08 },
    accent: '#8b2252',
  },

  /* ─── 1918 USA ─── Aviation steel, open sky, machine paper ─── */
  'inverted-jenny': {
    background: '#edf0f4',
    grain: { baseFrequency: 0.9, numOctaves: 3, opacity: 0.03, blendMode: 'multiply' },
    light: { x: '50%', y: '15%', color: 'rgba(225,232,242,0.45)', spread: '70%', opacity: 0.4 },
    ink: { title: '#1a2030', meta: '#5a6475', ghost: '#c5ccd5', ghostOpacity: 0.06 },
    accent: '#c0392b',
  },

  /* ─── 1968 China ─── Cultural Revolution, warm propaganda cream ─── */
  'whole-country-red': {
    background: '#f5ede5',
    grain: { baseFrequency: 0.65, numOctaves: 3, opacity: 0.04, blendMode: 'multiply' },
    light: { x: '50%', y: '50%', color: 'rgba(220,180,160,0.2)', spread: '90%', opacity: 0.3 },
    ink: { title: '#2a1818', meta: '#7a5a50', ghost: '#d8c8c0', ghostOpacity: 0.08 },
    accent: '#c0392b',
  },
}
