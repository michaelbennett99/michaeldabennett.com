import { getAllExperience } from "@/lib/api";
import ExperienceCard from "./experience_card";

export default function Experience() {
  const experiences = getAllExperience();
  const professionalExperience = experiences.filter(
    (exp) => exp.experienceType === "professional"
  );
  const leadershipExperience = experiences.filter(
    (exp) => exp.experienceType === "leadership"
  );

  return (
    <>
      {professionalExperience.map((experience) => (
        <ExperienceCard
          key={experience.title.toLowerCase().replace(/\s+/g, '_')}
          {...experience}
        />
      ))}
    </>
  );
}
