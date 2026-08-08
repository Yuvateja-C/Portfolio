"use client";

import { useEffect, useState } from "react";
import { skillCategories, stack } from "@/lib/data";
import Reveal from "@/components/Reveal";

function ProgressBar({ level }: { level: number }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex-1 h-[2px] bg-line relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: ready ? `${level}%` : "0%" }}
      />
    </div>
  );
}

export default function Capabilities() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="section-03" className="relative py-20 md:py-36 bg-surface/40">
      <div id="capabilities" className="absolute top-0" />
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-accent">03</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            Technical Stack &amp; Skills
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              data-cursor="SELECT"
              className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-widest2 px-3 py-1.5 transition-all min-h-[36px] ${
                selectedCategory === cat
                  ? "bg-accent text-bg font-semibold"
                  : "border border-line text-ink/70 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16">
          {filteredCategories.map((catGroup, idx) => (
            <Reveal key={catGroup.category} dir="up" delay={idx * 0.05}>
              <div className="border border-line p-6 bg-surface/20 relative brackets">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    {catGroup.category}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest2 text-accent border border-accent/30 px-2 py-0.5">
                    Verified
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted mb-6">
                  {catGroup.description}
                </p>

                <div className="divide-y divide-line">
                  {catGroup.skills.map((s) => (
                    <div key={s.name} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm text-ink/85 font-medium">{s.name}</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest2 text-accent/80 border border-accent/20 px-1.5 py-0.2">
                          {s.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 w-full sm:w-36">
                        <ProgressBar level={s.level} />
                        <span className="font-mono text-[10px] text-ink/50 w-7 text-right">
                          {s.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Runtimes & Frameworks Wall */}
        <div className="pt-10 border-t border-line">
          <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-6">
            Production Tooling &amp; Runtimes
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((s, i) => (
              <Reveal key={s} dir="up" delay={i * 0.015}>
                <span className="inline-block font-mono text-[11px] text-ink/75 border border-line px-3 py-1.5 hover:border-accent hover:text-accent transition-colors">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
