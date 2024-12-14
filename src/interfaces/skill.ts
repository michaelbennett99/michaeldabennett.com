import { Proficiency } from "./proficiency";
import { IconName } from "./icon_name";

export interface Skill {
  name: string;
  icon?: IconName;
  proficiency: Proficiency;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  order: number;
}
