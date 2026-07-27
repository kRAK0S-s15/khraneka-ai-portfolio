import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export function LinkButton({ variant = "ghost", className = "", children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-[5px] border px-[1.1em] py-[0.65em] font-mono text-sm no-underline transition-colors";
  const styles =
    variant === "primary"
      ? "border-transparent bg-accent text-bg hover:brightness-110"
      : "border-border text-fg hover:bg-surface";

  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  );
}
