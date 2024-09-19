"use client";

import { usePathname } from "next/navigation";
import { useProjects } from "@/app/context/ProjectContext";

export default function Page() {
  const projectList = useProjects()?.projectList;
  console.log(projectList);
  const pathname = usePathname();
  return (
    <div>
      <p>Pathname: {pathname}</p>
    </div>
  );
}
