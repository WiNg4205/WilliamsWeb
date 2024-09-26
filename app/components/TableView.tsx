import { Project } from "@/app/types/project";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[]
}

export default function TableView({ projects }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Tech</th>
          <th>Repos</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(projects).map(([key, project], index) => (
        <tr key={key} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
          <td>
            <Link href={`/projects/${key}`}>{project.title}</Link>
          </td>
          <td>{project.startDate} - {project.finishDate}</td>
          <td className="flex gap-2">
            {project.technologies.map((tech) => (
              <div key={tech} className="px-2 bg-gray-300 rounded-xl">{tech}</div>
            ))}
          </td>
          <td>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <Image src="/link-icon.svg" alt="Link icon" height={12} width={12} priority />
            </a>
          </td>
          <td>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image src="/check-icon.svg" alt="Check icon" height={12} width={12} priority />
            </a>}
          </td>
        </tr>
      ))}
      </tbody>
    </table>   
  )
}
