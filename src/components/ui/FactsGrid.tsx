import type { ReactNode } from "react";

// Bordered grid of label/value facts; 1px gaps over a border-coloured
// background draw the inner hairlines.
export function FactsGrid({
  items,
  className = "",
  minColumn = "190px",
}: {
  items: { label: string; value: ReactNode }[];
  className?: string;
  /** Minimum column width before the grid wraps to fewer columns. */
  minColumn?: string;
}) {
  return (
    <dl
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(${minColumn}, 100%), 1fr))` }}
      className={`m-0 grid gap-px overflow-hidden rounded-card border border-border bg-border ${className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-surface px-5 py-4">
          <dt className="mb-1.5 font-mono text-label leading-snug tracking-[0.03em] text-muted">{item.label}</dt>
          <dd className="m-0 leading-[1.45]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
