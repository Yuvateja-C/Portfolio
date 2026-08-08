import Reveal from "@/components/Reveal";
import { education, languages } from "@/lib/data";

export default function Education() {
  return (
    <section id="section-08" className="relative py-20 md:py-36">
      <div id="education" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">08</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">Education</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          <Reveal dir="up" className="md:col-span-7">
            <h3 className="font-display font-semibold text-xl sm:text-2xl md:text-4xl text-ink tracking-tightest mb-3 text-balance break-words">
              {education.degree}
            </h3>
            <div className="font-mono text-xs sm:text-sm text-accent mb-1 break-words">{education.field}</div>
            <div className="text-xs sm:text-sm text-ink/60 mb-6 leading-relaxed">
              {education.school} · {education.duration} · {education.location}
            </div>
            <span className="inline-block font-mono text-[10px] uppercase tracking-widest2 text-ink/70 border border-line px-3 py-1.5 max-w-full leading-relaxed">
              {education.status}
            </span>
          </Reveal>

          <Reveal dir="right" delay={0.1} className="md:col-span-5 md:pl-6 md:border-l md:border-line">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-5">Languages</div>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-line pb-3">
                  <span className="text-sm text-ink/80">{l.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">{l.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
