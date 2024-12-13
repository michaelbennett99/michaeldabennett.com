import { Post } from "@/interfaces/post";
import PostPreview from "@/app/blog/_components/post_preview";

type Props = {
  posts: Post[];
}

export default function MorePosts({ posts }: Props) {
  return <section>
      <h2
        className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight"
      >
        More Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
  </section>;
}
