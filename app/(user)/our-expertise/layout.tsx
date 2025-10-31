import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
    title: 'Technical Expertise | Milestone Project Management – Engineering & Advisory',
    description: 'Discover Milestone Project Management’s technical expertise in engineering, construction management, sustainability, and digital solutions across the UAE, KSA, India, and Egypt.',
};