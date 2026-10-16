"use client";

import { StatusPill } from "@/components/ui/StatusPill";
import { strings } from "@/content/strings";
import { useLocale } from "@/components/locale-provider";
import type { ProjectStatus } from "@/lib/types";

export function ProjectStatusPill({ status }: { status: ProjectStatus }) {
  const { locale } = useLocale();
  return status === "in-progress" ? (
    <StatusPill kind="in-progress">{strings.projects.inProgress[locale]}</StatusPill>
  ) : (
    <StatusPill kind="complete">{strings.projects.complete[locale]}</StatusPill>
  );
}
