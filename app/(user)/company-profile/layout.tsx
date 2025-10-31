import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Milestone Project Management | Building Smart Futures",
  description:
    " Discover Milestone Project Management, Dubai-based experts providing engineering, infrastructure, and project management solutions across the UAE, KSA, India, and Egypt.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
