import { Project } from "@/app/types/project";
import FactoryView from "@/app/components/FactoryView";

export default async function FactoryPage() {
  const data = await fetch('http://localhost:3000/api/getProjects');
  const projects: Project[] = await data.json();

  return (
    <>
      <div>Welcome to <span className="text-blue-500">William's factory</span></div>
      <FactoryView projects={projects} />
    </>
  );
}
