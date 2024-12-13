import { getAllExperience } from "@/lib/api";
import ExperienceCard from "./experience_card";

export default function Leadership() {
  const experiences = getAllExperience();
  const leadershipExperience = experiences.filter(
    (exp) => exp.experienceType === "leadership"
  );

  return (
    <>
      {leadershipExperience.map((experience) => (
        <ExperienceCard
          key={experience.title.toLowerCase().replace(/\s+/g, '_')}
          {...experience}
        />
      ))}
    </>
  );
}
