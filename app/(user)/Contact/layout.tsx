import { Metadata } from "next";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const metadata: Metadata = {
    title: 'Contact Milestone Project Management',
    description: 'Milestone Project Management | Get in touch with us',
};