export const profile = {
  name: "C Yuva Teja",
  initials: "C YUVA TEJA",
  role: "Generative AI Engineer",
  titles: [
    "Generative AI Engineer",
    "LLM & RAG Architect",
    "FastAPI & Backend Engineer",
    "AI Agents & RAG Specialist",
    "B.Tech CSE Student",
  ],
  location: "Chittoor, Andhra Pradesh, India",
  email: "yuvatejac123@gmail.com",
  gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=yuvatejac123@gmail.com",
  github: "https://github.com/Yuvateja-C",
  githubHandle: "github.com/Yuvateja-C",
  linkedin: "https://www.linkedin.com/in/c-yuvateja-888621325",
  linkedinHandle: "c-yuvateja-888621325",
  status: "Open to Generative AI Engineer roles & internships",
  heroLine1: "ENGINEERING",
  heroLine2: "INTELLIGENT",
  heroLine3: "AI SYSTEMS.",
  heroDesc:
    "Generative AI Engineer specializing in LLMs, RAG architectures, and production AI systems — from automated loan underwriting for fintech to enterprise document intelligence and AI narrative engines. I build scalable AI systems that actually ship.",
};

export const bio = [
  "I'm C Yuva Teja, a Generative AI Engineer and B.Tech Computer Science student at Apollo University (2024–2028), based in Chittoor, Andhra Pradesh.",
  "My work centers on large language models, retrieval-augmented generation (RAG), and cloud-native backend development using Python and FastAPI. I specialize in taking complex AI research models and embedding them into high-throughput, production-ready web platforms — complete with vector databases, custom prompt pipelines, and real-time streaming interfaces.",
  "From enterprise document analysis SaaS to automated fintech underwriting microservices processing 15,000+ loan profiles, I focus on software craft, system performance, and real-world product utility. Open to GenAI engineering roles, internships, and technical research collaborations.",
];

export const focusAreas = [
  "Generative AI & LLM Applications",
  "RAG Systems & Vector Search (ChromaDB / FAISS)",
  "AI Agents & Autonomous Workflow Automation",
  "FastAPI, Flask & Cloud-Native Backend Engineering",
  "Machine Learning & Predictive Data Analytics",
  "Production Deployment & Cloud Infrastructure",
];

export const stats = [
  { value: "05", label: "Professional Roles / Internships" },
  { value: "06", label: "Production AI Projects Shipped" },
  { value: "06", label: "Live Cloud Deployments" },
  { value: "15K+", label: "Financial Records Processed" },
  { value: "2028", label: "B.Tech CSE Batch" },
];

export const companies = [
  "Skillvance Technologies",
  "WRINDHA OS",
  "Sri Padmavati Mahila Visvavidyam",
  "Alfido Tech",
  "Cognifyz Technologies",
  "Apollo University",
];

export type SkillCategory = {
  category: string;
  description: string;
  skills: { name: string; level: number; tag: "CORE" | "APPLIED" | "TOOLING" }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Generative AI",
    description: "LLMs, RAG, AI Agents, Prompt Engineering & NLP",
    skills: [
      { name: "LLMs & Prompt Engineering", level: 92, tag: "CORE" },
      { name: "RAG & Vector Retrieval", level: 88, tag: "CORE" },
      { name: "Structured JSON Output Pipelines", level: 90, tag: "CORE" },
      { name: "AI Agents & Tool Calling", level: 85, tag: "APPLIED" },
      { name: "NLP & Emotion Classification", level: 84, tag: "APPLIED" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "FastAPI, Microservices, Async I/O, REST APIs & Auth",
    skills: [
      { name: "Python Systems Programming", level: 92, tag: "CORE" },
      { name: "FastAPI & Microservices", level: 90, tag: "CORE" },
      { name: "Flask & REST API Architecture", level: 86, tag: "CORE" },
      { name: "Pydantic & Data Validation", level: 88, tag: "TOOLING" },
      { name: "JWT Authentication & 2FA", level: 82, tag: "APPLIED" },
      { name: "SSE Real-Time Streaming", level: 85, tag: "APPLIED" },
    ],
  },
  {
    category: "AI Infrastructure & Vector DBs",
    description: "Vector Stores, Embeddings, Groq LLMs & Ollama",
    skills: [
      { name: "ChromaDB & FAISS Vector Search", level: 88, tag: "CORE" },
      { name: "Groq Cloud API & LLaMA 3.1", level: 90, tag: "CORE" },
      { name: "Ollama Local LLM Runtimes", level: 85, tag: "CORE" },
      { name: "OpenRouter & Multi-Provider APIs", level: 84, tag: "TOOLING" },
      { name: "Text Embeddings & Semantic Search", level: 86, tag: "APPLIED" },
    ],
  },
  {
    category: "Frontend & Interfaces",
    description: "React, Vite, Next.js, Streamlit & Dynamic UIs",
    skills: [
      { name: "Streamlit Interactive Dashboards", level: 90, tag: "CORE" },
      { name: "React.js & Vite SPA Development", level: 85, tag: "CORE" },
      { name: "Tailwind CSS & Vanilla CSS Design", level: 86, tag: "CORE" },
      { name: "Framer Motion & GSAP Micro-Animations", level: 80, tag: "TOOLING" },
      { name: "JavaScript / TypeScript", level: 82, tag: "APPLIED" },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    description: "Predictive Analytics, Feature Engineering & Modeling",
    skills: [
      { name: "Pandas & NumPy Data Wrangling", level: 88, tag: "CORE" },
      { name: "Scikit-Learn ML Models", level: 84, tag: "CORE" },
      { name: "Random Forest & Logistic Regression", level: 85, tag: "APPLIED" },
      { name: "Exploratory Data Analysis (EDA)", level: 90, tag: "CORE" },
      { name: "Seaborn & Matplotlib Visualization", level: 82, tag: "TOOLING" },
    ],
  },
  {
    category: "Deployment & DevOps",
    description: "Cloud Runtimes, CI/CD, Git & Production Tooling",
    skills: [
      { name: "Git & GitHub Version Control", level: 90, tag: "CORE" },
      { name: "Render Cloud Deployment", level: 88, tag: "CORE" },
      { name: "Vercel Frontend Hosting", level: 88, tag: "CORE" },
      { name: "Swagger & OpenAPI Documentation", level: 86, tag: "TOOLING" },
      { name: "Razorpay Payment Gateway Integration", level: 80, tag: "APPLIED" },
    ],
  },
];

export const stack = [
  "Python", "FastAPI", "Flask", "Groq LLMs", "LLaMA 3.1", "Ollama",
  "ChromaDB", "FAISS", "RAG Architecture", "Pydantic", "Streamlit",
  "React.js / Vite", "TailwindCSS", "SQLite", "JWT + 2FA", "SSE Streaming",
  "Swagger / OpenAPI", "Render", "Vercel", "Scikit-learn", "Pandas",
  "NumPy", "OpenRouter", "Razorpay", "Git",
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Social Media Marketing Specialist",
    company: "WRINDHA OS",
    location: "Chittoor, AP",
    start: "JUN 2026",
    end: "PRESENT",
    duration: "2 mos",
    current: true,
    summary:
      "Leading brand growth strategy, content production, and digital campaign optimization across primary developer and business networks.",
    bullets: [
      "Engineered multi-channel social media growth strategy across LinkedIn and Instagram, driving measurable brand reach and community engagement.",
      "Optimized structured content calendars and analyzed campaign performance telemetry to support B2B lead generation funnels.",
      "Utilized data analytics tools to evaluate audience engagement metrics and refine brand messaging.",
    ],
    tags: ["Social Strategy", "Content Analytics", "LinkedIn Marketing", "Digital Branding", "Growth Metrics"],
  },
  {
    role: "Generative AI Engineer Intern",
    company: "Skillvance Technologies",
    location: "Remote",
    start: "MAY 2026",
    end: "JUL 2026",
    duration: "3 mos",
    summary:
      "Architected and deployed an AI-driven credit underwriting memo engine utilizing Groq-hosted LLaMA models, FastAPI backends, and cloud runtimes.",
    bullets: [
      "Architected an automated AI loan memo generation platform using Python, FastAPI, and Groq-hosted LLaMA models.",
      "Engineered prompt and data integration pipelines to transform raw applicant financial metrics (income, FOIR, CIBIL scores) into structured 6-section evaluation reports in <1 second.",
      "Implemented Swagger/OpenAPI specifications, conducted end-to-end integration testing, and managed production cloud deployment on Render with secure environment secrets.",
    ],
    tags: ["Groq LLMs", "FastAPI", "Python", "Swagger / OpenAPI", "Render Cloud", "Fintech AI"],
  },
  {
    role: "Data Analyst Intern",
    company: "Sri Padmavati Mahila Visvavidyam",
    location: "Tirupati, AP",
    start: "MAY 2026",
    end: "JUN 2026",
    duration: "2 mos",
    summary:
      "Built an end-to-end IPL data analytics platform featuring predictive machine learning models and interactive visual analytics.",
    bullets: [
      "Executed exploratory data analysis (EDA) across historical IPL cricket datasets to isolate key match-winning performance indicators.",
      "Trained and validated predictive Machine Learning models utilizing Random Forest and Logistic Regression algorithms.",
      "Shipped an interactive Streamlit dashboard enabling real-time match outcome simulations and visual metric analytics.",
    ],
    tags: ["Random Forest", "Logistic Regression", "Streamlit", "Pandas", "NumPy", "EDA"],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Alfido Tech",
    location: "Remote",
    start: "MAR 2026",
    end: "MAR 2026",
    duration: "1 mo",
    summary:
      "Implemented hands-on artificial intelligence workflows, model evaluation scripts, and practical Python AI automation pipelines.",
    bullets: [
      "Tested and evaluated practical AI algorithms and open-source model pipelines for real-world application scenarios.",
      "Built Python script workflows to automate data preprocessing and model evaluation metrics.",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Python Automation", "Model Testing"],
  },
  {
    role: "Data Analyst Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    start: "FEB 2026",
    end: "FEB 2026",
    duration: "1 mo",
    summary:
      "Applied structured data cleaning, statistical modeling, and visual analytics to extract actionable insights from complex datasets.",
    bullets: [
      "Performed structured data cleaning, exploratory data analysis, and trend identification across diverse tabular datasets.",
      "Generated analytical reporting dashboards and visualizations to communicate quantitative findings effectively.",
    ],
    tags: ["Data Analysis", "Python", "Data Visualization", "Pandas", "Data Cleaning"],
  },
];

export type Project = {
  index: string;
  name: string;
  tagline: string;
  flagship?: boolean;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  links: { label: string; href: string; kind: "github" | "live" | "docs" }[];
  meta: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "ResearchAI — Intelligent Document Analysis SaaS",
    tagline: "Enterprise vector-powered document & repository intelligence platform.",
    flagship: true,
    problem:
      "Extracting critical insights, metrics, and structured reports from massive PDFs, technical documentation, or codebases requires hours of manual reading.",
    solution:
      "Engineered an enterprise AI document intelligence platform powered by FastAPI, ChromaDB vector store, and Groq/OpenRouter LLMs that indexes large documents and repo files for instantaneous RAG query analysis with SSE streaming response feeds.",
    features: [
      "Full RAG retrieval pipeline with ChromaDB vector embeddings",
      "FastAPI asynchronous backend with SSE real-time streaming",
      "Vite + React modern single page application interface",
      "JWT authentication with optional 2FA security",
      "Razorpay payment gateway integration for subscription tiers",
    ],
    stack: ["FastAPI", "React.js / Vite", "ChromaDB", "Groq / OpenRouter", "Pydantic", "JWT + 2FA", "Razorpay", "SQLite", "Render + Vercel", "SSE Streaming"],
    meta: "165+ Commits · Production RAG Platform",
    links: [
      { label: "GitHub", href: "https://github.com/Yuvateja-C/AI-Research-Assistant", kind: "github" },
      { label: "Live Demo", href: "https://ai-research-assistant-tan.vercel.app", kind: "live" },
    ],
  },
  {
    index: "02",
    name: "Loan Underwriting Memo API",
    tagline: "Production FastAPI microservice for AI-powered credit evaluation.",
    flagship: true,
    problem:
      "Manual credit underwriting for Indian NBFCs is slow, error-prone, and lacks standardized qualitative risk scoring.",
    solution:
      "Built a high-performance REST microservice that merges financial inputs with CIBIL bureau data, computes a deterministic CIBIL + FOIR risk score, and generates a comprehensive 6-section evaluation memo in <1 second via Groq-hosted LLaMA 3.1.",
    features: [
      "Pre-loaded database of 15,000+ financial applicant records",
      "Deterministic risk formula engine (CIBIL + FOIR weighting)",
      "Groq-hosted LLaMA 3.1 automated 6-section underwriting memo",
      "Production OpenAPI / Swagger documentation & schema validation",
      "Deployed on Vercel & Render cloud runtimes",
    ],
    stack: ["FastAPI", "Groq / LLaMA 3.1", "Python", "Pydantic", "CIBIL Scoring", "REST API", "Swagger", "Vercel · Render"],
    meta: "15,000+ Loan Records · <1s Latency",
    links: [
      { label: "GitHub", href: "https://github.com/Yuvateja-C/Memo_API", kind: "github" },
      { label: "Live Demo", href: "https://memo-api-nine.vercel.app", kind: "live" },
      { label: "API Docs", href: "https://creditsentinel-kkg7.onrender.com/docs", kind: "docs" },
    ],
  },
  {
    index: "03",
    name: "LifeScript — Cinematic AI Narrative Engine",
    tagline: "Emotionally intelligent web app that translates real life into movie scripts.",
    flagship: false,
    problem:
      "Personal journaling and reflection tools lack narrative engagement, failing to convert complex life situations into structured perspective.",
    solution:
      "Engineered an AI narrative engine using Python, Flask, and Groq API (gpt-oss-20b) that analyzes input life situations to generate complete 3-act movie scripts with director notes, emotional arcs, and cinematic color palettes.",
    features: [
      "Structured JSON output prompt engineering with Hollywood director personas",
      "3-Act narrative arc decomposition and dramatic tagline extraction",
      "Director's Note perspective generation & color theory palette mapping",
      "Zero-storage ephemeral privacy design with zero data persistence",
      "Cinematic dark UI with typewriter text presentation",
    ],
    stack: ["Python", "Flask", "Groq API", "Structured Prompts", "HTML5/CSS3", "JavaScript", "Render Deployment"],
    meta: "Newly Shipped 2026 · Render Deployment",
    links: [
      { label: "GitHub", href: "https://github.com/Yuvateja-C/LifeScript", kind: "github" },
      { label: "Live Demo", href: "https://lifescript-vl3t.onrender.com", kind: "live" },
    ],
  },
  {
    index: "04",
    name: "InvestorLens AI — Startup Idea Evaluator",
    tagline: "Local LLM startup evaluator running via Ollama runtime.",
    flagship: false,
    problem:
      "Founders often lack instant, objective feedback on early-stage startup ideas before pitching to investors.",
    solution:
      "Created an interactive evaluation system running on local LLaMA 3 via Ollama that scores startup concepts out of 100 with detailed rationale across three distinct investor personas: Friendly, Strict, and Shark.",
    features: [
      "Multi-persona LLM evaluation engine (Friendly, Strict, Shark)",
      "Local LLM inference pipeline using Ollama and LLaMA 3",
      "Resilient JSON fallback parser for structured scoring output",
      "SQLite persistent storage with community evaluation leaderboard",
      "Streamlit dynamic interface with interactive metrics",
    ],
    stack: ["Ollama / LLaMA 3", "Streamlit", "Python", "SQLite", "JSON Pipeline", "Render"],
    meta: "3 Investor Personas · Local LLM",
    links: [
      { label: "GitHub", href: "https://github.com/Yuvateja-C/AI-Startup-evaluator", kind: "github" },
      { label: "Live Demo", href: "https://ai-startup-evaluator-xdvm.onrender.com", kind: "live" },
    ],
  },
  {
    index: "05",
    name: "IPL Data Analytics & Match Winner Predictor",
    tagline: "Machine learning platform for match predictions & historical EDA.",
    flagship: false,
    problem:
      "Extracting predictive sports insights from massive historical match datasets requires rigorous feature engineering and clean ML modeling.",
    solution:
      "Built a data analytics and machine learning solution using Random Forest and Logistic Regression classifiers trained on historical IPL match data to forecast match winners with an interactive Streamlit visualization dashboard.",
    features: [
      "Exploratory Data Analysis (EDA) isolating key winning indicators",
      "Predictive modeling using Random Forest & Logistic Regression",
      "Real-time team matchup simulation & win probability estimator",
      "Interactive Seaborn & Matplotlib data visualizations",
      "Deployed interactive dashboard on Render",
    ],
    stack: ["Random Forest", "Logistic Regression", "Scikit-learn", "Streamlit", "Pandas", "NumPy", "Render"],
    meta: "Machine Learning · Historical EDA",
    links: [
      { label: "GitHub", href: "https://github.com/Yuvateja-C/IPL_DATAANALYTICS", kind: "github" },
      { label: "Live Demo", href: "https://ipl-dataanalytics.onrender.com", kind: "live" },
    ],
  },
  {
    index: "06",
    name: "MoodMirror — AI Emotional Reflection Engine",
    tagline: "Rule-based NLP text classification & emotional analysis engine.",
    flagship: false,
    problem:
      "Digital journaling platforms rarely categorize subtle emotional signals or provide actionable psychological grounding.",
    solution:
      "Developed a rule-based Natural Language Processing application in Python that categorizes text sentiment across positive, neutral, and low emotional states, returning cinematic reflections and personalized suggestions.",
    features: [
      "Rule-based NLP text classification & sentiment analysis",
      "Cinematic reflection generator tailored to user emotional state",
      "Actionable self-care & productivity recommendations",
      "Lightweight, fast Python web deployment on Render",
    ],
    stack: ["NLP", "Python", "Rule-Based AI", "Text Analysis", "Render Deployment"],
    meta: "NLP Text Engine · Applied AI",
    links: [
      { label: "GitHub", href: "https://github.com/Yuvateja-C/moodmirror", kind: "github" },
      { label: "Live Demo", href: "https://moodmirror-vgcz.onrender.com", kind: "live" },
    ],
  },
];

export type Milestone = {
  year: string;
  title: string;
  category: "ENGINEERING" | "INTERNSHIP" | "DEPLOYMENT" | "ACADEMIC";
  description: string;
  highlights: string[];
};

export const timeline: Milestone[] = [
  {
    year: "2024",
    title: "Computer Science Foundation & System Core",
    category: "ACADEMIC",
    description: "Commenced B.Tech Computer Science & Engineering degree at Apollo University.",
    highlights: [
      "Mastered core Python, data structures, algorithms, and software engineering principles.",
      "Built early database-backed web applications and utility scripts.",
    ],
  },
  {
    year: "2025",
    title: "Applied Machine Learning & Local LLM Systems",
    category: "ENGINEERING",
    description: "Expanded into applied machine learning, local LLM orchestration, and initial data engineering internships.",
    highlights: [
      "Completed AI & Data Analyst internships at Cognifyz Technologies and Alfido Tech.",
      "Architected InvestorLens AI using Ollama local LLaMA 3 runtimes and custom JSON parsers.",
      "Mastered pandas, scikit-learn, and Streamlit interactive data platforms.",
    ],
  },
  {
    year: "2026",
    title: "Production GenAI Engineering, RAG SaaS & Microservices",
    category: "DEPLOYMENT",
    description: "Scaled production AI engineering: RAG SaaS, fintech credit APIs, and cinematic narrative engines.",
    highlights: [
      "Shipped ResearchAI — enterprise document analysis RAG platform with FastAPI, ChromaDB, and SSE streaming.",
      "Built CreditSentinel Loan Underwriting Memo API processing 15,000+ records in <1s.",
      "Shipped LifeScript AI narrative engine using Groq API and structured JSON prompt pipelines.",
      "Completed Generative AI internship at Skillvance Technologies & Data Analytics internship at SPMVV.",
    ],
  },
];

export const githubStats = {
  totalRepos: 6,
  publicProjects: [
    { name: "AI-Research-Assistant", stars: 0, forks: 0, lang: "Python / React", url: "https://github.com/Yuvateja-C/AI-Research-Assistant" },
    { name: "Memo_API", stars: 0, forks: 0, lang: "Python / FastAPI", url: "https://github.com/Yuvateja-C/Memo_API" },
    { name: "LifeScript", stars: 0, forks: 0, lang: "Python / Flask", url: "https://github.com/Yuvateja-C/LifeScript" },
    { name: "AI-Startup-evaluator", stars: 0, forks: 1, lang: "Python / Streamlit", url: "https://github.com/Yuvateja-C/AI-Startup-evaluator" },
    { name: "IPL_DATAANALYTICS", stars: 0, forks: 0, lang: "Python / Scikit-learn", url: "https://github.com/Yuvateja-C/IPL_DATAANALYTICS" },
    { name: "moodmirror", stars: 0, forks: 0, lang: "Python / NLP", url: "https://github.com/Yuvateja-C/moodmirror" },
  ],
};

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering (CSE)",
  school: "Apollo University",
  duration: "2024 – 2028",
  location: "Chittoor, Andhra Pradesh",
  status: "Enrolled · 3rd Year CSE",
};

export const languages = [
  { name: "Telugu", level: "Native / Full Professional" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Hindi", level: "Conversational Proficiency" },
];
