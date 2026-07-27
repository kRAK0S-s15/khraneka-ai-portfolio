import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ProjectsHeading } from "@/components/projects/ProjectsHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: "Machine learning and data analysis case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="py-12">
            <ProjectsHeading />
            <div className="mt-6 grid gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} headingLevel="h2" />
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
