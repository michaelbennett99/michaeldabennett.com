import type { Post } from "@/interfaces/post";
import type { Project } from "@/interfaces/project";
import type { Education } from "@/interfaces/education";
import type { Experience } from "@/interfaces/experience";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  projects.sort((a, b) => (a.order || Infinity) - (b.order || Infinity));
  return projects;
}

const educationDirectory = join(process.cwd(), "_cv/_education");

export function getEducationSlugs() {
  return fs.readdirSync(educationDirectory);
}

export function getEducationBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(educationDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const obj = JSON.parse(fileContents);
  return obj as Education;
}

export function getAllEducation(): Education[] {
  const slugs = getEducationSlugs();
  const education = slugs.map((slug) => getEducationBySlug(slug));
  return education;
}

const experienceDirectory = join(process.cwd(), "_cv/_experience");

export function getExperienceSlugs() {
  return fs.readdirSync(experienceDirectory);
}

export function getExperienceBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(experienceDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const obj = JSON.parse(fileContents);
  return obj as Experience;
}

export function getAllExperience(): Experience[] {
  const slugs = getExperienceSlugs();
  const experience = slugs.map((slug) => getExperienceBySlug(slug));
  return experience;
}
