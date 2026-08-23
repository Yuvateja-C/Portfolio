import { ArrowDownRight } from "lucide-react";
import { PROFILE } from "@/lib/site";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-dvh scroll-mt-20 flex-col justify-end bg-night text-paper"
      aria-labelledby="intro-title"
    >
      <div className="page-shell flex flex-1 flex-col justify-end pb-16 pt-28 md:pb-20 md:pt-32">
        <p className="section-index reveal text-muted-on-night">
          01 — Introduction
        </p>

        <h1
          id="intro-title"
          className="reveal reveal-delay-1 mt-6 max-w-full font-display text-[length:var(--text-display)] leading-[0.86] font-extrabold tracking-[-0.05em]"
        >
          <span className="block lg:inline">C </span>
          <span className="block lg:inline">YUVA </span>
          <span className="block lg:inline">TEJA</span>
        </h1>

        <p className="reveal reveal-delay-2 mt-6 font-display text-[clamp(0.95rem,0.7rem+1.2vw,1.75rem)] font-semibold tracking-[0.12em] text-stone uppercase sm:tracking-[0.18em]">
          {PROFILE.identity}
        </p>

        <p className="reveal reveal-delay-3 mt-8 max-w-xl text-[length:var(--text-lead)] leading-snug text-pretty text-muted-on-night">
          {PROFILE.headline}
        </p>

        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="cta cta-solid">
            Explore My Work
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="cta cta-ghost"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="cta cta-ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="page-shell flex items-center justify-between border-t border-line-night py-5 text-muted-on-night">
        <span className="meta max-w-[70%] text-pretty">
          {PROFILE.location} · Open to internships
        </span>
        <a href="#about" className="meta inline-flex items-center gap-2 text-stone">
          Scroll
          <ArrowDownRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
