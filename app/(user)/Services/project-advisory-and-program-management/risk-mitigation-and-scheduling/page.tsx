"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { BadgeCheck } from "lucide-react";
export default function Page() {
  const points = [
    "Protect vital assets and infrastructure",
    "Reduce operational, financial, and reputational risks",
    "Ensure business continuity and emergency readiness",
    "Align with sustainability, safety, and regulatory standards",
    "Support communities and promote rapid recovery",
  ];

  const items = [
    {
      title: "Asset & Vulnerability Assessment",
      desc: "Identify critical assets and determine where systems are most exposed to risk.",
      img: "/project-advisory/risk-management/assessment.webp",
    },
    {
      title: "Threat Analysis",
      desc: "Assess physical, environmental, operational, and digital risks that could disrupt your operations.",
      img: "/project-advisory/risk-management/Threat.webp",
    },
    {
      title: "Resilience Planning",
      desc: "Develop strategies to maintain operations and restore functionality quickly after any disruption.",
      img: "/project-advisory/risk-management/Resilience.webp",
    },
    {
      title: "Impact & Cost-Benefit Analysis",
      desc: "Evaluate the value of mitigation measures to support informed investment and resource allocation.",
      img: "/project-advisory/risk-management/Cost-Benefit.webp",
    },
    {
      title: "Integrated Systems Approach",
      desc: "Incorporate resilience measures across infrastructure, human, social, and economic systems.",
      img: "/project-advisory/risk-management/holistic.webp",
    },
  ];

  const services = [
    {
      title: "Critical Infrastructure Safeguarding",
      desc: "Protect essential systems — transportation, utilities, energy, and healthcare — from disruptions.",
      img: "/project-advisory/risk-management/critical-infra.jpg",
    },
    {
      title: "Climate Resilience & Adaptation",
      desc: "Design infrastructure that withstands floods, heatwaves, and other climate-related risks.",
      img: "/project-advisory/risk-management/Climate Change.webp",
    },
    {
      title: "Cyber & Operational Security",
      desc: "Secure networks, data, and control systems from cyber and operational threats.",
      img: "/project-advisory/risk-management/Cybersecurity.webp",
    },
    {
      title: "Disaster Risk Reduction & Hazard Planning",
      desc: "Identify vulnerable areas and develop mitigation plans to minimize damage and disruption.",
      img: "/project-advisory/risk-management/Disaster Risk.webp",
    },
    {
      title: "Post-Crisis Recovery & Support",
      desc: "Provide rapid assessments, engineering assistance, and operational recovery after incidents.",
      img: "/project-advisory/risk-management/Resilience.webp",
    },
    {
      title: "Physical Security & Facility Hardening",
      desc: "Reinforce critical assets to resist physical damage and unauthorized access.",
      img: "/project-advisory/risk-management/Security.webp",
    },
    {
      title: "Emergency Preparedness & Training",
      desc: "Develop response strategies and conduct training to ensure readiness during emergencies.",
      img: "/project-advisory/risk-management/training.jpeg",
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Risk Mitigation & Scheduling
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/project-advisory/risk-management/hero.jpg"}
          className="w-full h-full object-cover"
          alt={"hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, we help organizations, developers, and public
          authorities prepare for uncertainty and protect what matters most. Our
          risk mitigation and resilience services are designed to safeguard
          assets, maintain operations, and support long-term growth in a rapidly
          changing environment.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          From natural hazards and infrastructure vulnerabilities to operational
          and digital threats, we help clients identify risks and implement
          practical strategies that improve safety, continuity, and performance.
          Whether it’s protecting critical systems or strengthening overall
          resilience, our goal is to ensure your projects and assets are
          future-ready.
        </p>
      </section>{" "}
      <section className="py-20 bg-amber-100/20 mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6">
            Why <span className="text-amber-400">Risk Mitigation</span> Matters
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Proactive risk management today prevents major losses tomorrow. With
            rising challenges from climate change, cybersecurity, operational
            disruptions, and unforeseen events, it’s essential to:
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex bg-amber-100 p-3 rounded-lg items-start gap-3"
              >
                <BadgeCheck className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
            Our <span className="text-yellow-500">Approach</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Milestone PM’s approach combines global best practices, real-time
            data, and local insights to deliver actionable risk solutions. Our
            methodology includes:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
            Key Services
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide specialized solutions to strengthen resilience and
            safeguard communities, organizations, and critical systems.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-red-500">Post-Event</span> Recovery
            </h2>
            <p className="text-gray-700 mb-6">
              When crises occur, Milestone PM offers immediate on-site support
              to evaluate damage, restore operations, and guide long-term
              recovery. Our teams have experience managing risks and recovery
              for:
            </p>

            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Floods, storms, and extreme weather events
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Earthquakes and wildfires
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Infrastructure failures or system outages
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">
                  <BadgeCheck className="text-white fill-green-500" />
                </span>{" "}
                Security incidents and civil disturbances
              </li>
            </ul>

            <p className="text-gray-700">
              Our multidisciplinary experts deliver engineering, environmental,
              operational, and reconstruction services to help organizations
              recover quickly and strengthen resilience against future risks.
            </p>
          </div>

          {/* Image */}
          <div className="relative bg-orange-100 w-full h-[270px] lg:h-[430px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/project-advisory/risk-management/Disaster Risk.webp"
              alt="Post-Disaster Response"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Enhance Your Resilience with Milestone PM"
          desc="With our risk mitigation and scheduling services, you can safeguard assets, ensure operational continuity, and plan for the unexpected."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
