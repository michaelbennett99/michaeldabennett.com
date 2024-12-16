import type { Author } from "./author";

export type Post = {
    slug: string;
    title: string;
    date: string;
    author: Author;
    coverImage?: string;
    excerpt: string;
    content: string;
    draft?: boolean
}
