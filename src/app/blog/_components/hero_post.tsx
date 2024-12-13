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
        className="flex flex-col md:flex-row md:gap-x-16 lg:gap-x-8 mb-16"
      >
        <div className="basis-1/4 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl lg:text-6xl leading-tight">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
        <div className="basis-3/4 self-center">
          <p className="text-lg leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
