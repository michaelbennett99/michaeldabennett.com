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
  SiGnubash,
  SiPostgresql,
  SiPytorch,
  SiCloudflare,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiShadcnui,
  SiStrava,
  SiGithub,
  SiLinkedin
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

type IconMapItem = {
  tooltip: string;
  icon: IconType;
  houseColour: string;
}

const iconMap = {
  "python": {
    tooltip: "Python",
    icon: SiPython,
    houseColour: "#3776AB"
  },
  "rust": {
    tooltip: "Rust",
    icon: SiRust,
    houseColour: "#000000"
  },
  "html": {
    tooltip: "HTML",
    icon: SiHtml5,
    houseColour: "#E34F26"
  },
  "css": {
    tooltip: "CSS",
    icon: SiCss3,
    houseColour: "#1572B6"
  },
  "typescript": {
    tooltip: "TypeScript",
    icon: SiTypescript,
    houseColour: "#3178C6"
  },
  "react": {
    tooltip: "React",
    icon: SiReact,
    houseColour: "#61DAFB"
  },
  "docker": {
    tooltip: "Docker",
    icon: SiDocker,
    houseColour: "#2496ED"
  },
  "git": {
    tooltip: "Git",
    icon: SiGit,
    houseColour: "#F05032"
  },
  "linux": {
    tooltip: "Linux",
    icon: SiLinux,
    houseColour: "#FCC624"
  },
  "go": {
    tooltip: "Go",
    icon: SiGo,
    houseColour: "#00ADD8"
  },
  "julia": {
    tooltip: "Julia",
    icon: SiJulia,
    houseColour: "#9558B2"
  },
  "bash": {
    tooltip: "Bash",
    icon: SiGnubash,
    houseColour: "#4EAA25"
  },
  "postgresql": {
    tooltip: "PostgreSQL",
    icon: SiPostgresql,
    houseColour: "#4169E1"
  },
  "aws": {
    tooltip: "AWS",
    icon: FaAws,
    houseColour: "#232F3E"
  },
  "sql": {
    tooltip: "SQL",
    icon: TbSql,
    houseColour: "#4479A1"
  },
  "c++": {
    tooltip: "C++",
    icon: SiCplusplus,
    houseColour: "#00599C"
  },
  "haskell": {
    tooltip: "Haskell",
    icon: SiHaskell,
    houseColour: "#5D4F85"
  },
  "pytorch": {
    tooltip: "PyTorch",
    icon: SiPytorch,
    houseColour: "#EE4C2C"
  },
  "cloudflare": {
    tooltip: "Cloudflare",
    icon: SiCloudflare,
    houseColour: "#F38020"
  },
  "tailwindcss": {
    tooltip: "TailwindCSS",
    icon: SiTailwindcss,
    houseColour: "#06B6D4"
  },
  "nextjs": {
    tooltip: "Next.js",
    icon: SiNextdotjs,
    houseColour: "#000000"
  },
  "javascript": {
    tooltip: "JavaScript",
    icon: SiJavascript,
    houseColour: "#F7DF1E"
  },
  "shadcn": {
    tooltip: "shadcn/ui",
    icon: SiShadcnui,
    houseColour: "#000000"
  },
  "strava": {
    tooltip: "Strava",
    icon: SiStrava,
    houseColour: "#FC4C02"
  },
  "github": {
    tooltip: "GitHub",
    icon: SiGithub,
    houseColour: "#181717"
  },
  "linkedin": {
    tooltip: "LinkedIn",
    icon: SiLinkedin,
    houseColour: "#0A66C2"
  }
} as const;

type IconMapKeys = keyof typeof iconMap;

export type { IconMapItem, IconMapKeys };
export default iconMap;
