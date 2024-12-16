import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { Sortable } from "@/interfaces/sortable";
import { Draftable } from "@/interfaces/draftable";
import { Slug } from "@/interfaces/slug";

// Configuration type for content directories
interface ContentConfig<T> {
  directory: string;
  extension: string;
  parseContent?: boolean;
  sortBy?: keyof T;
  sortOrder?: 'asc' | 'desc';
}

const CONTENT_ROOT = process.cwd();

// Generic function to get content from files
function getContent<T extends Sortable & Draftable & Slug>(
  config: ContentConfig<T>
) {
  const directory = join(CONTENT_ROOT, config.directory);

  function getSlugs() {
    return fs.readdirSync(directory);
  }

  function getBySlug(slug: string): T {
    const realSlug = slug.replace(new RegExp(`\\.${config.extension}$`), "");
    const fullPath = join(directory, `${realSlug}.${config.extension}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    if (config.extension === 'md' && config.parseContent) {
      const { data, content } = matter(fileContents);
      return { ...data, slug: realSlug, content } as unknown as T;
    }

    return JSON.parse(fileContents) as T;
  }

  function getAll(): T[] {
    const slugs = getSlugs();
    const items = slugs
      .map((slug) => getBySlug(slug))
      .filter(filterDrafts<T>());

    return sortItems(items, config.sortBy, config.sortOrder);
  }

  function generateStaticParams(): Slug[] {
    return getAll()
      .map((item) => ({ slug: item.slug?.replace(
        new RegExp(`\\.${config.extension}$`), ''
      ) }));
  }

  return {
    getSlugs,
    getBySlug,
    getAll,
    generateStaticParams,
  };
}

// Helper function to sort items
function sortItems<T extends Sortable>(
  items: T[],
  sortBy?: keyof T,
  sortOrder: 'asc' | 'desc' = 'desc'
): T[] {
  if (!sortBy) return items;

  return [...items].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA instanceof Date || typeof valueA === 'string') {
      const dateA = new Date(valueA as string);
      const dateB = new Date(valueB as string);
      return sortOrder === 'desc'
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortOrder === 'desc' ? valueB - valueA : valueA - valueB;
    }

    if (
      sortBy === 'proficiency' &&
      typeof valueA === 'string' &&
      typeof valueB === 'string'
    ) {
      const proficiencyOrder = ['Beginner', 'Intermediate', 'Advanced'];
      const indexA = proficiencyOrder.indexOf(valueA);
      const indexB = proficiencyOrder.indexOf(valueB);
      return sortOrder === 'desc' ? indexB - indexA : indexA - indexB;
    }

    return 0;
  });
}

function filterDrafts<T extends Draftable>(): (item: T) => boolean {
  return process.env.NODE_ENV === 'production'
    ? (item) => item.draft === undefined || item.draft === false
    : () => true
}

// Content configurations
const contentConfigs = {
  posts: {
    directory: '_posts',
    extension: 'md',
    parseContent: true,
    sortBy: 'date' as const,
  },
  projects: {
    directory: '_projects',
    extension: 'md',
    parseContent: true,
    sortBy: 'order' as const,
    sortOrder: 'asc' as const,
  },
  education: {
    directory: '_cv/_education',
    extension: 'json',
    sortBy: 'end_year' as const,
  },
  experience: {
    directory: '_cv/_experience',
    extension: 'json',
    sortBy: 'end_date' as const,
  },
  awards: {
    directory: '_cv/_awards',
    extension: 'json',
    sortBy: 'year' as const,
  },
  publications: {
    directory: '_cv/_publications',
    extension: 'json',
    sortBy: 'year' as const,
  },
  skills: {
    directory: '_cv/_skills',
    extension: 'json',
    sortBy: 'order' as const,
  },
};

// Export the core functionality and configs
export { getContent };
export { contentConfigs };
export type { ContentConfig, Sortable };
