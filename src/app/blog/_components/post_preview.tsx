import Link from "next/link";

import { type Author } from "@/interfaces/author";
import Avatar from "./avatar";
import DateFormatter from "@/components/date_formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

export default function PostPreview(
  { title, date, excerpt, author, slug }: Props
) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
