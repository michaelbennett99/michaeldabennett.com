import { getAllProjects } from "@/lib/api";
import ProjectCard from "./project_card";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <ul className="flex flex-col gap-2">
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
  );
}
