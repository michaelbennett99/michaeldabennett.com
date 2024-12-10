import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "@/app/_components/date_formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

export default function HeroPost({ title, date, excerpt, author, slug }: Props) {
  return (
    <section>
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
          <p className="text-xl font-bold">
            {author.name}
          </p>
        </div>
      </div>
    </section>
  );
}
