import Subsection from "./subsection";
import ProjectCard from "./project_card";
import { getAllProjects } from "@/lib/api";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <Subsection title="Projects">
      <ul className="flex flex-col justify-center gap-4">
        {projects.map((project) => (
          <li key={project.name.toLowerCase().replace(/\s+/g, '_')}>
            <ProjectCard
              name={project.name}
              url={project.url}
              githubUrl={project.githubUrl}
              description={project.content}
            />
          </li>
        ))}
      </ul>
    </Subsection>
  );
}
