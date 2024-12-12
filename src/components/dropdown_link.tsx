import Link from "next/link";

export default function DropdownLink(
  { children, href }: Readonly<{ children: React.ReactNode; href: string }>
) {
  return (
    <Link href={href} className="w-full">
      {children}
    </Link>
  );
}
