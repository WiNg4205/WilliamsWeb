"use client";

import Header from "../components/Header";
import Image from 'next/image';
import { Project } from "../types/project";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FactoryPage() {
  // replace state with regular variable? do we need useEffect?
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api/getProjects');
      const projects: Project[] = await data.json();
      setProjects(projects);
    };
  
    fetchData();
  }, []);

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
        {Object.entries(projects).map(([key, project], index) => (
          <tr key={key} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td>
              <Link href={`/factory/${key}`}>{project.title}</Link>
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
