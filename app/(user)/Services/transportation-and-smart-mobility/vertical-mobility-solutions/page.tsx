"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "motion/react";
import {
  PenTool,
  ClipboardCheck,
  Hammer,
  Users,
  Workflow,
  ShieldCheck,
  Cpu,
  Handshake,
} from "lucide-react";
export default function Page() {
  const services = [
    {
      title: "Design & Engineering",
      icon: <PenTool className="w-8 h-8 text-yellow-600" />,
      points: [
        "Development of VT system design concepts",
        "Design drawings, detailed specifications, and cost estimates",
        "Equipment selection and performance benchmarking",
        "Multidisciplinary coordination with MEP, structural, and architectural teams",
        "Compliance with local codes, fire safety, and ADA standards",
        "Solutions for logistical challenges in building core and circulation",
      ],
    },
    {
      title: "Condition Assessments & Studies",
      icon: <ClipboardCheck className="w-8 h-8 text-yellow-600" />,
      points: [
        "Modernization strategies for aging equipment",
        "Elevator and escalator inspections and evaluations",
        "Performance audits and lifecycle cost analysis",
        "Product feasibility reviews and white papers on new tech",
        "Code compliance and ADA accessibility reviews",
      ],
    },
    {
      title: "Construction Phase Services",
      icon: <Hammer className="w-8 h-8 text-yellow-600" />,
      points: [
        "Shop drawing and submittal reviews",
        "Construction progress monitoring and site inspections",
        "Review of RFIs, RFCs, and change orders",
        "Final field inspections and punch list development",
        "Acceptance inspections and contractor coordination",
        "Quality assurance and commissioning support",
      ],
    },
    {
      title: "Simulation & Pedestrian Flow Analysis",
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      points: [
        "Vertical transportation simulation modeling",
        "Peak demand assessments & elevator wait time calculations",
        "Scenario planning for varying traffic levels",
        "Flow optimization to reduce congestion & improve UX",
      ],
    },
  ];
  const reasons = [
    {
      title: "Comprehensive Expertise",
      icon: <Workflow className="w-8 h-8 text-yellow-600" />,
      desc: "From concept through commissioning, we provide complete lifecycle support for vertical mobility systems.",
    },
    {
      title: "Safety & Compliance",
      icon: <ShieldCheck className="w-8 h-8 text-yellow-600" />,
      desc: "All systems are designed to meet the highest standards for safety, reliability, and accessibility.",
    },
    {
      title: "Smart, Efficient Solutions",
      icon: <Cpu className="w-8 h-8 text-yellow-600" />,
      desc: "We integrate energy-efficient systems, intelligent controls, and simulation tools to enhance performance.",
    },
    {
      title: "Collaborative Approach",
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      desc: "Our team works closely with architects, engineers, and facility managers to ensure coordinated delivery.",
    },
    {
      title: "Client-Focused Outcomes",
      icon: <Handshake className="w-8 h-8 text-yellow-600" />,
      desc: "Solutions are tailored to each building’s type, occupancy patterns, and long-term operational needs.",
    },
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Vertical <span className="text-yellow-600">Transportation</span>{" "}
              Services
            </h1>

            <p>
              In modern buildings and infrastructure, vertical mobility systems,
              elevators, escalators, and moving walkways, are critical to
              efficiency, accessibility, and user experience. From high-rise
              offices to transit hubs, airports, hospitals, and mixed-use
              developments, effective vertical transportation ensures smooth
              movement and operational reliability. At Milestone PM, our
              Vertical Mobility team delivers complete, innovative solutions to
              optimize performance, energy efficiency, and user comfort. We
              support new installations, upgrades, and refurbishments across
              sectors, providing systems that are safe, cost-effective, and
              future-ready.
            </p>
          </div>
          <div className="w-full h-[450px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/vertical-transportation/elevators.jpg"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-100/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl  lg:text-5xl font-bold mb-6"
          >
            Our <span className="text-yellow-600">Approach</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            We collaborate with building owners, developers, architects,
            engineers, and facility managers to provide end-to-end guidance
            through every stage of the vertical mobility lifecycle. By combining
            engineering expertise, technology insights, and data-driven
            analysis, we create solutions tailored to each building’s usage
            patterns, traffic flows, and operational objectives.
          </motion.p>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl  lg:text-5xl font-bold text-center mb-12"
          >
            Our <span className="text-yellow-600">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className=" shadow-lg rounded-2xl p-8 bg-amber-100/40 border border-amber-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl  lg:text-5xl font-bold text-center mb-14"
          >
            Why Choose{" "}
            <span className="text-yellow-600">
              Milestone Project Management
            </span>{" "}
            for Vertical Transportation?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  {reason.icon}
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Enhance Mobility, Improve Experiences"
        desc="Whether it’s a new high-rise, airport terminal, hospital, or an existing building upgrade, Milestone PM delivers vertical mobility solutions that are safe, efficient, and user-focused."
        btn="Contact us today"
      />
    </main>
  );
}
