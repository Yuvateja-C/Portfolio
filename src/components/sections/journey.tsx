import { SectionFrame } from "@/components/section-frame";
import { JOURNEY } from "@/lib/site";

export function JourneySection() {
  return (
    <SectionFrame id="journey" index="07" label="Engineering Journey" tone="night">
      <p className="max-w-xl text-[length:var(--text-lead)] leading-snug text-pretty text-muted-on-night">
        Foundation → Exploration → AI Engineering → Generative AI Systems →
        Building what's next.
      </p>

      <ol className="journey-track mt-14 border-t border-line-night lg:border-t-0">
        {JOURNEY.map((step, i) => (
          <li
            key={step.phase}
            className="relative border-line-night py-8 lg:border-t lg:pr-6 lg:pt-10"
          >
            <span
              className="absolute top-0 left-0 hidden h-px w-8 bg-stone lg:block"
              aria-hidden="true"
            />
            <p className="meta text-stone">
              {String(i + 1).padStart(2, "0")} · {step.period}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
              {step.phase}
            </h3>
            <p className="mt-2 text-small font-medium text-paper">{step.title}</p>
            <p className="mt-3 text-small leading-relaxed text-pretty text-muted-on-night">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </SectionFrame>
  );
}
