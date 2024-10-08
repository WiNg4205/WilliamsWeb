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
    <div className="flex flex-col">
      <div className="flex justify-end items-center pr-20">
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
      {displayMode === "grid" ? <GridView projects={projects} /> : <TableView projects={projects} />}
    </div>
  )
}
