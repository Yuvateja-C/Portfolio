"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let ti = 0;
    let ci = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = profile.titles[ti];
      if (!deleting) {
        ci++;
        setTyped(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
      } else {
        ci--;
        setTyped(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ti = (ti + 1) % profile.titles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 35 : 65);
    };

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="section-01" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 pb-16">
      <div id="hero" className="absolute top-0" />
      <div className="grid-field" aria-hidden="true" />

      <div className="relative max-w-page mx-auto w-full px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-6 sm:mb-8">
          <span className="font-mono text-xs text-accent">01</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            System Overview &amp; Profile
          </span>
        </div>
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest2 text-ink/80 mb-6 border border-accent/40 bg-accent/5 px-3 py-1.5 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-full leading-relaxed ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: "0.15s" }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span className="break-words">{profile.status}</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display font-semibold leading-[0.92] tracking-tightest text-ink">
          <span
            className={`block text-[clamp(2.2rem,8.5vw,5.8rem)] overflow-hidden transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
            }`}
            style={{ transitionDelay: "0.25s" }}
          >
            {profile.heroLine1}
          </span>
          <span
            className={`block text-[clamp(2.2rem,8.5vw,5.8rem)] overflow-hidden transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
            }`}
            style={{ transitionDelay: "0.33s" }}
          >
            {profile.heroLine2}
          </span>
          <span
            className={`block text-[clamp(2.2rem,8.5vw,5.8rem)] text-accent overflow-hidden transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
            }`}
            style={{ transitionDelay: "0.41s" }}
          >
            {profile.heroLine3}
          </span>
        </h1>

        {/* Dynamic Typing Title */}
        <div
          className={`mt-6 flex items-baseline gap-2 font-mono text-xs sm:text-sm md:text-base text-accent transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "0.75s" }}
        >
          <span className="text-accent/60">&gt;</span>
          <span className="font-medium tracking-wide break-all">{typed}</span>
          <span className="inline-block w-[2px] h-[1em] bg-accent animate-pulse flex-shrink-0" />
        </div>

        {/* Hero Description */}
        <p
          className={`mt-6 max-w-2xl text-xs sm:text-[15px] md:text-base leading-relaxed text-ink/75 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "0.85s" }}
        >
          {profile.heroDesc}
        </p>

        {/* Action CTAs */}
        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "0.95s" }}
        >
          <a
            href="#section-04"
            data-cursor="VIEW"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-ink text-bg px-5 sm:px-6 py-3.5 font-mono text-xs uppercase tracking-widest2 overflow-hidden font-semibold text-center min-h-[44px]"
          >
            <span className="relative z-10">Inspect Projects</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="inline-flex items-center justify-center gap-2 border border-line2 px-5 sm:px-6 py-3.5 font-mono text-xs uppercase tracking-widest2 text-ink/80 hover:text-accent hover:border-accent transition-colors text-center min-h-[44px]"
          >
            GitHub Repositories
          </a>
          <a
            href={profile.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="EMAIL"
            className="inline-flex items-center justify-center gap-2 border border-line px-5 sm:px-6 py-3.5 font-mono text-xs uppercase tracking-widest2 text-ink/70 hover:text-accent hover:border-accent transition-colors text-center min-h-[44px]"
          >
            Contact Candidate
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`relative max-w-page mx-auto w-full px-4 sm:px-6 md:px-10 mt-12 md:mt-0 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 flex items-center gap-3 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: "1.2s" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">Scroll to explore</span>
        <span className="w-8 h-[1px] bg-line2" />
        <span
          className="w-1.5 h-1.5 bg-accent rounded-full"
          style={{ animation: "scrollDot 1.6s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(28px); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
