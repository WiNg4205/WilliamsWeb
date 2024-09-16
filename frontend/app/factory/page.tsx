import Header from "../components/Header";

interface Project {
  title: string;
  series: string;
  description: string;
  startDate: string;
  finishDate: string;
  projectType: string[];
  technologies: string[];
  link: string;
}

export default async function FactoryPage() {
  const data = await fetch('http://localhost:5000/getProjectData');
  const projects: Project[] = await data.json();

  return (
    <>
      <Header />
      <div>Welcome to <span className="text-blue-500">William's factory</span></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.title}>
              <td>{project.title}</td>
              <td>{project.finishDate}</td>
              <td className="flex gap-2">
                {project.technologies.map((tech) => (
                  <div className="px-2 bg-gray-300 rounded-xl">{tech}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
