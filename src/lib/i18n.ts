export type Locale = "en" | "pl";

export const locales: Locale[] = ["en", "pl"];

export type LocalizedText = Record<Locale, string>;
