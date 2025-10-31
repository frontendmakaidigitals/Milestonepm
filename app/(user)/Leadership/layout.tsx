import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
    title: 'Leadership & Vision | Milestone Project Management  Executive Team',
    description: 'Meet the leadership team at Milestone Project Management, driving innovation, sustainability, and world-class engineering solutions in the UAE, KSA, India, and Egypt.',
};