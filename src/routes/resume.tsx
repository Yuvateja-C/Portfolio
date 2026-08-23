import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import {
  CAPABILITIES,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
} from "@/lib/site";
import resumePdf from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    meta: [
      { title: "C Yuva Teja — Resume | Generative AI Engineer" },
      { name: "description", content: "Resume of C Yuva Teja, Generative AI Engineer. Experience, selected projects, and capabilities in RAG systems, LLMs, and AI engineering." },
      { property: "og:title", content: "C Yuva Teja — Resume | Generative AI Engineer" },
      { property: "og:description", content: "Resume of C Yuva Teja, Generative AI Engineer. Experience, selected projects, and capabilities in RAG systems, LLMs, and AI engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ResumePage() {
  return (
    <main className="min-h-dvh bg-paper px-[var(--space-page)] py-12 text-ink">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link to="/" className="meta text-accent">
            ← Back to portfolio
          </Link>
          <a
            href={resumePdf.url}
            download="C_Yuva_Teja_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-small font-semibold text-ink transition-colors hover:bg-paper-deep"
          >
            <Download className="size-4" aria-hidden="true" />
            Download resume (PDF)
          </a>
        </div>

        <header className="mt-8 border-b border-line pb-8">
          <h1 className="font-display text-4xl font-semibold tracking-[-0.03em]">
            {PROFILE.shortName}
          </h1>
          <p className="mt-2 font-display text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            {PROFILE.identity}
          </p>
          <p className="mt-4 max-w-xl text-[length:var(--text-body)] leading-relaxed text-muted">
            {PROFILE.headline} {PROFILE.availability}
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-small">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={PROFILE.gmailCompose} target="_blank" rel="noreferrer">
              Email
            </a>
            <span className="text-muted">{PROFILE.location}</span>
          </p>
        </header>

        <section className="border-b border-line py-8">
          <h2 className="meta text-accent">Experience</h2>
          <div className="mt-6 flex flex-col gap-8">
            {EXPERIENCE.map((role) => (
              <article key={role.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    {role.role}
                  </h3>
                  <span className="meta">{role.period}</span>
                </div>
                <p className="mt-1 text-small text-muted">{role.org}</p>
                <p className="mt-3 text-[length:var(--text-body)] leading-relaxed">
                  {role.summary}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-small text-muted">
                  {role.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-line py-8">
          <h2 className="meta text-accent">Selected work</h2>
          <ul className="mt-6 space-y-5">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <h3 className="font-display text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="mt-1 text-small leading-relaxed text-muted">
                  {project.proposition}
                </p>
                <p className="mt-2 text-[0.7rem] tracking-[0.06em] text-muted uppercase">
                  {project.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8">
          <h2 className="meta text-accent">Capabilities</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {([CAPABILITIES.primary, CAPABILITIES.engineering, CAPABILITIES.toolkit] as const).map(
              (group) => (
                <div key={group.title}>
                  <h3 className="font-display text-base font-semibold">
                    {group.title}
                  </h3>
                  <ul className="mt-2 space-y-1 text-small text-muted">
                    {group.items.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
