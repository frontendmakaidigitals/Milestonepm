"use client";

import {
  Globe,
  MapPin,
  Users,
  BadgeCheck,
  LayoutDashboard,
  Milestone,
} from "lucide-react";

import BgLayer from "../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
export default function Page() {
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  const companyHighlights = [
    {
      icon: <MapPin className="text-amber-600 w-12 h-12" />,
      text: "Headquartered in Dubai, with branches in India, Egypt, and Saudi Arabia",
    },
    {
      icon: <BadgeCheck className="text-green-600 w-12 h-12" />,
      text: "Certified in Quality, Safety, Environment, and Project Management Systems",
    },
    {
      icon: <LayoutDashboard className="text-purple-600 w-12 h-12" />,
      text: "100+ successful projects across residential, commercial, and infrastructure sectors",
    },
    {
      icon: <Globe className="text-yellow-600 w-12 h-12" />,
      text: "Member of leading engineering and project management associations",
    },
    {
      icon: <Users className="text-amber-600 w-12 h-12" />,
      text: "Comprehensive in-house expertise in Project Management, Design Review, Engineering, and Construction Supervision",
    },
    {
      icon: <Milestone className="text-rose-600 w-12 h-12" />,
      text: "Aligned with national and regional development visions, driving progress through sustainable and innovative project delivery",
    },
  ];
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Company Overview
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-4xl lg:text-6xl font-semibold">
            Delivering Excellence in Project Management Across Borders
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/Leadership-Vision 2/vision.webp"
          alt="Milestone Project Management Engineering Hero Background"
        />
      </motion.div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image first on mobile, second on desktop */}
          <div className="order-1 lg:order-2">
            <img
              src="/Leadership-Vision 2/leadership.webp"
              alt="Company Overview"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Text second on mobile, first on desktop */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#B59410] mb-4">
              Company Overview
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Milestone Project Management (Milestone PM) is a trusted company
              providing smart, reliable, and future-ready project management and
              engineering solutions. We work across infrastructure,
              construction, and urban development projects, helping clients
              deliver high-quality outcomes while supporting the growth and
              vision of the UAE and the wider region.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              At Milestone PM, we work closely with both government and private
              sector clients, providing complete support, from project planning
              and design to execution and delivery. Every project reflects our
              values of quality, innovation, and sustainability, contributing to
              long-term growth and community development. We believe that every
              milestone we achieve is built on trust, teamwork, and a commitment
              to excellence.
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      {/* History Section */}
      <section className="py-20 ">
        <div className="container grid md:grid-cols-2 gap-12">
          {" "}
          <div>
            <img
              src="/company overview/company overview.webp"
              alt="Company Overview"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#B59410] mb-4">
              Our History
            </h2>
            <p className="text-lg">
              {" "}
              Milestone Project Management was founded with a vision to raise
              project management standards and deliver excellence in engineering
              and construction services. Starting with a small portfolio of
              supervision and consulting projects, the company has grown into a
              multi-disciplinary consultancy recognized for managing complex
              infrastructure and development programs across different regions.
              Our progress is driven by integrity, innovation, and technical
              strength.
              <span className="mt-2 block">
                Over the years, we have built a strong reputation for delivering
                projects that meet global standards while adapting to local
                needs.
              </span>
              <span className="mt-2 block">
                {" "}
                Today, Milestone PM is proud to support regional transformation
                and development goals through sustainable, efficient, and
                well-managed projects.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Fast Facts */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
            Fast <span className="text-[#B59410]">Facts</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FEFBEC] border border-amber-100 rounded-xl p-6  shadow hover:shadow-md transition"
              >
                {item.icon}
                <p className="text-gray-700 text-lg font-medium leading-snug mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Engineering the Future of the UAE and Beyond"
        desc=" From Dubai to the world, Milestone Project Management is driving innovation across engineering, design, and project management to shape the future of the built environment. Guided by the UAE’s vision for sustainable growth and smart infrastructure, we deliver projects that meet global standards while reflecting regional ambition and excellence."
      />
    </div>
  );
}
