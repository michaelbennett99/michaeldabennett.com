import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";

import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";

import Alert from "./_components/alert";
import Container from "@/app/_components/container";
import Header from "./_components/header";
import PostHeader from "./_components/post_header";
import PostBody from "./_components/post_body";

type Params = {
  params: Promise<{ slug: string }>
}

export default async function Post({ params }: Params) {
  const props = await params;
  const post = getPostBySlug(props.slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
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
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post?.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}