"use client"

import useSWR from "swr";
import { Project } from "@/app/types/project";
import ProjectsView from "@/app/components/ProjectsView";
import fetcher from "@/app/utils/fetcher";

export default function FactoryPage() {
  const { data } = useSWR("api/getProjects", fetcher)
  const projects: Project[] = data || [];

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold mt-8">Welcome to <span className="text-blue-500">William&apos;s factory</span></div>
      <ProjectsView projects={projects} />
    </div>
  );
}
