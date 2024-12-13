import type { Post } from "@/interfaces/post";
import type { Project } from "@/interfaces/project";
import type { Education } from "@/interfaces/education";
import type { Experience } from "@/interfaces/experience";
import type { Award } from "@/interfaces/award";
import type { Publication } from "@/interfaces/publication";
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
  // Sort by end_year in descending order
  education.sort((a, b) => b.end_year - a.end_year);
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
  // Sort by end_date in descending order
  experience.sort((a, b) => {
    // Convert date strings to comparable values
    const dateA = new Date(a.end_date);
    const dateB = new Date(b.end_date);
    return dateB.getTime() - dateA.getTime();
  });
  return experience;
}

const awardsDirectory = join(process.cwd(), "_cv/_awards");

export function getAwardSlugs() {
  return fs.readdirSync(awardsDirectory);
}

export function getAwardBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(awardsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const obj = JSON.parse(fileContents);
  return obj as Award;
}

export function getAllAwards(): Award[] {
  const slugs = getAwardSlugs();
  const awards = slugs.map((slug) => getAwardBySlug(slug));
  // Sort by year in descending order
  awards.sort((a, b) => b.year - a.year);
  return awards;
}

const publicationsDirectory = join(process.cwd(), "_cv/_publications");

export function getPublicationSlugs() {
  return fs.readdirSync(publicationsDirectory);
}

export function getPublicationBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(publicationsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const obj = JSON.parse(fileContents);
  return obj as Publication;
}

export function getAllPublications(): Publication[] {
  const slugs = getPublicationSlugs();
  const publications = slugs.map((slug) => getPublicationBySlug(slug));
  // Sort by year in descending order
  publications.sort((a, b) => b.year - a.year);
  return publications;
}
