import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import SocialLink from "@/components/social_link";

export default function Header() {
  return (
    <header className="pt-16 pb-8 flex flex-col items-center gap-4">
      <h1 className="text-8xl font-bold text-center">Michael Bennett</h1>
      <div className="text-4xl text-center" role="doc-subtitle">
        Software Engineer
      </div>
      <nav className="flex justify-center gap-4">
        <SocialLink
          href="https://github.com/michaelbennett99"
          icon={<FaGithub />}
        />
        <SocialLink
          href="https://www.linkedin.com/in/michaeldabennett"
          icon={<FaLinkedin />}
        />
        <SocialLink
          href="https://www.strava.com/athletes/25477476"
          icon={<FaStrava />}
        />
      </nav>
      <Button asChild>
        <Link href="/resume.pdf" target="_blank">
          <SiReaddotcv /> Download Resume
        </Link>
      </Button>
    </header>
  );
}
