import type { LocalizedText } from "@/lib/i18n";

export const strings: {
  nav: Record<"about" | "skills" | "projects" | "contact", LocalizedText>;
  hero: Record<"viewProjects" | "resume", LocalizedText>;
  about: Record<"education" | "basedIn" | "languages", LocalizedText>;
  skills: Record<"toolsHeading" | "radarCaption", LocalizedText>;
  projects: Record<"github" | "repoPending", LocalizedText>;
  footer: Record<"addLinkedin", LocalizedText>;
} = {
  nav: {
    about: { en: "about", pl: "o mnie" },
    skills: { en: "skills", pl: "umiejętności" },
    projects: { en: "projects", pl: "projekty" },
    contact: { en: "contact", pl: "kontakt" },
  },
  hero: {
    viewProjects: { en: "View projects", pl: "Zobacz projekty" },
    resume: { en: "↓ Resume", pl: "↓ CV" },
  },
  about: {
    education: { en: "education", pl: "wykształcenie" },
    basedIn: { en: "based in", pl: "lokalizacja" },
    languages: { en: "languages", pl: "języki" },
  },
  skills: {
    toolsHeading: { en: "tools & infrastructure", pl: "narzędzia i infrastruktura" },
    radarCaption: {
      en: "self-rated proficiency — illustrative values, to confirm with Kanstantsin",
      pl: "poziom oceniony samodzielnie — wartości poglądowe, do potwierdzenia przez Kanstantsina",
    },
  },
  projects: {
    github: { en: "github ↗", pl: "github ↗" },
    repoPending: { en: "[repo link pending]", pl: "[link do repozytorium wkrótce]" },
  },
  footer: {
    addLinkedin: { en: "[add LinkedIn]", pl: "[dodaj LinkedIn]" },
  },
};
