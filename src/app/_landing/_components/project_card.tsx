import { Project } from "@/interfaces/project";

import ProjectCardHeader from "@/components/projects/project_card_header";

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="space-y-2 [&_.project-title]:text-2xl [&_.project-title]:font-bold [&_.github-icon]:text-lg"
    >
      <ProjectCardHeader project={project} />
      <p>{project.content}</p>
    </div>
  );
}
