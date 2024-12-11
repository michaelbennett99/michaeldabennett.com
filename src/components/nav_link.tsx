import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavLink({
  children,
  href,
  pathname
}: {
  children: React.ReactNode;
  href: string;
  pathname: string;
}) {
  const isActive = pathname.endsWith(href) || pathname.includes(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "text-lg font-bold",
        "py-4 px-2 lg:px-4 2xl:px-8",
        "hover:bg-accent hover:text-accent-foreground",
        "transition-colors duration-300",
        "relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px]",
        "after:bg-current after:transition-all after:duration-300",
        isActive ? "after:w-full" : "after:w-0",
        "after:-translate-x-1/2",
        "flex items-center h-full"
      )}
    >
      {children}
    </Link>
  );
}
