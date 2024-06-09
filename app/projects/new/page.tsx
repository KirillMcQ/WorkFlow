import { Button } from "@/app/ui/components/Button";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { Input } from "@/app/ui/components/input";
import { Textarea } from "@/app/ui/components/textarea";

export default async function NewProject() {
  const user = await currentUser();

  const createProject = async (formData: FormData) => {
    "use server";
    const title: string = formData.get("title") as string;
    const description: string = formData.get("description") as string;
    const startDate: string = formData.get("startDate") as string;
    const endDate: string = formData.get("endDate") as string;
    console.log(title, description, startDate, endDate, user!.id);
    return prisma.project
      .create({
        data: {
          title,
          description,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          uidCreated: user!.id,
          uidsAssigned: [],
        },
      })
      .then(() => {
        // Revalidate the projects page to show the new project
        revalidatePath("/projects");
        redirect("/projects");
      });
  };

  return (
    <div className="flex flex-col items-center mt-12 gap-8">
      <h1 className="text-2xl font-bold">New Project</h1>
      <form className="flex flex-col gap-8 w-[300px]" action={createProject}>
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            className="border rounded p-2"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <Textarea
            placeholder="Description"
            id="description"
            name="description"
            className="border rounded p-2 h-[100px]"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="startDate">Start Date</label>
          <Input
            type="date"
            placeholder="Start Date"
            id="startDate"
            name="startDate"
            className="border rounded p-2"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="endDate">End Date</label>
          <Input
            type="date"
            placeholder="End Date"
            id="endDate"
            name="endDate"
            className="border rounded p-2"
            required
          />
        </div>
        <Button type="submit">Create Project</Button>
      </form>
    </div>
  );
}
