import Bullets from "./bullets";
import type { EducationProject } from "@/interfaces/education_project";

type Props = {
  project: EducationProject;
};

export default function EducationProject({ project }: Props) {
  return (
    <div>
      <h4>
        <span className="underline">{project.name}:</span> {project.title}
      </h4>
      {project.bullets && <Bullets bullets={project.bullets} />}
    </div>
  );
}
