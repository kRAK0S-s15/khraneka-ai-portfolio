export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded border border-border px-[0.55em] py-[0.25em] font-mono text-xs text-muted">
      {children}
    </span>
  );
}
