import { EducationProject } from "./education_project";

export type Education = {
  degree: string;
  institution: string;
  location: string;
  start_year: number;
  end_year: number;
  grade?: string;
  modules?: string[];
  project?: EducationProject;
}
