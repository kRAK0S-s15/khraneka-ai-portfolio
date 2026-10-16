"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FactsGrid } from "@/components/ui/FactsGrid";
import { StatList } from "@/components/ui/StatList";
import { StatusPill } from "@/components/ui/StatusPill";
import { RichText } from "@/components/ui/RichText";
import { BarChart } from "@/components/charts/BarChart";
import { ProjectStatusPill } from "./ProjectStatusPill";
import { RepoLink } from "./RepoLink";
import { strings, fill } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n";
import type { DefinitionItem, ProgressStep, Project } from "@/lib/types";

const PANEL = "rounded-card border border-border bg-surface px-4.5 py-5 sm:px-6.5 sm:py-6";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function BackLink({ locale }: { locale: Locale }) {
  return (
    <Link
      href="/projects"
      className="group/back -ml-1 inline-flex min-h-11 items-center gap-2 px-1 font-mono text-sm no-underline hover:underline"
    >
      <Icon name="arrow-left" size={16} className="transition-transform duration-150 group-hover/back:-translate-x-0.75" />
      {strings.projects.allProjects[locale]}
    </Link>
  );
}

function ProgressTracker({ steps, locale }: { steps: ProgressStep[]; locale: Locale }) {
  const done = steps.filter((s) => s.done).length;
  return (
    <ol
      aria-label={fill(strings.projects.progressAria[locale], { done, total: steps.length })}
      className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(92px,100%),1fr))] gap-x-2 gap-y-3.5 p-0"
    >
      {steps.map((step, i) => (
        <li key={step.title.en} className="flex flex-col gap-2">
          <span aria-hidden="true" className={`h-1.5 rounded-full ${step.done ? "bg-accent-2" : "bg-track"}`} />
          <span
            className={`flex items-center gap-1.5 font-mono text-label leading-none ${
              step.done ? "text-metric" : "text-muted"
            }`}
          >
            {step.done ? <Icon name="check" size={12} /> : null}
            {pad(i + 1)}
            {step.done ? ` · ${strings.projects.stepDone[locale]}` : ""}
          </span>
          <span className={`text-md leading-snug ${step.done ? "" : "text-muted"}`}>{step.title[locale]}</span>
        </li>
      ))}
    </ol>
  );
}

function DefinitionList({ items }: { items: { term: ReactNode; detail: string; key: string }[] }) {
  return (
    <dl className="m-0 grid">
      {items.map((item) => (
        <div
          key={item.key}
          className="flex flex-wrap gap-x-6 gap-y-1 border-t border-border py-4 first:border-t-0 first:pt-0"
        >
          <dt className="flex-[0_0_100%] font-mono text-sm leading-relaxed sm:flex-[0_0_200px]">{item.term}</dt>
          <dd className="m-0 min-w-0 flex-[1_1_320px]">
            <RichText text={item.detail} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function cleaningItems(items: DefinitionItem[], locale: Locale) {
  return items.map((c) => ({ key: c.term.en, term: <RichText text={c.term[locale]} />, detail: c.detail[locale] }));
}

export function ProjectDetail({ project }: { project: Project }) {
  const { locale } = useLocale();
  const steps = project.progress;
  const done = steps?.filter((s) => s.done).length ?? 0;
  const [mainChart, ...sideCharts] = project.findings?.charts ?? [];

  return (
    <article>
      {/* Header */}
      <div className="motion-safe:animate-rise pt-8 pb-12">
        <BackLink locale={locale} />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <ProjectStatusPill status={project.status} />
          <RepoLink project={project} className="-my-3" />
        </div>
        <h1 className="mt-3.5 mb-0 font-serif text-2xl leading-[1.15] font-semibold tracking-[-0.01em] sm:text-display">
          {project.title[locale]}
        </h1>
        <p className="mt-3.5 mb-0 max-w-[56ch] text-lg leading-normal">{project.description[locale]}</p>
        <ul className="m-0 mt-5 flex list-none flex-wrap gap-1.5 p-0" aria-label={strings.projects.stack[locale]}>
          {project.tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
          {project.plannedTech?.map((t) => (
            <li key={t}>
              <Badge planned>{`${t} · ${strings.projects.planned[locale]}`}</Badge>
            </li>
          ))}
        </ul>
        {project.facts ? (
          <FactsGrid
            className="mt-8"
            items={project.facts.map((f) => ({
              label: f.planned ? `${f.label[locale]} · ${strings.projects.planned[locale]}` : f.label[locale],
              value: <RichText text={f.value[locale]} />,
            }))}
          />
        ) : null}
      </div>

      {steps ? (
        <Section id="progress" title={strings.projects.progress[locale]}>
          <ProgressTracker steps={steps} locale={locale} />
        </Section>
      ) : null}

      {project.stats.length > 0 ? (
        <Section id="results" title={(project.statsHeading ?? strings.projects.results)[locale]}>
          <StatList stats={project.stats} locale={locale} layout="grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-10" />
        </Section>
      ) : null}

      {mainChart ? (
        <Section id="findings" title={strings.projects.findings[locale]}>
          <div className="grid gap-6">
            <BarChart spec={mainChart} locale={locale} className={PANEL} />
            {sideCharts.length > 0 || project.findings?.notes ? (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-6">
                {sideCharts.map((c) => (
                  <BarChart key={c.ariaLabel.en} spec={c} locale={locale} className={PANEL} />
                ))}
                {project.findings?.notes?.map((note) => (
                  <div key={note.title.en} className={`${PANEL} flex flex-col gap-4`}>
                    <h3 className="m-0 font-serif text-[1.1875rem] leading-snug font-semibold">{note.title[locale]}</h3>
                    {note.paragraphs.map((p) => (
                      <p key={p.en} className="m-0 text-base">
                        <RichText text={p[locale]} />
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Section>
      ) : null}

      {project.cleaning ? (
        <Section id="cleaning" title={strings.projects.cleaning[locale]}>
          <DefinitionList items={cleaningItems(project.cleaning, locale)} />
        </Section>
      ) : null}

      {project.retrospective ? (
        <section aria-labelledby="reconsider-h" className="border-t border-border py-11 sm:py-14">
          <div className="rounded-card border border-border bg-surface-2 px-4.5 py-5.5 sm:px-7 sm:py-6.5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <Eyebrow id="reconsider-h" className="m-0">
                {strings.projects.reconsider[locale]}
              </Eyebrow>
              {project.retrospective.badge ? (
                <StatusPill kind="note">{project.retrospective.badge[locale]}</StatusPill>
              ) : null}
            </div>
            <p className="mt-0 mb-3 max-w-[64ch]">
              <RichText text={project.retrospective.lead[locale]} />
            </p>
            {project.retrospective.detail ? (
              <p className="mt-0 mb-5.5 max-w-[64ch] text-base text-muted">
                <RichText text={project.retrospective.detail[locale]} />
              </p>
            ) : null}
            {project.retrospective.chart ? (
              <BarChart spec={project.retrospective.chart} locale={locale} />
            ) : null}
          </div>
        </section>
      ) : null}

      {project.decisions ? (
        <Section id="decisions" title={strings.projects.decisions[locale]}>
          <DefinitionList
            items={project.decisions.map((d) => ({
              key: d.text.en,
              term: (
                <StatusPill kind={d.state}>
                  {d.state === "decided" ? strings.projects.decided[locale] : strings.projects.planned[locale]}
                </StatusPill>
              ),
              detail: d.text[locale],
            }))}
          />
        </Section>
      ) : null}

      {steps && done < steps.length ? (
        <Section id="roadmap" title={strings.projects.roadmap[locale]}>
          <ol className="m-0 list-none p-0">
            {steps.map((step, i) =>
              step.done ? null : (
                <li
                  key={step.title.en}
                  className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-t border-border py-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-sm leading-relaxed text-muted">{pad(i + 1)}</span>
                  <span className="font-semibold">{step.title[locale]}</span>
                  {step.note ? (
                    <span className="col-start-2 text-base text-muted">
                      <RichText text={step.note[locale]} />
                    </span>
                  ) : null}
                </li>
              ),
            )}
          </ol>
        </Section>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-8 pb-14">
        <BackLink locale={locale} />
        <RepoLink project={project} />
      </div>
    </article>
  );
}
