import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./ui/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkFlow",
  description:
    "Workflow is a comprehensive project management tool designed to streamline project planning, execution, and monitoring. With Workflow, teams can collaborate effectively, track progress, and meet project deadlines with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#0ea5e9",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
