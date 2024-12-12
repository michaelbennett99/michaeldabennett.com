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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import CardBody from "./card_body";

type Proficiency = "Beginner" | "Intermediate" | "Advanced";

function Skill({
  icon,
  name,
  proficiency,
}: {
  icon: React.ReactNode;
  name: string;
  proficiency: Proficiency;
}) {
  const proficiency_color = {
    Beginner: "text-red-600",
    Intermediate: "text-green-600",
    Advanced: "text-purple-600",
  }[proficiency];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "flex flex-row justify-left items-center gap-2",
              proficiency_color
            )}
            aria-label={`${name} proficiency: ${proficiency}`}
          >
            {icon}
            <p>{name}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent
          className="bg-muted text-muted-foreground"
          side="right"
          sideOffset={10}
        >
          <p>{`Proficiency: ${proficiency}`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

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
