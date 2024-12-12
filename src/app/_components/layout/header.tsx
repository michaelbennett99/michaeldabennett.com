import { usePathname } from "next/navigation";
import Link from "next/link";


import { cn } from "@/lib/utils";

import DarkModeToggle from "@/app/_components/layout/dark_mode_toggle";
import NavBar from "./nav_bar";

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
      <div className="flex flex-row justify-end h-full">
        <NavBar />
        <DarkModeToggle />
      </div>
    </header>
  )
}
