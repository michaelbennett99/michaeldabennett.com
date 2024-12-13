import { getAllEducation } from "@/lib/api";
import EducationCard from "./education_card";

export default function Education() {
  const education = getAllEducation();
  return (
    <ul className="flex flex-col gap-4">
      {education.map((education) => (
        <li key={education.degree}>
          <EducationCard education={education} />
        </li>
      ))}
    </ul>
  );
}
