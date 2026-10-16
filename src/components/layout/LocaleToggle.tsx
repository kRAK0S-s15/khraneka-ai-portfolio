"use client";

import { locales } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div role="group" aria-label="Language" className="flex gap-0.5 font-mono text-sm">
      {locales.map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={l === "en" ? "English" : "Polski"}
            className={`inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-btn px-2.5 uppercase tracking-[0.04em] transition-colors duration-150 hover:bg-surface-2 ${
              active
                ? "text-accent-2 underline decoration-2 underline-offset-[5px]"
                : "text-muted hover:text-fg"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
