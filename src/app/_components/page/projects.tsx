import Subsection from "./subsection";
import ProjectCard from "./project_card";
import { projects } from '@/lib/content';

export default function Projects() {
  const allProjects = projects.getAll();

  return (
    <Subsection title="Projects">
      <ul className="flex flex-col justify-center gap-4">
        {allProjects.map((project) => (
          <li key={project.name.toLowerCase().replace(/\s+/g, '_')}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Subsection>
  );
}
