import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

import SocialLink from "@/components/social_link";

import DarkModeToggle from "./dark_mode_toggle";
import NavBar from "./nav_bar";
import NavButton from "./nav_button";

export default function Header() {
  return (
    <header
      className={cn(
        "text-lg text-bold sticky top-0 border-b",
        "grid grid-cols-[auto,1fr]",
        "text-foreground bg-background z-50",
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
        <NavButton >
          <SocialLink
            href="https://github.com/michaelbennett99/michaeldabennett.com"
            icon={<FaGithub />}
          />
        </NavButton>
      </div>
    </header>
  )
}
