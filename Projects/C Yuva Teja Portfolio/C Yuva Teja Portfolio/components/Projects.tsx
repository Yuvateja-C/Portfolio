"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects, Project } from "@/lib/data";

const linkLabel: Record<string, string> = {
  github: "GitHub Repository",
  live: "Live Demo",
  docs: "API Docs",
};

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal dir="up" delay={index * 0.04}>
      <div className="py-12 md:py-16 border-t border-line group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Index & Flagship Tag */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-4">
            <span className="font-display font-semibold text-4xl sm:text-5xl lg:text-7xl text-ink/15 group-hover:text-accent/30 transition-colors">
              {p.index}
            </span>
            {p.flagship && (
              <span className="font-mono text-[9px] uppercase tracking-widest2 text-accent border border-accent/40 bg-accent/5 px-2.5 py-1">
                ★ Flagship System
              </span>
            )}
          </div>

          {/* Right Column: Case Study Details */}
          <div className="lg:col-span-9">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors text-balance break-words">
                {p.name}
              </h3>
            </div>

            <p className="font-mono text-xs text-accent mb-4">{p.tagline}</p>

            {/* Problem & Solution block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-5 bg-surface/30 border border-line mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-1">
                  The Problem
                </div>
                <p className="text-xs md:text-sm text-ink/70 leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-accent mb-1">
                  The Engineering Solution
                </div>
                <p className="text-xs md:text-sm text-ink/85 leading-relaxed">{p.solution}</p>
              </div>
            </div>

            {/* Key Features Drawer */}
            {expanded && (
              <div className="mb-6 p-4 sm:p-5 border border-line2 bg-surface/50 space-y-2 animate-fadeIn">
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-2">
                  Key Architectural Features
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {p.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-ink/80 font-mono">
                      <span className="text-accent font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-widest2 text-ink/60 border border-line px-2.5 py-1 break-words"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest2 text-accent">
                  {p.meta}
                </span>
                <button
                  onClick={() => setExpanded(!expanded)}
                  data-cursor="TOGGLE"
                  className="font-mono text-[10px] uppercase tracking-widest2 text-muted hover:text-accent underline transition-colors min-h-[36px] flex items-center"
                >
                  {expanded ? "Hide Details ↑" : "View Architecture ↓"}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={l.kind === "github" ? "OPEN" : "LIVE"}
                    className={`inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest2 transition-colors min-h-[36px] ${
                      l.kind === "live"
                        ? "bg-accent text-bg px-3 py-1.5 font-semibold hover:bg-white"
                        : "text-ink/80 hover:text-accent border-b border-transparent hover:border-accent pb-0.5"
                    }`}
                  >
                    {linkLabel[l.kind]} <span>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="section-04" className="relative py-20 md:py-36 bg-surface/40">
      <div id="projects" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">04</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Featured Projects &amp; Case Studies
          </span>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
