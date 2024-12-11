import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import SocialLink from "@/components/social_link";

export default function ProjectCard({
  name,
  url,
  githubUrl,
  description,
}: {
  name: string;
  url?: string;
  githubUrl?: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row justify-left items-center gap-2">
        <h3 className="text-2xl font-bold">
          {
            url
            && <Link href={url} className="hover:underline">{name}</Link>
            || <span>{name}</span>
          }
        </h3>
        {
          githubUrl
          && <SocialLink
            href={githubUrl}
            icon={<FaGithub className="text-lg" />}
          />
        }
      </div>
      <p className="text-xl text-justify">{description}</p>
    </div>
  );
}
