import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import NavLink from "@/components/nav_link";
import DarkModeToggle from "@/app/_components/layout/dark_mode_toggle";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LuMenu } from "react-icons/lu";
import NavButton from "./nav_button";

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
        <div className="hidden md:flex flex-row">
          <NavLink href="/about" pathname={pathname}>About</NavLink>
          <NavLink href="/cv" pathname={pathname}>CV</NavLink>
          <NavLink href="/blog" pathname={pathname}>Blog</NavLink>
          <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <NavButton className="md:hidden">
              <LuMenu />
            </NavButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DarkModeToggle />
      </nav>
    </header>
  )
}
