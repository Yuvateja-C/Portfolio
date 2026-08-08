import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import HUD from "@/components/HUD";
import Nav from "@/components/Nav";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C Yuva Teja — Generative AI Engineer",
  description:
    "Generative AI Engineer specializing in production LLM applications, RAG architectures, FastAPI microservices, and cloud-native AI platforms.",
  keywords: [
    "C Yuva Teja",
    "Generative AI Engineer",
    "GenAI Engineer",
    "LLM Architecture",
    "RAG Architecture",
    "FastAPI",
    "Python AI Engineering",
    "ChromaDB",
    "Groq API",
    "Apollo University",
  ],
  authors: [{ name: "C Yuva Teja", url: "https://github.com/Yuvateja-C" }],
  openGraph: {
    title: "C Yuva Teja — Generative AI Engineer",
    description:
      "Generative AI Engineer building production LLM systems, enterprise document RAG platforms, and credit underwriting microservices.",
    url: "https://github.com/Yuvateja-C",
    siteName: "C Yuva Teja Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C Yuva Teja — Generative AI Engineer",
    description:
      "Building production LLM systems, RAG pipelines, FastAPI backends, and cloud AI products.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "C Yuva Teja",
  jobTitle: "Generative AI Engineer",
  url: "https://github.com/Yuvateja-C",
  sameAs: [
    "https://github.com/Yuvateja-C",
    "https://www.linkedin.com/in/c-yuvateja-888621325",
  ],
  knowsAbout: [
    "Generative AI",
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "AI Agents",
    "Prompt Engineering",
    "FastAPI",
    "Python",
    "Vector Databases",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <div className="noise" aria-hidden="true" />
          <Cursor />
          <HUD />
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
