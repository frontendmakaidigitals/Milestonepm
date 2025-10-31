import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: 'Building Intelligence Solutions | Milestone Project Management',
  description: "Smart building technology to optimize energy efficiency, space usage, and facility performance across portfolios.",
};