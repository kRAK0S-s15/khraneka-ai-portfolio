import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
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
          <article className="py-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h1 className="font-serif text-2xl font-semibold">{project.title}</h1>
              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noopener" className="whitespace-nowrap font-mono text-sm">
                  github &#8599;
                </a>
              ) : (
                <span className="whitespace-nowrap font-mono text-sm italic text-muted">[repo link pending]</span>
              )}
            </div>

            <p className="mt-4 max-w-[65ch] font-serif text-lg">{project.description}</p>

            <div className="my-6 flex flex-wrap gap-8 font-mono">
              {project.stats.map((stat) => (
                <div key={stat.label} className="[font-variant-numeric:tabular-nums]">
                  <span className={`block text-xl ${stat.pending ? "text-sm italic text-muted" : "text-metric"}`}>
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-[0.03em] text-muted">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
