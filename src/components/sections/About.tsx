"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, education, languages } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function About() {
  const { locale } = useLocale();
  const edu = education[locale];

  return (
    <section id="about" className="border-t border-border py-12">
      <Eyebrow>{strings.nav.about[locale]}</Eyebrow>
      <p className="max-w-[62ch] font-serif">{site.about[locale]}</p>
      <dl className="mt-5 grid max-w-[46ch] grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 font-mono text-sm text-muted">
        <dt>{strings.about.education[locale]}</dt>
        <dd className="m-0 text-fg">
          {edu.degree} &mdash; {edu.school} ({edu.period})
        </dd>
        <dt>{strings.about.basedIn[locale]}</dt>
        <dd className="m-0 text-fg">{site.location[locale]}</dd>
        <dt>{strings.about.languages[locale]}</dt>
        <dd className="m-0 text-fg">{languages[locale].join(" · ")}</dd>
      </dl>
    </section>
  );
}
