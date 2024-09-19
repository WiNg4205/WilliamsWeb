"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { Project } from "../types/project";

interface ProjectsContextValue {
  projectList: Project[] | null;
  setProjectList: Dispatch<SetStateAction<Project[] | null>>
}

const ProjectsContext = createContext<ProjectsContextValue | undefined>(undefined);

export const useProjects = () => {
  console.log(useContext(ProjectsContext))
  return useContext(ProjectsContext);
}

interface ProjectProviderProps {
  children: ReactNode;
}

export default function ProjectProvider({ children }: ProjectProviderProps) {
  const [projectList, setProjectList] = useState<Project[] | null>([]);

  return (
      <ProjectsContext.Provider value={{projectList, setProjectList}}>
        {children}
      </ProjectsContext.Provider>
  );
}
