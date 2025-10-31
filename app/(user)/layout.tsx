import Navbar from "./Header/Navbar";
import Footer from "./app_chunks/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Milestone Project Management | Engineering & Infrastructure Experts",
  description:
    "Headquartered in Dubai, Milestone PM delivers engineering, construction, and digital solutions across the UAE, KSA, India, and Egypt with innovation and reliability.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
