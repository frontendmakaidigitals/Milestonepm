"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Calculator,
  Building2,
  FileBarChart2,
  Gem,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const services = [
    {
      title: "Budget Planning & Forecasting",
      description:
        "Early-stage financial projections that guide design decisions and establish realistic budget targets.",
      img: "/project-advisory/enigneering-economics/global.webp",
    },
    {
      title: "Quantity Surveying & Cost Control",
      description:
        "Comprehensive measurement, monitoring, and management of project costs throughout the lifecycle.",
      img: "/project-advisory/cost-mangement/cost-management.webp",
    },
    {
      title: "Feasibility & Investment Analysis",
      description:
        "Assess project viability, identify financial risks, and develop strategic funding recommendations.",
      img: "/project-advisory/cost-mangement/Feasibility.webp",
    },
    {
      title: "Procurement & Tender Advisory",
      description:
        "Strategic procurement guidance to achieve optimal value from contractors and suppliers.",
      img: "/project-advisory/project-management/hero.webp",
    },
    {
      title: "Contract Oversight & Management",
      description:
        "Monitor agreements, manage variations, and ensure smooth execution through effective administration.",
      img: "/project-advisory/project-management/graph.webp",
    },
    {
      title: "Final Accounts & Closeout",
      description:
        "Transparent financial closure through precise final cost reporting and documentation.",
      img: "/project-advisory/strategic-consulting/Business-mangement.webp",
    },
  ];

  const points = [
    "Monitor costs accurately at every stage of the project",
    "Identify financial risks early to prevent budget impact",
    "Avoid costly overruns and unnecessary delays",
    "Make confident, data-driven financial decisions",
  ];

  const features = [
    {
      title: "Cost Intelligence",
      desc: "We use real project data and global benchmarks to deliver precise, actionable cost insights.",
      icon: <Calculator className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: "Industry-Specific Expertise",
      desc: "From infrastructure to high-rise developments, our expertise ensures financial control tailored to your sector.",
      icon: <Building2 className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: "Transparent Reporting",
      desc: "Real-time cost tracking and clear reporting keep all stakeholders informed and aligned.",
      icon: <FileBarChart2 className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: "Value-Driven Decision Making",
      desc: "We optimize design and procurement strategies to maximize return on investment without compromising quality.",
      icon: <Gem className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: "End-to-End Support",
      desc: "From early budgeting to project closeout, we provide seamless support throughout every stage.",
      icon: <Handshake className="h-8 w-8 text-yellow-600" />,
    },
  ];

  const capabilities = [
    "Budget Planning & Forecast Modeling",
    "Feasibility Cost Analysis",
    "Quantity Take-Off & Bill of Quantities (BOQ)",
    "Lifecycle Costing & Whole-Life Analysis",
    "Risk & Value Management",
    "Procurement Support & Tender Evaluation",
    "Construction Cost Monitoring & Control",
    "Contract Administration & Dispute Resolution",
    "Final Account Reporting & Verification",
    "Maintenance & Repair Budgeting",
    "Asset Valuation & Capital Planning",
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Cost Advisory & Scheduling
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/project-advisory/strategic-consulting/hero.jpg"}
          className="w-full h-full object-cover"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, we support clients in making informed financial
          decisions across the entire project lifecycle. Our cost advisory
          services combine accuracy, transparency, and strategic insight to
          ensure that budgets are optimized, investments are maximized, and
          projects deliver real value. Whether it’s a commercial complex,
          residential development, infrastructure program, or urban renewal
          initiative, we help you manage costs efficiently from planning to
          completion.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          We go beyond basic cost estimation by offering expert guidance, risk
          mitigation, and sector-specific analysis to control spending, minimize
          waste, and enhance returns.
        </p>
      </section>
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5 text-center"
          >
            Our Services
          </motion.h2>
          <p className="text-center max-w-3xl mx-auto mb-12 ">
            We work closely with developers, government agencies, contractors,
            and consultants to manage budgets with precision. Key offerings
            include:
          </p>

          {/* Services Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-amber-50 p-1 shadow-sm hover:shadow-md transition-shadow duration-200 max-w-sm mx-auto"
              >
                {service.img && (
                  <div className="relative  w-full h-60 rounded-lg overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#B59410]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Image */}
          <div className="h-full w-full">
            <img
              src="/project-advisory/cost-mangement/Contract_Management.webp" // 🔹 Replace with your actual image
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Approach: Strategic, Transparent, Reliable
            </h2>

            <p className="text-gray-700 mb-6">
              Milestone PM combines regional market insight, industry
              benchmarks, and advanced cost management tools to deliver tailored
              solutions for every client. Using real-time data and proven
              methodologies, we help you:
            </p>

            <ul className="space-y-4 mb-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span>
                    <BadgeCheck className="text-white fill-green-500" />
                  </span>
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700">
              Our integrated teams of cost specialists, analysts, and project
              managers work together to align financial planning with project
              objectives at every stage.
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="py-16 px-6  ">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-amber-400">Milestone PM</span> for
            Cost Advisory
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We bring clarity, control, and confidence to your project costs
            through expertise and transparency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition"
            >
              <div className="p-3 rounded-xl bg-yellow-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>{" "}
      <section className="py-16 px-6 bg-yellow-100/20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Cost{" "}
            <span className="text-amber-400">Advisory Capabilities</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise to support every phase of your project’s
            financial lifecycle.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-amber-100 border border-amber-500/30 rounded-xl p-4 hover:bg-amber-100 transition"
            >
              <span>
                <BadgeCheck className="h-6 w-6 text-green-50 fill-green-500 flex-shrink-0" />
              </span>
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Deliver Projects Within Budget and On Time"
          desc="Whether managing large-scale infrastructure, complex residential developments, or urban regeneration projects, Milestone PM’s cost advisory services help you maintain financial control, reduce risk, and achieve measurable value."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
