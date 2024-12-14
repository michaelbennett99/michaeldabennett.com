import { skills } from "@/lib/content";

import TechIcon from "@/components/tech_icon";
import CardBody from "@/app/cv/_components/card_body";
import Skill from "./skill";
import SkillsSection from "./skills_section";

export default function Skills() {
  const skillCategories = skills.getAll();

  return (
    <>
      {skillCategories.map((category) => (
        <SkillsSection key={category.title} title={category.title}>
          <CardBody className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-items-center">
            {category.skills.map((skill) => (
              <Skill
                key={skill.name}
                icon={skill.icon ? <TechIcon icon={skill.icon} /> : undefined}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </CardBody>
        </SkillsSection>
      ))}
    </>
  );
}
