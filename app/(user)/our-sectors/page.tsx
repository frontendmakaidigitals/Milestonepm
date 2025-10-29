"use client";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import BgLayer from "../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import Link from "next/link";
const divisions = [
  {
    title: "Engineering & Design Division",
    description:
      "This division leads all technical planning and engineering design activities, ensuring safety, performance, and innovation across:",
    services: [
      "Structural Engineering",
      "MEP Design (Mechanical, Electrical, Plumbing)",
      "Infrastructure & Utility Networks",
      "Roads, Drainage & Hydrology",
      "Telecom & Low-Current Systems",
    ],
    image: "/our division 2/Engineering-Design Division.webp",
  },
  {
    title: "Architecture & Urban Planning Division",
    description:
      "This team delivers creative, functional, and people-centric design solutions that enhance communities and align with future development goals.",
    services: [
      "Architectural & Interior Design",
      "Landscape Architecture",
      "Urban & Regional Planning",
      "Masterplanning & Land Use Studies",
      "Design Optimization & Value Engineering",
    ],
    image: "/our division 2/Architecture-Urban Planning.webp",
  },
  {
    title: "Construction & Project Management Division",
    description:
      "Responsible for turning ideas into reality, this division oversees projects from start to finish, ensuring cost control, time efficiency, and construction quality.",
    services: [
      "Project & Program Management",
      "Contract Administration",
      "Construction Supervision",
      "Permitting & Code Compliance",
      "Fire & Safety Engineering",
      "Site Investigations & Surveying",
    ],
    image: "/our division 2/Construction-Project Management.webp",
  },
  {
    title: "Sustainability & Smart Solutions Division",
    description:
      "Focused on environmental impact and digital transformation, this division integrates smart systems and sustainable strategies into every project.",
    services: [
      "Environmental & Sustainability Planning",
      "Green Building & LEED Advisory",
      "Smart Cities Integration",
      "Energy Efficiency & Resource Management",
      "Digital Twin & Performance Monitoring",
    ],
    image: "/our division 2/smart solutions.webp",
  },
  {
    title: "Digital Engineering & BIM Division",
    description:
      "This division leads our digital transformation journey, enhancing project delivery through smart technologies and real-time coordination.",
    services: [
      "Building Information Modeling (BIM)",
      "GIS & Geospatial Services",
      "3D Modeling & Simulation",
      "Data Analytics for Project Optimization",
      "Digital Design Reviews",
    ],
    image: "/our division 2/Digital Engineering-BIM Division.webp",
  },
  {
    title: "Strategy & Advisory Division",
    description:
      "Our consultants offer forward-looking insights, feasibility assessments, and project strategies that align with Saudi Vision 2030 and client goals.",
    services: [
      "Feasibility Studies",
      "Policy & Strategic Planning",
      "Vision 2030 Alignment",
      "Risk & Cost Analysis",
      "Market Research & Opportunity Mapping",
    ],
    image: "/our division 2/Strategy-Advisory.webp",
  },
];

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
  return (
    <div className="">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Our Sectors
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-5xl lg:text-6xl font-semibold">
            Specialized Sectors for Smart Project Management
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/Engineering-Infrastructure/alternative-delivery/construction-management.webp"
          alt="Milestone Project Management Engineering Hero Background"
        />
      </motion.div>
      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}

        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-amber-200/40 to-transparent" />
        <BgLayer />
        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tighter  mb-4">
                Expertise Across Every{" "}
                <span className="text-amber-600">Sector</span>
              </h1>
              <p className="text-lg text-gray-700">
                At{" "}
                <span className="text-yellow-600">
                  Milestone Project Management
                </span>{" "}
                Engineering Consulting, our strength lies in our structure. We
                operate through dedicated, expert-led divisions that work
                together to deliver smart, sustainable, and fully integrated
                engineering solutions. Each division is equipped with the tools,
                talent, and technical knowledge needed to serve clients across
                sectors, whether it&apos;s infrastructure, architecture, urban
                planning, or digital transformation. Together, we bring
                precision, quality, and agility to every stage of the project
                lifecycle.
              </p>

              <Link
                href={"/Contact"}
                className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
              >
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
            <div className="h-[450px] w-full">
              <img
                src="/Engineering-Infrastructure/structural/bridges.webp"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-yellow-500">Core</span> Divisions
        </h2>
        <div className="grid  gap-10">
          <div className="space-y-12">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Image Section */}
                <div className="relative md:w-1/2 h-64 md:h-auto flex-shrink-0">
                  <Image
                    src={division.image}
                    alt={division.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-bold text-[#B59410] mb-4">
                      {division.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      {division.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {division.services.map((item) => (
                      <span
                        key={item}
                        className="flex items-center text-sm gap-2 bg-yellow-50 px-4 py-2 rounded-full text-gray-800 font-medium shadow-sm hover:shadow-md transition"
                      >
                        <BadgeCheck className="w-5 h-5 text-green-600 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Working Together to Build the Future"
        desc="Every sector at Milestone PM works in close coordination to deliver complete, end-to-end project solutions. This integrated approach allows us to stay agile, reduce risks, and achieve the highest quality outcomes across all project types."
      />
    </div>
  );
}
