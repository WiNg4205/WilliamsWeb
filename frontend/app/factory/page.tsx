"use client";

import Header from "../components/Header";
import Image from 'next/image';
import { Project } from "../types/project";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectContext";

export default function FactoryPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const initialiseProject = useProjects()?.setProjectList;
  
  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetch('http://localhost:5000/getProjectData');
      const projects: Project[] = await data.json();

      if (initialiseProject) {
        initialiseProject(projects);
        setProjects(projects);
      } else {
        console.error('initialiseProject is undefined');
      }
    };
  
    fetchData();
  }, []);

  const titleToRoute = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-');
  }

  return (
    <>
      <Header />
      <div>Welcome to <span className="text-blue-500">William's factory</span></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Tech</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
        {projects.map((project, index) => (
          <tr key={project.title} className={index % 2 == 0 ? 'bg-gray-100' : ''}>
            <td>
              <Link href={`/factory/${titleToRoute(project.title)}`}>{project.title}</Link>
            </td>
            <td>{project.finishDate}</td>
            <td className="flex gap-2">
              {project.technologies.map((tech) => (
                <div key={tech} className="px-2 bg-gray-300 rounded-xl">{tech}</div>
              ))}
            </td>
            <td>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image src="/link-icon.svg" alt="LinkIcon" width={12} height={12} priority />
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}
