"use client";

import { usePathname } from "next/navigation";

import NavLink from "@/components/nav_link";
import NavBarDropdown from "./nav_bar_dropdown";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row h-full">
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
    </nav>
  )
}

const links = [
  { href: "/contact", label: "Contact" },
]
