import type { Project } from "@/lib/types";

export const creditRiskAnalysis: Project = {
  slug: "credit-risk-analysis",
  title: {
    en: "Credit Risk Analysis — German Credit Dataset",
    pl: "Analiza ryzyka kredytowego — German Credit Dataset",
  },
  summary: {
    en: "Logistic Regression and Gradient Boosting compared on a class-imbalanced loan-default problem.",
    pl: "Porównanie regresji logistycznej i gradient boosting w problemie niezbalansowanej klasyfikacji niewypłacalności kredytowej.",
  },
  description: {
    en: "EDA and feature engineering on a 1,000-record, 21-feature credit dataset (age binning, categorical encoding, missing-value imputation) to predict loan default. Compared Logistic Regression and Gradient Boosting with class-balanced weighting and tuned decision thresholds.",
    pl: "Eksploracyjna analiza danych i inżynieria cech na zbiorze kredytowym (1000 rekordów, 21 cech: przedziały wiekowe, kodowanie zmiennych kategorycznych, uzupełnianie braków danych) w celu przewidywania niewypłacalności. Porównano regresję logistyczną i gradient boosting z ważeniem klas oraz dostrojonymi progami decyzyjnymi.",
  },
  // TODO: repo link pending from Kanstantsin (private, unpushed, or elsewhere)
  repoPending: true,
  stats: [
    { label: { en: "ROC-AUC", pl: "ROC-AUC" }, value: "79%" },
    { label: { en: "accuracy", pl: "trafność" }, value: "72%" },
    { label: { en: "recall (default class)", pl: "recall (klasa niewypłacalności)" }, value: "77%" },
  ],
  tech: ["Python", "Scikit-learn", "Pandas"],
  featured: true,
};
