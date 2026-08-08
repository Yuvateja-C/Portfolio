import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="section-05" className="relative py-20 md:py-36">
      <div id="experience" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">05</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Professional Experience &amp; Build Log
          </span>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.company} dir="up" delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-6 sm:py-8 border-t border-line group">
                {/* Left col: dates & duration */}
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest2 text-muted flex flex-wrap items-center md:flex-col md:items-start gap-2 md:gap-1">
                  <span className={e.current ? "text-accent font-semibold" : "text-ink/70"}>
                    {e.start} → {e.end}
                  </span>
                  <span className="text-muted/70">({e.duration})</span>
                </div>

                {/* Right col: role details & impact points */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-ink group-hover:text-accent transition-colors break-words">
                      {e.role}
                    </h3>
                    {e.current && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest2 text-accent border border-accent/40 bg-accent/5 px-2 py-0.5">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse flex-shrink-0" />
                        Active Role
                      </span>
                    )}
                  </div>

                  <div className="font-mono text-xs text-accent/80 mb-4">
                    {e.company} — <span className="text-ink/50">{e.location}</span>
                  </div>

                  <p className="text-sm text-ink/70 leading-relaxed max-w-3xl mb-4 font-sans">
                    {e.summary}
                  </p>

                  {/* Impact bullet points */}
                  <ul className="space-y-2 mb-5">
                    {e.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-ink/80">
                        <span className="text-accent font-mono text-xs font-bold leading-none mt-1">
                          ›
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech / Competency tags */}
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-widest2 text-ink/50 border border-line px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
