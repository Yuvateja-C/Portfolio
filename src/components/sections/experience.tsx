import { SectionFrame } from "@/components/section-frame";
import { EXPERIENCE } from "@/lib/site";

export function ExperienceSection() {
  return (
    <SectionFrame id="experience" index="04" label="Experience">
      <ol className="mx-auto max-w-3xl">
        {EXPERIENCE.map((role) => (
          <li
            key={role.org}
            className="relative grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 sm:grid-cols-[3.5rem_1fr] sm:gap-5"
          >
            {/* Company mark — LinkedIn-style avatar */}
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line bg-paper-deep font-display text-lg font-bold tracking-tight text-accent sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              {role.org.charAt(0)}
            </div>

            <div className="min-w-0">
              <h3 className="font-display text-[length:var(--text-title)] leading-tight font-semibold tracking-[-0.02em]">
                {role.role}
              </h3>
              <p className="mt-1 text-[length:var(--text-body)] text-ink-soft">
                {role.org}
                <span className="text-muted"> · {role.type}</span>
              </p>
              <p className="mt-0.5 text-small text-muted">
                {role.period} · {role.duration}
              </p>
              <p className="text-small text-muted">{role.location}</p>

              <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-soft">
                {role.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {role.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[length:var(--text-body)] leading-relaxed text-pretty text-muted"
                  >
                    <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-small text-ink-soft">
                <span className="font-semibold">Skills: </span>
                {role.stack.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionFrame>
  );
}
