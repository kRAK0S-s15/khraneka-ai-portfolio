"use client";

import { LinkButton } from "@/components/ui/Button";
import { site } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function Hero() {
  const { locale } = useLocale();

  return (
    <header className="py-16">
      <div className="rounded-md border border-border bg-surface px-7 py-6 font-mono text-[0.95rem] shadow-[0_8px_24px_-12px_var(--shadow)]">
        <div className="mb-1 flex gap-2">
          <span className="flex-none text-accent-2">$</span>
          <span className="text-muted">whoami</span>
        </div>
        <div className="mb-5 ml-6">
          <h1 className="mb-1 text-xl font-semibold">{site.name}</h1>
          <span className="text-muted">
            {site.role[locale]} &mdash; {site.location[locale]}
          </span>
        </div>
        <div className="mb-1 flex gap-2">
          <span className="flex-none text-accent-2">$</span>
          <span className="text-muted">cat summary.md</span>
        </div>
        <div className="ml-6">
          <p className="mt-1 max-w-[46ch] font-serif text-lg leading-[1.55]">
            {site.tagline[locale]}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[1.05em] w-[0.55em] animate-[blink_1.1s_steps(1)_infinite] bg-accent align-text-bottom motion-reduce:animate-none"
            />
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton variant="primary" href="#projects">
            {strings.hero.viewProjects[locale]}
          </LinkButton>
          <LinkButton href={site.resumeHref} download>
            {strings.hero.resume[locale]}
          </LinkButton>
          <LinkButton href={site.github} target="_blank" rel="noopener">
            GitHub &#8599;
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
