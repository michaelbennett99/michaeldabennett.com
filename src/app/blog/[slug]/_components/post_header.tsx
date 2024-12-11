import Avatar from "@/app/blog/_components/avatar";
import DateFormatter from "@/components/date_formatter";
import PostTitle from "./post_title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  date: string;
  author: Author;
}

export default function PostHeader({ title, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block mb-8">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
