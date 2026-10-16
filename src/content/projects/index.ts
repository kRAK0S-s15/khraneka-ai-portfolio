import type { Project } from "@/lib/types";
import { housePricePredApi } from "./house-price-pred-api";
import { studentPerformancePred } from "./student-performance-pred";
import { creditRiskAnalysis } from "./credit-risk-analysis";

export const projects: Project[] = [housePricePredApi, studentPerformancePred, creditRiskAnalysis];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
