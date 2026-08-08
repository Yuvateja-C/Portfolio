"use client";

import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

const contactCards = [
  {
    title: "GitHub",
    description: "View my projects & code",
    href: profile.github,
    cursor: "OPEN",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    title: "Email",
    description: "Get in touch",
    href: profile.gmailUrl,
    cursor: "EMAIL",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    description: "Connect with me",
    href: profile.linkedin,
    cursor: "OPEN",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="section-09" className="relative py-20 md:py-36 border-t border-line">
      <div id="contact" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">09</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Contact</span>
        </div>

        {/* Heading */}
        <Reveal dir="up">
          <h2 className="font-display font-semibold text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[0.95] tracking-tightest text-ink mb-12 sm:mb-16">
            Let&apos;s build something.
          </h2>
        </Reveal>

        {/* 3 Clickable Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6">
          {contactCards.map((card, idx) => (
            <Reveal key={card.title} dir="up" delay={idx * 0.08}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={card.cursor}
                className="group relative block border border-line hover:border-accent/80 p-6 sm:p-8 bg-surface/30 hover:bg-surface/60 transition-all duration-300 brackets min-h-[160px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-10 h-10 border border-line group-hover:border-accent group-hover:text-accent text-ink/70 flex items-center justify-center transition-colors">
                    {card.icon}
                  </div>
                  <span className="font-mono text-xs text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink group-hover:text-accent transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="font-mono text-xs text-muted group-hover:text-ink/80 transition-colors">
                    {card.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Footnote Status Bar */}
        <Reveal dir="up" delay={0.3}>
          <div className="mt-12 sm:mt-16 pt-8 border-t border-line font-mono text-[10px] uppercase tracking-widest2 text-muted flex flex-wrap items-center justify-between gap-4 leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <span>{profile.status} · {profile.location}</span>
            </div>
            <span className="text-muted/60">Digital Contact Gateway</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
