import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

// Shared section rhythm: hairline on top, 56px vertical (44px on mobile),
// shell-comment eyebrow as the h2.
export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = id ? `${id}-h` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-border py-11 sm:py-14 ${className}`}>
      <Eyebrow id={headingId}>{title}</Eyebrow>
      {children}
    </section>
  );
}
