import { SectionFrame } from "@/components/section-frame";
import { ACHIEVEMENTS } from "@/lib/site";

export function AchievementsSection() {
  return (
    <SectionFrame id="achievements" index="06" label="Achievements">
      <ol className="grid gap-0 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <li
            key={item.title}
            className="border-t border-line py-8 pr-0 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
          >
            <span className="section-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-balance">
              {item.title}
            </h3>
            <p className="mt-3 max-w-md text-[length:var(--text-body)] leading-relaxed text-pretty text-muted">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </SectionFrame>
  );
}
