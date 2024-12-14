import { Proficiency } from "./proficiency";
import { TechDependency } from "./tech_dependency";

export interface Skill {
  name: string;
  icon?: TechDependency;
  proficiency: Proficiency;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  order: number;
}
