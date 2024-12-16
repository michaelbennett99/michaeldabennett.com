import { LuMenu } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import NavButton from "./nav_button";
import DropdownLink from "@/components/dropdown_link";
type Props = {
  links: { href: string; label: string }[];
}

export default function NavBarDropdown({ links }: Props) {
  return (
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
  )
}
