import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <h2
      className={cn(
        "text-2xl md:text-4xl font-bold mb-20 mt-8 flex items-center",
        "tracking-tight md:tracking-tighter leading-tight"
      )}
    >
      <Link href="/blog" className="hover:underline">Blog</Link>
      .
    </h2>
  )
}
