import type { Locale } from "@/lib/i18n";
import type { Stat } from "@/lib/types";

// Verified figures in the metric colour; pending ones as muted italics.
export function StatList({
  stats,
  locale,
  layout = "flex flex-wrap gap-x-8 gap-y-3",
}: {
  stats: Stat[];
  locale: Locale;
  /** Layout utilities for the list (flex row by default). */
  layout?: string;
}) {
  return (
    <dl className={`m-0 font-mono ${layout}`}>
      {stats.map((stat) => (
        <div key={stat.label.en} className="flex flex-col-reverse justify-end [font-variant-numeric:tabular-nums]">
          <dt className="text-label leading-snug tracking-[0.03em] text-muted">{stat.label[locale]}</dt>
          <dd className={`m-0 leading-snug ${stat.pending ? "text-sm italic text-muted" : "text-lg text-metric"}`}>
            {typeof stat.value === "string" ? stat.value : stat.value[locale]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
