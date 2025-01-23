import { cn } from "@/lib/utils";

import { FaChevronRight } from "react-icons/fa";

import { skills } from "@/lib/content";

import TechIcon from "@/components/tech_icon";
import CardBody from "@/app/cv/_components/card_body";
import Skill from "./skill";
import SkillsSection from "./skills_section";

export default function Skills() {
  const skillCategories = skills.getAll();

  return (
    <div>
      {skillCategories.map((category) => (
        <SkillsSection key={category.title} title={category.title}>
          <CardBody className={cn(
            "grid grid-cols-3 md:grid-cols-5 gap-2",
            category.align === "left"
              ? "justify-items-start"
              : "justify-items-center"
          )}>
            {category.skills.map((skill) => (
              <Skill
                key={skill.name}
                icon={
                  skill.icon
                    ? <TechIcon icon={skill.icon} />
                    : <FaChevronRight />
                }
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </CardBody>
        </SkillsSection>
      ))}
    </div>
  );
}
