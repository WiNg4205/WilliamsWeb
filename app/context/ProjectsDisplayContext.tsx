"use client"

import { createContext, SetStateAction, useContext, useState, Dispatch, ReactNode } from "react";
import { DisplayMode } from "@/app/types/view";

interface ProjectsDisplayContextValue {
  displayMode: DisplayMode;
  setDisplayMode: Dispatch<SetStateAction<DisplayMode>>;
}

const ProjectsDisplayContext = createContext<ProjectsDisplayContextValue>({
  displayMode: "table",
  setDisplayMode: () => {}
});

export function useProjectsDisplay() {
  return useContext(ProjectsDisplayContext);
}

interface ProjectsDisplayProviderProps {
  children: ReactNode;
}

export default function ProjectsDisplayProvider({ children }: ProjectsDisplayProviderProps) {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("table");

  return (
    <ProjectsDisplayContext.Provider value={{displayMode, setDisplayMode}}>
      {children}
    </ProjectsDisplayContext.Provider>
  )
}
