import { experience as experienceContent } from "@/lib/content";
import ExperienceCard from "./experience_card";

export default function Leadership() {
  const experiences = experienceContent.getAll();
  const leadershipExperience = experiences.filter(
    (exp) => exp.experienceType === "leadership"
  );

  return (
    <ul className="flex flex-col gap-2">
      {leadershipExperience.map((experience) => (
        <li key={experience.title.toLowerCase().replace(/\s+/g, '_')}>
          <ExperienceCard {...experience} />
        </li>
      ))}
    </ul>
  );
}
