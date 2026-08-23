export const PROFILE = {
  name: "C YUVA TEJA",
  shortName: "C Yuva Teja",
  identity: "GENERATIVE AI ENGINEER",
  location: "Chittoor",
  email: "yuvatejac123@gmail.com",
  github: "https://github.com/Yuvateja-C",
  githubHandle: "Yuvateja-C",
  linkedin: "https://www.linkedin.com/in/c-yuva-teja-888621325",
  headline: "I engineer Generative AI systems that retrieve, reason, and decide.",
  availability: "Open to internships, collaborations, and Generative AI roles.",
  now: "Building production-oriented RAG systems, local LLM products, and APIs that hold up outside a demo.",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=yuvatejac123@gmail.com",
} as const;

export const SECTIONS = [
  { id: "intro", index: "01", label: "Introduction" },
  { id: "about", index: "02", label: "About" },
  { id: "work", index: "03", label: "Selected Work" },
  { id: "experience", index: "04", label: "Experience" },
  { id: "capabilities", index: "05", label: "Capabilities" },
  { id: "achievements", index: "06", label: "Achievements" },
  { id: "journey", index: "07", label: "Journey" },
  { id: "github", index: "08", label: "GitHub" },
  { id: "connect", index: "09", label: "Connect" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const PROJECTS = [
  {
    slug: "researchai",
    flagship: true,
    name: "ResearchAI",
    repo: "AI-Research-Assistant",
    github: "https://github.com/Yuvateja-C/AI-Research-Assistant",
    live: "https://ai-research-assistant-six-theta.vercel.app",
    flow: ["Parse", "Chunk", "Embed", "Retrieve", "Generate", "Stream"],
    proposition:
      "A vector-powered document analysis platform that turns large PDFs, textbooks, and code into structured research.",
    problem:
      "Researchers and engineers still lose hours extracting signal from long documents. Generic chat interfaces do not persist workspace context, handle multi-format files, or survive model outages.",
    solution:
      "A decoupled RAG system: FastAPI ingests and chunks documents, Gemini embeddings land in ChromaDB, and answers stream over SSE. OpenRouter is primary; Groq and Gemini are fallbacks.",
    highlights: [
      "768-dimension embeddings with gemini-embedding-001",
      "Multi-format parsing — PDF, Office, notebooks, CSV, code",
      "SSE-streamed RAG answers with workspace-scoped retrieval",
      "JWT sessions, email verification, and 2FA",
      "Multi-provider LLM routing with graceful fallback",
    ],
    stack: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Gemini Embeddings",
      "OpenRouter",
      "Groq",
      "SQLite",
      "React",
    ],
  },
  {
    slug: "investorlens",
    flagship: false,
    name: "InvestorLens AI",
    repo: "AI-Startup-evaluator",
    github: "https://github.com/Yuvateja-C/AI-Startup-evaluator",
    live: "https://ai-startup-evaluator-xdvm.onrender.com",
    flow: ["Idea", "Prompt", "LLaMA 3", "Parse JSON", "Score", "Verdict"],
    proposition:
      "A local-LLM evaluator that scores startup ideas like an investor — privately, offline, and without API cost.",
    problem:
      "Cloud LLM evaluators leak ideas, cost money, and fail without a network. Founders and students need a private way to pressure-test concepts.",
    solution:
      "Ollama hosts LLaMA 3 locally. Structured prompts return a 0–100 score, invest/reject verdict, and reasoning. A fallback parser recovers messy model JSON.",
    highlights: [
      "Local LLaMA 3 via Ollama — free, private, offline-capable",
      "Investor modes: Friendly, Strict, and Shark",
      "Robust JSON extraction from inconsistent model output",
      "Auth, persistence, and a leaderboard of evaluated ideas",
    ],
    stack: ["Python", "Ollama", "LLaMA 3", "Streamlit", "SQLite", "Prompt Engineering"],
  },
  {
    slug: "memo-api",
    flagship: false,
    name: "Loan Underwriting Memo API",
    repo: "Memo_API",
    github: "https://github.com/Yuvateja-C/Memo_API",
    live: "https://creditsentinel-kkg7.onrender.com/docs",
    flow: ["Applicant", "Bureau", "Risk score", "Groq", "Memo JSON"],
    proposition:
      "A FastAPI microservice that writes explainable credit memos in under a second.",
    problem:
      "Indian NBFC underwriting still depends on slow, inconsistent narrative memos. Decisions need speed, a deterministic risk score, and language a credit officer can defend.",
    solution:
      "Applicant and bureau records merge on application ID. A weighted CIBIL + FOIR score classifies risk. Groq LLaMA 3.1 writes three underwriting reasons into a six-section JSON memo.",
    highlights: [
      "Sub-second generation with llama-3.1-8b-instant",
      "Deterministic risk score from CIBIL and FOIR",
      "Structured six-section memo and decision",
      "15,000+ Indian loan records as the evaluation set",
      "Non-fatal fallback when an external bureau call fails",
    ],
    stack: ["Python", "FastAPI", "Groq", "LLaMA 3.1", "Credit Risk", "JSON APIs"],
  },
  {
    slug: "lifescript",
    flagship: false,
    name: "LifeScript",
    repo: "LifeScript",
    github: "https://github.com/Yuvateja-C/LifeScript",
    live: "https://lifescript-vl3t.onrender.com",
    flow: ["Moment", "Persona", "Structured JSON", "Three-act script"],
    proposition:
      "An emotionally intelligent generator that turns a life moment into a cinematic three-act script.",
    problem:
      "Most LLM demos are chat boxes. The harder craft is structured generation — genre, arc, and voice — without storing anything the user writes.",
    solution:
      "A Groq-hosted model returns strict JSON: genre, tagline, three-act structure, director’s note, and a color palette. Sessions are ephemeral. Nothing is saved.",
    highlights: [
      "Structured JSON prompting with a cinematic persona",
      "Emotional-arc and genre classification",
      "Zero storage — real-time, ephemeral inference",
      "openai/gpt-oss-20b via Groq",
    ],
    stack: ["Python", "Flask", "Groq", "Prompt Engineering", "Structured Output"],
  },
] as const;

export const EXPERIENCE = [
  {
    org: "Skillvance Technologies",
    role: "Generative AI Engineer",
    type: "Internship",
    location: "Remote · India",
    period: "2026",
    duration: "3 mos",
    summary:
      "Engineered an AI underwriting microservice for Indian lending workflows — deterministic risk scoring paired with LLM-written credit narrative.",
    contributions: [
      "Built the Loan Underwriting Memo API on FastAPI, returning structured six-section memos in under a second.",
      "Designed a weighted CIBIL and FOIR risk model that classifies LOW / MEDIUM / HIGH and maps to approve, conditional, or reject.",
      "Integrated Groq-hosted LLaMA 3.1 to generate three defendable underwriting reasons from merged applicant and bureau data.",
      "Evaluated the pipeline against 15,000+ diverse Indian loan records and documented the service with OpenAPI.",
    ],
    stack: ["FastAPI", "Groq", "LLaMA 3.1", "Python", "Credit Data"],
  },
  {
    org: "Independent Practice",
    role: "Generative AI Engineer",
    type: "Self-employed",
    location: "Chittoor, Andhra Pradesh, India · Remote",
    period: "2026 — Present",
    duration: "Present",
    summary:
      "Designing and shipping Generative AI products end-to-end — retrieval systems, local LLMs, and structured generation — as public, deployed work.",
    contributions: [
      "Designed ResearchAI, a RAG platform with ChromaDB, Gemini embeddings, and multi-provider LLM fallback.",
      "Shipped InvestorLens AI with local LLaMA 3 via Ollama so idea evaluation can run privately and offline.",
      "Built LifeScript and MoodMirror as product-shaped experiments in prompt design, structured output, and emotional UX.",
      "Deployed multiple Python AI applications to public hosts and kept the work open-source under MIT.",
    ],
    stack: ["RAG", "Ollama", "FastAPI", "Streamlit", "Prompt Engineering"],
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Structure over chat",
    body: "Scores, memos, and retrieval answers — not an unbounded conversation.",
  },
  {
    title: "Local when it matters",
    body: "Ollama and LLaMA 3 when an idea should never leave the machine.",
  },
  {
    title: "Fallback is the product",
    body: "Messy JSON, dead providers, failed bureau calls — the system still returns.",
  },
] as const;

export const CAPABILITIES = {
  primary: {
    title: "Generative AI",
    items: [
      { name: "Large Language Models", note: "LLaMA 3, Gemini, Groq-hosted models" },
      { name: "RAG Systems", note: "Chunking, embeddings, workspace retrieval" },
      { name: "AI Agents & Workflows", note: "Evaluation loops, fallback routing" },
      { name: "Prompt Engineering", note: "Structured JSON, personas, investor modes" },
      { name: "Embeddings & Vector Stores", note: "Gemini embeddings, ChromaDB" },
      { name: "LLM APIs", note: "OpenRouter, Groq, Gemini, Ollama" },
      { name: "AI Evaluation", note: "Scoring, verdicts, robust output parsing" },
    ],
  },
  engineering: {
    title: "AI Engineering",
    items: [
      { name: "Python", note: "Core language for every system" },
      { name: "FastAPI", note: "Production AI microservices" },
      { name: "Model Integration", note: "Local and hosted inference" },
      { name: "AI Pipelines", note: "Parse → chunk → embed → generate" },
      { name: "Backend Systems", note: "Auth, sessions, SQLite, SSE" },
      { name: "Deployment", note: "Render, Netlify, public APIs" },
    ],
  },
  toolkit: {
    title: "Engineering Toolkit",
    items: [
      { name: "Git & GitHub", note: "Open-source project history" },
      { name: "Render", note: "Live Python AI applications" },
      { name: "Netlify", note: "Frontend hosting where used" },
      { name: "OpenAPI", note: "Documented FastAPI services" },
    ],
  },
} as const;

export const ACHIEVEMENTS = [
  {
    title: "Sub-second credit memos",
    detail:
      "Engineered Groq-backed underwriting generation that returns a structured JSON memo in under one second.",
  },
  {
    title: "15,000+ loan records evaluated",
    detail:
      "Ran the memo pipeline against a diverse Indian applicant and bureau dataset used for risk classification.",
  },
  {
    title: "Private local-LLM product",
    detail:
      "Shipped InvestorLens AI on Ollama + LLaMA 3 so startup evaluation can run offline, without a paid API.",
  },
  {
    title: "Multi-provider RAG platform",
    detail:
      "Built ResearchAI with Gemini embeddings, ChromaDB retrieval, SSE streaming, and OpenRouter / Groq / Gemini fallbacks.",
  },
  {
    title: "Public AI deployments",
    detail:
      "Deployed InvestorLens, LifeScript, MoodMirror, and the Memo API docs as live services.",
  },
] as const;

export const JOURNEY = [
  {
    phase: "Foundation",
    period: "Jun 2026",
    title: "First deployed ML system",
    body: "IPL Data Analytics — Pandas, scikit-learn, and Streamlit. Team performance, toss impact, and match-winner models on a public dashboard.",
  },
  {
    phase: "Exploration",
    period: "Jul 2026",
    title: "Product-shaped AI",
    body: "MoodMirror — a small emotional reflection app. The shift from notebooks to an experience people can actually use.",
  },
  {
    phase: "AI Engineering",
    period: "Jul 2026",
    title: "Production APIs",
    body: "Loan Underwriting Memo API — FastAPI, deterministic risk, and Groq LLaMA 3.1. Generative AI as a service, not a demo.",
  },
  {
    phase: "Generative AI Systems",
    period: "Aug 2026",
    title: "Local LLMs and RAG",
    body: "InvestorLens on Ollama, LifeScript with structured cinematic generation, and ResearchAI — a full retrieval platform.",
  },
  {
    phase: "Building What's Next",
    period: "Now",
    title: "Toward production AI products",
    body: "Going deeper on evaluation, reliability, and systems that hold up outside a laptop — internships, collaborations, and ambitious AI products.",
  },
] as const;

export const GITHUB_REPOS = [
  {
    name: "AI-Research-Assistant",
    blurb: "ResearchAI — RAG document analysis platform.",
    href: "https://github.com/Yuvateja-C/AI-Research-Assistant",
    lang: "Python",
    live: "https://ai-research-assistant-six-theta.vercel.app",
  },
  {
    name: "AI-Startup-evaluator",
    blurb: "InvestorLens AI — local LLaMA 3 idea evaluator.",
    href: "https://github.com/Yuvateja-C/AI-Startup-evaluator",
    lang: "Python",
    live: "https://ai-startup-evaluator-xdvm.onrender.com",
  },
  {
    name: "Memo_API",
    blurb: "Loan underwriting memos with Groq LLaMA 3.1.",
    href: "https://github.com/Yuvateja-C/Memo_API",
    lang: "Python",
    live: "https://creditsentinel-kkg7.onrender.com/docs",
  },
  {
    name: "LifeScript",
    blurb: "Cinematic life scripts from structured generation.",
    href: "https://github.com/Yuvateja-C/LifeScript",
    lang: "Python",
    live: "https://lifescript-vl3t.onrender.com",
  },
  {
    name: "moodmirror",
    blurb: "Emotional reflection as a small AI product.",
    href: "https://github.com/Yuvateja-C/moodmirror",
    lang: "Python",
    live: "https://moodmirror-vgcz.onrender.com",
  },
] as const;
