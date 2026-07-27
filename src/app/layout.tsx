import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { site } from "@/content/site";

// Metadata is generated once at build time, so it always uses the English
// copy regardless of a visitor's in-session language toggle.
export const metadata: Metadata = {
  title: `${site.name} — ${site.role.en}`,
  description: site.tagline.en,
  metadataBase: new URL("https://khraneka-ai-portfolio.vercel.app"),
  openGraph: {
    title: `${site.name} — ${site.role.en}`,
    description: site.tagline.en,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
