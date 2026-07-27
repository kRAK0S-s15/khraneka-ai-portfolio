import type { LocalizedSkillAxis } from "@/lib/types";

// TODO(confirm): illustrative self-rated values — replace with Kanstantsin's own assessment
export const skillAxes: LocalizedSkillAxis[] = [
  { label: { en: "Python & Pandas", pl: "Python i Pandas" }, value: 85 },
  { label: { en: "ML Modeling", pl: "Modelowanie ML" }, value: 80 },
  { label: { en: "SQL & Data", pl: "SQL i dane" }, value: 68 },
  { label: { en: "Statistics", pl: "Statystyka" }, value: 75 },
  { label: { en: "Tools & Infra", pl: "Narzędzia i infra" }, value: 62 },
];
