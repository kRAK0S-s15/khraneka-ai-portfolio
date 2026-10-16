// Thin segmented progress bar: one segment per step, done = accent-2.
export function ProgressSegments({ done, total, label }: { done: number; total: number; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="grid gap-0.75"
      style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`h-1.5 rounded-full ${i < done ? "bg-accent-2" : "bg-track"}`} />
      ))}
    </div>
  );
}
