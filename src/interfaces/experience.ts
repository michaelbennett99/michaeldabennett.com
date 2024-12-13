export interface Experience {
  title: string;
  employer: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  bullets: string[];
  experienceType: "professional" | "leadership";
}
