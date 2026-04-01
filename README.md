# The Stamp Book

A visual encyclopedia of the world's ten most legendary postage stamps. Each stamp tells the story of its era through scroll-driven atmosphere shifts, era-appropriate letter envelopes, and editorial storytelling.

**[Live Site](https://stamp-book-hazel.vercel.app)** | Built by [@arnavgoel_](https://x.com/arnavgoel_)

![The Stamp Book](https://img.shields.io/badge/stamps-10%20stories-b44233) ![React 19](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6)

---

## What's Inside

Ten stamps. Ten eras. Each section is a two-act experience:

| # | Stamp | Year | Country |
|---|-------|------|---------|
| 1 | Penny Black | 1840 | United Kingdom |
| 2 | Basel Dove | 1845 | Switzerland |
| 3 | Mauritius "Post Office" | 1847 | Mauritius |
| 4 | Hawaiian Missionaries | 1851 | Kingdom of Hawaii |
| 5 | Red Mercury | 1851 | Austria |
| 6 | Cape of Good Hope Triangle | 1853 | Cape of Good Hope |
| 7 | Treskilling Yellow | 1855 | Sweden |
| 8 | British Guiana 1c Magenta | 1856 | British Guiana |
| 9 | Inverted Jenny | 1918 | United States |
| 10 | The Whole Country is Red | 1968 | China |

**Act 1 — The Encounter**: Full-viewport hero with the stamp in a realistic mount, era-specific atmosphere, and key metadata.

**Act 2 — The Story**: Editorial text with a sticky letter envelope sidebar showing the stamp on era-appropriate mail (Victorian copperplate, Chinese characters, typed airmail, etc.).

## Features

- **Era atmospheres** — each stamp shifts the entire page background, grain, light, and ink color to match its historical period
- **Realistic stamp presentation** — perforated edges, paper grain, foxing spots, specular highlights, and mouse-reactive lighting
- **Letter envelopes** — fictional era-appropriate addresses, cancellation marks, fold lines, and paper aging
- **Non-rectangular stamp clipping** — CSS `clip-path` polygons for the Cape Triangle and British Guiana octagon
- **Scroll-driven crossfades** — IntersectionObserver blends atmospheres as you scroll between eras
- **Decorative era artwork** — SVG patterns (Victorian ironwork, nautical compass, propaganda sunburst, etc.) fade in from the right
- **Timeline navigation** — desktop rail + mobile dot navigation
- **Responsive** — full mobile experience with centered envelopes, gradient nav backdrop, and readable typography
- **Optimized** — WebP stamp images (~2MB total vs 60MB+ SVG originals), lazy loading for below-fold stamps

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript 5.9 |
| **Build** | Vite 8 |
| **Styling** | Tailwind CSS 4.2 + vanilla CSS |
| **Animation** | Framer Motion 12 |
| **Hosting** | Vercel |
| **Stamp images** | Wikimedia Commons (public domain) vectorized with VTracer, converted to WebP |

## Getting Started

```bash
# Clone
git clone https://github.com/arnavgo1998/Stamp-book.git
cd Stamp-book

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/viewer/
    StampViewer.tsx      # Main orchestrator, IntersectionObserver
    StampSection.tsx     # Two-act wrapper per stamp
    StampHero.tsx        # Full-viewport hero with stamp mount
    StampStory.tsx       # Editorial text with progressive reveal
    LetterEnvelope.tsx   # Era-appropriate mail with stamp
    EraArtwork.tsx       # Decorative SVG patterns
    Navigation.tsx       # Timeline rail + mobile dots
    Atmosphere.tsx       # Crossfading era backgrounds
    PerforationClip.tsx  # SVG clipPath for stamp edges
    Surface.tsx          # Fixed background layers
  data/
    stamps.ts            # 10 stamp records
    eras.ts              # Era atmosphere configurations
    letters.ts           # Letter envelope configs per stamp
    types.ts             # TypeScript interfaces
public/
    *.webp               # Optimized stamp images
```

## License

This project is licensed under **CC BY-NC 4.0** (Creative Commons Attribution-NonCommercial 4.0 International).

You are free to fork, modify, and share this project **with two conditions**:

1. **Attribution required** — you must credit [@arnavgoel_](https://x.com/arnavgoel_) as the original author
2. **Non-commercial** — you may not use this project for commercial purposes without permission

See [LICENSE](./LICENSE) for full terms.

---

Made with care by [Arnav Goel](https://x.com/arnavgoel_)
