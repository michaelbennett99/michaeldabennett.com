import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";

import SocialLink from "@/components/social_link";
import DownloadCV from "@/components/download_cv";

export default function Header() {
  return (
    <header className="pt-16 pb-8 flex flex-col items-center gap-4">
      <h1 className="text-8xl font-bold text-center">Michael Bennett</h1>
      <div className="text-4xl text-center" role="doc-subtitle">
        Software Engineer
      </div>
      <nav className="flex justify-center gap-4 text-3xl">
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
      <DownloadCV />
    </header>
  );
}
