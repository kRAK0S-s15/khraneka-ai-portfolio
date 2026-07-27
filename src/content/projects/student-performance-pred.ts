import type { Project } from "@/lib/types";

export const studentPerformancePred: Project = {
  slug: "student-performance-pred",
  title: "Student Performance Prediction — CatBoost Classifier",
  summary:
    "3-class exam-performance classifier on a 10,000-row student dataset, tuned with CatBoost.",
  description:
    "3-class exam-performance classifier (low / medium / high) on a 10,000-row student dataset. IQR-based outlier removal, engineered interaction / efficiency / threshold / nonlinear features, tuned CatBoost with class weighting for imbalance.",
  repoUrl: "https://github.com/kRAK0S-s15/student-performance-pred",
  stats: [
    { label: "rows", value: "10,000" },
    { label: "classes", value: "3" },
    { label: "iterations / depth", value: "800 / d8" },
    // TODO: the repo's README documents the method but never states the actual
    // weighted F1 result — fill in once confirmed or computed.
    { label: "weighted F1", value: "[F1 pending]", pending: true },
  ],
  tech: ["Python", "Marimo", "Pandas", "CatBoost", "Scikit-learn"],
  featured: true,
};
