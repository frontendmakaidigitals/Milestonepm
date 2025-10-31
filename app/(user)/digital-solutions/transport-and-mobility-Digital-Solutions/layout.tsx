import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: 'Transport & Mobility Digital Solutions | Milestone Project Management',
  description: "Transform urban mobility with data-driven transport planning, optimization, and smart infrastructure solutions.",
};