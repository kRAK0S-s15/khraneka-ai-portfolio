"use client";

import { locales } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex font-mono text-sm">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          aria-label={l === "en" ? "English" : "Polski"}
          className={`px-4 py-3 uppercase tracking-[0.03em] ${
            locale === l ? "text-accent-2" : "text-muted hover:text-fg"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
