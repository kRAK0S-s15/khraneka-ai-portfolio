"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { ProgressSegments } from "@/components/ui/ProgressSegments";
import { StatList } from "@/components/ui/StatList";
import { ProjectStatusPill } from "./ProjectStatusPill";
import { RepoLink } from "./RepoLink";
import { strings, fill } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";
import type { Project } from "@/lib/types";

export function ProjectCard({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  /** h3 when nested under a "# projects" h2 (homepage); h2 on the standalone /projects listing, which has its own h1. */
  headingLevel?: "h2" | "h3";
}) {
  const { locale } = useLocale();
  const Heading = headingLevel;
  const steps = project.progress;
  const done = steps?.filter((s) => s.done).length ?? 0;
  const inProgress = project.status === "in-progress";

  return (
    <article className="group relative flex flex-col gap-3.5 rounded-card border border-border bg-surface px-5 py-5 shadow-rest transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift has-[.card-link:focus-visible]:-translate-y-0.5 has-[.card-link:focus-visible]:border-border-strong has-[.card-link:focus-visible]:shadow-lift has-[.card-link:focus-visible]:outline-2 has-[.card-link:focus-visible]:outline-offset-3 has-[.card-link:focus-visible]:outline-accent-2 motion-reduce:hover:translate-y-0 sm:px-6.5 sm:py-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ProjectStatusPill status={project.status} />
        {inProgress && steps ? (
          <span className="font-mono text-label text-muted">
            {fill(strings.projects.stepsDone[locale], { done, total: steps.length })}
          </span>
        ) : (
          <RepoLink project={project} className="relative z-1 -my-3" />
        )}
      </div>

      <Heading className="m-0 font-serif text-card leading-snug font-semibold">
        <Link
          href={`/projects/${project.slug}`}
          className="card-link text-fg no-underline transition-colors duration-150 group-hover:text-accent-2 focus-visible:outline-none group-has-[.card-link:focus-visible]:text-accent-2"
        >
          {project.title[locale]}
        </Link>
      </Heading>

      <p className="m-0 max-w-[65ch] font-serif">{project.description[locale]}</p>

      {inProgress && steps ? (
        <ProgressSegments
          done={done}
          total={steps.length}
          label={fill(strings.projects.progressAria[locale], { done, total: steps.length })}
        />
      ) : (
        <StatList stats={project.stats} locale={locale} />
      )}

      <div className="mt-0.5 flex flex-wrap items-center justify-between gap-3">
        <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
          {(project.cardTech ?? project.tech).map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors duration-150 group-hover:text-accent-2 group-has-[.card-link:focus-visible]:text-accent-2"
        >
          {strings.projects.viewProject[locale]}
          <Icon name="arrow-right" className="transition-transform duration-150 group-hover:translate-x-0.75" />
        </span>
      </div>
    </article>
  );
}
