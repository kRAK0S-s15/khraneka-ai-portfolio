import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";
import type { BarChartSpec } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";

// Horizontal single-series bar chart in plain HTML/CSS. Every bar is
// direct-labelled with its value, so identity never relies on colour; the
// hatched state is texture, not hue. Bars always start at zero.
//
// The plot area is the track minus a fixed reserve on the right for the
// value label, so the longest bar plus its label always fits (down to 390px).
const RESERVE = "4.75rem";

function at(fraction: number) {
  return `calc((100% - ${RESERVE}) * ${fraction})`;
}

export function BarChart({
  spec,
  locale,
  className = "",
  titleLevel = "h3",
}: {
  spec: BarChartSpec;
  locale: Locale;
  className?: string;
  titleLevel?: "h3" | "h4";
}) {
  const ticks: number[] = [];
  for (let t = 0; t <= spec.max + 1e-9; t += spec.tickStep) ticks.push(Number(t.toFixed(6)));
  const hasSecondary = spec.data.some((d) => d.secondary);
  const Title = titleLevel;
  const trackStyle = { "--tick": at(spec.tickStep / spec.max), "--plot": at(1) } as CSSProperties;

  return (
    <figure className={`m-0 ${className}`}>
      {spec.title ? (
        <Title className="mt-0 mb-1 font-serif text-[1.1875rem] leading-snug font-semibold">
          <RichText text={spec.title[locale]} />
        </Title>
      ) : null}
      {spec.subtitle ? (
        <p className="mt-0 mb-5 font-mono text-label leading-normal text-muted">{spec.subtitle[locale]}</p>
      ) : null}

      <div
        role="img"
        aria-label={spec.ariaLabel[locale]}
        className="grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-x-2.5 gap-y-1 sm:gap-x-3.5"
      >
        {spec.data.map((d) => (
          <div key={d.label.en} className="group/bar contents">
            <span className="text-right font-mono text-label leading-tight">{d.label[locale]}</span>
            <div className="bar-track flex min-h-6.5 items-center gap-2" style={trackStyle}>
              <span
                className={`h-3.5 flex-none rounded-r-[4px] transition-[filter] duration-150 group-hover/bar:brightness-110 ${
                  d.secondary ? "bar-hatch" : "bg-chart"
                }`}
                style={{ width: at(d.value / spec.max) }}
              />
              <span className="whitespace-nowrap font-mono text-label leading-none [font-variant-numeric:tabular-nums]">
                {d.display[locale]}
              </span>
            </div>
          </div>
        ))}
        <span aria-hidden="true" />
        <div aria-hidden="true" className="relative h-5 font-mono text-xs leading-none text-muted">
          {ticks.map((t, i) => (
            <span
              key={t}
              // On phones only every other tick is labelled so labels never collide.
              className={`absolute top-1.5 whitespace-nowrap ${i === 0 ? "" : "-translate-x-1/2"} ${
                i % 2 === 1 ? "hidden sm:inline" : ""
              }`}
              style={{ left: at(t / spec.max) }}
            >
              {t.toLocaleString(locale === "pl" ? "pl-PL" : "en-US")}
              {spec.unit && i === ticks.length - 1 ? ` ${spec.unit}` : ""}
            </span>
          ))}
        </div>
      </div>

      {hasSecondary && spec.secondaryLegend ? (
        <figcaption className="mt-4.5 flex items-start gap-2.5 font-mono text-label leading-normal text-muted">
          <span aria-hidden="true" className="bar-hatch mt-1 inline-block h-3.5 w-5.5 flex-none rounded-[2px]" />
          <span>{spec.secondaryLegend[locale]}</span>
        </figcaption>
      ) : null}
      {spec.note ? (
        <p className="mt-4 mb-0 text-base">
          <RichText text={spec.note[locale]} />
        </p>
      ) : null}
      {spec.caption ? (
        <p className="mt-3 mb-0 font-mono text-label leading-normal text-muted">{spec.caption[locale]}</p>
      ) : null}
    </figure>
  );
}
