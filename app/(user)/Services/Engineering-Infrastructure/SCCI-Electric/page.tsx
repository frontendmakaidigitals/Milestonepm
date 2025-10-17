"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Wrench,
  Handshake,
  Star,
  BadgeCheck,
} from "lucide-react";

export default function ConstructionManagementPage() {
  const markets = [
    {
      image: "/Engineering-Infrastructure/SCII/rail.webp", // Replace with your actual image paths
      title: "Rail and Transit Systems",
      desc: "SCCI Electric plays a critical role in modernizing and electrifying transportation networks. We install and maintain key systems to ensure safe, efficient, and continuous rail operation.",
      points: [
        "Overhead Catenary Systems (OCS)",
        "Traction Power Substations",
        "Automatic Train Control (ATC)",
        "Centralized Traffic Control (CTC)",
        "Signal and Communications Systems",
        "Positive Train Control (PTC)",
      ],
    },
    {
      image: "/Engineering-Infrastructure/SCII/highway.webp",
      title: "Highways and Bridges",
      desc: "Supporting state DOTs and transportation agencies, we deliver smart infrastructure that enhances traffic flow, safety, and regional mobility.",
      points: [
        "Intelligent Transportation Systems (ITS)",
        "Ramp Metering Equipment",
        "Distribution Vaults and Duct Banks",
        "Electrical Signage and Highway Lighting",
        "Traffic Signal Installation and Upgrades",
        "Bridge Electrical Systems",
      ],
    },
    {
      image: "/Engineering-Infrastructure/SCII/wastewater.webp",
      title: "Water and Wastewater Facilities",
      desc: "We support critical water infrastructure by providing robust, dependable MEP installations for pumping stations and treatment plants.",
      points: [
        "Electrical Scope for Pumping Stations",
        "Instrumentation and Controls",
        "Power Distribution and Standby Systems",
        "Motor Control Centers (MCCs)",
        "Integration of SCADA Systems",
      ],
    },
  ];

  const features = [
    {
      title: "Self-performing Contractor",
      description:
        "We directly manage labor, equipment, and QA/QC, ensuring higher control over quality and timelines.",
      icon: Wrench,
    },
    {
      title: "Specialized Expertise",
      description:
        "Our electricians are trained in transportation, utility, and industrial-grade electrical systems.",
      icon: Star,
    },
    {
      title: "Safety Commitment",
      description:
        "Our safety-first culture meets and exceeds industry standards across all project types.",
      icon: ShieldCheck,
    },
    {
      title: "Collaborative Approach",
      description:
        "Seamless coordination with general contractors, design teams, and public agencies.",
      icon: Handshake,
    },
    {
      title: "Proven Performance",
      description:
        "A trusted name on major infrastructure programs in rail, transit, and utility markets.",
      icon: Users,
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-amber-800">
          SCCI Electric
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/Engineering-Infrastructure/SCII/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          SCCI Electric is a fully licensed electrical contracting firm
          specializing in complex, large-scale infrastructure projects. With
          decades of proven experience, we serve as both a self-performing
          electrical contractor on AECOM-led initiatives and as a trusted
          subcontractor or general contractor on standalone assignments.
        </p>{" "}
        <p className="mt-2 text-lg text-center">
          Our expert team brings deep technical knowledge, safety-first
          execution, and seamless integration to every project. From
          high-voltage traction power systems in rail to intelligent
          infrastructure along highways and mission-critical systems in
          water/wastewater treatment, SCCI Electric delivers reliable,
          high-performance electrical solutions built to last.
        </p>
      </section>
      <section className="my-20">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold">
              What We <span className="text-yellow-500">Do</span>
            </h1>
            <p className="mt-3 text-lg">
              We offer complete electrical contracting services, including
              design support, installation, commissioning, and long-term
              maintenance. Our team is equipped to deliver complex,
              schedule-driven projects that require precision coordination with
              civil, structural, and mechanical disciplines.
            </p>
          </div>
          <div className="h-[400px] w-full ">
            <img
              src={"/Engineering-Infrastructure/SCII/about.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="bg-gray-100 py-20">
        <div className="text-center container mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="text-yellow-500">Markets</span> We Serve
          </motion.h2>
          <p className="text-gray-600">
            Empowering infrastructure across transportation and utility sectors.
          </p>
        </div>

        <div className="space-y-16 container">
          {markets.map((item, index) => {
            const isEven = index % 2 === 0; // 0-based index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 rounded-2xl text-black"
              >
                {/* Image column */}
                <div
                  className={`h-[380px] bg-slate-100 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text column */}
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <h3 className="text-3xl text-amber-800 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/90 mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span>
                          <BadgeCheck className="w-5 h-5 fill-green-500 text-white" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="container px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-yellow-900 mb-12">
            Why Choose SCCI Electric?
          </h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-yellow-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-800 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Built to Power Progress"
        desc="Whether we're energizing a new transit corridor, upgrading bridge control systems, or supporting water utility modernization, SCCI Electric is committed to powering progress through safe, smart, and sustainable electrical solutions."
        btn="Contact Us Today"
      />
    </main>
  );
}
