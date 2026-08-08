"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { SECTIONS } from "@/lib/sections";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      targetEl.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
      // Update hash without triggering immediate scroll jump
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[8000] transition-colors duration-300 pt-[env(safe-area-inset-top,0px)]"
      style={{
        background: scrolled || mobileMenuOpen ? "rgba(5,5,5,0.92)" : "transparent",
        backdropFilter: scrolled || mobileMenuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled || mobileMenuOpen ? "1px solid rgba(255,255,255,0.09)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-page mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#section-01"
          onClick={(e) => handleNavClick(e, "section-01")}
          data-cursor="TOP"
          className="font-display font-semibold text-xs sm:text-sm md:text-base tracking-wider text-ink hover:text-accent transition-colors flex items-center whitespace-nowrap"
        >
          <span>C YUVA TEJA</span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Links - 9 Sections */}
        <ul className="hidden xl:flex items-center gap-5">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleNavClick(e, s.id)}
                data-cursor="GO"
                className="font-mono text-[10px] uppercase tracking-widest2 text-muted hover:text-accent transition-colors flex items-center gap-1.5"
              >
                <span className="text-accent/80 font-bold">{s.number}</span>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Mid-size view fallback (Condensed labels) */}
        <ul className="hidden lg:flex xl:hidden items-center gap-4">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleNavClick(e, s.id)}
                data-cursor="GO"
                className="font-mono text-[10px] uppercase tracking-wider text-muted hover:text-accent transition-colors flex items-center gap-1"
                title={`${s.number} ${s.name}`}
              >
                <span className="text-accent font-bold">{s.number}</span>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href={profile.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="EMAIL"
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest2 border border-line2 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 text-ink hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
          >
            Say Hello
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            data-cursor="MENU"
            className="lg:hidden p-2 text-ink hover:text-accent focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg/95 border-b border-line px-6 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="space-y-1 divide-y divide-line/30">
            {SECTIONS.map((s) => (
              <li key={s.id} className="pt-2">
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleNavClick(e, s.id)}
                  className="font-mono text-sm uppercase tracking-widest2 text-ink/90 hover:text-accent py-2.5 min-h-[44px] flex items-center justify-between"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-accent font-bold text-xs">{s.number}</span>
                    <span>{s.name}</span>
                  </span>
                  <span className="text-xs text-muted font-mono">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-line font-mono text-[10px] uppercase tracking-widest2 text-muted leading-relaxed flex items-center justify-between">
            <span>9 Primary Sections</span>
            <span className="text-accent">{profile.status}</span>
          </div>
        </div>
      )}
    </header>
  );
}
