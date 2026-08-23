import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PROFILE, SECTIONS, type SectionId } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "work" as const, label: "Work" },
  { id: "experience" as const, label: "Experience" },
  { id: "connect" as const, label: "Connect" },
];

export function SiteNav({
  active,
  inverted,
}: {
  active: SectionId;
  inverted: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const night = inverted;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        night
          ? "text-paper"
          : "text-ink",
        scrolled && !open
          ? night
            ? "bg-night/88 backdrop-blur-md"
            : "bg-paper/88 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="page-shell flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#intro"
          className={cn(
            "font-display text-[0.95rem] font-semibold tracking-[0.14em] uppercase",
            night ? "text-paper" : "text-ink",
          )}
        >
          {PROFILE.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-active={active === item.id}
              className={cn("nav-link", night && "nav-link-night")}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/resume"
            className={cn("nav-link", night && "nav-link-night")}
          >
            Resume
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "relative flex h-11 w-11 items-center justify-center md:hidden",
            night ? "text-paper" : "text-ink",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span
            className={cn(
              "absolute h-px w-5 transition-transform duration-200",
              night ? "bg-paper" : "bg-ink",
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 transition-transform duration-200",
              night ? "bg-paper" : "bg-ink",
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "md:hidden",
          night ? "bg-night text-paper" : "bg-paper text-ink",
        )}
      >
        <nav
          className="page-shell flex min-h-[calc(100dvh-4rem)] flex-col gap-1 py-8"
          aria-label="Mobile"
        >
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "flex min-h-12 items-baseline justify-between border-b py-3",
                night ? "border-line-night" : "border-line",
              )}
            >
              <span className="font-display text-2xl font-semibold tracking-tight">
                {section.label}
              </span>
              
            </a>
          ))}
          <Link
            to="/resume"
            onClick={() => setOpen(false)}
            className={cn(
              "flex min-h-12 items-baseline justify-between border-b py-3",
              night ? "border-line-night" : "border-line",
            )}
          >
            <span className="font-display text-2xl font-semibold tracking-tight">
              Resume
            </span>
            
          </Link>
        </nav>
      </div>
    </header>
  );
}
