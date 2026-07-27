"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { RadarChart } from "@/components/charts/RadarChart";
import { skillAxes } from "@/content/skills";
import { toolTags } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function Skills() {
  const { locale } = useLocale();
  const axes = skillAxes.map((a) => ({ label: a.label[locale], value: a.value }));

  return (
    <section id="skills" className="border-t border-border py-12">
      <Eyebrow>{strings.nav.skills[locale]}</Eyebrow>
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,320px)_1fr]">
        <RadarChart axes={axes} caption={strings.skills.radarCaption[locale]} />
        <div>
          <h3 className="mb-2 font-mono text-sm font-medium tracking-[0.03em] text-muted">
            {strings.skills.toolsHeading[locale]}
          </h3>
          <div className="flex flex-wrap gap-2">
            {toolTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
