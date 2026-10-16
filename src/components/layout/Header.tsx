"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";

const NAV_KEYS = ["about", "skills", "projects", "contact"] as const;

export function Header() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const onProjects = pathname.startsWith("/projects");

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-x-4 px-4 py-1 sm:px-6">
        <div aria-hidden="true" className="order-1 flex flex-none gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-dot-red" />
          <span className="block h-2.5 w-2.5 rounded-full bg-dot-yellow" />
          <span className="block h-2.5 w-2.5 rounded-full bg-metric" />
        </div>
        <Link
          href="/"
          className="order-2 hidden min-h-11 min-w-0 items-center truncate px-1.5 font-mono text-sm text-muted no-underline hover:text-accent-2 sm:inline-flex"
        >
          {site.handle}@portfolio:~{onProjects ? "/projects" : ""}$
        </Link>
        {/* Toggles stay on the dots' row on mobile (ml-auto pushes them right);
            nav drops to its own full-width row below via basis-full so nothing
            has to shrink and every tap target keeps its size. At sm+, order
            reverts to the original single-row layout: dots, path, nav, toggles. */}
        <div className="order-3 ml-auto flex flex-none items-center gap-0.5 sm:order-4 sm:ml-0">
          <LocaleToggle />
          <ThemeToggle />
        </div>
        <nav
          aria-label="Primary"
          className="order-4 -ml-1.5 flex basis-full gap-2 font-mono text-sm sm:order-3 sm:ml-auto sm:basis-auto sm:gap-3.5"
        >
          {NAV_KEYS.map((key) => {
            const current = key === "projects" && onProjects;
            return (
              <Link
                key={key}
                href={key === "projects" && onProjects ? "/projects" : `/#${key}`}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center px-1.5 text-fg hover:text-accent-2 ${
                  current ? "underline decoration-2 underline-offset-[6px]" : "no-underline"
                }`}
              >
                {strings.nav[key][locale]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
