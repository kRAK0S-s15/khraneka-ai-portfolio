"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer id="contact" className="border-t border-border py-12 font-mono text-sm text-muted">
      <div className="mx-auto max-w-[860px] px-6">
        <Eyebrow>{strings.nav.contact[locale]}</Eyebrow>
        <div className="mt-3 flex flex-wrap gap-6">
          <a href={`mailto:${site.email}`} className="text-fg no-underline hover:text-accent-2">
            {site.email}
          </a>
          <a href={site.github} target="_blank" rel="noopener" className="text-fg no-underline hover:text-accent-2">
            {site.githubHandle}
          </a>
          {site.linkedin ? (
            <a href={site.linkedin} target="_blank" rel="noopener" className="text-fg no-underline hover:text-accent-2">
              linkedin
            </a>
          ) : (
            <span className="italic">{strings.footer.addLinkedin[locale]}</span>
          )}
        </div>
      </div>
    </footer>
  );
}
