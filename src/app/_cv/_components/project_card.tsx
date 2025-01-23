import ProjectCardHeader from "@/components/projects/project_card_header";

import CardHeader from "./card_header";
import CardBody from "./card_body";
import { Project } from "@/interfaces/project";

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div>
      <CardHeader className="[&_.project-title]:font-bold [&_.github-icon]:text-lg">
        <ProjectCardHeader project={project} />
      </CardHeader>
      <CardBody>
        <p>{project.content}</p>
      </CardBody>
    </div>
  );
}
