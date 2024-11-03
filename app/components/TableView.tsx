import { Project } from "@/app/types/project";

type Props = {
  projects: Project[]
}

export default function TableView({ projects }: Props) {
  return (
    <table>
      <thead>
        <tr className="border-b border-b-foreground">
          <th className="px-4">Name</th>
          <th className="px-4">Date</th>
          <th className="px-4">Tech</th>
          <th className="px-4">Repos</th>
          <th className="px-4">Link</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(projects).map(([key, project]) => (
        <tr key={key} className="even:bg-gray-100 dark:even:bg-gray-800">
          <td className="px-4">
            {project.title}
          </td>
          <td>{project.startDate} - {project.finishDate}</td>
          <td className="px-4 flex gap-2">
            {project.technologies.map((tech) => (
              <div key={tech} className="px-2 bg-gray-300 dark:bg-gray-600 rounded-xl border border-gray-400">{tech}</div>
            ))}
          </td>
          <td className="px-4 text-center">
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="size-3">
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
              </svg>
            </a>
          </td>
          <td className="px-4 text-center">
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="size-3">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
              </svg>
            </a>}
          </td>
        </tr>
      ))}
      </tbody>
    </table>   
  )
}
