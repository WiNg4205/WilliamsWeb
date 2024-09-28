import { Project } from "@/app/types/project";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[]
}

export default function GridView({ projects }: Props) {
  return (
    <div className="self-center grid grid-cols-4 bg-gray-500 gap-4 p-4">
      {Object.entries(projects).map(([key, project]) => (
        <div className="p-4 bg-gray-200" key={key}>
          <Link href={`/projects/${key}`}>
            <Image src={`/${key}.png`} alt={`Project #${key} preview`} height={800} width={1600} className="p-4" priority />
            <h1 className="font-bold">{project.title}</h1>
            <p>{project.description}</p>          
          </Link>
        </div>
      ))}
    </div>
  )
}
