import {
  SiPython,
  SiRust,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiDocker,
  SiGit,
  SiLinux,
  SiGo,
  SiJulia,
  SiHaskell,
  SiCplusplus,
  SiGnubash
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import CardBody from "./card_body";
import Skill from "./skill";

export default function Skills() {
  return (
    <CardBody className="grid grid-cols-5 gap-2 justify-items-center">
      <Skill
        icon={<SiTypescript />}
        name="TypeScript"
        proficiency="Advanced"
      />
      <Skill
        icon={<SiGo />}
        name="Go"
        proficiency="Advanced"
      />
      <Skill
        icon={<SiPython />}
        name="Python"
        proficiency="Advanced"
      />
      <Skill
        icon={<SiHtml5 />}
        name="HTML"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiCss3 />}
        name="CSS"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiReact />}
        name="React"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiRust />}
        name="Rust"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiJulia />}
        name="Julia"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiHaskell />}
        name="Haskell"
        proficiency="Beginner"
      />
      <Skill
        icon={<SiCplusplus />}
        name="C++"
        proficiency="Beginner"
      />
      <Skill
        icon={<SiGnubash />}
        name="Bash"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiDocker />}
        name="Docker"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiGit />}
        name="Git"
        proficiency="Intermediate"
      />
      <Skill
        icon={<SiLinux />}
        name="Linux"
        proficiency="Intermediate"
      />
      <Skill
        icon={<FaAws />}
        name="AWS"
        proficiency="Intermediate"
      />
    </CardBody>
  );
}
