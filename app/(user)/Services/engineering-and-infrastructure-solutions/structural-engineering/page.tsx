"use client";
import { motion } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Building2,
  Factory,
  Landmark,
  School,
  Waves,
  BadgeCheck,
} from "lucide-react";

import Image from "next/image";

export default function ConstructionManagementPage() {
  const expertise = [
    {
      title: "Structural Design & Analysis",
      description:
        "We provide complete design solutions for buildings and infrastructure using the latest structural modeling and analysis tools to ensure strength, safety, and efficiency.",
      items: [
        "Reinforced Concrete and Steel Structures",
        "High-Rise and Mixed-Use Buildings",
        "Load Testing and Stress Analysis",
        "Design Optimization for Cost and Performance",
      ],
      img: "/Engineering-Infrastructure/alternative-delivery/our-value.webp",
    },
    {
      title: "Foundation & Ground Engineering",
      description:
        "We design and supervise deep and shallow foundations tailored to varying ground conditions and load requirements.",
      items: [
        "Pile Foundations and Raft Systems",
        "Retaining Walls and Earth Retention Structures",
        "Soil Improvement and Stabilization Strategies",
        "Geotechnical Assessment and Foundation Design",
      ],
      img: "/Engineering-Infrastructure/alternative-delivery/construction-management.webp",
    },
    {
      title: "Seismic & Wind Engineering",
      description:
        "Our engineers assess structural resilience against natural forces, ensuring compliance with local and international standards.",
      items: [
        "Seismic Load Design and Vibration Analysis",
        "Wind Load Modeling for Tall and Slender Structures",
        "Structural Retrofitting for Safety and Longevity",
      ],
      img: "/Engineering-Infrastructure/underground/geological.webp",
    },
    {
      title: "Structural Rehabilitation & Strengthening",
      description:
        "We provide expert advice for restoring or reinforcing existing buildings and infrastructure to meet updated safety and design requirements.",
      items: [
        "Condition Assessment and Structural Audits",
        "Strengthening and Retrofitting Solutions",
        "Material Testing and Non-Destructive Evaluation",
      ],
      img: "/Engineering-Infrastructure/underground/hero.webp",
    },
  ];
  const items = [
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      text: "Residential and Commercial Developments",
    },
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      text: "Industrial and Manufacturing Plants",
    },
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      text: "Bridges, Roads, and Infrastructure Projects",
    },
    {
      icon: <School className="w-6 h-6 text-white" />,
      text: "Educational and Institutional Buildings",
    },
    {
      icon: <Waves className="w-6 h-6 text-white" />,
      text: "Coastal and Marine Structures",
    },
  ];
  const industries = [
    {
      title: "High-Rise and Super-Tall Buildings",
      image: "/Engineering-Infrastructure/structural/tall-building.webp",
    },
    {
      title: "Bridges and Transportation Infrastructure",
      image: "/Engineering-Infrastructure/SCII/highway.webp",
    },
    {
      title: "Marine and Offshore Platforms",
      image: "/Engineering-Infrastructure/structural/marine.webp",
    },
    {
      title: "Industrial Plants and Energy Facilities",
      image: "/Engineering-Infrastructure/structural/Industrial Plants.webp",
    },
    {
      title: "Slope-Adjacent Residential and Commercial Developments",
      image:
        "/Engineering-Infrastructure/ground-engineering/Slope-Stabilazation.webp",
    },
  ];
  const reasons = [
    "Experienced Team of Structural Engineers",
    "Technology-Driven Approach",
    "Compliance and Safety Focus",
    "Sustainable and Value-Based Design",
    "End-to-End Structural Support",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Structural Legacy Consulting
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] bg-slate-100 text-center ">
        <Image
          src={
            "/Engineering-Infrastructure/alternative-delivery/Design-Builds.webp"
          }
          className="w-full h-full object-cover"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone Project Management, our Structural Engineering services
          are built on precision, innovation, and reliability. We provide expert
          engineering support for buildings, infrastructure, and industrial
          projects across the UAE and beyond. Our team brings together years of
          on-site experience, technical expertise, and modern engineering tools
          to design and deliver structures that are safe, efficient, and built
          to last. From residential towers and commercial complexes to bridges
          and industrial facilities, we ensure every structure is engineered
          with performance, sustainability, and safety at its core.
        </p>{" "}
      </section>

      <section className="py-20 text-gray-900">
        <div className="container">
          <h2 className="text-3xl max-w-5xl mx-auto md:text-4xl lg:text-5xl font-bold mb-5 text-center">
            Our <span className="text-yellow-500">Core Expertise</span>
          </h2>
          <p className="mt-1 text-center max-w-5xl mx-auto">
            Our structural engineering team delivers comprehensive solutions for
            all types of developments, combining technical accuracy with
            practical construction knowledge to ensure stability and long-term
            performance.
          </p>
          <div className="grid grid-cols-1 mt-10 gap-8">
            {expertise.map((area, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="border border-slate-900/10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 overflow-hidden"
                >
                  <div
                    className={`w-full h-[250px] lg:h-[450px]  ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <img
                      src={area.img}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Block */}
                  <div
                    className={`p-6 ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <h3 className="text-3xl font-semibold mb-2 text-[#B59410]">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                    {area.items.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {area.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-amber-50/80 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-600 mb-6">
            Specialized Capabilities
          </h2>
          <p className="text-slate-950 mb-12 max-w-3xl mx-auto">
            With experience across diverse sectors, Milestone Project Management
            brings technical precision and project-specific customization to
            every structural challenge.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-yellow-100 rounded-xl p-5 text-black border shadow"
              >
                <div className="bg-yellow-400 p-2 rounded-lg">{item.icon}</div>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-4xl lg:text-5xl text-center font-bold mb-12 text-gray-800">
            <span className="text-yellow-500">Industries</span> We Serve
          </h2>

          <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
            {industries.map((industry, index) => {
              return (
                <div key={index} className={``}>
                  <motion.div className=" w-full bg-slate-300 h-[220px] rounded-t-lg overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover shadow-md"
                    />
                  </motion.div>

                  <motion.div className=" w-full border bg-yellow-50 text-slate-950 rounded-b-xl p-3 ">
                    <h3 className="text-lg text-yellow-900 font-[700] ">
                      {industry.title}
                    </h3>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 container gap-8 place-items-center">
          <div>
            {" "}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-start text-amber-500 mb-10"
            >
              Why Partner with Milestone Project Management?
            </motion.h2>
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 text-yellow-950"
                >
                  <BadgeCheck className="w-6 h-6 text-white fill-green-500  mt-1 flex-shrink-0" />
                  <p className="text-lg font-medium">{reason}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="h-[270px] lg:h-[450px] bg-slate-100 w-full">
            <img
              src={"/Engineering-Infrastructure/structural/why-choose.webp"}
              alt={"why choose"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Building the Future, One Structure at a Time"
        desc={
          "Whether it’s a high-rise tower, a commercial development, or a complex infrastructure project, Milestone Project Management ensures every structure is built on a foundation of engineering excellence and trust. Our team is ready to turn your vision into a structurally sound reality, strong, efficient, and future-ready."
        }
        btn="Contact Us"
      />
    </main>
  );
}
