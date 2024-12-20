import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { isDark } from "@/lib/colour";
import { IconName, Icon } from "@/interfaces/icon_map";
import iconMap from "@/interfaces/icon_map";

type Props = {
  icon: IconName
  applyHouseColour?: boolean
  tooltip?: boolean
}

export default function TechIcon(
  { icon, applyHouseColour = false, tooltip }: Props
) {
  const iconObject: Icon = iconMap[icon];
  if (!iconObject) {
    throw new Error(`Icon ${icon} not found`);
  }
  const iconElement = (
    <iconObject.icon
      style={{
        color: applyHouseColour
          ? iconObject.houseColour
          : "inherit"
      }}
      className={isDark(iconObject.houseColour) ? "dark:invert" : ""}
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
