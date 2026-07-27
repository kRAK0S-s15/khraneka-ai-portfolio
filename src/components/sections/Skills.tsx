import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { RadarChart } from "@/components/charts/RadarChart";
import { skillAxes } from "@/content/skills";
import { toolTags } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-12">
      <Eyebrow>skills</Eyebrow>
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,320px)_1fr]">
        <RadarChart axes={skillAxes} caption="self-rated proficiency — illustrative values, to confirm with Kanstantsin" />
        <div>
          <h3 className="mb-2 font-mono text-sm font-medium tracking-[0.03em] text-muted">tools &amp; infrastructure</h3>
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
