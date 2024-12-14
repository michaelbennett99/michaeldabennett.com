import { TechDependency } from "@/interfaces/tech_dependency";
import iconMap from "@/interfaces/icon_map";

type Props = {
  icon: TechDependency
}

export default function TechIcon({ icon }: Props) {
  const Icon = iconMap[icon];
  return <Icon />;
}
