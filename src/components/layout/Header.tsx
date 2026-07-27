import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Header() {
  return (
    <div className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[860px] items-center gap-4 px-6 py-3">
        <div aria-hidden="true" className="flex flex-none gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-dot-red" />
          <span className="block h-2.5 w-2.5 rounded-full bg-dot-yellow" />
          <span className="block h-2.5 w-2.5 rounded-full bg-metric" />
        </div>
        <span className="hidden min-w-0 truncate font-mono text-sm text-muted sm:block">
          {site.handle}@portfolio:~$
        </span>
        <nav aria-label="Primary" className="ml-auto flex gap-3 font-mono text-sm sm:gap-5">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-fg no-underline hover:text-accent-2">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
