import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: ' Environmental & Resilience Digital Solutions | Milestone Project Management',
  description: "Innovative digital solutions for environmental monitoring, resource management, and resilient infrastructure performance.",
};