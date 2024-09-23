import { Project } from "@/app/types/project";
import Image from "next/image";

type Props = {
  projects: Project[]
}

export default function GridView({ projects }: Props) {
  return (

      <div className="self-center grid grid-cols-4">
        {Object.entries(projects).map(([key, projects], index) => (
          <Image src="/1.png" alt="#1 preview" height={300} width={300} className="p-4"/>
        ))}
      </div>      


  )
}
