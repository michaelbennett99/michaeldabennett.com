import { TechDependency } from "./tech_dependency";

export interface Project {
  name: string;
  url: string;
  githubUrl: string;
  content: string;
  order?: number;
  techStack?: TechDependency[];
}
