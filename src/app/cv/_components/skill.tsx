import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Proficiency = "Beginner" | "Intermediate" | "Advanced";

export default function Skill({
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
