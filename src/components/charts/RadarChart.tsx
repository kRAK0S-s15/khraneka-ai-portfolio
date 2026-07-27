import type { SkillAxis } from "@/lib/types";

const CX = 150;
const CY = 150;
const MAX_R = 110;
const RINGS = [0.25, 0.5, 0.75, 1];

function point(index: number, count: number, frac: number): [number, number] {
  const angle = -Math.PI / 2 + index * ((2 * Math.PI) / count);
  return [CX + frac * MAX_R * Math.cos(angle), CY + frac * MAX_R * Math.sin(angle)];
}

function labelAnchor(index: number, count: number): "start" | "middle" | "end" {
  const angle = -Math.PI / 2 + index * ((2 * Math.PI) / count);
  const cos = Math.cos(angle);
  if (Math.abs(cos) < 0.2) return "middle";
  return cos > 0 ? "start" : "end";
}

export function RadarChart({ axes, caption }: { axes: SkillAxis[]; caption?: string }) {
  const n = axes.length;
  const toStr = (p: [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;

  const dataPolygon = axes.map((a, i) => toStr(point(i, n, a.value / 100))).join(" ");

  return (
    <figure className="m-0">
      <svg
        viewBox="-90 -20 460 350"
        role="img"
        aria-labelledby="radar-title radar-desc"
        className="w-full max-w-[320px]"
      >
        <title id="radar-title">Self-rated skill proficiency</title>
        <desc id="radar-desc">
          Radar chart across {n} skill areas: {axes.map((a) => a.label).join(", ")}.
        </desc>

        {RINGS.map((ring) => (
          <polygon
            key={ring}
            points={axes.map((_, i) => toStr(point(i, n, ring))).join(" ")}
            fill="none"
            stroke="var(--border)"
            strokeWidth={ring === 1 ? 1.25 : 1}
          />
        ))}

        {axes.map((_, i) => {
          const [x, y] = point(i, n, 1);
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              stroke="var(--border)"
              strokeWidth={1}
            />
          );
        })}

        <polygon points={dataPolygon} fill="var(--accent)" fillOpacity={0.18} stroke="var(--accent)" strokeWidth={2} />

        {axes.map((a, i) => {
          const [x, y] = point(i, n, a.value / 100);
          return <circle key={a.label} cx={x} cy={y} r={4} fill="var(--accent)" />;
        })}

        <g fontFamily="var(--font-mono)" fontSize={11} fill="var(--muted)">
          {axes.map((a, i) => {
            const [x, y] = point(i, n, 1.22);
            return (
              <text key={a.label} x={x} y={y} textAnchor={labelAnchor(i, n)}>
                {a.label}
              </text>
            );
          })}
        </g>
      </svg>
      {caption ? <figcaption className="mt-2 text-center font-mono text-xs text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
