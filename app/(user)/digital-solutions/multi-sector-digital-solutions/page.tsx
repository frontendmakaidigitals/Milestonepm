"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Globe2, Scale, Share2, Layers, Cpu, BadgeCheck } from "lucide-react";

import { motion } from "motion/react";

export default function Page() {
  const differentiators = [
    {
      title: "Integrated Digital Expertise",
      desc: "With in-house technology specialists and sector experts, we merge digital innovation with deep infrastructure, environmental, and project management knowledge to deliver practical, results-driven solutions.",
      icon: Globe2,
    },
    {
      title: "Data-Driven Decision Making",
      desc: "Our digital tools transform complex data into actionable insights, enabling smarter planning, optimized performance, and long-term operational success.",
      icon: Cpu,
    },
    {
      title: "End-to-End Lifecycle Support",
      desc: "From digital strategy and design to implementation and asset management, we provide continuous support through every stage of your project’s lifecycle.",
      icon: Layers,
    },
    {
      title: "Sustainable and Scalable Solutions",
      desc: "We design adaptable digital platforms that evolve with technology, meet sustainability goals, and scale effortlessly as your organization grows.",
      icon: Scale,
    },
    {
      title: "Collaboration and Innovation",
      desc: "Through global partnerships and a culture of innovation, we continuously expand our digital capabilities—ensuring clients benefit from the latest advancements in technology.",
      icon: Share2,
    },
  ];

  const services = [
    {
      title: "Project Pulse: Centralized Project Intelligence",
      desc: "A cloud-based management hub that unifies project data, offering real-time visibility across performance, cost, and delivery. Enables faster, data-driven decisions and team alignment throughout the project lifecycle.",
      img: "/digital-engineering/Project Pulse.jpeg",
    },
    {
      title: "Vision 360: Immersive Communication Platform",
      desc: "A virtual engagement platform that transforms collaboration and visualization—allowing stakeholders to experience and interact with projects before they’re built.",
      img: "/digital-engineering/vision-360.png",
    },
    {
      title: "Eco Twin: Smart Environmental Modeling",
      desc: "An advanced system integrating weather, energy, and environmental data to enhance sustainability and operational performance across infrastructure and utilities.",
      img: "/digital-engineering/Climate Resilience.webp",
    },
    {
      title: "Carbon Pathway: Net-Zero Planning Tool",
      desc: "A powerful, data-driven platform that measures emissions, identifies reduction opportunities, and supports organizations in achieving decarbonization goals efficiently.",
      img: "/digital-engineering/carbon-pathway.jpg",
    },
    {
      title: "Mobility Optimizer: Transport Strategy Planning",
      desc: "A digital transport modeling tool enabling planners to simulate, test, and optimize transport systems for better performance and investment outcomes.",
      img: "/digital-engineering/Master Planning.webp",
    },
    {
      title: "Bridge Vision: Predictive Maintenance System",
      desc: "AI-powered monitoring and smart sensor analytics that track bridge and infrastructure health in real time—detecting issues before they impact safety or operations.",
      img: "/digital-engineering/bridge.jpg",
    },
    {
      title: "SmartSpace: Building Performance Analytics",
      desc: "An intelligent analytics platform that evaluates space utilization, energy consumption, and occupant behavior to improve comfort, efficiency, and asset performance.",
      img: "/digital-engineering/Définition-performance-commerciale.jpg",
    },
    {
      title: "EnergySense: Real-Time Energy Tracking",
      desc: "A live energy monitoring platform that enables organizations to reduce costs, meet sustainability goals, and comply with regulatory requirements through actionable insights.",
      img: "/digital-engineering/smart-energy-2.webp",
    },
  ];

  const points = [
    "Proven expertise across multiple industries, including infrastructure, energy, and transport.",
    "Custom-built digital platforms focused on real-world performance and measurable results.",
    "Seamless integration of sustainability, data, and technology in every solution.",
    "End-to-end service delivery — from concept design to implementation and long-term support.",
    "Commitment to innovation and continuous improvement through global collaboration.",
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Multi-Sector{" "}
              <span className="text-blue-500">Digital Solutions</span>
            </h1>
            <p>
              As industries evolve and technology reshapes the way we design,
              build, and manage assets, the demand for digital transformation
              has never been greater. Milestone PM partners with clients across
              sectors to deliver innovative digital platforms that enhance
              decision-making, improve performance, and maximize long-term
              value. Our expertise spans diverse markets, from infrastructure
              and energy to real estate and urban development.{" "}
              <span className="block mt-2" /> By combining digital intelligence,
              real-time data, and practical insights, we help organizations
              achieve smarter outcomes, reduce inefficiencies, and embrace
              sustainable growth. Whether you are improving transport networks,
              optimizing building operations, or managing large-scale
              infrastructure, our digital solutions give you the clarity,
              control, and confidence to move forward efficiently.
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
      <section className="py-16 container">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl max-w-4xl mx-auto lg:text-5xl font-bold text-center text-slate-900">
            Our Differentiators
          </h2>

          <div className="mt-12   grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start bg-amber-100/50 rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-200 text-slate-700 mb-4">
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
      <section className="py-20  bg-amber-50 ">
        <div>
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl max-w-3xl mx-auto md:text-5xl font-bold text-center text-gray-900"
            >
              Our Services
            </motion.h2>
            <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
              Delivering comprehensive air quality and environmental consulting
              solutions, backed by science and global expertise.
            </p>
          </div>

          <div className="mt-12 max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            Why Choose <span className="text-amber-400">Milestone PM?</span>
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
        <EngineeringCTA
          title="Take the Next Step Toward a Smarter Future"
          desc="At Milestone PM, we don’t just deliver digital systems, we build smarter, more resilient frameworks for progress. Contact us today to discover how our Multi-Sector Digital Solutions can transform your business, strengthen your assets, and prepare your organization for the digital future."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
