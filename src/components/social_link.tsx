import Link from "next/link";

export default function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-4xl box-border hover:opacity-80"
      target="_blank"
    >
      {icon}
    </Link>
  );
}