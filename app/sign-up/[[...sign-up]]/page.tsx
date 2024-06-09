import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <h1 className="text-5xl font-bold justify-self-start">
        Welcome to <span className="text-blue-500">WorkFlow</span>
      </h1>
      <SignUp />
    </div>
  );
}
