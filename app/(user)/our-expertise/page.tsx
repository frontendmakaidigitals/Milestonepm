"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BgLayer from "../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import Link from "next/link";
export default function TechnicalExpertisePage() {
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );
  const capabilities = [
    {
      title: "Structural Engineering",
      desc: "Designing safe, efficient, and cost-effective structures that comply with international standards and local regulations.",
      img: "/technical expertise 2/structural engineering.webp",
    },
    {
      title: "Mechanical, Electrical & Plumbing (MEP)",
      desc: "Delivering integrated building systems that enhance functionality, energy efficiency, and occupant comfort.",
      img: "/construction/certified.webp",
    },
    {
      title: "Infrastructure Design",
      desc: "Planning and designing roads, utilities, and service networks to ensure long-term reliability and operational efficiency.",
      img: "/technical expertise 2/Infrastructure Design.webp",
    },
    {
      title: "Water, Drainage & Hydrology",
      desc: "Developing sustainable water management systems, including stormwater drainage and hydraulic analysis.",
      img: "/technical expertise 2/mep.webp",
    },
    {
      title: "Telecommunication & Low-Voltage Systems",
      desc: "Implementing advanced low-current systems for communication, data, and smart building automation.",
      img: "/technical expertise 2/Telecommunication-Low Current Systems.webp",
    },
    {
      title: "Urban & Regional Planning",
      desc: "Creating master plans and land-use strategies focused on accessibility, sustainability, and community growth.",
      img: "/technical expertise 2/Urban-Regional Planning.webp",
    },
  ];

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  return (
    <main className=" text-gray-800">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Technical Expertise
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-5xl lg:text-6xl font-semibold">
            Bridging innovation, precision, and performance across every
            discipline.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/technical expertise 2/banner.webp"
          alt="Milestone Project Management Engineering Hero Background"
        />
      </motion.div>
      <section className=" bg-gradient-to-r from-amber-100/30 via-amber-200/40 to-transparent overflow-hidden relative">
        <div className="relative py-16 z-10  flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-tighter  mb-4">
                Our Expertise
              </h1>
              <p className="text-lg text-gray-700">
                At Milestone Project Management, technical precision and
                professional excellence are at the heart of everything we do.
                Our expertise lies in combining deep industry knowledge with
                modern technology and a practical, results-driven mindset. From
                concept to handover, our engineers, designers, and project
                managers apply international best practices while understanding
                local regulations and client needs.{" "}
                <span className="block mt-2" /> This approach ensures that every
                project we handle is efficient, sustainable, and built to the
                highest standards. With proven experience across residential,
                commercial, industrial, and infrastructure developments, we
                deliver solutions that balance innovation, quality, and
                performance at every stage of the project lifecycle.
              </p>

              <Link
                href={"/Contact"}
                className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
              >
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
            <div className="h-[450px]">
              <img
                src="/technical expertise 2/heading.webp"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800">
            <span className="text-yellow-500">Multidisciplinary</span>{" "}
            Capabilities
          </h2>
          <p className="mb-16 mt-3 text-center text-gray-600">
          We offer a comprehensive range of technical and management services across multiple disciplines, including:
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-yellow-100 hover:border-yellow-300 shadow-sm hover:shadow-md transition-all overflow-hidden group"
              >
                {/* Top yellow Accent Bar */}
                <div className="h-1 bg-yellow-500" />

                {/* Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container ">
        <div className=" text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Advanced{" "}
            <span className="text-yellow-500">Tools & Technologies</span>
          </h2>
          <p className="text-gray-700 mb-6">
            To maintain accuracy, quality, and coordination, we use globally
            recognized software and equipment, including:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-sm text-gray-700">
            {[
              { tool: "AutoCAD", icon: "/Tools/autocad.webp" },
              { tool: "Revit", icon: "/Tools/revit.webp" },
              { tool: "Civil 3D", icon: "/Tools/civil-3d.webp" },
              { tool: "GIS Platforms", icon: "/Tools/gis.webp" },
              { tool: "BIM", icon: "/Tools/bim.webp" },
              { tool: "Topcon", icon: "/Tools/topcon.webp" },
              { tool: "Trimble", icon: "/Tools/trimble.webp" },
              { tool: "Leica Stations", icon: "/Tools/Leica.webp" },
            ].map((tool, i) => (
              <li
                key={i}
                className="border border-slate-100/30 text-[#B59410] font-medium rounded-lg px-4 py-2 text-center shadow-sm"
              >
                <div className="w-full h-[100px] ">
                  <img
                    src={tool.icon}
                    alt={tool.tool}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-3">{tool.tool}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EngineeringCTA
        title="Trusted by Leading Clients"
        desc="Milestone PM serves both public and private sectors, delivering tailored solutions for projects from master-planned communities to industrial developments. Our commitment to quality, reliability, and client satisfaction has earned the trust of developers, government agencies, and contractors across the UAE, Saudi Arabia, India, and Egypt."
      />
    </main>
  );
}
