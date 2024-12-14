import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { TechDependency } from "@/interfaces/tech_dependency";
import iconMap from "@/interfaces/icon_map";

type Props = {
  icon: TechDependency
  applyHouseColour?: boolean
  tooltip?: boolean
}

export default function TechIcon(
  { icon, applyHouseColour = false, tooltip }: Props
) {
  const iconObject = iconMap[icon];
  if (!iconObject) {
    throw new Error(`Icon ${icon} not found`);
  }
  const iconElement = (
    <iconObject.icon
      style={{ color: applyHouseColour ? iconObject.houseColour : "inherit" }}
    />
  )

  if (!tooltip) {
    return iconElement;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{iconElement}</TooltipTrigger>
        <TooltipContent>{iconObject.tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
