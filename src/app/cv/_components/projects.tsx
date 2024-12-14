import { projects as projectsContent } from "@/lib/content";
import ProjectCard from "./project_card";

export default function Projects() {
  const projects = projectsContent.getAll();

  return (
    <ul className="flex flex-col gap-2">
      {projects.map((project) => (
        <li key={project.name.toLowerCase().replace(/\s+/g, '_')}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
