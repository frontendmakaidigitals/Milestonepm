import { Metadata } from "next";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
    title: 'Compliance & Ethics | Milestone Project Management – Trusted Standards',
    description: 'Understand Milestone Project Management’s dedication to compliance, ethical operations, and governance across the UAE, KSA, India, and Egypt.',
};