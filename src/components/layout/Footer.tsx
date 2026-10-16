"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

const LINK = "-ml-1.5 inline-flex min-h-11 items-center gap-1.5 px-1.5 text-fg no-underline hover:text-accent-2";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer id="contact" className="border-t border-border pt-12 pb-14 font-mono text-sm text-muted">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <Eyebrow className="mb-3">{strings.nav.contact[locale]}</Eyebrow>
        <div className="flex flex-wrap gap-x-6">
          <a href={`mailto:${site.email}`} className={LINK}>
            {site.email}
          </a>
          <a href={site.github} target="_blank" rel="noopener" className={LINK}>
            {site.githubHandle}
            <Icon name="arrow-up-right" size={13} className="text-muted" />
          </a>
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener" className={LINK}>
              linkedin
              <Icon name="arrow-up-right" size={13} className="text-muted" />
            </a>
          ) : (
            <span className="italic">{strings.footer.addLinkedin[locale]}</span>
          )}
        </div>
      </div>
    </footer>
  );
}
