import { getContent, contentConfigs } from './api';
import type { Post } from "@/interfaces/post";
import type { Project } from "@/interfaces/project";
import type { Education } from "@/interfaces/education";
import type { Experience } from "@/interfaces/experience";
import type { Award } from "@/interfaces/award";
import type { Publication } from "@/interfaces/publication";
import type { SkillCategory } from "@/interfaces/skill";

export const posts = getContent<Post>(contentConfigs.posts);
export const projects = getContent<Project>(contentConfigs.projects);
export const education = getContent<Education>(contentConfigs.education);
export const experience = getContent<Experience>(contentConfigs.experience);
export const awards = getContent<Award>(contentConfigs.awards);
export const publications = getContent<Publication>(
    contentConfigs.publications
);
export const skills = getContent<SkillCategory>(contentConfigs.skills);
