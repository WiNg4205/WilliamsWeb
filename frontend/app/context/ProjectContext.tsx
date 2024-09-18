import { createContext, useContext, useState } from "react";

const ProjectContext = createContext([]);
const initialiseProjectContext = createContext([]);

export const useProject = () => {
  return useContext(ProjectContext);
}

export const useInitialiseProject = () => {
  return useContext(initialiseProjectContext);
}

export default function ProjectProvider({ children }) {
  const [projectList, setProjectList] = useState([]);

  return (
    <useInitialiseProject.Provider value={setProjectList}>
      <useProject.Provider value={projectList}>
        {children}
      </useProject.Provider>
    </useInitialiseProject.Provider>
  )
}
