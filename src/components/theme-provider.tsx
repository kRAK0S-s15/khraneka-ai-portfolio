"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Dark is the default for first-time visitors, regardless of the OS
// preference (enableSystem off). A saved choice from the toggle still wins:
// next-themes reads localStorage in an inline script that runs before first
// paint, so there's no flash of the wrong theme. The <html> element also ships
// with class="dark" (layout.tsx) so the no-JS fallback matches the default.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={["light", "dark"]}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
