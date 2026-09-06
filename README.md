# C Yuva Teja — Portfolio

The personal portfolio of **C Yuva Teja**, a Generative AI Engineer building production-oriented RAG systems, local LLM products, and structured AI APIs.

## 1. Project Overview

This is a server-side rendered (SSR) portfolio website that presents C Yuva Teja's work, experience, technical capabilities, achievements, learning journey, and open-source projects. The site is a single-page scrolling experience with a dedicated resume page.

### Featured Work

- **ResearchAI** — A vector-powered document analysis platform for PDFs, Office files, notebooks, CSVs, and code.
- **InvestorLens AI** — A private startup idea evaluator powered by a locally hosted LLaMA model.
- **Loan Underwriting Memo API** — A FastAPI service that combines deterministic credit risk scoring with explainable LLM-generated memos.
- **LifeScript** — A structured-generation app that turns a life moment into a cinematic three-act script.

## 2. Architecture

```
Frontend-only SSR application
├── React 19 + TypeScript
├── TanStack Start (SSR framework)
├── TanStack Router (file-based routing)
├── Vite 8 (build tool)
├── Tailwind CSS 4 (styling)
├── Nitro (server runtime)
└── Cloudflare Workers (deployment target)
```

**Routes:**

| Path      | Description                                  |
| --------- | -------------------------------------------- |
| `/`       | Homepage with all portfolio sections         |
| `/resume` | Printable resume page with PDF download link |

**No backend, database, authentication, or external APIs are required.** All content is static data defined in `src/lib/site.ts`.

## 3. Requirements

- **Node.js** 20 or newer
- **npm**, **pnpm**, or **Bun**

No external services, API keys, or databases are needed.

## 4. Installation

```bash
git clone https://github.com/Yuvateja-C/Portfolio.git
cd Portfolio
npm install
```

## 5. Environment Variables

This project does not require any environment variables. All content is statically defined.

## 6. Local Development

```bash
npm run dev
```

Open the local URL shown by Vite in your browser (typically `http://localhost:3000`).

## 7. Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run format`  | Format the project with Prettier     |

## 8. Production Build

```bash
npm run build
```

The build output goes to `.output/`. The production target is **Cloudflare Workers** (via Nitro's `cloudflare-module` preset).

To preview the production build locally:

```bash
npm run preview
```

## 9. Deployment

### Lovable (Primary)

This project is connected to [Lovable](https://lovable.dev). Commits pushed to the connected branch sync back to Lovable and deploy automatically.

### Cloudflare Workers / Pages

The build produces a Cloudflare-compatible worker in `.output/`. You can deploy with:

```bash
npm run build
npx nitro deploy --prebuilt
```

Or connect the repository to Cloudflare Pages with:

- **Build command:** `npm run build`
- **Build output directory:** `.output/public`

### Other Platforms

Since Nitro supports multiple presets, you can target other platforms by configuring the preset in `vite.config.ts`. See the [Nitro deployment docs](https://nitro.build/deploy).

## 10. Project Structure

```
src/
├── assets/             # Static asset metadata (resume PDF reference)
├── components/
│   ├── sections/       # Portfolio sections (Intro, About, Work, etc.)
│   ├── ui/             # Reusable shadcn/ui components
│   ├── custom-cursor.tsx
│   ├── section-frame.tsx
│   ├── site-nav.tsx
│   └── system-flow.tsx
├── hooks/              # Custom React hooks
│   ├── use-active-section.ts
│   ├── use-mobile.tsx
│   └── use-scroll-reveal.ts
├── lib/                # Utilities and data
│   ├── site.ts         # All portfolio content (projects, experience, etc.)
│   ├── utils.ts        # Tailwind class merge utility
│   ├── error-capture.ts
│   ├── error-page.ts
│   └── lovable-error-reporting.ts
├── routes/             # TanStack Router file-based routes
│   ├── __root.tsx      # Root layout with HTML shell and QueryClient
│   ├── index.tsx       # Homepage
│   └── resume.tsx      # Resume page
├── router.tsx          # Router creation
├── server.ts           # SSR server entry with error handling
├── start.ts            # TanStack Start configuration with CSRF middleware
├── styles.css          # Design system and all custom styles
└── routeTree.gen.ts    # Auto-generated route tree (do not edit)
```

## 11. External Services

None required. This is a fully self-contained static portfolio.

## 12. Editing Content

All portfolio content is centralized in [`src/lib/site.ts`](src/lib/site.ts):

- `PROFILE` — Name, links, headline, location
- `PROJECTS` — Featured project cards
- `EXPERIENCE` — Work experience entries
- `CAPABILITIES` — Technical skills
- `ACHIEVEMENTS` — Key accomplishments
- `JOURNEY` — Career timeline
- `GITHUB_REPOS` — Repository links

Update this single file to change portfolio content across all pages.

## 13. Contact

- **GitHub:** [Yuvateja-C](https://github.com/Yuvateja-C)
- **LinkedIn:** [C Yuva Teja](https://www.linkedin.com/in/c-yuva-teja-888621325)
- **Email:** [yuvatejac123@gmail.com](mailto:yuvatejac123@gmail.com)
