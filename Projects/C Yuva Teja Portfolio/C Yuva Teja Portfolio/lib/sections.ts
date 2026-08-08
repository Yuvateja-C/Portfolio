export interface SectionConfig {
  number: string;
  id: string;
  alias: string;
  name: string;
  label: string;
  subtitle: string;
}

export const SECTIONS: SectionConfig[] = [
  {
    number: "01",
    id: "section-01",
    alias: "hero",
    name: "Hero",
    label: "INTRO",
    subtitle: "System Overview & Profile",
  },
  {
    number: "02",
    id: "section-02",
    alias: "about",
    name: "About",
    label: "ABOUT",
    subtitle: "Professional Identity",
  },
  {
    number: "03",
    id: "section-03",
    alias: "capabilities",
    name: "Capabilities",
    label: "SKILLS",
    subtitle: "Technical Stack & Skills",
  },
  {
    number: "04",
    id: "section-04",
    alias: "projects",
    name: "Projects",
    label: "PROJECTS",
    subtitle: "Featured Projects & Case Studies",
  },
  {
    number: "05",
    id: "section-05",
    alias: "experience",
    name: "Experience",
    label: "EXPERIENCE",
    subtitle: "Professional Experience & Build Log",
  },
  {
    number: "06",
    id: "section-06",
    alias: "timeline",
    name: "Timeline",
    label: "JOURNEY",
    subtitle: "Journey & Milestones",
  },
  {
    number: "07",
    id: "section-07",
    alias: "github",
    name: "GitHub",
    label: "GITHUB",
    subtitle: "Engineering Activity & Repositories",
  },
  {
    number: "08",
    id: "section-08",
    alias: "education",
    name: "Education",
    label: "EDUCATION",
    subtitle: "Academic Qualifications & Languages",
  },
  {
    number: "09",
    id: "section-09",
    alias: "contact",
    name: "Contact",
    label: "CONTACT",
    subtitle: "Get In Touch",
  },
];

export function getSectionByNumber(num: string): SectionConfig | undefined {
  return SECTIONS.find((s) => s.number === num);
}

export function getSectionById(id: string): SectionConfig | undefined {
  return SECTIONS.find((s) => s.id === id || s.alias === id);
}
