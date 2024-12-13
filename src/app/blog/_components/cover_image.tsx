import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  src: string;
  slug?: string;
}

export default function CoverImage({ title, src, slug }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={500}
      height={256}
      className={cn("shadow-sm h-64 w-auto mx-auto max-w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <div className="sm:mx-0 flex justify-center">
      {slug ? (
        <Link href={`/blog/${slug}`} className="hover:underline">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
