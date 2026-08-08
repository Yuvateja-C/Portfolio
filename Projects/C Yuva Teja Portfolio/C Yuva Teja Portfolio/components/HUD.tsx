"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";

export default function HUD() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 1. Scroll progress indicator calculation
    let ticking = false;
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // 2. IntersectionObserver for active section tracking
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Determine which section is most visible / in focus
        if (visibleSections.size > 0) {
          let maxRatio = -1;
          let bestId = SECTIONS[0].id;

          visibleSections.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              bestId = id;
            }
          });

          const idx = SECTIONS.findIndex((s) => s.id === bestId || s.alias === bestId);
          if (idx !== -1) {
            setActiveIndex(idx);
          }
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id) || document.getElementById(s.alias);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, []);

  const currentSection = SECTIONS[activeIndex] || SECTIONS[0];

  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-[9000] hidden lg:flex items-end gap-3 select-none pointer-events-none">
      <div className="font-mono text-[9px] leading-tight text-right text-muted/80">
        <div className="text-muted tracking-widest2">
          {currentSection.number} / {String(SECTIONS.length).padStart(2, "0")} —{" "}
          <span className="text-ink/60">{currentSection.label}</span>
        </div>
        <div className="mt-1 text-muted/70 tracking-widest2">13.20°N 79.10°E · CHITTOOR AP</div>
      </div>
      <div className="w-[2px] h-12 bg-white/10 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full bg-accent"
          style={{ height: `${progress * 100}%`, transition: "height .1s linear" }}
        />
      </div>
    </div>
  );
}
