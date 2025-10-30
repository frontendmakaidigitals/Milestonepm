"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  BarChart3,
  AlertTriangle,
  Zap,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
export default function Page() {
  const tools = [
    {
      title: "Freight Network Simulation",
      desc: "We model complex freight corridors to analyze capacity, scheduling, and operational constraints. From regional terminals to international routes, our simulations help optimize routing, reduce bottlenecks, and improve efficiency before major investments.",
      img: "/Transportation-mobility/rail-network-modelling/freight.jpg",
    },
    {
      title: "Passenger Rail Modeling",
      desc: "We simulate urban and intercity rail systems — from metros to high-speed lines — to enhance reliability, scheduling, and passenger comfort. Multiple service scenarios are tested to ensure optimized performance and efficiency.",
      img: "/Transportation-mobility/rail-network-modelling/Railway Electrification.webp",
    },
    {
      title: "Electrification & Energy Analysis",
      desc: "Our experts model standard electrification systems used in metros, commuter, and high-speed networks. We analyze traction power, energy use, and overall performance to ensure sustainable and efficient operations.",
      img: "/Transportation-mobility/rail-network-modelling/electrification.jpg",
    },
    {
      title: "Train Performance & Track Analysis",
      desc: "We evaluate rolling stock performance across track alignments, analyzing acceleration, braking, and energy efficiency. This data helps refine train schedules, optimize energy consumption, and improve network reliability.",
      img: "/Transportation-mobility/rail-network-modelling/track-analysis.webp",
    },
    {
      title: "Flexible Multi-Scenario Simulation",
      desc: "Using advanced 2D and 3D simulation platforms, we create customizable models for urban, freight, and mixed-use networks. These simulations enable rapid scenario testing, visualization, and informed stakeholder decision-making.",
      img: "/Transportation-mobility/rail-network-modelling/sim.jpg",
    },
  ];

  const reasons = [
    {
      title: "Multi-Tool Expertise",
      desc: "Skilled in leading rail simulation platforms for both freight and passenger networks.",
      img: "/Transportation-mobility/rail-network-modelling/multitoo.webp", // freight trains
    },
    {
      title: "Comprehensive Experience",
      desc: "Advisory expertise across urban transit, metro systems, intercity, and freight lines.",
      img: "/Transportation-mobility/rail-network-modelling/cross-sector.webp", // passenger
    },
    {
      title: "Global Standards, Local Relevance",
      desc: "Combining international best practices with regional requirements for effective outcomes.",
      img: "/Transportation-mobility/rail-network-modelling/global-standards.webp", // metro / modern
    },
    {
      title: "End-to-End Support",
      desc: "Providing complete support from feasibility and planning to detailed design validation.",
      img: "/Transportation-mobility/rail-network-modelling/support.webp", // planning
    },
  ];

  const services = [
    "Freight and Passenger Rail Capacity Modeling",
    "Timetable Optimization and Service Planning",
    "Electrification System and Energy Analysis",
    "Train Performance and Operational Efficiency Assessment",
    "Terminal and Yard Operations Simulation",
    "Impact Evaluation of Infrastructure Upgrades",
    "Multi-Scenario Planning for Future Network Growth",
  ];

  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-600" />,
      title: "Data-Driven Decisions",
      desc: "Quantitative insights guide infrastructure planning and operational choices.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Operational Risk Reduction",
      desc: "Identify bottlenecks, conflicts, and capacity issues before construction begins.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Enhanced Efficiency",
      desc: "Optimize train performance, scheduling, and energy consumption for maximum output.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Future-Ready Networks",
      desc: "Plan for high-speed, autonomous, and electrified rail systems of tomorrow.",
    },
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-semibold">
              <span className="text-yellow-500">Rail & Transit</span> Advisory
            </h1>
            <p>
              At Milestone PM, we provide advanced rail and transit advisory
              services that help clients plan, optimize, and future-proof rail
              systems. Leveraging cutting-edge simulation tools, we analyze
              everything from passenger flows and freight operations to
              electrification networks and energy efficiency. Our insights
              enable governments, transit authorities, and developers to make
              informed, evidence-based decisions that maximize performance,
              minimize risk, and ensure long-term operational success.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/rail-network-modelling/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Our <span className="text-yellow-500">Rail & Transit</span>{" "}
          <span className="text-blue-500">Simulation Tools</span>
        </h2>
        <div className="space-y-20">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 h-[380px]">
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4">{tool.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl max-w-4xl mx-auto font-bold mb-12">
            Benefits of Our Rail Advisory Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6  rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div>{item.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-amber-100/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl max-w-4xl mx-auto font-bold mb-12">
            Why Choose <span className="text-yellow-500">Milestone PM</span> for{" "}
            <span className="text-blue-500">Rail & Transit</span> Advisory?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <Image
                  width={400}
                  height={400}
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Rail Network
            </span>{" "}
            Modeling Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-amber-50  rounded-2xl shadow hover:shadow-md transition"
              >
                <span>
                  <BadgeCheck className="w-6 h-6 text-green-50 fill-green-500 shrink-0 mt-1" />
                </span>
                <p className="text-lg font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Plan, Simulate, and Optimize with Milestone PM"
          desc="From initial concept to operational readiness, Milestone PM helps clients build smarter, more efficient, and resilient rail networks. Our rail and transit advisory services ensure that every project is future-ready, cost-effective, and performance-driven."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
