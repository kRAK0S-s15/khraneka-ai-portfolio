import type { Project } from "@/lib/types";
import { studentPerformancePred } from "./student-performance-pred";
import { creditRiskAnalysis } from "./credit-risk-analysis";

export const projects: Project[] = [studentPerformancePred, creditRiskAnalysis];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
