// One small stroke-icon set so every arrow and status glyph shares the same
// weight and alignment (Unicode arrows render inconsistently across the
// system mono stack). Always decorative: the adjacent text carries meaning.

const PATHS = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-left": "M19 12H5M11 6l-6 6 6 6",
  "arrow-up-right": "M7 17L17 7M8 7h9v9",
  "arrow-down": "M12 5v14M6 13l6 6 6-6",
  check: "M4 12.5l5 5L20 7",
  lock: "M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z",
  refresh: "M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5",
} as const;

export type IconName = keyof typeof PATHS | "half";

export function Icon({ name, size = 14, className = "" }: { name: IconName; size?: number; className?: string }) {
  if (name === "half") {
    // Half-filled circle: "in progress".
    return (
      <svg aria-hidden="true" width={size} height={size} viewBox="0 0 10 10" className={`flex-none ${className}`}>
        <circle cx="5" cy="5" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 1a4 4 0 0 1 0 8z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-none ${className}`}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
