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
    // Computed by actually running the repo's training script locally (its
    // README documents the method but never states a result). The script has
    // an unseeded jitter step (exam_score_jitter), so weighted F1 varies
    // slightly run to run — 3 runs clustered at 0.648 / 0.657 / 0.647.
    { label: "weighted F1", value: "0.65" },
  ],
  tech: ["Python", "Marimo", "Pandas", "CatBoost", "Scikit-learn"],
  featured: true,
};
