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
          {links.map((link) => (
            <NavLink href={link.href} pathname={pathname}>{link.label}</NavLink>
          ))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <NavButton className="md:hidden">
              <LuMenu />
            </NavButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {links.map((link) => (
              <DropdownMenuItem key={link.href}>
                <DropdownLink href={link.href}>{link.label}</DropdownLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DarkModeToggle />
      </nav>
    </header>
  )
}

const links = [
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]
