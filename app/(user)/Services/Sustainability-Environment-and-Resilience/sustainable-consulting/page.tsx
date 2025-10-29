"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { BadgeCheck } from "lucide-react";
export default function Page() {
  const services = [
    {
      title: "Business Growth & Operational Strategy",
      desc: "We help organizations redesign their operating models to enhance efficiency, drive innovation, and achieve sustainable growth. Our experts assess current systems, identify opportunities, and create clear transformation roadmaps.",
      points: [
        "Business process review and optimization",
        "Strategic planning and forecasting",
        "Technology and automation integration",
        "Performance monitoring and KPI development",
        "Innovation strategy and market positioning",
      ],
      img: "/project-advisory/strategic-consulting/business-growth.webp", // business meeting or growth strategy
    },
    {
      title: "Organizational Change & Leadership Development",
      desc: "Every successful transformation begins with people. We collaborate with leadership teams to align goals, improve communication, and build strong organizational cultures that embrace change and performance improvement.",
      points: [
        "Employee engagement and change readiness assessments",
        "Leadership coaching and communication planning",
        "Organizational culture and structure alignment",
        "Team development and performance improvement",
        "Continuous support during implementation phases",
      ],
      img: "/project-advisory/strategic-consulting/leadership-development.webp", // leadership or teamwork
    },
    {
      title: "Spatial & Infrastructure Strategy",
      desc: "We connect business strategy with the built environment, helping organizations plan physical and digital spaces that reflect goals, boost efficiency, and enable future growth.",
      points: [
        "Workplace and facility planning",
        "Location and site selection analysis",
        "Real estate and asset optimization",
        "Infrastructure and resource planning",
        "Space utilization and operational mapping",
      ],
      img: "/project-advisory/strategic-consulting/spatial-strategy.webp", // city planning or infrastructure
    },
  ];

  const team = [
    "Business consultants and planners",
    "Architects and infrastructure experts",
    "Organizational behavior specialists",
    "Data analysts and digital transformation professionals",
  ];

  const reasons = [
    {
      title: "Holistic Approach",
      desc: "We connect strategy, design, and delivery to create complete, end-to-end solutions that drive lasting impact.",
    },
    {
      title: "Insight-Based Decisions",
      desc: "Every recommendation is backed by data, research, and measurable outcomes to ensure clarity and confidence in every step.",
    },
    {
      title: "Collaborative Method",
      desc: "We work side-by-side with your team to co-create strategies that align with your organizational goals and core values.",
    },
    {
      title: "Cross-Industry Experience",
      desc: "Our consultants bring expertise across real estate, infrastructure, and public development, ensuring well-rounded strategies.",
    },
    {
      title: "Results-Focused Mindset",
      desc: "We prioritize outcomes — improved operations, stronger teams, and measurable performance growth.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Sustainable Consulting
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/project-advisory/strategic-consulting/design-led.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, our Strategic Consulting services help organizations
          turn vision into action. We guide clients through complex business
          challenges, organizational changes, and development goals by
          connecting strategy, innovation, and real-world execution.{" "}
          <span className="mt-2 block" /> Our approach blends business insight,
          creative thinking, and data-driven analysis to help both public and
          private sector clients make confident decisions, improve performance,
          and prepare for the future. We focus on creating strategies that are
          practical, people-centered, and designed for long-term success.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-full w-full">
            <img
              src="/project-advisory/strategic-consulting/design-led.webp" // 🔹 Replace with your actual image
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business-Driven Transformation
            </h2>

            <p className="text-gray-700 mb-6">
              At Milestone PM, we believe true transformation begins with a
              clear strategy and measurable outcomes. Our team combines
              strategic analysis, digital expertise, and organizational
              understanding to build frameworks that work in real environments.
            </p>
            <p className="mt-2 text-slate-700">Our diverse team includes:</p>

            <ul className="space-y-4 mb-6">
              {team.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white mt-1">
                    <BadgeCheck className="fill-green-500" />
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700">
              This wide range of knowledge allows us to deliver forward-thinking
              strategies that connect business goals with sustainable growth and
              innovation.
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Strategic Consulting Services
          </h2>
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-10 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-1">
                          <BadgeCheck className="fill-green-500" />
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Why Choose Milestone PM?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Shape Your Future with Milestone PM"
        desc="Whether you are developing a new strategy, improving your operations, or planning long-term growth, Milestone PM helps you move from ideas to results. Our Strategic Consulting experts work with you to bring clarity, innovation, and value to every stage of your business journey."
        btn="Contact Us Today"
      />
    </main>
  );
}
