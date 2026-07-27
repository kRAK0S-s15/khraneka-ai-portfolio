const CLASSES = "mb-4 flex items-baseline gap-2 font-mono text-xs font-normal tracking-[0.08em] text-muted";

export function Eyebrow({ children, as = "h2" }: { children: string; as?: "h1" | "h2" }) {
  const Tag = as;
  return (
    <Tag className={CLASSES}>
      <span aria-hidden="true" className="text-accent">
        #
      </span>
      {children}
    </Tag>
  );
}
