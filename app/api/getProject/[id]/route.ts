import { Project } from "@/app/types/project";
import projectData from "@/data/projects.json";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const project: Project = projectData[id as keyof typeof projectData];

  if (project) {
    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: 'Project not found' }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
