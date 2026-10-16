"use client";

import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { RadarChart } from "@/components/charts/RadarChart";
import { skillAxes } from "@/content/skills";
import { skillGroups } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function Skills() {
  const { locale } = useLocale();
  const axes = skillAxes.map((a) => ({ label: a.label[locale], value: a.value }));

  return (
    <Section id="skills" title={strings.nav.skills[locale]}>
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[minmax(0,380px)_1fr] sm:gap-10">
        <RadarChart axes={axes} caption={strings.skills.radarCaption[locale]} />
        <div className="grid gap-5">
          {skillGroups.map((group) => (
            <div key={group.label.en}>
              <h3 className="mb-2 font-mono text-label font-normal tracking-[0.03em] text-muted">
                {group.label[locale]}
              </h3>
              <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                {group.items.map((tag) => (
                  <li key={tag}>
                    <Badge>{tag}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
