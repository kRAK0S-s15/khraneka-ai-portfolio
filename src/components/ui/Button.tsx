import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export function LinkButton({ variant = "ghost", className = "", children, ...rest }: ButtonProps) {
  const base =
    "group/btn inline-flex min-h-11 items-center gap-2 rounded-btn border px-4.5 font-mono text-sm leading-none no-underline transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "border-accent bg-accent text-bg hover:border-accent-hover hover:bg-accent-hover hover:text-bg"
      : "border-border-strong text-fg hover:border-fg hover:bg-surface-2 hover:text-fg";

  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  );
}
