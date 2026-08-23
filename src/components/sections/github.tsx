import { ArrowUpRight } from "lucide-react";
import { SectionFrame } from "@/components/section-frame";
import { GITHUB_REPOS, PROFILE } from "@/lib/site";

export function GithubSection() {
  return (
    <SectionFrame id="github" index="08" label="GitHub">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[length:var(--text-lead)] leading-snug text-pretty text-ink-soft">
            The work lives in the open. Selected repositories below — the
            engineering focus is Generative AI systems, not a statistics wall.
          </p>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="cta cta-ink mt-8"
          >
            Explore the Code →
          </a>
          <p className="mt-4 text-small text-muted">{PROFILE.githubHandle}</p>
        </div>

        <ul className="lg:col-span-7">
          {GITHUB_REPOS.map((repo) => (
            <li key={repo.name} className="border-t border-line last:border-b">
              <div className="flex min-h-16 items-start justify-between gap-4 py-5">
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group min-w-0 flex-1"
                  data-cursor="hover"
                >
                  <span className="block font-display text-lg font-semibold tracking-tight">
                    {repo.name}
                  </span>
                  <span className="mt-1 block text-small text-muted">
                    {repo.blurb}
                  </span>
                </a>
                <span className="mt-1 flex shrink-0 items-center gap-3 text-muted">
                  <span className="meta hidden sm:inline">{repo.lang}</span>
                  {repo.live ? (
                    <a
                      href={repo.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-small font-semibold tracking-[0.06em] uppercase"
                    >
                      Live
                    </a>
                  ) : null}
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${repo.name} on GitHub`}
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionFrame>
  );
}
