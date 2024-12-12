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
    title: React.ReactNode;
    bullets: React.ReactNode[];
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
      <header className="flex flex-row justify-between gap-2 text-lg">
        <h3>
          <strong>{degree}</strong>, {institution}, {location}
        </h3>
        <p>
          {start_year} - {end_year}
        </p>
      </header>
      <main className="flex flex-col text-base text-muted-foreground">
        {grade && (
          <p>
            <span className="underline">Grade:</span> {grade}
          </p>
        )}
        {modules && (
          <p>
            <span className="underline">Selected Modules:</span> {modules.join(", ")}
          </p>
        )}
        {project && (
          <EducationProject title={project.title} bullets={project.bullets} />
        )}
      </main>
    </div>
  );
}
