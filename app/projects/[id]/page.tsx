import { Project } from "@/app/types/project";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetch(`${process.env.BASE_URL}/api/getProject/${params.id}`);
  const project: Project = await data.json();

  return (
    <>
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
