"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Globe2, Scale, Share2, Layers, Cpu, BadgeCheck } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
  const differentiators = [
    {
      title: "Integrated Transport Expertise",
      desc: "With in-house technology specialists and transport planners, we combine digital innovation with deep sector knowledge to deliver practical, results-driven solutions.",
      icon: Globe2,
    },
    {
      title: "Data-Driven Decision Making",
      desc: "Our platforms convert complex transport and infrastructure data into actionable insights, helping clients improve planning, allocate resources efficiently, and measure performance.",
      icon: Cpu,
    },
    {
      title: "End-to-End Lifecycle Support",
      desc: "From strategy and digital platform design to implementation and ongoing monitoring, we provide continuous support throughout the asset or program lifecycle.",
      icon: Layers,
    },
    {
      title: "Sustainable and Scalable Solutions",
      desc: "We develop digital platforms that adapt to evolving technologies, optimize operational efficiency, and scale with your organization’s mobility needs.",
      icon: Scale,
    },
    {
      title: "Collaboration and Innovation",
      desc: "Through global partnerships and a culture of innovation, we continuously enhance our digital capabilities, ensuring every client benefits from the latest advancements in transport technology.",
      icon: Share2,
    },
  ];

  const services = [
    {
      title: "Transport Strategy Optimizer",
      desc: "A cloud-hosted platform that identifies investment priorities and turns complex transport planning data into actionable strategies. It supports real-time scenario testing and stakeholder alignment to optimize transport investments efficiently.",
      img: "/digital-engineering/transport-strategy.webp",
    },
    {
      title: "Bridge Vision: Predictive Maintenance System",
      desc: "Using AI and smart sensors, this tool monitors bridge and infrastructure health in real-time, identifying issues before they impact safety or operations.",
      img: "/digital-engineering/Artificial-Intelligence-sensor.jpg",
    },
    {
      title: "Mobility Analytics: Travel & Asset Performance",
      desc: "Advanced analytics tools that track traffic patterns, asset performance, and mobility trends to support strategic planning and operational optimization.",
      img: "/digital-engineering/travel-performance.jpg",
    },
    {
      title: "Smart Corridor Management",
      desc: "A digital platform that integrates IoT sensors, traffic management, and predictive modeling to improve flow, safety, and efficiency across key transport corridors.",
      img: "/digital-engineering/smart-corridor.jpg",
    },
    {
      title: "Urban Mobility Insights",
      desc: "Solutions that provide real-time data on public transport usage, vehicle fleet efficiency, and pedestrian and cyclist patterns to optimize urban mobility and reduce environmental impact.",
      img: "/digital-engineering/mobility-insight.jpeg",
    },
    {
      title: "Energy & Emissions Monitoring for Transport",
      desc: "A platform that measures vehicle fleet energy consumption, emissions, and environmental impact to support sustainable transport strategies and regulatory compliance.",
      img: "/digital-engineering/carbon-analytics.jpg",
    },
  ];

  const points = [
    "Proven expertise in transport infrastructure, mobility planning, and asset management.",
    "Custom-built digital platforms designed for real-world performance and measurable outcomes.",
    "Integration of data, sustainability, and technology in every solution.",
    "End-to-end service — from concept design to implementation and ongoing monitoring.",
    "Commitment to innovation and continuous improvement through global collaboration.",
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Transport & Mobility{" "}
              <span className="text-blue-500">Digital Solutions</span>
            </h1>
            <p>
              The transportation sector faces increasing challenges, from
              climate change and infrastructure resilience to equitable growth
              and operational efficiency. Milestone PM partners with public and
              private sector clients to deliver advanced digital solutions that
              optimize transport planning, enhance performance, and maximize
              long-term investment outcomes. Our expertise spans multiple modes
              and sectors, from road networks and bridges to urban mobility and
              public transport systems. By combining real-time data, advanced
              analytics, and predictive modeling, we help organizations make
              informed decisions, reduce inefficiencies, and create safer,
              smarter transport systems. Whether you are planning new transport
              infrastructure, monitoring existing assets, or optimizing mobility
              strategies, our digital solutions provide clarity, actionable
              insights, and confidence to deliver results effectively.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/digital-engineering/transport.jpg"}
              className="w-full h-full object-cover"
              alt={"air quality hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            Our <span className="text-amber-400">Differentiators</span>
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex bg-amber-50 flex-col items-start  rounded-2xl p-6 shadow hover:shadow-lg transition"
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
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-center text-gray-900"
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
                className=" rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
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
          <h2 className="text-3xl max-w-3xl  lg:text-4xl text-center mx-auto font-bold text-gray-900 mb-6">
            Why Choose <span className="text-amber-400">Milestone PM</span> for
            Transport & Mobility{" "}
            <span className="text-blue-500">Digital Solutions</span>?
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
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Take the Next Step Toward Smarter Mobility"
          desc="At Milestone PM, we don’t just deliver digital tools, we build intelligent, resilient, and sustainable transport frameworks. Contact us today to discover how our Transport & Mobility Digital Solutions can enhance your transport systems, optimize investments, and support smarter mobility for the future."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
