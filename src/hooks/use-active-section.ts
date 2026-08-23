import { useEffect, useState } from "react";
import { SECTIONS, type SectionId } from "@/lib/site";

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("intro");

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (nodes.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId: SectionId = "intro";
        let bestRatio = -1;
        for (const section of SECTIONS) {
          const ratio = visible.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = section.id;
          }
        }
        setActive(bestId);
      },
      {
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
        rootMargin: "-12% 0px -45% 0px",
      },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return active;
}
