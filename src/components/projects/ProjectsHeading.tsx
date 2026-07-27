"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function ProjectsHeading() {
  const { locale } = useLocale();
  return <Eyebrow as="h1">{strings.nav.projects[locale]}</Eyebrow>;
}
