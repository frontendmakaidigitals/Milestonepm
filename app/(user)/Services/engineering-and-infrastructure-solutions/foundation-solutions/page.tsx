"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Award,
  Cpu,
  Wrench,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export default function ConstructionManagementPage() {
  const offerings = [
    {
      title: "Deep Foundation Systems",
      desc: `We design and implement deep foundation systems for towers, bridges, industrial facilities, and marine projects. Using modern techniques and advanced machinery, we ensure structures remain secure under all conditions.`,
      points: [
        "Bored and Driven Piles – Designed for maximum strength and minimal settlement in all soil types",
        "Large Diameter Shafts – Suitable for major projects requiring high load-bearing capacity",
        "Rotary & Cased Drilling – Ensures accuracy and stability in rocky or mixed soil formations",
        "Reverse Circulation Drilling – Ideal for deep foundations in water-bearing layers",
        "Marine & Coastal Foundations – Designed for jetties, terminals, and port facilities to resist corrosion and water pressure",
      ],
      img: "/Engineering-Infrastructure/ground-engineering/Foundation-design.webp",
    },
    {
      title: "Micropiling & Underpinning",
      desc: `We offer micropile systems for areas with limited space or restricted access. These small but strong foundations are perfect for reinforcing existing structures or upgrading older buildings.`,
      points: [
        "Low vibration and minimal disturbance",
        "Fast installation using compact equipment",
        "Suitable for weak or uneven soil conditions",
        "Can be applied at different angles for flexible designs",
      ],
      img: "/Engineering-Infrastructure/ground-engineering/groundwater-assesment.webp",
    },
    {
      title: "Ground Strengthening & Soil Improvement",
      desc: `Before construction begins, we improve ground conditions to ensure a stable foundation and long-term structural performance.`,
      points: [
        "Dynamic Compaction – Strengthens soft or loose soil through repeated heavy tamping",
        "Vibro Stone Columns – Improves load capacity and drainage using compacted gravel columns",
        "Jet & Pressure Grouting – Injects stabilizing material into the ground to increase strength and reduce settlement",
      ],
      img: "/Engineering-Infrastructure/ground-engineering/ground-treatment.webp",
    },
    {
      title: "Excavation Support & Slope Stability",
      desc: `For deep excavations or sloped areas, we provide reliable protection systems that ensure safety and long-term stability.`,
      points: [
        "Retaining Walls & Soil Nailing – Reinforced structures to secure slopes and prevent soil movement",
        "Sheet Piling Systems – Strong and efficient support for excavations near roads or water bodies",
        "Anchoring & Bracing Systems – Provides lateral support for deep basement or foundation pits",
        "Temporary & Permanent Systems – Designed for both short-term and long-term project requirements",
      ],
      img: "/Engineering-Infrastructure/Foundation Engineering/Excavation.webp",
    },
  ];

  const features = [
    {
      title: "Comprehensive Expertise",
      desc: "Decades of combined experience in foundation and structural engineering.",
      icon: Award, // Represents expertise and recognition
    },
    {
      title: "Modern Technology",
      desc: "Use of advanced drilling and testing tools to ensure precision.",
      icon: Cpu, // Represents modern, advanced technology
    },
    {
      title: "Tailored Solutions",
      desc: "Every foundation plan is customized for the site, soil, and project scale.",
      icon: Wrench, // Represents customization and engineering precision
    },
    {
      title: "Safety & Compliance",
      desc: "All work meets UAE safety standards and international best practices.",
      icon: ShieldCheck, // Represents safety and regulatory compliance
    },
    {
      title: "Strong Regional Presence",
      desc: "Deep knowledge of local soil profiles and construction environments.",
      icon: Globe2, // Represents global and regional presence
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Reliable Foundation Solutions
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/Engineering-Infrastructure/Engineering/hero.webp"}
          className="w-full h-full object-cover "
          alt={"hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone Project Management, we deliver foundation engineering
          services that provide the stability and strength every project needs.
          From large-scale infrastructure to residential and commercial
          developments, we help clients build safely, efficiently, and
          confidently. A strong foundation is where every successful structure
          begins. That’s why we focus on precision, innovation, and lasting
          performance. With years of on-ground experience and a skilled team of
          geotechnical and structural specialists, we manage everything, from
          site studies and design development to on-site construction and
          quality control.
        </p>{" "}
      </section>

      {/* Features */}
      <section className=" mt-10 py-20">
        <div className="lg:container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            What We <span className="text-amber-500">Offer</span>
          </h2>

          <div className="space-y-16 container">
            {offerings.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 rounded-2xl text-black"
                >
                  {/* Image Block */}
                  <div
                    className={`h-[340px] bg-slate-100 overflow-hidden w-full ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } order-1`}
                  >
                    <Image
                      width={400}
                      height={500}
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Text Block */}
                  <div
                    className={`flex-1 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } order-2`}
                  >
                    <h3 className="text-3xl text-[#614e00] font-[700] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black/90 mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <BadgeCheck className="w-5 h-5 fill-green-500 text-slate-50" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-amber-100/40 py-16">
        <div className="container">
          <h2 className="text-4xl  max-w-4xl mx-auto lg:text-5xl font-bold text-center text-yellow-600 mb-12">
            Why Choose Milestone Project Management?
          </h2>
          <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Building Foundations for the Future"
          desc="At Milestone Project Management, we don’t just lay foundations; we build trust, safety, and value into every project. Our goal is to deliver foundation solutions that support your vision today and stand strong for decades to come."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
