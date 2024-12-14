import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/interfaces/project";

import SocialLink from "@/components/social_link";
import TechIcon from "@/components/tech_icon";

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row justify-left items-center gap-2">
        <h3 className="text-2xl font-bold">
          {
            project.url
            && <Link href={project.url} className="hover:underline" target="_blank">
              {project.name}
            </Link>
            || <span>{project.name}</span>
          }
        </h3>
        {
          project.githubUrl
          && <SocialLink
            href={project.githubUrl}
            icon={<FaGithub className="text-lg" />}
          />
        }
        {
          project.techStack
          && <ul className="flex flex-row gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <TechIcon icon={tech} applyHouseColour={true} />
              </li>
            ))}
          </ul>
        }
      </div>
      <p>{project.content}</p>
    </div>
  );
}
