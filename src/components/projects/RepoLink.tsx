"use client";

import { Icon } from "@/components/ui/Icon";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";
import type { Project } from "@/lib/types";

// GitHub link, or the right placeholder when there is no public repo.
export function RepoLink({ project, className = "" }: { project: Project; className?: string }) {
  const { locale } = useLocale();

  if (project.repoUrl) {
    return (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener"
        className={`group/repo inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap font-mono text-sm no-underline hover:underline ${className}`}
      >
        {strings.projects.github[locale]}
        <Icon
          name="arrow-up-right"
          size={13}
          className="transition-transform duration-150 group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5"
        />
      </a>
    );
  }

  if (project.repoPrivate) {
    return (
      <p className={`m-0 inline-flex items-center gap-2 font-mono text-label text-muted ${className}`}>
        <Icon name="lock" />
        {strings.projects.repoPrivate[locale]}
      </p>
    );
  }

  return (
    <span className={`whitespace-nowrap font-mono text-sm italic text-muted ${className}`}>
      {strings.projects.repoPending[locale]}
    </span>
  );
}
