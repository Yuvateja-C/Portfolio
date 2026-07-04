C Yuva Teja — Personal Portfolio

> **Generative AI Engineer · B.Tech CSE (3rd Year) · Chittoor, Andhra Pradesh**

A fully animated, production-quality single-page personal portfolio website built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies, no build step. Just open the file in any browser.

---

## 🔗 Live Projects Featured

| Project | Live Demo | GitHub |
|---|---|---|
| ResearchAI — Document Analysis SaaS | [ai-research-assistant-tan.vercel.app](https://ai-research-assistant-tan.vercel.app) | [GitHub](https://github.com/Yuvateja-C/AI-Research-Assistant) |
| InvestorLens AI — Startup Evaluator | [ai-startup-evaluator-xdvm.onrender.com](https://ai-startup-evaluator-xdvm.onrender.com) | [GitHub](https://github.com/Yuvateja-C/AI-Startup-evaluator) |
| Loan Underwriting Memo API | [memo-api-nine.vercel.app](https://memo-api-nine.vercel.app) | [GitHub](https://github.com/Yuvateja-C/Memo_API) |
| IPL Data Analytics & Match Prediction | [ipl-dataanalytics.onrender.com](https://ipl-dataanalytics.onrender.com) | [GitHub](https://github.com/Yuvateja-C/IPL_DATAANALYTICS) |
| MoodMirror — AI Emotional Reflection Engine | — | [GitHub](https://github.com/Yuvateja-C/moodmirror) |

---

## ✨ Features

### Design & Theme
- **Design language** — Linear / Vercel / Stripe / Apple aesthetic
- **Dark theme** with deep space background (`#07070f`)
- **Floating pill navbar** — centered, frosted glass, blur backdrop
- **Noise texture overlay** for premium depth
- **Ambient gradient blobs** — soft indigo, pink, cyan lighting
- **Subtle dot grid** background layer
- **Custom styled scrollbar** — minimal indigo gradient

### Animations
- **Loading screen** — initials `CYT` with animated gradient progress bar, fades out after 2.3s
- **Custom cursor** — glowing cyan dot + lagging indigo ring, color-shifts on hover
- **Mouse spotlight** — soft indigo radial glow follows the cursor
- **Hero name shimmer** — gradient sweep animation across the display name
- **Typewriter effect** — rotating job titles with blinking cursor
- **3D floating hero card** — continuous perspective rotation animation
- **3 concentric spinning rings** around the hero card
- **Scroll reveal** — fade-up, slide-left, slide-right via `IntersectionObserver`
- **SVG ring progress** — circular skill gauges animate on scroll into view
- **Skill bars** — fill with shimmer sweep on scroll
- **Infinite marquee** — company/organisation names scroll horizontally
- **Project card hover** — gradient top-border sweep + lift on hover
- **Experience timeline** — gradient left border, cards shift right on hover
- **Ripple contact rings** — 3 expanding pulsing rings around the avatar

### Sections (in order)
1. **Hero** — availability badge, shimmer name, typewriter title, description, CTA buttons, 3D stats card
2. **Marquee** — infinite scroll of companies and organisations
3. **About** — bento grid layout with bio, stat boxes, and focus areas
4. **Skills** — SVG ring gauges (8 skills) + animated bars + tech chip cloud
5. **Experience** — vertical timeline with 5 roles (work experience + internships)
6. **Projects** — featured full-width card (ResearchAI) + 4-card grid
7. **Education** — degree card + academic focus card + language badges
8. **Contact** — sliding contact cards + pulsing ripple avatar

---

## 🛠 Tech Stack

```
HTML5       — Structure & semantic markup
CSS3        — Custom design system, animations, keyframes, CSS variables
JavaScript  — Vanilla JS, IntersectionObserver, Canvas API, requestAnimationFrame
Google Fonts — Syne (headings) + DM Sans (body)
Canvas API  — Particle network (95 floating dots with connecting lines)
SVG         — Ring progress skill indicators with gradient strokes
```

**Zero dependencies. Zero frameworks. Zero build tools.**

---

## 🚀 Getting Started

### Run locally

```bash
# Clone or download the repository
git clone https://github.com/Yuvateja-C/portfolio

# Open directly in your browser
open yuvateja_portfolio_v3.html

# Or simply double-click the file
```

No `npm install`. No `package.json`. No server required.

### Deploy

Since it's a single `.html` file, you can deploy it anywhere:

```bash
# Vercel (drag and drop the file in the Vercel dashboard)
# Netlify (drag and drop at app.netlify.com/drop)
# GitHub Pages (push to a repo, enable Pages in Settings)
```

---

## 📁 File Structure

```
portfolio/
├── yuvateja_portfolio_v3.html   # Complete self-contained portfolio
└── README.md                    # This file
```

Everything — HTML, CSS, JavaScript, and SVG — lives inside a single `.html` file (68 KB).

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#07070f` | Page background |
| `--s1` | `#0d0d1f` | Surface level 1 |
| `--i` | `#6366f1` | Indigo — primary accent |
| `--p` | `#ec4899` | Pink — secondary accent |
| `--c` | `#22d3ee` | Cyan — tertiary accent |
| `--a` | `#f59e0b` | Amber — quaternary accent |
| `--w` | `#ededff` | Primary text |
| `--w2` | `rgba(237,237,255,.72)` | Secondary text |
| `--bdr` | `rgba(255,255,255,.07)` | Subtle borders |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Headings | Syne | 800 | `clamp(30px, 3.8vw, 50px)` |
| Hero Name | Syne | 800 | `clamp(46px, 7vw, 84px)` |
| Body | DM Sans | 400 | `15px` |
| Labels | DM Sans | 600 | `11px` — uppercase, tracked |
| Cards | DM Sans | 500–700 | `12.5px–16px` |

---

## 📱 Responsiveness

| Breakpoint | Layout |
|---|---|
| `> 1060px` | Full two-column layouts, full nav |
| `641px–1060px` | Single column, hidden arch diagram, 2-col pill grid |
| `≤ 640px` | Mobile-first, stacked buttons, single-column everything |

---

## 🧩 Customisation

All design tokens are in `:root` at the top of the `<style>` block. To update:

- **Colors** — change `--i`, `--p`, `--c`, `--a` values
- **Background** — update the `body::before` radial gradients
- **Fonts** — swap the Google Fonts `<link>` and update `--fh` / `--fb`
- **Content** — edit HTML sections directly (each section is clearly commented)
- **Typewriter titles** — update the `titles` array in the `<script>` block
- **Particles** — adjust `COLS` array and particle count (`95`) in the canvas JS

---

## 👤 About

**C Yuva Teja** — Generative AI Engineer & B.Tech CSE Student (3rd Year, 2024–2028)

- 🌐 [LinkedIn](https://www.linkedin.com/in/c-yuvateja-888621325)
- 🐙 [GitHub](https://github.com/Yuvateja-C)
- 📧 yuvatejac123@gmail.com
- 📍 Chittoor, Andhra Pradesh, India

---

## 📄 License

This portfolio is personal work. Feel free to use it as inspiration — but please don't deploy it as-is with my name and content. If you'd like to use the structure/design for your own portfolio, go ahead and make it yours.

---

