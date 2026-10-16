"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function ProjectsHeading() {
  const { locale } = useLocale();
  return (
    <div className="motion-safe:animate-rise">
      <Eyebrow as="h1" className="mb-3">
        {strings.nav.projects[locale]}
      </Eyebrow>
      <p className="mt-0 mb-8 max-w-[60ch] text-lg leading-normal">{strings.projects.listIntro[locale]}</p>
    </div>
  );
}
