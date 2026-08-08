import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/data";

const categoryBadgeStyle: Record<string, string> = {
  ENGINEERING: "text-accent border-accent/40",
  INTERNSHIP: "text-ink/80 border-line2",
  DEPLOYMENT: "text-accent border-accent/40",
  ACADEMIC: "text-muted border-line",
};

export default function Timeline() {
  return (
    <section id="section-06" className="relative py-20 md:py-36 bg-surface/30">
      <div id="timeline" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">06</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Journey &amp; Milestones
          </span>
        </div>

        <div className="relative pl-5 sm:pl-8 border-l border-line space-y-10 sm:space-y-16">
          {timeline.map((item, idx) => (
            <Reveal key={item.year + item.title} dir="up" delay={idx * 0.08}>
              <div className="relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[25px] sm:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border border-accent group-hover:bg-accent transition-colors" />

                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-accent border border-accent/30 px-2 sm:px-2.5 py-0.5 sm:py-1">
                    {item.year}
                  </span>
                  <span
                    className={`font-mono text-[9px] uppercase tracking-widest2 border px-2 py-0.5 ${
                      categoryBadgeStyle[item.category] || "text-muted border-line"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-ink mb-2 break-words">
                  {item.title}
                </h3>

                <p className="text-sm md:text-[15px] leading-relaxed text-ink/70 max-w-3xl mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-ink/75">
                      <span className="text-accent font-mono text-xs font-bold leading-none mt-1">
                        ›
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
