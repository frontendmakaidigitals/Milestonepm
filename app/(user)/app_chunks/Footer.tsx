"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { Printer } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black overflow-hidden relative">
      <div className="container mx-auto relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[.5fr_1.5fr] gap-16 place-items-start">
          {/* Logo & About */}
          <div>
            <Logo />
            <p className="text-sm text-slate-50 mt-5">
              Delivering high-quality engineering and project management
              solutions across the globe.
            </p>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4 text-slate-50">
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Menus */}
          <div className="flex flex-col lg:flex-row gap-12 text-slate-50 w-full justify-end items-start">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  {
                    title: "Urban Planning",
                    href: "/services/transportation-and-smart-mobility/urban-planning",
                  },
                  {
                    title: "Construction Management",
                    href: "/services/engineering-and-infrastructure-solutions/construction-management",
                  },
                  {
                    title: "Structural Engineering ",
                    href: "/services/engineering-and-infrastructure-solutions/structural-engineering",
                  },
                  {
                    title: "Foundation Solutions",
                    href: "/services/engineering-and-infrastructure-solutions/foundation-solutions",
                  },
                  {
                    title: "Climate Adaptation",
                    href: "/services/Sustainability-Environment-and-Resilience/climate-adaptation",
                  },
                  {
                    title: "Airport & Transit Hub",
                    href: "/Services/Urban-Planning/Landscape-Architecture",
                  },
                  {
                    title: "Vertical Mobility",
                    href: "/services/transportation-and-smart-mobility/vertical-mobility-solutions",
                  },
                ].map(({ title, href }, i) => (
                  <li key={i}>
                    <Link href={href} className="hover:underline">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/company-profile" className="hover:underline">
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/digital-solutions/intelligent-digital-solutions"
                    className="hover:underline"
                  >
                    Digital Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blogs" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/our-presence" className="hover:underline">
                    Our Presence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Office Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Office</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <p className="max-w-[250px]">
                    Churchill Tower, Marasi Dr, Business Bay, Dubai PO Box:
                    29631
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+971 50 513 7580</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>hanyelnahas@milestonepm.co</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-dimondra-tealDark text-slate-50 text-sm text-center py-3 relative z-10">
        &copy; {new Date().getFullYear()} All Rights Reserved – Powered by{" "}
        <span className="text-yellow-500">Insight Vision Marketing</span>
      </div>
    </footer>
  );
};

export default Footer;
