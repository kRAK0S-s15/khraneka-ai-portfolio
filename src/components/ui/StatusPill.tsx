import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Kind = "in-progress" | "complete" | "decided" | "planned" | "note";

const STYLES: Record<Kind, string> = {
  "in-progress": "bg-wip-bg text-accent",
  complete: "bg-done-bg text-metric",
  decided: "bg-done-bg text-metric",
  planned: "border border-dashed border-border-strong text-muted",
  note: "border border-border-strong text-accent-2",
};

// Status is always spelled out (and usually iconed) — never colour alone.
export function StatusPill({ kind, children }: { kind: Kind; children: ReactNode }) {
  const icon =
    kind === "in-progress" ? <Icon name="half" size={10} /> : kind === "complete" ? <Icon name="check" size={11} /> : kind === "note" ? <Icon name="refresh" size={12} /> : null;
  return (
    <span
      className={`inline-flex min-h-6.5 items-center gap-1.75 whitespace-nowrap rounded-full py-0.5 pr-2.75 pl-2.25 font-mono text-label font-medium leading-snug ${STYLES[kind]}`}
    >
      {icon}
      {children}
    </span>
  );
}
