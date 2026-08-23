import { ArrowUpRight } from "lucide-react";
import { SectionFrame } from "@/components/section-frame";
import { SystemFlow } from "@/components/system-flow";
import { PROJECTS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WorkSection() {
  const [flagship, ...rest] = PROJECTS;

  return (
    <SectionFrame id="work" index="03" label="Selected Work" tone="night">
      {flagship ? <Flagship project={flagship} /> : null}

      <div className="mt-16 grid gap-px bg-line-night md:grid-cols-2">
        {rest.map((project, i) => (
          <article
            key={project.slug}
            className={cn(
              "bg-night p-6 md:p-10",
              i === rest.length - 1 && rest.length % 2 === 1 && "md:col-span-2",
            )}
          >
            <p className="meta text-muted-on-night">{project.repo}</p>
            <h3 className="mt-4 font-display text-[length:var(--text-title)] font-semibold tracking-[-0.03em] text-balance">
              {project.name}
            </h3>
            <p className="mt-3 max-w-xl text-[length:var(--text-body)] leading-relaxed text-pretty text-muted-on-night">
              {project.proposition}
            </p>
            <SystemFlow steps={project.flow} />
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="meta text-stone">The problem</dt>
                <dd className="mt-2 text-small leading-relaxed text-pretty text-paper/80">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="meta text-stone">The solution</dt>
                <dd className="mt-2 text-small leading-relaxed text-pretty text-paper/80">
                  {project.solution}
                </dd>
              </div>
            </dl>
            <ul className="mt-8 space-y-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="border-l border-line-night pl-4 text-small leading-relaxed text-muted-on-night"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Stack chips={project.stack} night />
            <Links github={project.github} live={project.live} night />
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}

function Flagship({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <article className="border border-line-night p-6 md:p-12">
      <p className="meta text-stone">Flagship · {project.repo}</p>
      <h3 className="mt-5 max-w-4xl font-display text-[clamp(2rem,1.2rem+3vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance">
        {project.name}
      </h3>
      <p className="mt-5 max-w-2xl text-[length:var(--text-lead)] leading-snug text-pretty text-muted-on-night">
        {project.proposition}
      </p>
      <SystemFlow steps={project.flow} />

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h4 className="meta text-stone">The problem</h4>
          <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty text-paper/85">
            {project.problem}
          </p>
          <h4 className="meta mt-8 text-stone">The AI system</h4>
          <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-pretty text-paper/85">
            {project.solution}
          </p>
        </div>
        <div className="lg:col-span-5">
          <h4 className="meta text-stone">Engineering highlights</h4>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="border-t border-line-night pt-3 text-small leading-relaxed text-muted-on-night"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Stack chips={project.stack} night />
      <Links github={project.github} live={project.live} night />
    </article>
  );
}

function Stack({ chips, night }: { chips: readonly string[]; night?: boolean }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <li
          key={chip}
          className={cn(
            "rounded-full px-3 py-1 text-[0.7rem] tracking-[0.08em] uppercase",
            night
              ? "border border-line-night text-stone"
              : "border border-line text-muted",
          )}
        >
          {chip}
        </li>
      ))}
    </ul>
  );
}

function Links({
  github,
  live,
  night,
}: {
  github: string;
  live: string | null;
  night?: boolean;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-6">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className={cn("project-link", night && "text-stone")}
      >
        GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={cn("project-link", night && "text-stone")}
        >
          Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
