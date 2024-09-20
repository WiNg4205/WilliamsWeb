"use client";

import { Project } from "@/app/types/project";
import { DisplayMode } from "@/app/types/view";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {
  projects: Project[]
}

export default function FactoryTable({ projects }: Props) {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("grid");
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Tech</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(projects).map(([key, project], index) => (
        <tr key={key} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
          {/* <Image src="/1.png" alt="#1 preview" height={300} width={300} /> */}
          <td>
            <Link href={`/factory/${key}`}>{project.title}</Link>
          </td>
          <td>{project.finishDate}</td>
          <td className="flex gap-2">
            {project.technologies.map((tech) => (
              <div key={tech} className="px-2 bg-gray-300 rounded-xl">{tech}</div>
            ))}
          </td>
          <td>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image src="/link-icon.svg" alt="Link icon" height={12} width={12} priority />
            </a>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}