const CLASSES = "flex items-baseline gap-2 font-mono text-label font-normal leading-snug tracking-[0.08em] text-muted";

export function Eyebrow({
  children,
  as = "h2",
  id,
  className = "mb-6",
}: {
  children: string;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}) {
  const Tag = as;
  return (
    <Tag id={id} className={`${CLASSES} ${className}`}>
      <span aria-hidden="true" className="text-accent">
        #
      </span>
      {children}
    </Tag>
  );
}
