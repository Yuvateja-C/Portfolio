import Reveal from "@/components/Reveal";
import { bio, focusAreas, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="section-02" className="relative py-20 md:py-36">
      <div id="about" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">02</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Professional Identity
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Main bio */}
          <div className="lg:col-span-7">
            <Reveal dir="up">
              <h2 className="font-display font-semibold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.04] tracking-tightest text-ink mb-8 sm:mb-10 text-balance">
                Software craft first.
                <br />
                Applied AI <span className="text-accent">that ships.</span>
              </h2>
            </Reveal>
            <div className="space-y-6 max-w-2xl">
              {bio.map((p, i) => (
                <Reveal key={i} dir="up" delay={i * 0.08}>
                  <p className="text-sm sm:text-[15px] md:text-base leading-relaxed text-ink/75">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Spec sheet & Focus areas */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
            <Reveal dir="right">
              <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-5">
                Technical Spec Sheet
              </div>
              <div className="divide-y divide-line border-t border-b border-line mb-10 sm:mb-12">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:py-3.5 gap-1 sm:gap-4">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest2 text-ink/60">
                      {s.label}
                    </span>
                    <span className="font-display font-semibold text-lg sm:text-xl text-accent">{s.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.15}>
              <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-5">
                Core Specialization Domains
              </div>
              <ul className="space-y-3">
                {focusAreas.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs md:text-sm text-ink/80 font-mono">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
