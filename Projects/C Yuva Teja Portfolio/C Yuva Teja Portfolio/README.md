# C Yuva Teja — Portfolio

A from-scratch digital identity, built as a Next.js 14 / TypeScript / Tailwind app.

## Run it

```bash
cd "C Yuva Teja Portfolio"
npm install
npm run dev
```

Open http://localhost:3000. For production:

```bash
npm run build
npm start
```

## Design language

**Direction:** industrial engineering console, not a developer-portfolio template. The
visual vocabulary — spec sheets, build logs, capability matrices, coordinate readouts —
is drawn directly from the subject's own work as an AI/backend engineer, not decoration
laid on top of it.

- **Color** — `#050505 / #111111 / #181818` near-black surfaces, `#FFFFFF` text,
  `#9A9A9A` muted, and a single accent, **signal amber `#FF5A1F`**, used only for the
  cursor, one underline/progress element per section, and hover states. Amber reads as
  industrial signage (hazard tape, instrument-panel warning lights) rather than the
  generic SaaS-blue or hacker-green most AI portfolios default to.
- **Type** — Space Grotesk (display, massive/tight), Inter (body), JetBrains Mono
  (every label, date, tag, and eyebrow — the "engineering" voice of the page).
- **Signature element** — a fixed instrument-panel HUD (`components/HUD.tsx`) in the
  bottom-right corner: live section index, a scroll-progress rail, and a coordinate
  readout for Chittoor. Paired with a precision-reticle custom cursor
  (`components/Cursor.tsx`) that expands into a bracketed ring with a text label
  (`VIEW`, `OPEN`, `EMAIL`, etc.) on interactive elements — never a default OS pointer
  on desktop, and automatically disabled on touch devices.
- **Layout** — broken, asymmetric grids throughout: an editorial split for About, a
  data-table capability matrix instead of skill bars, a build-log instead of a dotted
  timeline, and alternating full-bleed "product launch" blocks for projects with real
  index numbers (00–04) since these are literally sequential shipped builds.
- **Motion** — Framer Motion scroll reveals (`components/Reveal.tsx`), a Lenis-smoothed
  scroll (`components/SmoothScroll.tsx`), a hero load-in sequence, and a magnetic
  contact CTA. Kept restrained — one orchestrated moment per section rather than
  scattered effects — and fully respects `prefers-reduced-motion`. GSAP was left out of
  `package.json`: everything here (reveals, the marquee, the typewriter, the magnetic
  button) is well served by Framer Motion and a couple of small `requestAnimationFrame`
  loops, and the brief asked for GSAP only where it's genuinely needed. Add it back if a
  future animation (e.g. a scroll-scrubbed timeline) actually calls for its ScrollTrigger
  plugin.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     All sections + cursor/HUD/nav/smooth-scroll systems
lib/data.ts     All real content — edit this file to update copy/projects/experience
```

To update content (new project, new role, new stat), edit `lib/data.ts` only — every
component reads from it, nothing is hardcoded in the UI layer.
