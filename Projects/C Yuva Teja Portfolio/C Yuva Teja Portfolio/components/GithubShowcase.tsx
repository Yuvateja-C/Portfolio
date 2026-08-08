import Reveal from "@/components/Reveal";
import { githubStats, profile } from "@/lib/data";

export default function GithubShowcase() {
  return (
    <section id="section-07" className="relative py-20 md:py-36 border-t border-line">
      <div id="github" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">07</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Engineering Activity &amp; Repositories
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left panel: Profile telemetry */}
          <div className="lg:col-span-5 border border-line p-5 sm:p-8 relative brackets">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-accent mb-4">
              GitHub Profile Telemetry
            </div>
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink mb-2 break-words">
              {profile.name}
            </h3>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="inline-block font-mono text-xs text-accent hover:underline mb-6 break-all"
            >
              @{profile.githubHandle.replace("github.com/", "")}
            </a>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-line mb-6">
              <div>
                <div className="font-display font-semibold text-3xl text-ink">
                  {githubStats.totalRepos}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mt-1">
                  Public AI Repositories &amp; Microservices
                </div>
              </div>
              <div>
                <div className="font-display font-semibold text-3xl text-ink">06</div>
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mt-1">
                  Live Cloud Deployments
                </div>
              </div>
            </div>

            <p className="text-xs text-ink/60 leading-relaxed mb-6">
              Every system is built open source or hosted with production Swagger API endpoints, live cloud runtimes, and clean git histories.
            </p>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="inline-flex items-center gap-2 border border-line2 px-5 py-2.5 font-mono text-xs uppercase tracking-widest2 text-ink hover:text-accent hover:border-accent transition-colors w-full justify-center"
            >
              Explore GitHub Profile <span>→</span>
            </a>
          </div>

          {/* Right panel: Repository Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {githubStats.publicProjects.map((repo, i) => (
              <Reveal key={repo.name} dir="up" delay={i * 0.04}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN"
                  className="group block border border-line hover:border-accent/60 p-5 bg-surface/20 hover:bg-surface/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-accent border border-accent/30 px-2 py-0.5">
                      {repo.lang}
                    </span>
                    <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                      ↗
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-base text-ink group-hover:text-accent transition-colors mb-2 truncate">
                    {repo.name}
                  </h4>
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                    Public Repository · Verified Codebase
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
