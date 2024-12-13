import CardHeader from "./card_header";
import CardBody from "./card_body";
import EducationProject from "./education_project";
import type { Education } from "@/interfaces/education";

type Props = {
  education: Education;
};

export default function EducationCard({ education }: Props) {
  return (
    <div className="flex flex-col">
      <CardHeader className="flex flex-col md:flex-row md:justify-between md:gap-2">
        <div className="flex flex-col">
          <h3>
            <strong>{education.degree}</strong>
          </h3>
          <p className="text-base">
            <strong>{education.institution}, {education.location}</strong>
          </p>
        </div>
        <p className="text-base">
          {education.start_year} - {education.end_year}
        </p>
      </CardHeader>
      <CardBody>
        {education.grade && (
          <p>
            <span className="underline">Grade:</span> {education.grade}
          </p>
        )}
        {education.modules && (
          <p>
            <span className="underline">Selected Modules:</span> {education.modules.join(", ")}
          </p>
        )}
        {education.project && (
          <EducationProject project={education.project} />
        )}
      </CardBody>
    </div>
  );
}
