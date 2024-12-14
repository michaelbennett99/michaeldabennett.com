import { education } from '@/lib/content';
import EducationCard from "./education_card";

export default function Education() {
  const educationItems = education.getAll();
  return (
    <ul className="flex flex-col gap-4">
      {educationItems.map((education) => (
        <li key={education.degree}>
          <EducationCard education={education} />
        </li>
      ))}
    </ul>
  );
}
