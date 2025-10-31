import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: 'Multi-Sector Digital Solutions | Milestone Project Management',
  description: "Digital platforms and tools that enhance decision-making, operational efficiency, and sustainable outcomes across multiple industries.",
};