import type { BarDatum, Project } from "@/lib/types";

// Source: /Volumes/T9/Library/mlProjs/mds files/house_price_pred_api_mds/
// house_price_pred_api_HANDOFF.md (2026-10-12) + _CHECKLIST.md, and the repo
// README. Work in progress: no model has been trained yet, so there is
// deliberately no model score anywhere on this page. The GitHub repo is
// private, so the page shows a note instead of a link.

const same = (s: string) => ({ en: s, pl: s });
const num = (en: string) => ({ en, pl: en.replace(".", ",") });

// Correlation with log1p(SalePrice), computed on train_model (1,458 rows).
const correlations: BarDatum[] = [
  { label: same("OverallQual"), value: 0.82, display: num("0.82") },
  { label: same("GrLivArea"), value: 0.73, display: num("0.73") },
  { label: same("GarageCars"), value: 0.68, display: num("0.68") },
  { label: same("GarageArea"), value: 0.66, display: num("0.66"), secondary: true },
  { label: same("TotalBsmtSF"), value: 0.65, display: num("0.65") },
  { label: same("1stFlrSF"), value: 0.62, display: num("0.62"), secondary: true },
  { label: same("FullBath"), value: 0.6, display: num("0.60") },
  { label: same("YearBuilt"), value: 0.59, display: num("0.59") },
  { label: same("GarageYrBlt"), value: 0.57, display: num("0.57") },
  { label: same("YearRemodAdd"), value: 0.57, display: num("0.57") },
];

export const housePricePredApi: Project = {
  slug: "house-price-pred-api",
  status: "in-progress",
  title: {
    en: "House Price Prediction API",
    pl: "API do predykcji cen domów",
  },
  summary: {
    en: "Predicting Ames house sale prices (Kaggle House Prices) and serving the model through a FastAPI service — work in progress.",
    pl: "Predykcja cen sprzedaży domów z Ames (Kaggle House Prices) i udostępnienie modelu przez API w FastAPI — projekt w toku.",
  },
  description: {
    en: "Predicting Ames house sale prices, with a scikit-learn pipeline and a FastAPI service planned. Cleaning and target exploration are done; feature preparation is next.",
    pl: "Predykcja cen sprzedaży domów z Ames; w planach pipeline scikit-learn i usługa w FastAPI. Czyszczenie danych i analiza zmiennej celu są gotowe, teraz przygotowanie cech.",
  },
  repoPrivate: true,
  tech: ["Python", "Pandas 3", "Marimo", "Seaborn / Matplotlib"],
  cardTech: ["Python", "Pandas", "Marimo"],
  plannedTech: ["Scikit-learn", "FastAPI"],
  featured: true,

  facts: [
    {
      label: { en: "dataset", pl: "zbiór danych" },
      value: same("Kaggle House Prices (Ames)"),
    },
    {
      label: { en: "target", pl: "zmienna celu" },
      value: same("`log1p(SalePrice)`"),
    },
    {
      label: { en: "metric", pl: "metryka" },
      value: { en: "RMSE on the log scale", pl: "RMSE w skali logarytmicznej" },
      planned: true,
    },
    {
      label: { en: "status", pl: "status" },
      value: { en: "2 of 8 steps done", pl: "ukończono 2 z 8 etapów" },
    },
  ],

  statsHeading: { en: "data so far", pl: "dane na tym etapie" },
  stats: [
    { label: { en: "raw training rows", pl: "surowe wiersze treningowe" }, value: { en: "1,460", pl: "1460" } },
    { label: { en: "training rows (2 outliers out)", pl: "wiersze treningowe (bez 2 outlierów)" }, value: { en: "1,458", pl: "1458" } },
    { label: { en: "test rows", pl: "wiersze testowe" }, value: { en: "1,459", pl: "1459" } },
    { label: { en: "missing values after cleaning", pl: "braki danych po czyszczeniu" }, value: "0" },
  ],

  progress: [
    { title: { en: "Cleaning", pl: "Czyszczenie" }, done: true },
    { title: { en: "Target & outliers", pl: "Zmienna celu i outliery" }, done: true },
    {
      title: { en: "Features", pl: "Cechy" },
      done: false,
      note: {
        en: "Map quality grades to numbers, treat `MSSubClass` as categorical, one-hot encode the rest.",
        pl: "Zamiana ocen jakości na liczby, `MSSubClass` jako zmienna kategoryczna, one-hot encoding pozostałych.",
      },
    },
    {
      title: { en: "Baseline models + CV", pl: "Modele bazowe + CV" },
      done: false,
      note: {
        en: "Ridge, RandomForest and GradientBoosting in one scikit-learn `Pipeline`, compared with 5-fold CV.",
        pl: "Ridge, RandomForest i GradientBoosting w jednym `Pipeline` scikit-learn, porównane 5-krotną walidacją krzyżową.",
      },
    },
    {
      title: { en: "Predictions", pl: "Predykcje" },
      done: false,
      note: {
        en: "Fit on all training data, predict the test set, `expm1` back to dollars.",
        pl: "Trening na całym zbiorze treningowym, predykcja zbioru testowego, `expm1` z powrotem do dolarów.",
      },
    },
    {
      title: { en: "Packaged pipeline", pl: "Pakowanie pipeline'u" },
      done: false,
      note: {
        en: "A `.py` module with the train-learned fill values, saved with `joblib`, that the API can import.",
        pl: "Moduł `.py` z wartościami uzupełnień wyuczonymi na zbiorze treningowym, zapisany przez `joblib`, do importu w API.",
      },
    },
    {
      title: { en: "API", pl: "API" },
      done: false,
      note: {
        en: "FastAPI with `/health` and `/predict`, returning the price in dollars.",
        pl: "FastAPI z `/health` i `/predict`, zwracające cenę w dolarach.",
      },
    },
    {
      title: { en: "Finish", pl: "Finalizacja" },
      done: false,
      note: {
        en: "README with how to run it and an example request; optional Dockerfile.",
        pl: "README z instrukcją uruchomienia i przykładowym zapytaniem; opcjonalnie Dockerfile.",
      },
    },
  ],

  findings: {
    charts: [
      {
        title: { en: "Top correlations with `log1p(SalePrice)`", pl: "Najsilniejsze korelacje z `log1p(SalePrice)`" },
        subtitle: {
          en: "correlation coefficient, top 10 numeric features, 1,458 training rows",
          pl: "współczynnik korelacji, 10 najsilniejszych cech numerycznych, 1458 wierszy treningowych",
        },
        ariaLabel: {
          en: "Bar chart of correlation with log1p(SalePrice): OverallQual 0.82, GrLivArea 0.73, GarageCars 0.68, GarageArea 0.66, TotalBsmtSF 0.65, 1stFlrSF 0.62, FullBath 0.60, YearBuilt 0.59, GarageYrBlt 0.57, YearRemodAdd 0.57. GarageArea is redundant with GarageCars, and 1stFlrSF with TotalBsmtSF.",
          pl: "Wykres słupkowy korelacji z log1p(SalePrice): OverallQual 0,82, GrLivArea 0,73, GarageCars 0,68, GarageArea 0,66, TotalBsmtSF 0,65, 1stFlrSF 0,62, FullBath 0,60, YearBuilt 0,59, GarageYrBlt 0,57, YearRemodAdd 0,57. GarageArea dubluje GarageCars, a 1stFlrSF dubluje TotalBsmtSF.",
        },
        max: 1,
        tickStep: 0.25,
        data: correlations,
        secondaryLegend: {
          en: "Hatched: redundant with another feature in the top 10 (GarageArea with GarageCars, 1stFlrSF with TotalBsmtSF).",
          pl: "Kreskowane: cecha dubluje inną z pierwszej dziesiątki (GarageArea — GarageCars, 1stFlrSF — TotalBsmtSF).",
        },
        caption: {
          en: "GarageYrBlt is partly inflated: it equals YearBuilt for houses without a garage.",
          pl: "GarageYrBlt jest częściowo zawyżony: dla domów bez garażu równa się YearBuilt.",
        },
      },
      {
        title: { en: "Skew: raw vs log1p", pl: "Skośność: surowa vs log1p" },
        subtitle: { en: "SalePrice skewness", pl: "skośność SalePrice" },
        ariaLabel: {
          en: "SalePrice skewness drops from 1.88 for the raw values to 0.12 after log1p.",
          pl: "Skośność SalePrice spada z 1,88 dla surowych wartości do 0,12 po log1p.",
        },
        max: 2,
        tickStep: 0.5,
        data: [
          { label: { en: "raw", pl: "surowa" }, value: 1.88, display: num("1.88") },
          { label: same("log1p"), value: 0.12, display: num("0.12") },
        ],
        note: {
          en: "The target is right-skewed, so the model will predict `log1p(SalePrice)`.",
          pl: "Zmienna celu jest prawoskośna, więc model będzie przewidywał `log1p(SalePrice)`.",
        },
      },
    ],
    notes: [
      {
        title: { en: "Outliers and dropped columns", pl: "Outliery i usunięte kolumny" },
        paragraphs: [
          {
            en: "2 outliers dropped from train only: `GrLivArea > 4000` with `SalePrice < 300000`. Test rows are never dropped — the submission needs every `Id`.",
            pl: "2 outliery usunięte tylko ze zbioru treningowego: `GrLivArea > 4000` przy `SalePrice < 300000`. Wiersze testowe nigdy nie są usuwane — plik z predykcjami wymaga każdego `Id`.",
          },
          {
            en: "`Utilities` dropped: it is `AllPub` in 1,459 of 1,460 training rows and in every test row.",
            pl: "Kolumna `Utilities` usunięta: ma wartość `AllPub` w 1459 z 1460 wierszy treningowych i w każdym wierszu testowym.",
          },
        ],
      },
    ],
  },

  cleaning: [
    {
      term: { en: "\"feature absent\" NaN", pl: "NaN = „brak cechy”" },
      detail: {
        en: "Filled with the category \"None\" (`Alley`, `Fence`, `PoolQC`, `Garage*`, `Bsmt*`, …).",
        pl: "Uzupełnione kategorią \"None\" (`Alley`, `Fence`, `PoolQC`, `Garage*`, `Bsmt*`, …).",
      },
    },
    {
      term: same("LotFrontage"),
      detail: {
        en: "Line fit on `√LotArea` (MAD outlier removal, then refit), plus a per-neighbourhood median correction; an unseen neighbourhood gets no correction.",
        pl: "Prosta dopasowana do `√LotArea` (usunięcie outlierów metodą MAD i ponowne dopasowanie) plus korekta medianą dla każdej dzielnicy; nieznana dzielnica nie dostaje korekty.",
      },
    },
    {
      term: { en: "Garage", pl: "Garaż" },
      detail: {
        en: "New `HasGarage` flag; missing `GarageYrBlt` takes `YearBuilt`; `GarageCars` / `GarageArea` are 0 without a garage, otherwise the train median of houses with one.",
        pl: "Nowa flaga `HasGarage`; brakujący `GarageYrBlt` przyjmuje `YearBuilt`; `GarageCars` / `GarageArea` to 0 bez garażu, w przeciwnym razie mediana domów z garażem ze zbioru treningowego.",
      },
    },
    {
      term: { en: "Basement, masonry", pl: "Piwnica, okładzina murowana" },
      detail: {
        en: "Numeric gaps zero-filled.",
        pl: "Braki w kolumnach numerycznych uzupełnione zerami.",
      },
    },
    {
      term: { en: "7 categoricals", pl: "7 kolumn kategorycznych" },
      detail: {
        en: "Filled with the train mode (e.g. `Electrical` → `SBrkr` instead of dropping the row).",
        pl: "Uzupełnione dominantą ze zbioru treningowego (np. `Electrical` → `SBrkr` zamiast usuwania wiersza).",
      },
    },
    {
      term: { en: "Leakage guard", pl: "Ochrona przed wyciekiem" },
      detail: {
        en: "Every fill statistic is learned on train only and then applied to test, so no test information leaks into training.",
        pl: "Każda statystyka do uzupełnień jest liczona tylko na zbiorze treningowym i dopiero potem stosowana do testowego, więc żadna informacja ze zbioru testowego nie trafia do treningu.",
      },
    },
  ],

  retrospective: {
    badge: { en: "numbers re-checked", pl: "liczby sprawdzone ponownie" },
    lead: {
      en: "The LotFrontage neighbourhood correction barely helps. It cuts the 5-fold CV error by only about 0.1 ft (20.20 → 20.11 ft), so a simpler fill would be nearly as good.",
      pl: "Korekta LotFrontage według dzielnicy prawie nic nie daje. Zmniejsza błąd w 5-krotnej walidacji krzyżowej tylko o ok. 0,1 ft (20,20 → 20,11 ft), więc prostsze uzupełnienie byłoby niemal równie dobre.",
    },
    detail: {
      en: "An earlier figure of ~0.5 ft did not reproduce. The notebook's own printout leaves out 52 outlier rows, which flatters both methods.",
      pl: "Wcześniejsza wartość ~0,5 ft się nie odtworzyła. Wydruk w notebooku pomija 52 wiersze odstające, co zawyża wyniki obu metod.",
    },
    chart: {
      ariaLabel: {
        en: "LotFrontage imputation error in 5-fold CV: line only 20.20 ft, line plus neighbourhood correction 20.11 ft.",
        pl: "Błąd uzupełniania LotFrontage w 5-krotnej walidacji krzyżowej: sama prosta 20,20 ft, prosta z korektą dzielnicy 20,11 ft.",
      },
      max: 25,
      tickStep: 5,
      unit: "ft",
      data: [
        { label: { en: "line only", pl: "sama prosta" }, value: 20.2, display: num("20.20 ft") },
        { label: { en: "+ neighbourhood", pl: "+ dzielnica" }, value: 20.11, display: num("20.11 ft") },
      ],
      caption: {
        en: "LotFrontage, 5-fold CV error on all 1,201 known rows · lower is better · axis starts at 0",
        pl: "LotFrontage, błąd w 5-krotnej CV na wszystkich 1201 znanych wierszach · mniej = lepiej · oś od 0",
      },
    },
  },

  decisions: [
    {
      state: "decided",
      text: {
        en: "Target is `log1p(SalePrice)`; the metric is RMSE on the log scale.",
        pl: "Zmienna celu to `log1p(SalePrice)`; metryka to RMSE w skali logarytmicznej.",
      },
    },
    {
      state: "decided",
      text: {
        en: "Outliers are dropped from train only, never from test.",
        pl: "Outliery są usuwane tylko ze zbioru treningowego, nigdy z testowego.",
      },
    },
    {
      state: "planned",
      text: {
        en: "Exploration stays in marimo. The final pipeline moves to a `.py` module, because the API must not import a notebook.",
        pl: "Eksploracja zostaje w marimo. Końcowy pipeline trafi do modułu `.py`, bo API nie powinno importować notebooka.",
      },
    },
  ],
};
