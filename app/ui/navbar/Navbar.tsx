import NavLink from "@/app/ui/navbar/NavLink";
import { Button } from "@/app/ui/components/Button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center sm:justify-start sm:h-16 p-4 sm:flex-row">
      <div className="flex flex-col items-center gap-4 sm:gap-8 sm:flex-row">
        <Link
          className="text-5xl font-bold text-primary justify-self-start"
          href="/dashboard"
        >
          W
        </Link>
        <div className="flex flex-col gap-4 text-center sm:gap-16 sm:flex-row">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/todos">Todos</NavLink>
        </div>
      </div>
      <div className="flex gap-4 mt-4 sm:ml-auto sm:mt-0">
        <SignedOut>
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          {/* This button is enlarged in globals.css */}
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
