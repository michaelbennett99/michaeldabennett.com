import { usePathname } from "next/navigation";
import Link from "next/link";


import { cn } from "@/lib/utils";

import DarkModeToggle from "@/app/_components/layout/dark_mode_toggle";
import NavLink from "@/components/nav_link";
import NavBarDropdown from "./nav_bar_dropdown";

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
            <NavLink
              href={link.href}
              pathname={pathname}
              key={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <NavBarDropdown links={links} />
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
