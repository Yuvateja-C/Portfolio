import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/custom-cursor";
import { SiteNav } from "@/components/site-nav";
import { AboutSection } from "@/components/sections/about";
import { AchievementsSection } from "@/components/sections/achievements";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { ConnectSection } from "@/components/sections/connect";
import { ExperienceSection } from "@/components/sections/experience";
import { GithubSection } from "@/components/sections/github";
import { IntroSection } from "@/components/sections/intro";
import { JourneySection } from "@/components/sections/journey";
import { WorkSection } from "@/components/sections/work";
import { useActiveSection } from "@/hooks/use-active-section";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "C Yuva Teja — Generative AI Engineer Portfolio" },
      { name: "description", content: "Portfolio of C Yuva Teja, a Generative AI Engineer building RAG systems, local LLM products, and production AI APIs." },
      { property: "og:title", content: "C Yuva Teja — Generative AI Engineer Portfolio" },
      { property: "og:description", content: "Portfolio of C Yuva Teja, a Generative AI Engineer building RAG systems, local LLM products, and production AI APIs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NIGHT_SECTIONS = new Set(["intro", "work", "capabilities", "journey", "connect"]);

function Home() {
  const active = useActiveSection();
  const inverted = NIGHT_SECTIONS.has(active);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <CustomCursor />
      <SiteNav active={active} inverted={inverted} />
      <main className="min-w-0 overflow-x-hidden">
        <IntroSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <AchievementsSection />
        <JourneySection />
        <GithubSection />
        <ConnectSection />
      </main>
    </>
  );
}
