import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from '@/lib/content';
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/components/container";
import PostHeader from "./_components/post_header";
import PostBody from "./_components/post_body";

type Params = {
  params: Promise<{ slug: string }>
}

export default async function Post({ params }: Params) {
  const props = await params;
  const post = posts.getBySlug(props.slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container className="mt-16">
        <article>
          <PostHeader
            title={post.title}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  )
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = posts.getBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post?.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title
  }
}

export async function generateStaticParams() {
  const slugs = posts.getSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}
