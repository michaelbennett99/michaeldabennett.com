import { experience } from '@/lib/content';
import ExperienceCard from "./experience_card";

export default function Experience() {
  const experiences = experience.getAll();
  const professionalExperience = experiences.filter(
    (exp) => exp.experienceType === "professional"
  );

  return (
    <ul className="flex flex-col gap-2">
      {professionalExperience.map((experience) => (
        <li key={experience.title.toLowerCase().replace(/\s+/g, '_')}>
          <ExperienceCard {...experience} />
        </li>
      ))}
    </ul>
  );
}
