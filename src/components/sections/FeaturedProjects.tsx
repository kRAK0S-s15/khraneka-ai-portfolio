"use client";

import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function FeaturedProjects() {
  const { locale } = useLocale();
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="projects" title={strings.nav.projects[locale]} className="pb-16">
      <div className="grid gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
