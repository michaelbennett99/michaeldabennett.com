import { getAllPosts } from "@/lib/api";
import HeroPost from "./_components/hero_post";
import MorePosts from "./_components/more_posts";
import Container from "@/components/container";
import PageHeading from "@/components/page_heading";

export default function Blog() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <section>
          <PageHeading title="Blog" />
        </section>
        <HeroPost
          title={heroPost.title}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </Container>
    </main>
  );
}
