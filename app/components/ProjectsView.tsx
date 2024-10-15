"use client";

import { Project } from "@/app/types/project";
import Image from "next/image";
import TableView from "@/app/components/TableView";
import GridView from "@/app/components/GridView";
import { useProjectsDisplay } from "@/app/context/ProjectsDisplayContext";

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  const { displayMode, setDisplayMode } = useProjectsDisplay();
  
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex items-center pr-20">
        <div 
          className={`p-2 ${displayMode === "table" ? "bg-gray-300" : ""}`} 
          onClick={() => setDisplayMode("table")}
        >
          <Image src="/table-icon.svg" alt="Table option" width={24} height={24} priority />
        </div>
        <div 
          className={`p-2 ${displayMode === "grid" ? "bg-gray-300" : ""}`} 
          onClick={() => setDisplayMode("grid")}
        >
          <Image src="/grid-icon.svg" alt="Grid icon" width={24} height={24} priority />
        </div>
      </div>
      <div>
        {displayMode === "grid" ? <GridView projects={projects} /> : <TableView projects={projects} />}        
      </div>

    </div>
  )
}
