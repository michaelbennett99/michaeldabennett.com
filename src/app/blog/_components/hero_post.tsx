import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "@/app/blog/_components/avatar";
import DateFormatter from "@/components/date_formatter";
import CoverImage from "./cover_image";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  coverImage?: string;
}

export default function HeroPost(
  { title, date, excerpt, author, slug, coverImage }: Props
) {
  return (
    <section>
      {coverImage && (
        <div className="mb-8">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      )}
      <div
        className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28"
      >
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
