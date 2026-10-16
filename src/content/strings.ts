import type { LocalizedText } from "@/lib/i18n";

/** Fills `{name}` placeholders in a template string. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`));
}

export const strings: {
  nav: Record<"about" | "skills" | "projects" | "contact", LocalizedText>;
  hero: Record<"viewProjects" | "resume" | "github", LocalizedText>;
  about: Record<"education" | "status" | "basedIn" | "languages" | "alsoBuilt", LocalizedText>;
  skills: Record<"toolsHeading" | "radarCaption", LocalizedText>;
  projects: Record<
    | "github"
    | "repoPending"
    | "repoPrivate"
    | "viewProject"
    | "allProjects"
    | "complete"
    | "inProgress"
    | "stepsDone"
    | "progressAria"
    | "stepDone"
    | "planned"
    | "decided"
    | "results"
    | "stack"
    | "progress"
    | "findings"
    | "cleaning"
    | "reconsider"
    | "decisions"
    | "roadmap"
    | "listIntro",
    LocalizedText
  >;
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
    resume: { en: "Resume", pl: "CV" },
    github: { en: "GitHub", pl: "GitHub" },
  },
  about: {
    education: { en: "education", pl: "wykształcenie" },
    status: { en: "status", pl: "status" },
    basedIn: { en: "based in", pl: "lokalizacja" },
    languages: { en: "languages", pl: "języki" },
    alsoBuilt: { en: "also built", pl: "inne projekty" },
  },
  skills: {
    toolsHeading: { en: "tools & stack", pl: "narzędzia i technologie" },
    radarCaption: {
      en: "self-rated proficiency — illustrative values, to confirm with Kanstantsin",
      pl: "poziom oceniony samodzielnie — wartości poglądowe, do potwierdzenia przez Kanstantsina",
    },
  },
  projects: {
    github: { en: "github", pl: "github" },
    repoPending: { en: "[repo link pending]", pl: "[link do repozytorium wkrótce]" },
    repoPrivate: { en: "Repository: private while in progress", pl: "Repozytorium: prywatne na czas prac" },
    viewProject: { en: "view project", pl: "zobacz projekt" },
    allProjects: { en: "all projects", pl: "wszystkie projekty" },
    complete: { en: "Complete", pl: "Ukończony" },
    inProgress: { en: "In progress", pl: "W toku" },
    stepsDone: { en: "{done} of {total} steps done", pl: "ukończono {done} z {total} etapów" },
    progressAria: {
      en: "Progress: {done} of {total} steps done",
      pl: "Postęp: ukończono {done} z {total} etapów",
    },
    stepDone: { en: "done", pl: "gotowe" },
    planned: { en: "planned", pl: "w planach" },
    decided: { en: "decided", pl: "ustalone" },
    results: { en: "results", pl: "wyniki" },
    stack: { en: "stack", pl: "technologie" },
    progress: { en: "progress", pl: "postęp" },
    findings: { en: "findings", pl: "wnioski" },
    cleaning: { en: "cleaning decisions", pl: "czyszczenie danych" },
    reconsider: { en: "what I'd reconsider", pl: "do ponownego przemyślenia" },
    decisions: { en: "decisions", pl: "decyzje" },
    roadmap: { en: "roadmap", pl: "dalsze kroki" },
    listIntro: {
      en: "Machine-learning case studies, from cleaning to model evaluation. Finished projects link to their code; work in progress shows where it stands.",
      pl: "Studia przypadków ML — od czyszczenia danych po ewaluację modeli. Ukończone projekty mają link do kodu, projekty w toku pokazują aktualny etap.",
    },
  },
  footer: {
    addLinkedin: { en: "[add LinkedIn]", pl: "[dodaj LinkedIn]" },
  },
};
