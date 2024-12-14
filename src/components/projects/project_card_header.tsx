import { cn } from "@/lib/utils";

import type { Project } from "@/interfaces/project";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import TechIcon from "@/components/tech_icon";
import SocialLink from "@/components/social_link";

export default function ProjectCardHeader(
  { project, className }: { project: Project, className?: string }
) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:justify-between md:items-center md:gap-2",
        className
      )}
    >
      <div className="space-x-2 flex items-center">
        <h3 className="project-title">
          {
            project.url ?
            <Link
              href={project.url}
              className="hover:underline"
              target="_blank"
            >
              {project.name}
            </Link> :
            <span>{project.name}</span>
          }
        </h3>
        <div className="github-icon">
            {
              project.githubUrl &&
              <SocialLink
                href={project.githubUrl}
                icon={<FaGithub />}
              />
            }
          </div>
      </div>
      {
        project.techStack
        && <ul className="flex flex-row gap-2">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <TechIcon icon={tech} applyHouseColour={true} tooltip={true} />
            </li>
          ))}
        </ul>
      }
    </div>
  )
}
