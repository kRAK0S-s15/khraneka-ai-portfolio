import type { LocalizedText } from "./i18n";

export type Stat = {
  label: LocalizedText;
  value: string;
  pending?: boolean;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  repoUrl?: string;
  repoPending?: boolean;
  liveUrl?: string;
  stats: Stat[];
  tech: string[];
  featured?: boolean;
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
