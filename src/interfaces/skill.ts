import { Proficiency } from "./proficiency";
import { IconName } from "./icon_map";

export interface Skill {
  name: string;
  icon?: IconName;
  proficiency?: Proficiency;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  order: number;
}
