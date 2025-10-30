"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Globe2, Scale, Share2, Layers, Cpu, BadgeCheck } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
  const differentiators = [
    {
      title: "Integrated Environmental Expertise",
      desc: "With multidisciplinary teams in environmental science, engineering, and digital innovation, we deliver comprehensive, technology-driven solutions to today’s sustainability challenges.",
      icon: Globe2,
    },
    {
      title: "Data-Driven Environmental Intelligence",
      desc: "Our digital platforms transform environmental data into actionable insights, helping clients manage risks, enhance efficiency, and strengthen ecosystem resilience.",
      icon: Cpu,
    },
    {
      title: "End-to-End Support Across Asset Lifecycle",
      desc: "From strategy and design to digital implementation and long-term monitoring, we provide consistent technical and analytical support at every project stage.",
      icon: Layers,
    },
    {
      title: "Sustainable and Scalable Technology",
      desc: "We develop digital systems that evolve with your organization—integrating emerging technologies, supporting sustainability goals, and scaling effortlessly as operations grow.",
      icon: Scale,
    },
    {
      title: "Collaboration and Innovation",
      desc: "Through global partnerships and an innovation-focused culture, we continuously refine our tools and methods to deliver cutting-edge solutions that improve quality of life and environmental outcomes.",
      icon: Share2,
    },
  ];

  const services = [
    {
      title: "EnviroTwin: Environmental Digital Twin Platform",
      desc: "A real-time digital twin solution that visualizes and simulates environmental systems, enabling smarter water, waste, and air quality management while reducing risks and improving performance.",
      img: "/digital-engineering/Environmental Digital.webp",
    },
    {
      title: "AquaSense: Smart Water Management System",
      desc: "An intelligent water management platform that monitors usage, predicts shortages, and enhances water distribution efficiency through AI-based analytics.",
      img: "/digital-engineering/smart-water.jpg",
    },
    {
      title: "EcoPath: Sustainability and Carbon Analytics Tool",
      desc: "A data-driven dashboard that tracks emissions, identifies reduction opportunities, and supports organizations in achieving national and global net-zero targets.",
      img: "/digital-engineering/carbon-analytics.jpg",
    },
    {
      title: "ResilientGrid: Climate Adaptation Modeling",
      desc: "A predictive system that evaluates the impact of extreme weather, floods, and heat events—helping planners design adaptive, climate-resilient infrastructure.",
      img: "/digital-engineering/climate-monitoring.jpg",
    },
    {
      title: "GreenPulse: Environmental Monitoring & Reporting",
      desc: "A cloud-based platform for real-time tracking of environmental parameters such as air, noise, and soil quality, ensuring transparent compliance and reporting.",
      img: "/digital-engineering/weather-monitoring.jpg",
    },
    {
      title: "EnergySmart: Renewable Energy Optimization",
      desc: "A digital energy platform that monitors consumption, forecasts demand, and supports the integration of renewable energy sources for optimal efficiency and sustainability.",
      img: "/digital-engineering/smart-energy.jpg",
    },
    {
      title: "Habitat360: Ecosystem Intelligence Platform",
      desc: "Combining satellite data and sensor inputs, this system enables biodiversity monitoring, land-use planning, and sustainable ecosystem management.",
      img: "/digital-engineering/satelite-data.jpeg",
    },
    {
      title: "ClimateVault: Risk Assessment & Mitigation Hub",
      desc: "A centralized digital hub that helps organizations identify, assess, and mitigate environmental risks—enhancing preparedness and operational continuity.",
      img: "/digital-engineering/risk-assessment.jpg",
    },
  ];

  const points = [
    "Proven success in delivering sustainability-focused digital systems for governments, utilities, and private organizations.",
    "Custom-built platforms that enhance resource efficiency, reduce environmental risks, and support long-term resilience.",
    "Integration of advanced analytics, sustainability metrics, and operational intelligence.",
    "Comprehensive lifecycle support — from planning and design to monitoring and continuous improvement.",
    "Commitment to innovation and collaboration to deliver measurable environmental impact.",
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-amber-400">Resilience</span> &{" "}
              <span className="text-green-500">Environmental</span>{" "}
              <span className="text-blue-500">Digital Solutions</span>
            </h1>
            <p>
              In an era defined by climate change, resource scarcity, and rapid
              urbanization, building resilient and sustainable environments is
              more critical than ever. Milestone PM helps governments,
              developers, and organizations harness the power of digital
              technology to enhance environmental performance, safeguard
              communities, and optimize natural resource use. Our solutions
              combine data intelligence, smart automation, and advanced
              analytics to deliver measurable improvements in sustainability,
              resilience, and operational efficiency. From water management to
              energy systems and environmental monitoring, we empower clients to
              make informed, data-driven decisions that create long-term value
              and positive environmental impact.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/digital-engineering/smart-city.webp"}
              className="w-full h-full object-cover"
              alt={"air quality hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 container">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            Our <span className="text-amber-400">Differentiators</span>
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex bg-amber-50 flex-col items-start  rounded-2xl p-6 shadow hover:shadow-lg transition"
                  key={idx}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-black mb-4">
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
      <section className="py-20 ">
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
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl max-w-3xl  lg:text-4xl text-center mx-auto font-bold text-gray-900 mb-6">
            Why Choose <span className="text-amber-400">Milestone PM</span> for{" "}
            <span className="text-green-500">
              Resilience & Environmental Digital Solutions?
            </span>
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
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Take the Next Step Toward a Resilient Future"
          desc="At Milestone PM, we don’t just develop digital tools, we create smarter, more sustainable systems that strengthen communities and protect the planet. Contact us today to learn how our Resilience & Environmental Digital Solutions can support your sustainability goals and prepare your organization for a climate-resilient future."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
