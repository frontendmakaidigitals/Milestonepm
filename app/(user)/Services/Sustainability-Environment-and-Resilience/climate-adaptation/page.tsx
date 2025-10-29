"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Building2,
  AlertTriangle,
  LineChart,
  Leaf,
  FileText,
  BadgeCheck,
} from "lucide-react";

export default function Page() {
  const capabilities = [
    {
      icon: Building2,
      title: "Resilient Infrastructure Planning",
      desc: "Designing infrastructure systems that withstand extreme climate conditions and ensure long-term operational safety.",
    },
    {
      icon: AlertTriangle,
      title: "Disaster Risk Management",
      desc: "Identifying potential hazards, analyzing vulnerabilities, and developing strategies to reduce risk and enhance preparedness.",
    },
    {
      icon: LineChart,
      title: "Climate Data Modeling",
      desc: "Applying advanced data analytics and predictive tools to forecast climate-related risks and support evidence-based decision-making.",
    },
    {
      icon: Leaf,
      title: "Sustainability Integration",
      desc: "Embedding environmental responsibility, resource efficiency, and circular economy principles into every stage of project delivery.",
    },
    {
      icon: FileText,
      title: "Policy Guidance & Advisory",
      desc: "Supporting organizations and authorities in formulating climate adaptation policies, frameworks, and investment strategies.",
    },
  ];

  const services = [
    {
      title: "Disaster Preparedness Assessment",
      desc: "We evaluate how ready organizations, communities, and cities are to handle climate-related events. Our assessments reveal preparedness gaps and deliver actionable strategies to strengthen response and recovery capabilities.",
      img: "/Environment-Sustainability/climate-adaptation/natural-disaster.webp",
    },
    {
      title: "Climate Hazard Forecasting",
      desc: "Using advanced modeling and data analytics, we estimate the potential impact of floods, storms, and other natural hazards. These forecasts enable proactive planning and reduce operational and financial risks.",
      img: "/Environment-Sustainability/climate-adaptation/Climate Hazard.jpg",
    },
    {
      title: "Vulnerability Mapping",
      desc: "We identify at-risk areas, assets, and populations by analyzing exposure and sensitivity to climate threats. This spatial insight helps prioritize investments in protection, adaptation, and resource allocation.",
      img: "/Environment-Sustainability/climate-adaptation/Vulnerability Mapping.jpg",
    },
    {
      title: "Risk Reduction Planning",
      desc: "Our specialists design data-driven strategies that minimize potential damages before disasters occur. From infrastructure upgrades to emergency protocols, we help ensure quicker recovery and reduced long-term losses.",
      img: "/Environment-Sustainability/climate-adaptation/hazard.webp",
    },
    {
      title: "Operational Continuity Planning",
      desc: "We assist businesses and institutions in developing robust continuity plans to maintain operations during and after disruptions. These plans enhance resilience, ensuring stability and confidence in uncertain conditions.",
      img: "/Environment-Sustainability/climate-adaptation/climate-adaption.webp",
    },
    {
      title: "Long-Term Adaptation Strategies",
      desc: "We develop comprehensive frameworks that help governments and organizations adapt to future climate realities. Our plans integrate sustainability, resilience, and innovation for long-term environmental and economic stability.",
      img: "/Environment-Sustainability/climate-adaptation/climate-adaptions.webp",
    },
    {
      title: "Durable Infrastructure Design",
      desc: "Our engineering teams design infrastructure that can withstand severe climate impacts—from storm-resistant roads to energy-efficient, flood-proof buildings—ensuring safety, performance, and longevity.",
      img: "/Environment-Sustainability/climate-adaptation/infrastructure Design.webp",
    },
  ];

  const benefits = [
    {
      title: "Reduced Exposure",
      desc: "Identify vulnerabilities early and minimize risks to life, assets, and ongoing operations.",
    },
    {
      title: "Future-Ready Growth",
      desc: "Develop organizations and cities that continue to thrive amid changing environmental conditions.",
    },
    {
      title: "Stronger Infrastructure",
      desc: "Design and implement durable systems capable of withstanding extreme climate events and natural hazards.",
    },
    {
      title: "Long-Term Savings",
      desc: "Reduce costly damages and disruptions through early adaptation, smart planning, and preventive action.",
    },
    {
      title: "Global Experience, Local Understanding",
      desc: "Access solutions tailored to local conditions, supported by world-class technical and regional expertise.",
    },
  ];

  const reasons = [
    {
      title: "Proven Expertise",
      desc: "Trusted by clients across sectors for reliable and practical climate adaptation solutions.",
    },
    {
      title: "Comprehensive Reach",
      desc: "Adaptation strategies designed for both urban and rural environments, ensuring inclusive resilience.",
    },
    {
      title: "Advanced Tools",
      desc: "Data-driven modeling and forecasting enable informed, science-based decision-making.",
    },
    {
      title: "Collaborative Process",
      desc: "We partner closely with clients, communities, and regulators to align goals and ensure success.",
    },
    {
      title: "Forward-Thinking Solutions",
      desc: "Strategies designed to address current risks while preparing for future challenges.",
    },
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl text-green-500 lg:text-5xl font-[600]">
              Climate Adaptation
            </h1>
            <p>
              Climate change is no longer a distant concern; it’s a reality
              affecting people, cities, and industries across the globe. From
              heatwaves and heavy rains to rising sea levels and droughts, the
              impacts are growing stronger every year. These changes now cost
              the global economy hundreds of billions of dollars annually.{" "}
              <span className="mt-2" /> At Milestone PM, we provide complete
              climate adaptation services that help governments, developers, and
              businesses build resilience against these challenges. Our team
              combines engineering, environmental planning, and strategic
              expertise to design adaptive systems that protect people, assets,
              and communities for the long term.
            </p>
          </div>
          <div className="w-full h-[300px] lg:h-[400px]  rounded-lg">
            <img
              src={"/sustainability 2/heading.webp"}
              className="w-fulll h-full object-cover"
              alt={"climate adaptation hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-900 text-center">
            Our Capabilities
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-3xl mx-auto">
            We bring together diverse expertise to deliver climate adaptation
            strategies that are practical, scalable, and ready for the future.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <cap.icon className="w-10 h-10 text-green-600 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 ">
        <div className="container ">
          <h2 className="text-4xl max-w-5xl mx-auto lg:text-5xl font-bold text-slate-900 text-center">
            <span className="text-amber-400">Climate</span> Adaptation Services
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-3xl mx-auto">
            Practical, data-driven, and future-ready solutions to build
            resilience against climate risks.
          </p>

          <div className="mt-12 grid max-w-6xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-amber-100/60 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[230px] lg:h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 bg-white">
        <div className=" container">
          <h2 className="text-4xl max-w-3xl mx-auto lg:text-5xl font-bold text-center text-slate-900">
            Benefits of Partnering with{" "}
            <span className="text-amber-400">Milestone PM</span>
          </h2>

          <div className="mt-12 max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-amber-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-[700] text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="py-16 ">
        <div className=" container">
          <h2 className="text-3xl lg:text-5xl max-w-5xl mx-auto font-bold text-center text-slate-900">
            Why Choose <span className="text-amber-400">Milestone PM?</span>
          </h2>

          <div className="mt-12 grid max-w-6xl mx-auto gap-8 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-amber-100/40 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <BadgeCheck className="w-6 h-6 text-green-50 fill-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-[600] text-slate-900">
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
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Plan for Resilience — Protect for the Future"
          desc="At Milestone PM, we help you adapt today to safeguard tomorrow. Our climate adaptation experts design solutions that protect communities, strengthen infrastructure, and ensure sustainable development."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
