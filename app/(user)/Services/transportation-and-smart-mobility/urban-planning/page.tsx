"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Lightbulb, Layers, Globe2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
export default function Page() {
  const items = [
    {
      title: "Mobility & Movement Analysis",
      desc: "Understanding how people and goods move is the cornerstone of effective urban planning. Our team gathers and analyzes real-world travel and transport data to guide smarter, more efficient decisions.",
      points: [
        "Track commuting patterns and peak demand shifts.",
        "Evaluate micro-mobility adoption, walking, and cycling trends.",
        "Optimize freight and delivery routes to reduce congestion.",
      ],
      image: "/Transportation-mobility/urban-mobility/shared-mobility.webp",
    },
    {
      title: "Technology-Enabled Infrastructure",
      desc: "New technologies are reshaping urban mobility. We help clients design and implement infrastructure that is ready for the future of connected, autonomous, and electric transport.",
      points: [
        "Plan EV charging networks for future-ready cities.",
        "Integrate smart traffic management systems to improve flow.",
        "Develop infrastructure for autonomous and connected transport.",
      ],
      image: "/Transportation-mobility/urban-mobility/tech-integeration.webp",
    },
    {
      title: "Shared & Sustainable Mobility Solutions",
      desc: "We design mobility systems that prioritize accessibility, sustainability, and convenience — creating cleaner and more efficient travel options for urban residents.",
      points: [
        "Establish bike-sharing, e-bike, and scooter networks for short trips.",
        "Develop car-sharing systems to reduce single-occupancy vehicles.",
        "Create safe and connected micro-mobility hubs in high-demand areas.",
      ],
      image: "/Transportation-mobility/urban-mobility/travel-pattern.webp",
    },
    {
      title: "Urban Freight & Logistics Planning",
      desc: "The rise of e-commerce has increased urban freight activity. We deliver logistics strategies that balance economic growth with urban livability and sustainability.",
      points: [
        "Design last-mile delivery hubs to minimize inner-city truck traffic.",
        "Develop optimized delivery schedules to improve efficiency.",
        "Support adoption of low-emission and electric freight vehicles.",
      ],
      image: "/Transportation-mobility/urban-mobility/freight-planning.webp",
    },
    {
      title: "Green & Climate-Conscious Planning",
      desc: "Sustainable urban mobility lies at the heart of livable cities. We integrate eco-friendly strategies that reduce emissions, enhance connectivity, and promote community well-being.",
      points: [
        "Implement low-carbon public transport systems.",
        "Design pedestrian-friendly streets and public spaces.",
        "Create safe, connected cycling networks.",
        "Reduce dependency on private vehicles through multimodal planning.",
      ],
      image: "/Transportation-mobility/city-analytics/Emissions Planning.webp",
    },
    {
      title: "Scenario-Based Planning & Forecasting",
      desc: "Using advanced modeling tools, we simulate future urban conditions to support resilient, data-driven mobility and infrastructure investments.",
      points: [
        "Test policy changes and assess their impact on mobility.",
        "Evaluate infrastructure resilience under various growth scenarios.",
        "Compare investment options before committing resources.",
      ],
      image: "/Transportation-mobility/pedestrian-flow-analysis/hero.webp",
    },
  ];

  const reasons = [
    {
      title: "Future-Focused Expertise",
      desc: "Anticipating change before it impacts your city.",
      icon: <Lightbulb className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Integrated Approach",
      desc: "Combining urban design, transportation, engineering, and sustainability for holistic outcomes.",
      icon: <Layers className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Local Insight, Global Standards",
      desc: "Delivering tailored solutions rooted in local context while aligning with international best practices.",
      icon: <Globe2 className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Proven Success",
      desc: "A trusted record of delivering impactful urban strategies with public and private sector partners.",
      icon: <CheckCircle2 className="w-10 h-10 text-emerald-600" />,
    },
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Urban Planning
            </h1>
            <p className=" mt-2 ">
              Cities are evolving faster than ever. From changing work patterns
              and urban growth to sustainability demands and smart mobility, the
              way people live, work, and move is transforming. At Milestone PM,
              we help governments, developers, and private clients plan cities
              that are adaptable, efficient, and people-focused. Our approach
              goes beyond today&apos;s needs to anticipate future trends and
              technological shifts.
            </p>
          </div>
          <div className="w-full h-[450px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Transportation-mobility/urban-mobility/Sustainable-planning.webp"
              }
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className=" py-16 ">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-600">Scope of Work</span>
        </h2>
        <div className="space-y-20">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <Image
                  width={400}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 ">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-yellow-500">Milestone PM</span> for{" "}
          <span className="text-blue-500">Urban Planning?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className=" gap-4 p-6  rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Shaping Smarter Cities Together"
        desc="Whether your objective is reducing congestion, creating walkable neighborhoods, or preparing for autonomous and sustainable transport, Milestone PM provides practical, innovative solutions that meet today’s challenges while preparing for tomorrow."
        btn="Get in Touch Today"
      />
    </main>
  );
}
