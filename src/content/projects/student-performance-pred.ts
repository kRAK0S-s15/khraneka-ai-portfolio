import type { Project } from "@/lib/types";

export const studentPerformancePred: Project = {
  slug: "student-performance-pred",
  title: {
    en: "Student Performance Prediction — CatBoost Classifier",
    pl: "Predykcja wyników uczniów — klasyfikator CatBoost",
  },
  summary: {
    en: "3-class exam-performance classifier on a 10,000-row student dataset, tuned with CatBoost.",
    pl: "3-klasowy klasyfikator wyników egzaminacyjnych na zbiorze 10 000 uczniów, dostrojony przy użyciu CatBoost.",
  },
  description: {
    en: "3-class exam-performance classifier (low / medium / high) on a 10,000-row student dataset. IQR-based outlier removal, engineered interaction / efficiency / threshold / nonlinear features, tuned CatBoost with class weighting for imbalance.",
    pl: "3-klasowy klasyfikator wyników egzaminacyjnych (niski / średni / wysoki) na zbiorze 10 000 uczniów. Usuwanie wartości odstających metodą IQR, zaprojektowane cechy interakcyjne / efektywnościowe / progowe / nieliniowe, CatBoost dostrojony z ważeniem klas dla niezbalansowanych danych.",
  },
  repoUrl: "https://github.com/kRAK0S-s15/student-performance-pred",
  stats: [
    { label: { en: "rows", pl: "wiersze" }, value: "10,000" },
    { label: { en: "classes", pl: "klasy" }, value: "3" },
    { label: { en: "iterations / depth", pl: "iteracje / głębokość" }, value: "800 / d8" },
    // Computed by actually running the repo's training script locally (its
    // README documents the method but never states a result). The script has
    // an unseeded jitter step (exam_score_jitter), so weighted F1 varies
    // slightly run to run — 3 runs clustered at 0.648 / 0.657 / 0.647.
    { label: { en: "weighted F1", pl: "ważone F1" }, value: "0.65" },
  ],
  tech: ["Python", "Marimo", "Pandas", "CatBoost", "Scikit-learn"],
  featured: true,
};
