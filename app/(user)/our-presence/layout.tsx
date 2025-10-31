import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: 'Our Presence | Milestone Project Management',
  description: "Explore Milestone Project Management's global presence and operations across the UAE, KSA, India, and Egypt, delivering excellence in project management and engineering solutions.",
};