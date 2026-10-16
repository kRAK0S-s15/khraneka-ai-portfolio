export function Badge({ children, planned = false }: { children: string; planned?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-chip border border-border bg-bg/40 px-2.25 py-0.75 font-mono text-label leading-normal text-muted ${
        planned ? "border-dashed" : ""
      }`}
    >
      {children}
    </span>
  );
}
