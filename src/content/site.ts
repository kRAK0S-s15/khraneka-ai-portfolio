import type { Locale, LocalizedText } from "@/lib/i18n";
import type { SkillGroup } from "@/lib/types";

// Source of truth: ~/Documents/job/CV/2026-08/cv-master.md (+ .pl.md). Only
// title, skills, projects, education and languages are taken from the CV —
// the site deliberately carries no employment history.
export const site = {
  // Spelling follows the CV. (The git/GitHub account uses "Konstantsin Khraneko".)
  name: "Kanstantsin Khraneka",
  handle: "khraneka",
  role: {
    en: "AI/ML Engineer · Data Scientist",
    pl: "AI/ML Engineer · Data Scientist",
  } as LocalizedText,
  location: { en: "Warsaw, Poland", pl: "Warszawa, Polska" } as LocalizedText,
  tagline: {
    en: "Computer Engineering student building machine-learning models in Python and SQL — EDA, feature engineering, gradient boosting and honest model evaluation — and working with LLMs through the Claude API, RAG and agentic tooling.",
    pl: "Student inżynierii komputerowej, który buduje modele uczenia maszynowego w Pythonie i SQL — EDA, feature engineering, gradient boosting i rzetelna ewaluacja modeli — oraz pracuje z LLM przez Claude API, RAG i narzędzia agentic AI.",
  } as LocalizedText,
  about: {
    en: "I work through machine-learning problems end to end: cleaning raw data with statistics learned on the training set only, engineering features, comparing models, and writing up what the numbers actually show — including when a re-check doesn't support an earlier claim. My core stack is Python (Pandas, NumPy, scikit-learn, PyTorch) and SQL. On the LLM side I work with the Claude API, RAG, prompt engineering, evaluation sets and agentic AI with MCP servers. I'm a full-time student of Computer Engineering at Vistula University in Warsaw.",
    pl: "Rozwiązuję problemy uczenia maszynowego od początku do końca: czyszczę surowe dane statystykami liczonymi wyłącznie na zbiorze treningowym, projektuję cechy, porównuję modele i opisuję, co faktycznie pokazują liczby — także wtedy, gdy ponowne sprawdzenie nie potwierdza wcześniejszego wniosku. Mój główny stack to Python (Pandas, NumPy, scikit-learn, PyTorch) i SQL. W obszarze LLM pracuję z Claude API, RAG, prompt engineeringiem, zestawami ewaluacyjnymi i agentic AI z serwerami MCP. Studiuję stacjonarnie Computer Engineering na Vistula University w Warszawie.",
  } as LocalizedText,
  email: "mr.khraneko@gmail.com",
  github: "https://github.com/kRAK0S-s15",
  githubHandle: "github.com/kRAK0S-s15",
  linkedin: "https://www.linkedin.com/in/kanstantsin-khraneka-13aa2b369/" as string | undefined,
  // TODO: public/resume.pdf does not exist yet, so this download 404s.
  resumeHref: "/resume.pdf",
};

export const education: Record<Locale, { degree: string; school: string; period: string; status: string }> = {
  en: {
    degree: "B.Eng. (inż.) Computer Engineering",
    school: "Vistula University, Warsaw",
    period: "2025–2028 (expected)",
    status: "full-time student",
  },
  pl: {
    degree: "Computer Engineering, studia inżynierskie (inż.)",
    school: "Vistula University, Warszawa",
    period: "2025–2028 (planowane)",
    status: "studia stacjonarne",
  },
};

export const languages: Record<Locale, string[]> = {
  en: ["Polish (C1)", "English (C1)", "Russian (native)", "Belarusian (native)"],
  pl: ["polski (C1)", "angielski (C1)", "rosyjski (ojczysty)", "białoruski (ojczysty)"],
};

// Smaller builds listed in the CV's "Also built" line.
export const alsoBuilt: Record<Locale, string[]> = {
  en: [
    "Python/Excel reporting automation",
    "Raspberry Pi Linux server (SSH, WireGuard VPN)",
    "async Telegram bots (Asyncio, Telethon, Aiogram)",
  ],
  pl: [
    "automatyzacja raportowania w Python/Excel",
    "serwer Linux na Raspberry Pi (SSH, WireGuard VPN)",
    "asynchroniczne boty Telegram (Asyncio, Telethon, Aiogram)",
  ],
};

// Skills from the CV's TECHNICAL SKILLS section, grouped for display.
export const skillGroups: SkillGroup[] = [
  {
    label: { en: "machine learning & data", pl: "uczenie maszynowe i dane" },
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "CatBoost",
      "Matplotlib / Seaborn",
      "Feature engineering",
      "A/B testing",
      "Statistical testing",
    ],
  },
  {
    label: { en: "LLM / GenAI", pl: "LLM / GenAI" },
    items: ["Claude API", "RAG", "Prompt engineering", "LLM evaluation", "Agentic AI / MCP"],
  },
  {
    label: { en: "cloud & infrastructure", pl: "chmura i infrastruktura" },
    items: ["Azure ML Studio", "AWS (EC2)", "Docker", "Git", "CI/CD (Jenkins → Kubernetes)", "Linux / SSH"],
  },
  {
    label: { en: "notebooks & BI", pl: "notebooki i BI" },
    items: ["Marimo", "Claude Code", "Power BI (basics)", "Excel"],
  },
];
