import { getProjectsOwnedByUser } from "@/app/lib/queries";
import { currentUser } from "@clerk/nextjs/server";

export default async function ProjectList() {
  const user = await currentUser();
  const projects = await getProjectsOwnedByUser(user?.id);
  console.log("Fetching projects");

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}
