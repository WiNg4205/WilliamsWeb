export interface Project {
  title: string;
  series: string;
  description: string;
  startDate: string;
  finishDate: string;
  projectType: string[];
  technologies: string[];
  repository: string;
  link: string | null;
}
