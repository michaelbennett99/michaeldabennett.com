import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Proficiency } from "@/interfaces/proficiency";

type Props = {
  icon: React.ReactNode;
  name: string;
  proficiency?: Proficiency;
};

function SkillText({ icon, name, proficiency }: Props) {
  const proficiency_color = proficiency
    ? {
        Beginner: "text-yellow-600",
        Intermediate: "text-green-600",
        Advanced: "text-purple-600",
      }[proficiency]
    : "text-foreground";

  return (
    <div
      className={cn(
        "flex flex-row justify-left items-center gap-2",
        proficiency_color
      )}
    >
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default function Skill({
  icon,
  name,
  proficiency,
}: {
  icon: React.ReactNode;
  name: string;
  proficiency?: Proficiency;
}) {
  if (!proficiency) {
    return <SkillText icon={icon} name={name} />;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SkillText icon={icon} name={name} proficiency={proficiency} />
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
