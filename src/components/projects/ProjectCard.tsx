import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/lib/types";

export function ProjectCard({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  /** h3 when nested under a "# projects" h2 (homepage); h2 on the standalone /projects listing, which has its own h1. */
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <article className="rounded-lg border border-border bg-surface p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Heading className="font-serif text-lg font-semibold">
          <Link href={`/projects/${project.slug}`} className="text-fg no-underline hover:text-accent-2">
            {project.title}
          </Link>
        </Heading>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener"
            className="whitespace-nowrap font-mono text-sm"
          >
            github &#8599;
          </a>
        ) : (
          <span className="whitespace-nowrap font-mono text-sm italic text-muted">[repo link pending]</span>
        )}
      </div>

      <p className="mt-2.5 max-w-[65ch] font-serif">{project.description}</p>

      <div className="my-4 flex flex-wrap gap-6 font-mono">
        {project.stats.map((stat) => (
          <div key={stat.label} className="[font-variant-numeric:tabular-nums]">
            <span className={`block text-lg ${stat.pending ? "text-sm italic text-muted" : "text-metric"}`}>
              {stat.value}
            </span>
            <span className="text-xs tracking-[0.03em] text-muted">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  );
}
