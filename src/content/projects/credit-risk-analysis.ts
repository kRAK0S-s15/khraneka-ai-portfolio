import type { Project } from "@/lib/types";

export const creditRiskAnalysis: Project = {
  slug: "credit-risk-analysis",
  title: "Credit Risk Analysis — German Credit Dataset",
  summary:
    "Logistic Regression and Gradient Boosting compared on a class-imbalanced loan-default problem.",
  description:
    "EDA and feature engineering on a 1,000-record, 21-feature credit dataset (age binning, categorical encoding, missing-value imputation) to predict loan default. Compared Logistic Regression and Gradient Boosting with class-balanced weighting and tuned decision thresholds.",
  // TODO: repo link pending from Kanstantsin (private, unpushed, or elsewhere)
  repoPending: true,
  stats: [
    { label: "ROC-AUC", value: "79%" },
    { label: "accuracy", value: "72%" },
    { label: "recall (default class)", value: "77%" },
  ],
  tech: ["Python", "Scikit-learn", "Pandas"],
  featured: true,
};
