/** Per-stamp letter envelope configuration — excavated from each era's material world */

export interface LetterConfig {
  paperGradient: string
  inkColor: string
  inkOpacity: number
  writingSlant: number
  stampRotation: number
  agingIntensity: 'light' | 'moderate' | 'heavy'
  cancellation: string
  special?: 'airmail' | 'wax-seal' | 'red-star' | 'newspaper'
  writingType: 'script' | 'typed' | 'printed' | 'chinese'
  /** Fictional era-appropriate address lines */
  addressLines: string[]
  /** Sender name or return address fragment */
  sender?: string
}

export const LETTER_CONFIGS: Record<string, LetterConfig> = {
  'penny-black': {
    paperGradient: 'linear-gradient(170deg, #f0e8d4 0%, #e8dfc8 40%, #e0d5b8 100%)',
    inkColor: '#2a1f14',
    inkOpacity: 0.35,
    writingSlant: -15,
    stampRotation: 2,
    agingIntensity: 'heavy',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="none" stroke="#8b2020" stroke-width="1.5"/><path d="M30 5 L35 22 L48 12 L38 25 L55 30 L38 35 L48 48 L35 38 L30 55 L25 38 L12 48 L22 35 L5 30 L22 25 L12 12 L25 22 Z" fill="#8b2020" opacity="0.7"/></svg>`,
    special: 'wax-seal',
    addressLines: ['Mr. J. Whitfield', '14 Threadneedle Street', 'London'],
    sender: 'R. Hill, Kidderminster',
  },
  'basel-dove': {
    paperGradient: 'linear-gradient(175deg, #f2ede4 0%, #ebe5d8 50%, #e5ddd0 100%)',
    inkColor: '#1a1510',
    inkOpacity: 0.35,
    writingSlant: -5,
    stampRotation: -0.5,
    agingIntensity: 'light',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="22" fill="none" stroke="#1a1510" stroke-width="1"/><circle cx="25" cy="25" r="18" fill="none" stroke="#1a1510" stroke-width="0.5"/><line x1="7" y1="25" x2="43" y2="25" stroke="#1a1510" stroke-width="0.5"/><line x1="7" y1="20" x2="43" y2="20" stroke="#1a1510" stroke-width="0.3"/></svg>`,
    addressLines: ['Herrn K. Zürcher', 'Spalenvorstadt 22', 'Basel'],
    sender: 'M. Berri, Münsterplatz',
  },
  'mauritius-post-office': {
    paperGradient: 'linear-gradient(165deg, #f0e4cc 0%, #e8d8b8 30%, #e0d0a8 70%, #dcc89c 100%)',
    inkColor: '#2a2018',
    inkOpacity: 0.3,
    writingSlant: -10,
    stampRotation: 3,
    agingIntensity: 'heavy',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 50 50"><ellipse cx="25" cy="26" rx="20" ry="18" fill="none" stroke="#2a2018" stroke-width="2" stroke-dasharray="3 1"/></svg>`,
    addressLines: ['Lady E. Gomm', 'Government House', 'Port Louis, Mauritius'],
    sender: 'J. O. Barnard',
  },
  'hawaiian-missionaries': {
    paperGradient: 'linear-gradient(170deg, #f5f0e6 0%, #f0eadc 50%, #ebe4d2 100%)',
    inkColor: '#1e1812',
    inkOpacity: 0.28,
    writingSlant: -12,
    stampRotation: 1,
    agingIntensity: 'moderate',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 40 40"><line x1="5" y1="5" x2="35" y2="35" stroke="#1e1812" stroke-width="1.5" stroke-linecap="round"/><line x1="35" y1="5" x2="5" y2="35" stroke="#1e1812" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    addressLines: ['Rev. A. Thurston', 'American Board Mission', 'Boston, Massachusetts'],
    sender: 'Honolulu, Sandwich Islands',
  },
  'red-mercury': {
    paperGradient: 'linear-gradient(180deg, #e8e0d0 0%, #ddd4c2 50%, #d5ccb8 100%)',
    inkColor: '#2a2018',
    inkOpacity: 0.25,
    writingSlant: 0,
    stampRotation: 0,
    agingIntensity: 'moderate',
    writingType: 'printed',
    cancellation: `<svg viewBox="0 0 50 24"><rect x="2" y="2" width="46" height="20" fill="none" stroke="#2a2018" stroke-width="1"/><line x1="2" y1="12" x2="48" y2="12" stroke="#2a2018" stroke-width="0.5"/></svg>`,
    special: 'newspaper',
    addressLines: ['Illustriertes Wiener', 'Extrablatt', 'Rotenturmstraße, Wien'],
  },
  'cape-triangle': {
    paperGradient: 'linear-gradient(170deg, #eae5db 0%, #e2dcd0 40%, #dbd4c6 100%)',
    inkColor: '#0a0a20',
    inkOpacity: 0.3,
    writingSlant: -3,
    stampRotation: 1.5,
    agingIntensity: 'moderate',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 50 45"><polygon points="25,3 47,42 3,42" fill="none" stroke="#0a0a20" stroke-width="1"/><polygon points="25,8 42,38 8,38" fill="none" stroke="#0a0a20" stroke-width="0.5"/></svg>`,
    addressLines: ['Capt. R. Maitland', 'Colonial Office', 'Cape Town'],
    sender: 'Surveyor General, Cape Colony',
  },
  'treskilling-yellow': {
    paperGradient: 'linear-gradient(175deg, #efecea 0%, #e8e5e0 50%, #e2deda 100%)',
    inkColor: '#1a1818',
    inkOpacity: 0.3,
    writingSlant: -2,
    stampRotation: -0.5,
    agingIntensity: 'light',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="21" fill="none" stroke="#1a1818" stroke-width="1"/><circle cx="25" cy="25" r="17" fill="none" stroke="#1a1818" stroke-width="0.5"/><line x1="8" y1="22" x2="42" y2="22" stroke="#1a1818" stroke-width="0.4"/><line x1="8" y1="28" x2="42" y2="28" stroke="#1a1818" stroke-width="0.4"/></svg>`,
    addressLines: ['Hr. G. W. Backman', 'Nygatan 8', 'Stockholm'],
    sender: 'E. Lind, Göteborg',
  },
  'british-guiana': {
    paperGradient: 'linear-gradient(165deg, #e8dcc4 0%, #ddd0b4 35%, #d5c8a8 70%, #d0c0a0 100%)',
    inkColor: '#1a1208',
    inkOpacity: 0.3,
    writingSlant: -18,
    stampRotation: 4,
    agingIntensity: 'heavy',
    writingType: 'script',
    cancellation: `<svg viewBox="0 0 30 30"><path d="M5 25 C8 10, 12 8, 15 15 C18 22, 20 8, 25 5" fill="none" stroke="#1a1208" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    addressLines: ['Mr. L. V. Vaughan', 'Georgetown', 'British Guiana'],
  },
  'inverted-jenny': {
    paperGradient: 'linear-gradient(180deg, #f2f0ec 0%, #edeae5 50%, #e8e5e0 100%)',
    inkColor: '#1a1a30',
    inkOpacity: 0.35,
    writingSlant: 0,
    stampRotation: 1,
    agingIntensity: 'light',
    writingType: 'typed',
    cancellation: `<svg viewBox="0 0 80 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#1a1a30" stroke-width="1"/><circle cx="20" cy="20" r="12" fill="none" stroke="#1a1a30" stroke-width="0.5"/><path d="M38 10 Q45 8, 52 12 Q59 16, 66 10 Q73 4, 78 10" fill="none" stroke="#1a1a30" stroke-width="0.8"/><path d="M38 17 Q45 15, 52 19 Q59 23, 66 17 Q73 11, 78 17" fill="none" stroke="#1a1a30" stroke-width="0.8"/><path d="M38 24 Q45 22, 52 26 Q59 30, 66 24 Q73 18, 78 24" fill="none" stroke="#1a1a30" stroke-width="0.8"/><path d="M38 31 Q45 29, 52 33 Q59 37, 66 31 Q73 25, 78 31" fill="none" stroke="#1a1a30" stroke-width="0.8"/></svg>`,
    special: 'airmail',
    addressLines: ['Mr. W. T. Robey', '740 H Street N.E.', 'Washington, D.C.'],
  },
  'whole-country-red': {
    paperGradient: 'linear-gradient(180deg, #e8e2d6 0%, #e0d8ca 50%, #d8d0c0 100%)',
    inkColor: '#1a1208',
    inkOpacity: 0.3,
    writingSlant: 0,
    stampRotation: 0,
    agingIntensity: 'light',
    writingType: 'chinese',
    cancellation: `<svg viewBox="0 0 50 35"><rect x="2" y="2" width="46" height="31" fill="none" stroke="#1a1208" stroke-width="1" rx="1"/><line x1="2" y1="12" x2="48" y2="12" stroke="#1a1208" stroke-width="0.5"/><line x1="2" y1="22" x2="48" y2="22" stroke="#1a1208" stroke-width="0.5"/></svg>`,
    special: 'red-star',
    addressLines: ['北京市东城区', '王卫民 同志', '中国人民邮政'],
  },
}
