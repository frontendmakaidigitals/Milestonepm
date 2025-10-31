import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: 'Construction Management Services | Milestone Project Management',
  description: "Expert construction management solutions across UAE, KSA, India, and Egypt, ensuring timely, cost-effective, and quality project delivery.",
};