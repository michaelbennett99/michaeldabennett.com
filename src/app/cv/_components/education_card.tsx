import CardHeader from "./card_header";
import CardBody from "./card_body";
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
      <CardHeader className="flex flex-col md:flex-row md:justify-between md:gap-2">
        <div className="flex flex-col">
          <h3>
            <strong>{degree}</strong>
          </h3>
          <p className="text-base">
            <strong>{institution}, {location}</strong>
          </p>
        </div>
        <p className="text-base">
          {start_year} - {end_year}
        </p>
      </CardHeader>
      <CardBody>
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
      </CardBody>
    </div>
  );
}
