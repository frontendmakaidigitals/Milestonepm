import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: 'Our Sectors & Divisions | Milestone Project Management – Industry Expertise',
  description: "Explore Milestone Project Management’s sector expertise, including infrastructure, transport, buildings, environment, and digital solutions in the UAE, KSA, India, and Egypt.",
};