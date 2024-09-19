import { Project } from "@/app/types/project"
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetch(`http://localhost:5000/getProject/${params.id}`);
  const project: Project = await data.json();
  console.log(project.technologies);
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p><br />
      <p>Duration: {project.startDate} - {project.finishDate}</p>
      {project.technologies.map((tech) => (
        <div key={tech}>{tech}</div>
      ))}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Image src="/link-icon.svg" alt="LinkIcon" width={12} height={12} priority />
      </a>
    </>
  )
}