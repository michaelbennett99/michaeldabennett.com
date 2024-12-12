import EducationProject from "./education_project";

type Props = {
  degree: string;
  institution: string;
  location: string;
  start_year: number;
  end_year: number;
  grade?: string;
  modules?: string[];
  project?: {
    title: string;
    bullets: string[];
  };
};

export default function EducationCard({
  degree,
  institution,
  location,
  start_year,
  end_year,
  grade,
  modules,
  project,
}: Props) {
  return (
    <div className="flex flex-col">
      <header className="flex flex-row justify-between">
        <h3>
          <strong>{degree}</strong>, {institution}, {location}
        </h3>
        <p>
          {start_year} - {end_year}
        </p>
      </header>
      <main className="flex flex-col text-sm text-muted-foreground">
        {grade && <p>Grade: {grade}</p>}
        {modules && <p>Selected Modules: {modules.join(", ")}</p>}
        {project && (
          <EducationProject title={project.title} bullets={project.bullets} />
        )}
      </main>
    </div>
  );
}
