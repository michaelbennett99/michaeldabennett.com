import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

import DarkModeToggle from "./dark_mode_toggle";
import NavBar from "./nav_bar";

export default function Header() {
  return (
    <header
      className={cn(
        "text-lg font-bold sticky top-0 border-b",
        "grid grid-cols-[auto,1fr]",
        "text-foreground bg-background z-50"
      )}
    >
      <Link href="/" className="px-8 lg:px-16 py-4 flex items-center">
        <span className="text-4xl font-bold">
          Michael Bennett
        </span>
      </Link>
      <div className="flex flex-row justify-end h-full">
        <NavBar />
        <DarkModeToggle />
        <a
          href="https://github.com/michaelbennett99/michaeldabennett.com"
          target="_blank"
          className="h-full px-4 flex items-center hover:bg-accent hover:text-accent-foreground"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  )
}
