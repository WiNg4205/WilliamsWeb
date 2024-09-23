"use client";

import { Project } from "@/app/types/project";
import { DisplayMode } from "@/app/types/view";
import Image from "next/image";
import { useState } from "react";
import TableView from "./TableView";
import GridView from "./GridView";

type Props = {
  projects: Project[]
}

export default function FactoryTable({ projects }: Props) {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("grid");
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-end items-center pr-20">
        <div 
          className={`p-2 ${displayMode === "grid" ? "bg-gray-300" : ""}`} 
          onClick={() => setDisplayMode("grid")}
        >
          <Image src="/grid-icon.svg" alt="Grid icon" width={24} height={24} priority />
        </div>
        <div 
          className={`p-2 ${displayMode === "table" ? "bg-gray-300" : ""}`} 
          onClick={() => setDisplayMode("table")}
        >
          <Image src="/table-icon.svg" alt="Table option" width={24} height={24} priority />
        </div>
      </div>
      {displayMode === "grid" ? <TableView projects={projects} /> : <GridView projects={projects} />}
    </div>
  )
}
