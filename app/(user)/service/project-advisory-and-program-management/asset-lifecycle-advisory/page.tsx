"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Landmark,
  Building2,
  Hospital,
  Train,
  Factory,
  BadgeCheck,
  Badge,
} from "lucide-react";

export default function Page() {
  const sections = [
    {
      title: "Asset Condition & Performance Assessment",
      items: [
        "On-site inspections and digital condition audits",
        "Identification of structural, mechanical, and operational deficiencies",
        "Risk ranking based on urgency, impact, and severity",
        "Evaluation of lifecycle performance and remaining service life",
      ],
    },
    {
      title: "Capital Planning & Financial Modeling",
      items: [
        "Long-term investment strategy and budgeting",
        "Prioritization frameworks for high-value and high-risk assets",
        "Multi-year capital planning and forecast modeling",
        "Scenario analysis to test investment strategies and outcomes",
      ],
    },
    {
      title: "Portfolio Strategy & Optimization",
      items: [
        "Review and analysis of owned, leased, and underutilized assets",
        "Space utilization and performance benchmarking",
        "Consolidation, divestment, or reallocation strategies",
        "Alignment of asset strategy with organizational goals and objectives",
      ],
    },
    {
      title: "Sustainability & Resilience Advisory",
      items: [
        "Energy efficiency and carbon footprint evaluations",
        "Recommendations for green retrofits and renewable integration",
        "Resilience planning for climate, seismic, and operational risks",
        "Guidance for LEED, Estidama, and local regulatory compliance",
      ],
    },
    {
      title: "Digital Asset Management Solutions",
      items: [
        "Centralized digital asset registers and dashboards",
        "Integration with IoT sensors and predictive maintenance tools",
        "Asset tagging, tracking, and real-time monitoring",
        "Digital twins and analytics for informed, data-driven decisions",
      ],
    },
  ];

  const supports = [
    {
      title: "Government Authorities and Municipal Agencies",
      icon: Landmark,
    },
    {
      title: "Property Developers and Real Estate Owners",
      icon: Building2,
    },
    {
      title: "Healthcare, Education, and Institutional Facilities",
      icon: Hospital,
    },
    {
      title: "Transportation, Utilities, and Infrastructure Operators",
      icon: Train,
    },
    {
      title: "Industrial and Energy Sector Clients",
      icon: Factory,
    },
  ];

  const points = [
    {
      title: "Comprehensive Approach",
      desc: "From assessment to strategy and execution, one integrated team delivers results.",
      img: "/project-advisory/asset-advisory/role.webp",
    },
    {
      title: "Proven Quality",
      desc: "Adherence to international standards, safety, and data integrity.",
      img: "/project-advisory/asset-advisory/iso-certified.webp",
    },
    {
      title: "Regional Knowledge, Global Standards",
      desc: "Local insights aligned with regulatory requirements and long-term vision.",
      img: "/project-advisory/strategic-consulting/Business-mangement.webp",
    },
    {
      title: "Sustainability-Driven",
      desc: "Helping clients reduce environmental impact while maximizing asset efficiency.",
      img: "/project-advisory/asset-advisory/Leadership.webp",
    },
    {
      title: "Digital-First Solutions",
      desc: "Leveraging smart dashboards, analytics, and predictive tools for future-ready decision-making.",
      img: "/project-advisory/asset-advisory/digital-first.webp",
    },
  ];

  const questions = [
    "How are my assets performing today?",
    "What are the risks and hidden issues?",
    "What is the total cost of ownership over time?",
    "Which assets should be prioritized for upgrade, replacement, or disposal?",
    "How can sustainability and efficiency be integrated into decisions?",
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Asset Lifecycle Advisory
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/project-advisory/asset-advisory/hero2.jpg"}
          className="w-full h-full object-cover"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, our Asset Lifecycle Advisory services are designed to
          help clients make informed, long-term decisions about their
          infrastructure, buildings, and property portfolios. We provide
          practical insights on asset performance, lifecycle planning, and risk
          management, helping organizations maximize value, reduce costs, and
          ensure sustainable outcomes.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Whether you are a government body managing public facilities, a
          developer optimizing your real estate investments, or a city planning
          for future growth, we turn complex data into actionable strategies and
          tangible results..
        </p>
      </section>
      <section className="py-16 px-6 bg-amber-100/30 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center overflow-hidden">
          {/* Left Image (on mobile, moves to top) */}
          <div className="order-1 md:order-none h-[260px] lg:h-[400px] w-full">
            <Image
              width={600}
              height={500}
              src="/project-advisory/asset-advisory/hero.webp"
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-2 md:order-none p-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Role Across the Asset Lifecycle
            </h2>

            <p className="text-gray-700 mb-6">
              We assist clients at every stage of the asset journey, from
              detailed condition assessments to strategic investment planning
              and digital asset management. Our multidisciplinary teams provide
              both technical expertise and strategic guidance to answer key
              questions:
            </p>

            <ul className="space-y-3">
              {questions.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>
                    <BadgeCheck className="text-green-50 fill-green-500" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>{" "}
      <section className="py-20  bg-gradient-to-b from-amber-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-amber-600 mb-6">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl border border-yellow-100 hover:shadow-xl transition p-8"
              >
                <h3 className="text-xl font-semibold text-yellow-800 mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3 ">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-yellow-700"
                    >
                      <span className="">
                        <BadgeCheck className="text-green-50 fill-green-500" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 ">
        <div className="container ">
          <h2 className="text-4xl max-w-5xl mx-auto lg:text-5xl font-bold text-center text-amber-500 mb-12">
            Who We Support
          </h2>

          <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supports.map((support, i) => (
              <div
                key={i}
                className="bg-white border border-yellow-100 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <div className="p-4 rounded-full bg-yellow-100 text-yellow-700 mb-4">
                  <support.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium text-yellow-800">
                  {support.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl max-w-3xl mx-auto  lg:text-5xl font-bold text-amber-400 mb-12 text-center">
            Why Choose Milestone PM for Asset Lifecycle Advisory?
          </h2>

          <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center  bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="  w-full h-[230px] bg-white shadow-inner overflow-hidden">
                  <Image
                    width={400}
                    height={300}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Maximize the Potential of Your Assets"
          desc="Your assets are more than infrastructure, they are strategic investments, operational drivers, and community anchors. Let Milestone PM guide you with actionable insights, intelligent advisory, and long-term planning to unlock their full potential."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
