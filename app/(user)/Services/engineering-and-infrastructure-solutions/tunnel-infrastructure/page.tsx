"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  Layers,
  ScanSearch,
  Globe,
  ShieldCheck,
  MountainSnow,
  BadgeCheck,
} from "lucide-react";
export default function ConstructionManagementPage() {
  const reasons = [
    {
      title: "Full Lifecycle Support",
      description:
        "Comprehensive support from project planning to operation, ensuring every tunnel system performs optimally throughout its lifecycle.",
      icon: Layers,
    },
    {
      title: "Advanced Modeling, Design & BIM",
      description:
        "We apply advanced modeling, design, and BIM techniques to enhance precision, coordination, and efficiency across all tunnel projects.",
      icon: ScanSearch,
    },
    {
      title: "Local Expertise, Global Best Practices",
      description:
        "Our engineers combine in-depth local knowledge with global standards to deliver technically sound and context-driven tunnel solutions.",
      icon: Globe,
    },
    {
      title: "ISO-Aligned Safety & Quality Systems",
      description:
        "All our operations adhere to ISO-aligned safety, quality, and environmental management systems to ensure full compliance and reliability.",
      icon: ShieldCheck,
    },
    {
      title: "Experience in Complex Geotechnical Conditions",
      description:
        "Proven expertise in handling geotechnically sensitive and high-risk environments through advanced analysis and mitigation strategies.",
      icon: MountainSnow,
    },
  ];

  const services = [
    {
      title: "Planning, Feasibility & Program Management",
      desc: `We support public and private clients from the earliest project stages, helping to assess feasibility, environmental impact, and overall project planning.`,
      points: [
        "Feasibility studies and alignment evaluations",
        "Environmental impact assessments",
        "Lifecycle cost analysis and financial modeling",
        "Project scheduling and risk assessment",
        "Program and construction oversight",
      ],
      img: "/Engineering-Infrastructure/Engineering/pexels-thisisengineering-3913031.webp",
    },
    {
      title: "Geotechnical & Geological Engineering",
      desc: `Our engineers conduct thorough soil and rock investigations to reduce risk and optimize underground design.`,
      points: [
        "Site investigations and borehole logging",
        "Groundwater studies and modeling",
        "Geotechnical risk assessment",
        "Settlement prediction and monitoring",
      ],
      img: "/Engineering-Infrastructure/underground/geological.webp",
    },
    {
      title: "Tunnel Design & Engineering",
      desc: `We design tunnels for roads, rail, utilities, and water systems, using advanced methods tailored to site conditions.`,
      points: [
        "Soft Ground Tunneling: EPB, slurry shield, and hand-mining for urban or soft soil areas",
        "Rock Tunneling: Drill-and-blast or TBM techniques for hard rock or mountainous terrain",
        "NATM/SEM: For complex geological zones",
        "Cut-and-Cover & Trenchless: Ideal for shallow tunnels in urban or congested areas",
      ],
      img: "/Engineering-Infrastructure/underground/tunnel-design.webp",
    },
    {
      title: "Trenchless Technology Solutions",
      desc: `In environmentally sensitive or built-up areas, we reduce surface disruption using trenchless methods.`,
      points: [
        "Microtunneling",
        "Horizontal Directional Drilling (HDD)",
        "Pipe jacking",
        "Auger boring",
      ],
      img: "/Engineering-Infrastructure/SCII/hero.webp",
    },
    {
      title: "Tunnel Inspection, Rehabilitation & Asset Management",
      desc: `We help clients extend the life of underground infrastructure through proactive maintenance and rehabilitation programs.`,
      points: [
        "Routine inspections and condition surveys",
        "Structural health monitoring (SHM)",
        "Leak detection and waterproofing solutions",
        "Tunnel rehabilitation and lining replacement",
        "Asset tracking and lifecycle management",
      ],
      img: "/Engineering-Infrastructure/underground/tunnel-inspection.webp",
    },
    {
      title: "Resident Engineering & Construction Support",
      desc: `Our full-time on-site engineering services ensure smooth execution, safety, and quality control across all project phases.`,
      points: [
        "Resident engineering and site supervision",
        "Contractor coordination",
        "QA/QC inspections and safety audits",
        "Progress monitoring and reporting",
        "Change management and claim analysis",
      ],
      img: "/Engineering-Infrastructure/underground/resident-engineer.webp",
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container   my-10">
        <h1 className="text-4xl max-w-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Tunnel Infrastructure Solutions
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/Engineering-Infrastructure/underground/hero2.jpg"}
          className="w-full h-full object-cover "
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone Project Management, we provide reliable and future-ready
          tunneling and underground infrastructure services that meet the needs
          of cities, industrial zones, and utilities. Whether for
          transportation, water networks, energy systems, or utilities, we
          design and manage underground projects with safety, precision, and
          durability at the forefront. Our experienced teams bring a combination
          of local knowledge and international expertise, using modern
          construction techniques to deliver cost-effective solutions, even in
          the most challenging geological conditions.
        </p>{" "}
      </section>

      {/* Features */}
      <section className="py-24 container space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What We <span className="text-yellow-500">Offer</span>
          </h2>
        </div>

        {services.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`${
                  isEven ? "order-1" : "order-1 lg:order-2"
                } w-full h-[300px] bg-slate-50 md:h-[380px] overflow-hidden rounded-2xl`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className={`${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                <h3 className="text-4xl font-semibold text-[#B59410] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-800 mb-4">{item.desc}</p>
                <ul className="space-y-2  text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span>
                        <BadgeCheck className="fill-green-500 text-white" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container px-6">
          <h2 className="text-4xl max-w-3xl mx-auto lg:text-5xl font-bold text-center text-yellow-600 mb-12">
            Why Choose Milestone PM for Tunneling Projects?
          </h2>
          <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-md border border-yellow-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-800 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Let’s Build What’s Below the Surface"
          desc="From large-scale urban infrastructure to utility tunnels, Milestone Project Management is your trusted partner for delivering underground projects that are safe, resilient, and efficient."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
