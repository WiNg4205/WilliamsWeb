"use client"

import { Project, emptyProject } from "@/app/types/project";
import fetcher from "@/app/utils/fetcher";
import Image from "next/image";
import useSWR from "swr";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useSWR(`/api/getProject/${params.id}`, fetcher);
  const project: Project = data || emptyProject;

  return (
    <>
      <Image 
        src={`/${params.id}.png`} 
        alt={`Project #${params.id} preview`} 
        width={300}
        height={300}
        priority 
        quality={100}
        unoptimized
      />
      <h1>{project.title}</h1>
      <p>{project.description}</p><br />
      <p>Duration: {project.startDate} - {project.finishDate}</p>
      {project.technologies.map((tech) => (
        <div key={tech}>{tech}</div>
      ))}
      <a href={project.repository} target="_blank" rel="noopener noreferrer">
        <Image src="/link-icon.svg" alt="LinkIcon" width={12} height={12} priority />
      </a>
      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Image src="/check-icon.svg" alt="Check icon" height={12} width={12} priority />
      </a>}
    </>
  )
}
