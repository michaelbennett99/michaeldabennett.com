import { usePathname } from "next/navigation";
import Link from "next/link";

import { LuMenu } from "react-icons/lu";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DarkModeToggle from "@/app/_components/layout/dark_mode_toggle";
import NavButton from "./nav_button";
import NavLink from "@/components/nav_link";
import DropdownLink from "@/components/dropdown_link";
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
          <DropdownMenuContent>
            <DropdownMenuItem>
              <DropdownLink href="/about">About</DropdownLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownLink href="/cv">CV</DropdownLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownLink href="/blog">Blog</DropdownLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownLink href="/contact">Contact</DropdownLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DarkModeToggle />
      </nav>
    </header>
  )
}
