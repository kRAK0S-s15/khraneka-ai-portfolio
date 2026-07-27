import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Build-time metadata always uses the English copy (see layout.tsx).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title.en} — ${site.name}`,
    description: project.summary.en,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        <Container>
          <ProjectDetail project={project} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
