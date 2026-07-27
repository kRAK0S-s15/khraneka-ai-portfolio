"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function FeaturedProjects() {
  const { locale } = useLocale();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-t border-border py-12">
      <Eyebrow>{strings.nav.projects[locale]}</Eyebrow>
      <div className="mt-6 grid gap-5">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
