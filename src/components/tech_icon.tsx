import { TechDependency } from "@/interfaces/tech_dependency";
import iconMap from "@/interfaces/icon_map";

type Props = {
  icon: TechDependency
  applyHouseColour?: boolean
}

export default function TechIcon({ icon, applyHouseColour = false }: Props) {
  const Icon = iconMap[icon];
  if (!Icon) {
    return <span>{icon}</span>;
  }
  return (
    <Icon.icon
      style={{ color: applyHouseColour ? Icon.houseColour : "inherit" }}
    />
  );
}
