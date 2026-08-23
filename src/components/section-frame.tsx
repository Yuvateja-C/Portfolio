import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export function SectionFrame({
  id,
  index: _index,
  label,
  children,
  tone = "paper",
  className,
}: {
  id: string;
  index?: string;
  label: string;
  children: ReactNode;
  tone?: "paper" | "night";
  className?: string;
}) {
  const ref = useScrollReveal<HTMLElement>();
  const night = tone === "night";

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "scroll-reveal relative scroll-mt-20",
        night ? "bg-night text-paper" : "bg-paper text-ink",
        className,
      )}
      aria-labelledby={`${id}-title`}
    >
      <div className="page-shell py-[var(--space-section)]">
        <header className="mb-10 md:mb-16">
          <h2

            id={`${id}-title`}
            className="font-display text-[length:var(--text-section)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance"
          >
            {label}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
