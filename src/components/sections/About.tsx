"use client";

import { Section } from "@/components/ui/Section";
import { FactsGrid } from "@/components/ui/FactsGrid";
import { site, education, languages, alsoBuilt } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function About() {
  const { locale } = useLocale();
  const edu = education[locale];

  return (
    <Section id="about" title={strings.nav.about[locale]}>
      <p className="m-0 max-w-[62ch] font-serif text-[1.125rem] leading-[1.65]">{site.about[locale]}</p>
      <FactsGrid
        className="mt-8"
        minColumn="300px"
        items={[
          {
            label: strings.about.education[locale],
            value: (
              <>
                {edu.degree}
                <span className="block text-muted">
                  {edu.school} · {edu.period}
                </span>
              </>
            ),
          },
          { label: strings.about.status[locale], value: edu.status },
          { label: strings.about.basedIn[locale], value: site.location[locale] },
          { label: strings.about.languages[locale], value: languages[locale].join(" · ") },
        ]}
      />
      <p className="mt-6 mb-0 font-mono text-label leading-relaxed text-muted">
        <span className="text-fg">{strings.about.alsoBuilt[locale]}:</span> {alsoBuilt[locale].join(" · ")}
      </p>
    </Section>
  );
}
