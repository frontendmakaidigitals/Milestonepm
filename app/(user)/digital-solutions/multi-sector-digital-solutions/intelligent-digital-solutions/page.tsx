"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Users, LayoutGrid, Rocket, Leaf, Cpu, BadgeCheck } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
  const differentiators = [
    {
      title: "Comprehensive User Support",
      desc: "Building Intelligence caters to a wide range of users—from occupants and tenants to facility managers—offering tailored insights that enhance comfort, productivity, and operational performance.",
      icon: Users,
    },
    {
      title: "Scalable Across Portfolios",
      desc: "Our solution supports multi-asset portfolios through a unified portal, enabling seamless management and performance benchmarking across entire building networks.",
      icon: LayoutGrid,
    },
    {
      title: "Rapid Deployment",
      desc: "With streamlined implementation processes, Building Intelligence can be fully operational within 10–12 weeks, delivering measurable results faster than traditional systems.",
      icon: Rocket,
    },
    {
      title: "Data-Driven Performance",
      desc: "By integrating engineering systems, IoT sensors, and analytics, we optimize operations, maintenance workflows, and energy use for continuous building improvement.",
      icon: Cpu,
    },
    {
      title: "Sustainability and Efficiency",
      desc: "Building Intelligence helps reduce energy consumption and carbon emissions while enhancing comfort, efficiency, and alignment with organizational sustainability goals.",
      icon: Leaf,
    },
  ];

  const services = [
    {
      title: "Occupant Experience Analytics",
      desc: "Immersive front-end applications designed to enhance comfort, productivity, and engagement for building occupants through real-time environmental and behavioral insights.",
      img: "/Digital-Engineering/occupant-experience-analytics.webp",
    },
    {
      title: "Facility Management Optimization",
      desc: "An advanced analytics platform for facility managers and operators to monitor building systems, improve maintenance workflows, and optimize operational performance.",
      img: "/Digital-Engineering/facility-management-optimization.webp",
    },
    {
      title: "Portfolio Management",
      desc: "A centralized dashboard that enables property owners to manage multiple assets, benchmark performance, and implement data-driven strategies across their entire portfolio.",
      img: "/Digital-Engineering/portfolio-management.webp",
    },
    {
      title: "Energy and Carbon Tracking",
      desc: "Comprehensive tools to monitor and analyze energy consumption and carbon emissions, supporting sustainability initiatives and regulatory compliance.",
      img: "/Digital-Engineering/energy-carbon-tracking.webp",
    },
    {
      title: "Space Utilization Insights",
      desc: "Data-driven solutions that analyze space usage patterns to optimize layouts, improve efficiency, and enhance occupant satisfaction.",
      img: "/Digital-Engineering/space-utilization-insights.webp",
    },
  ];

  const points = [
    "Proven expertise in building operations, technology integration, and facility management.",
    "Custom digital solutions designed for real-world building performance and measurable outcomes.",
    "Integration of sustainability, data, and technology across every building and portfolio.",
    "End-to-end service — from design and deployment to monitoring and ongoing support.",
    "Commitment to innovation and continuous improvement through global expertise.",
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Building Intelligent Digital Solutions
            </h1>
            <p>
              The way we design, operate, and manage buildings is evolving
              rapidly, with technology playing a key role in enhancing
              efficiency, sustainability, and occupant experience. Milestone PM
              delivers Building Intelligence solutions that transform data from
              built assets into actionable insights, helping organizations
              optimize space, reduce energy consumption, and improve overall
              performance. Our expertise spans commercial, residential, and
              mixed-use properties. By combining real-time analytics, immersive
              user interfaces, and facility management tools, we enable building
              owners, operators, and occupants to make smarter decisions that
              maximize value and improve user experience. Whether you are
              managing a single building or an entire property portfolio, our
              Building Intelligence solutions provide clarity, operational
              control, and measurable benefits for all stakeholders.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/Air-Quality-Assessment/hero.webp"
              }
              className="w-full h-full object-cover"
              alt={"air quality hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Our Differentiators
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center text-gray-900"
          >
            Our Services
          </motion.h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Delivering comprehensive air quality and environmental consulting
            solutions, backed by science and global expertise.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl text-center mx-auto font-bold text-gray-900 mb-6">
            Why Choose Milestone PM for Transport & Mobility Digital Solutions?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start bg-yellow-50 p-4 rounded-lg gap-3"
              >
                <span>
                  <BadgeCheck className="fill-green-500 text-white w-6 h-6  mt-1" />
                </span>
                <span className="text-gray-700 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EngineeringCTA
        title="Take the Next Step Toward Smarter Buildings"
        desc="At Milestone PM, we don’t just provide building technology, we create intelligent, connected, and sustainable environments. Contact us today to discover how our Building Intelligence Digital Solutions can optimize your buildings, enhance occupant experience, and drive measurable performance improvements."
        btn="Contact Us Today"
      />
    </main>
  );
}
