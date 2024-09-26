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

export const emptyProject: Project = {
  title: '',
  series: '',
  description: '',
  startDate: '',
  finishDate: '',
  projectType: [],
  technologies: [],
  repository: '',
  link: null,
};
