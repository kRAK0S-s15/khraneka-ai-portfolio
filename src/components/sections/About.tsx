import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, education, languages } from "@/content/site";

export function About() {
  return (
    <section id="about" className="border-t border-border py-12">
      <Eyebrow>about</Eyebrow>
      <p className="max-w-[62ch] font-serif">{site.about}</p>
      <dl className="mt-5 grid max-w-[46ch] grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 font-mono text-sm text-muted">
        <dt>education</dt>
        <dd className="m-0 text-fg">
          {education.degree} &mdash; {education.school} ({education.period})
        </dd>
        <dt>based in</dt>
        <dd className="m-0 text-fg">{site.location}</dd>
        <dt>languages</dt>
        <dd className="m-0 text-fg">{languages.join(" · ")}</dd>
      </dl>
    </section>
  );
}
