import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted leading-relaxed">
          Designed &amp; built by <span className="text-ink/70">{profile.name}</span> — {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted hover:text-accent transition-colors py-1 min-h-[36px] flex items-center"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted hover:text-accent transition-colors py-1 min-h-[36px] flex items-center"
          >
            LinkedIn
          </a>
          <a
            href={profile.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="EMAIL"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted hover:text-accent transition-colors py-1 min-h-[36px] flex items-center"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
