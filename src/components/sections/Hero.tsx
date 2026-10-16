"use client";

import { LinkButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

function Prompt({ children }: { children: string }) {
  return (
    <div className="mb-1 flex gap-2.5">
      <span aria-hidden="true" className="flex-none text-accent-2">
        $
      </span>
      <span className="text-muted">{children}</span>
    </div>
  );
}

export function Hero() {
  const { locale } = useLocale();

  return (
    <section aria-labelledby="hero-name" className="pt-12 pb-11 sm:pt-16 sm:pb-14">
      <div className="motion-safe:animate-rise rounded-card border border-border bg-surface px-5 py-6 font-mono text-md shadow-terminal sm:px-8 sm:py-7">
        <Prompt>whoami</Prompt>
        <div className="mb-5.5 ml-5.5">
          <h1 id="hero-name" className="mb-1 text-name leading-tight font-semibold tracking-[-0.01em]">
            {site.name}
          </h1>
          <span className="text-muted">
            {site.role[locale]} &mdash; {site.location[locale]}
          </span>
        </div>
        <Prompt>cat summary.md</Prompt>
        <p className="mt-1 ml-5.5 max-w-[48ch] font-serif text-lg leading-[1.55]">
          {site.tagline[locale]}
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1.05em] w-[0.55em] animate-blink bg-accent align-text-bottom motion-reduce:animate-none"
          />
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <LinkButton variant="primary" href="#projects">
            {strings.hero.viewProjects[locale]}
            <Icon name="arrow-down" className="transition-transform duration-150 group-hover/btn:translate-y-0.5" />
          </LinkButton>
          <LinkButton href={site.resumeHref} download>
            <Icon name="arrow-down" />
            {strings.hero.resume[locale]}
          </LinkButton>
          <LinkButton href={site.github} target="_blank" rel="noopener">
            {strings.hero.github[locale]}
            <Icon
              name="arrow-up-right"
              className="transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
