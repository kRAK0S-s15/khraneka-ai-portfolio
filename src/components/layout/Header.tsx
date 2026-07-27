"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";

const NAV_KEYS = ["about", "skills", "projects", "contact"] as const;

export function Header() {
  const { locale } = useLocale();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[860px] flex-wrap items-center gap-x-4 gap-y-1 px-6 py-3">
        <div aria-hidden="true" className="order-1 flex flex-none gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-dot-red" />
          <span className="block h-2.5 w-2.5 rounded-full bg-dot-yellow" />
          <span className="block h-2.5 w-2.5 rounded-full bg-metric" />
        </div>
        <Link
          href="/"
          className="order-2 hidden min-w-0 truncate font-mono text-sm text-muted no-underline hover:text-accent-2 sm:block"
        >
          {site.handle}@portfolio:~$
        </Link>
        {/* Toggles stay on the dots' row on mobile (ml-auto pushes them right);
            nav drops to its own full-width row below via basis-full so nothing
            has to shrink and every tap target keeps its size. At sm+, order
            reverts to the original single-row layout: dots, path, nav, toggles. */}
        <div className="order-3 ml-auto flex flex-none items-center sm:order-4 sm:ml-0">
          <LocaleToggle />
          <ThemeToggle />
        </div>
        <nav
          aria-label="Primary"
          className="order-4 flex basis-full gap-3 font-mono text-sm sm:order-3 sm:ml-auto sm:basis-auto sm:gap-5"
        >
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={`/#${key}`}
              className="flex items-center px-1 py-3 text-fg no-underline hover:text-accent-2"
            >
              {strings.nav[key][locale]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
