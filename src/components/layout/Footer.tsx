import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12 font-mono text-sm text-muted">
      <div className="mx-auto max-w-[860px] px-6">
        <Eyebrow>contact</Eyebrow>
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
            <span className="italic">[add LinkedIn]</span>
          )}
        </div>
      </div>
    </footer>
  );
}
