import { Project } from "@/app/types/project";
import ProjectsView from "@/app/components/ProjectsView";

export default async function FactoryPage() {
  const data = await fetch('http://localhost:3000/api/getProjects');
  const projects: Project[] = await data.json();

  return (
    <>
      <div>Welcome to <span className="text-blue-500">William&apos;s factory</span></div>
      <ProjectsView projects={projects} />
    </>
  );
}
