export type Stat = {
  label: string;
  value: string;
  pending?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
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

export type SkillAxis = {
  label: string;
  value: number; // 0-100, self-rated
};
