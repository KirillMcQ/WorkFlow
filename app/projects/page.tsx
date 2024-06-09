import { currentUser } from "@clerk/nextjs/server";
import { getProjectsOwnedByUser } from "../lib/queries";
import ProjectList from "../ui/projectList/ProjectList";

export default async function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectList />
    </div>
  );
}
