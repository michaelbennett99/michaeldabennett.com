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
        className="flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-16 justify-between"
      >
        <div className="flex-none flex flex-col justify-between">
          <div>
            <h3 className="text-4xl leading-tight">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div className="hidden sm:block">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
        <div className="flex-auto self-center max-w-2xl">
          <p className="text-lg leading-relaxed">{excerpt}</p>
        </div>
        <div className="sm:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
