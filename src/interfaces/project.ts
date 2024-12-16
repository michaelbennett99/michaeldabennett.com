import { IconName } from "./icon_map";

export interface Project {
  name: string;
  url: string;
  githubUrl: string;
  content: string;
  order?: number;
  techStack?: IconName[];
}
