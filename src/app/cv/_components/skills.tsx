import TechIcon from "@/components/tech_icon";
import CardBody from "./card_body";
import Skill from "./skill";

export default function Skills() {
  return (
    <CardBody className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-items-center">
      <Skill
        icon={<TechIcon icon="typescript" />}
        name="TypeScript"
        proficiency="Advanced"
      />
      <Skill
        icon={<TechIcon icon="go" />}
        name="Go"
        proficiency="Advanced"
      />
      <Skill
        icon={<TechIcon icon="python" />}
        name="Python"
        proficiency="Advanced"
      />
      <Skill
        icon={<TechIcon icon="html" />}
        name="HTML"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="css" />}
        name="CSS"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="react" />}
        name="React"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="rust" />}
        name="Rust"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="julia" />}
        name="Julia"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="haskell" />}
        name="Haskell"
        proficiency="Beginner"
      />
      <Skill
        icon={<TechIcon icon="c++" />}
        name="C++"
        proficiency="Beginner"
      />
      <Skill
        icon={<TechIcon icon="bash" />}
        name="Bash"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="sql" />}
        name="SQL"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="postgresql" />}
        name="PostgreSQL"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="docker" />}
        name="Docker"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="git" />}
        name="Git"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="linux" />}
        name="Linux"
        proficiency="Intermediate"
      />
      <Skill
        icon={<TechIcon icon="aws" />}
        name="AWS"
        proficiency="Intermediate"
      />
    </CardBody>
  );
}
