import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PROFILE } from "@/lib/site";
import resumePdf from "@/assets/resume.pdf.asset.json";

const LINKS = [
  {
    label: "GitHub",
    hint: "Read the systems",
    href: PROFILE.github,
  },
  {
    label: "Email",
    hint: "Write a note",
    href: PROFILE.gmailCompose,
  },
  {
    label: "LinkedIn",
    hint: "Connect there",
    href: PROFILE.linkedin,
  },
] as const;

export function ConnectSection() {
  return (
    <section
      id="connect"
      className="scroll-mt-20 bg-night text-paper"
      aria-labelledby="connect-title"
    >
      <div className="page-shell py-[var(--space-section)]">
        <h2
          id="connect-title"
          className="max-w-3xl font-display text-[length:var(--text-section)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance"
        >
          Let's build something interesting.
        </h2>
        <p className="mt-6 max-w-lg text-[length:var(--text-lead)] leading-snug text-pretty text-muted-on-night">
          {PROFILE.availability} If the problem is real, I want to engineer it.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="connect-card"
            >
              <span className="meta text-stone">{link.hint}</span>
              <span className="mt-10 flex items-end justify-between">
                <span className="font-display text-3xl font-semibold tracking-tight">
                  {link.label}
                </span>
                <ArrowUpRight className="size-6 text-stone" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-small text-muted-on-night">
          <span>
            {PROFILE.shortName} · Generative AI Engineer
          </span>
          <Link to="/resume" className="text-stone">
            Printable resume
          </Link>
          <a
            href={resumePdf.url}
            download="C_Yuva_Teja_Resume.pdf"
            className="text-stone"
          >
            Download resume (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}
