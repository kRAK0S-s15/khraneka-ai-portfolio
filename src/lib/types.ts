import type { LocalizedText } from "./i18n";

// Localized strings in project content may wrap identifiers in backticks
// (`log1p(SalePrice)`); RichText renders those spans as <code>.

export type Stat = {
  label: LocalizedText;
  /** Plain string when identical in both languages; localized when number formatting differs (1,460 vs 1460). */
  value: string | LocalizedText;
  pending?: boolean;
};

export type ProjectStatus = "complete" | "in-progress";

/** One labelled fact in a bordered grid (dataset, target, metric, ...). */
export type Fact = {
  label: LocalizedText;
  value: LocalizedText;
  /** Marks the fact as not final yet; the label gets a "planned" suffix. */
  planned?: boolean;
};

/** A checklist section of an in-progress project. */
export type ProgressStep = {
  title: LocalizedText;
  done: boolean;
  /** Optional one-line detail, shown in the roadmap for steps not done yet. */
  note?: LocalizedText;
};

export type BarDatum = {
  label: LocalizedText;
  value: number;
  /** Display string for the value, e.g. "0.82" or "20.20 ft". */
  display: LocalizedText;
  /** Secondary state, drawn hatched (e.g. a redundant feature). */
  secondary?: boolean;
  /** Draw in the muted ink instead of the series colour (e.g. a "before" bar). */
  muted?: boolean;
};

export type BarChartSpec = {
  title?: LocalizedText;
  subtitle?: LocalizedText;
  /** Full text alternative, read instead of the visual bars. */
  ariaLabel: LocalizedText;
  /** Axis domain is always [0, max] — bars start at zero. */
  max: number;
  tickStep: number;
  /** Unit appended to the last tick label, e.g. "ft". */
  unit?: string;
  data: BarDatum[];
  /** Legend for the hatched state, shown under the chart when any bar is secondary. */
  secondaryLegend?: LocalizedText;
  /** Prose shown under the chart. */
  note?: LocalizedText;
  /** Small mono caption under the chart (method, "lower is better", ...). */
  caption?: LocalizedText;
};

export type TextBlock = {
  title: LocalizedText;
  paragraphs: LocalizedText[];
};

export type DefinitionItem = {
  term: LocalizedText;
  detail: LocalizedText;
};

export type Decision = {
  state: "decided" | "planned";
  text: LocalizedText;
};

/** A candid "what I'd reconsider" callout. */
export type Retrospective = {
  /** Short badge text next to the heading, e.g. "numbers re-checked". */
  badge?: LocalizedText;
  lead: LocalizedText;
  detail?: LocalizedText;
  chart?: BarChartSpec;
};

export type Project = {
  slug: string;
  status: ProjectStatus;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  repoUrl?: string;
  repoPending?: boolean;
  /** Repo exists but is private: show a note instead of a link. */
  repoPrivate?: boolean;
  liveUrl?: string;
  stats: Stat[];
  /** Heading for the stats block on the detail page (defaults to "results"). */
  statsHeading?: LocalizedText;
  tech: string[];
  /** Tags shown on the home card when they differ from `tech`. */
  cardTech?: string[];
  /** Stack that isn't in use yet, shown dashed with a "planned" suffix. */
  plannedTech?: string[];
  featured?: boolean;

  // Optional sections, rendered on the detail page only when present.
  facts?: Fact[];
  progress?: ProgressStep[];
  findings?: {
    charts: BarChartSpec[];
    notes?: TextBlock[];
  };
  cleaning?: DefinitionItem[];
  retrospective?: Retrospective;
  decisions?: Decision[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

// Already resolved to a single language — what RadarChart renders.
export type SkillAxis = {
  label: string;
  value: number; // 0-100, self-rated
};

// Source data shape, before a locale picks one label string.
export type LocalizedSkillAxis = {
  label: LocalizedText;
  value: number;
};

export type SkillGroup = {
  label: LocalizedText;
  items: string[];
};
