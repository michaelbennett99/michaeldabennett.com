import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import NavLink from "@/components/nav_link";
import DarkModeToggle from "@/app/_components/layout/dark_mode_toggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "text-lg text-bold sticky top-0 border-b",
        "grid grid-cols-[auto,1fr]",
        "text-foreground bg-background",
      )}
    >
      <Link href="/" className="px-8 lg:px-16 py-4 flex items-center">
        <span className="text-4xl font-bold">
          Michael Bennett
        </span>
      </Link>
      <nav
        className="flex flex-row justify-end h-full"
      >
        <NavLink href="/about" pathname={pathname}>About</NavLink>
        <NavLink href="/cv" pathname={pathname}>CV</NavLink>
        <NavLink href="/blog" pathname={pathname}>Blog</NavLink>
        <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
        <DarkModeToggle
          className={cn(
            "px-2 md:px-4 lg:px-8 2xl:px-16",
            "transition-colors duration-300",
            "hover:bg-accent hover:text-accent-foreground"
          )}
        />
      </nav>
    </header>
  )
}
