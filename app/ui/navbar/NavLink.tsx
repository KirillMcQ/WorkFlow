"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname: string = usePathname();

  return (
    <Link
      className={clsx("text-md", {
        "border-b-2 border-primary": pathname.startsWith(href),
      })}
      href={href}
    >
      {children}
    </Link>
  );
}
