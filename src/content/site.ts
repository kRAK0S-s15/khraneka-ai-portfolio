import type { Locale, LocalizedText } from "@/lib/i18n";

export const site = {
  // TODO(confirm): CV uses "Kanstantsin Khraneka" (this spelling), git/GitHub account uses "Konstantsin Khraneko"
  name: "Kanstantsin Khraneka",
  handle: "khraneka",
  role: {
    en: "Machine Learning & Data Engineer",
    pl: "Machine Learning i Inżynieria Danych",
  } as LocalizedText,
  location: { en: "Warsaw, Poland", pl: "Warszawa, Polska" } as LocalizedText,
  tagline: {
    en: "Computer Science student building classification models and data pipelines — feature engineering, gradient boosting, and reporting automation in Python and SQL.",
    pl: "Student informatyki budujący modele klasyfikacyjne i pipeline'y danych — inżynieria cech, gradient boosting i automatyzacja raportowania w Pythonie i SQL.",
  } as LocalizedText,
  about: {
    en: "Aspiring Data Engineer / Machine Learning Engineer with hands-on experience in exploratory data analysis, feature engineering, and predictive modeling. Comfortable across the stack — from cleaning a raw CSV to tuning a gradient-boosted classifier to writing up what the model actually found. Currently applying that to credit-risk modeling, workflow automation, and reporting projects while finishing a CS degree.",
    pl: "Przyszły inżynier danych / inżynier machine learning z praktycznym doświadczeniem w eksploracyjnej analizie danych, inżynierii cech i modelowaniu predykcyjnym. Swobodnie porusza się w całym procesie — od czyszczenia surowego pliku CSV, przez strojenie klasyfikatora gradient boosting, po opisanie tego, co model faktycznie wykazał. Obecnie wykorzystuje to w projektach z zakresu modelowania ryzyka kredytowego, automatyzacji procesów i raportowania, kończąc jednocześnie studia informatyczne.",
  } as LocalizedText,
  email: "mr.khraneko@gmail.com",
  github: "https://github.com/kRAK0S-s15",
  githubHandle: "github.com/kRAK0S-s15",
  // TODO: add LinkedIn URL
  linkedin: undefined as string | undefined,
  resumeHref: "/resume.pdf",
};

export const education: Record<Locale, { degree: string; school: string; period: string }> = {
  en: {
    degree: "B.Sc. Computer Science",
    school: "Vistula University, Warsaw",
    period: "2025–2028 (expected)",
  },
  pl: {
    degree: "Licencjat z informatyki",
    school: "Vistula University, Warszawa",
    period: "2025–2028 (planowane)",
  },
};

export const languages: Record<Locale, string[]> = {
  en: ["English (B2)", "Polish (B2)", "Russian (native)"],
  pl: ["angielski (B2)", "polski (B2)", "rosyjski (ojczysty)"],
};

export const toolTags = [
  "Git",
  "Docker",
  "Linux / SSH",
  "CI/CD basics",
  "Scikit-learn",
  "CatBoost",
  "Matplotlib / Seaborn",
];
