import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export default function SocialLink({ href, icon, className }: Props) {
  return (
    <Link
      href={href}
      className={cn("box-border hover:opacity-80", className)}
      target="_blank"
    >
      {icon}
    </Link>
  );
}
