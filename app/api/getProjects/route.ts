import projectData from "@/data/projects.json";

export async function GET() {
  return new Response(JSON.stringify(projectData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
