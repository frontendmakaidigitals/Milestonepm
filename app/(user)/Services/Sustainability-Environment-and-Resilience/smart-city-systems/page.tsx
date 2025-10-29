"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { ShieldCheck, Users, Cpu, Lock, Award } from "lucide-react";
import Image from "next/image";
export default function Page() {
  const capabilities = [
    {
      title: "Urban Connectivity & Communication Networks",
      points: [
        "Fiber and Data Networks: Reliable, high-speed infrastructure for seamless citywide connectivity.",
        "Smart Mobility Systems: Traffic sensors, digital transport management, and real-time monitoring solutions.",
        "Public Wi-Fi & Hotspots: Connectivity for business districts, residential zones, and community areas.",
        "Integrated ICT Platforms: Unified data systems for efficient communication and interoperability.",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/urban-connectivity.webp",
    },
    {
      title: "Smart Building Systems",
      points: [
        "Automated Facilities: Intelligent lighting, HVAC, and access systems for efficient energy use.",
        "Integrated Operations: IoT-enabled control systems for improved building performance and comfort.",
        "Energy Optimization: Real-time analytics to monitor and manage resource consumption.",
        "Digital Twin Models: Virtual building replicas for predictive maintenance and optimization.",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/smart-buildings.webp",
    },
    {
      title: "Safety, Security & Monitoring",
      points: [
        "City Surveillance Systems: Smart cameras, analytics, and motion detection for safer communities.",
        "Access Management: Biometric and smart card systems for controlled access zones.",
        "Emergency Control Centers: Real-time coordination for effective crisis response.",
        "Cyber Protection: Safeguarding networks, systems, and data from digital threats.",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/safety-security.webp",
    },
    {
      title: "Smart Mobility & Transportation",
      points: [
        "Intelligent Traffic Control: AI-based flow optimization and congestion management systems.",
        "Public Transport Integration: Digital ticketing, GPS tracking, and real-time route analytics.",
        "EV Infrastructure: Planning and rollout of electric vehicle charging networks.",
        "Smart Parking: Automated management systems with live availability updates.",
      ],
      image:
        "/Transportation-mobility/smart-infrastructure/smart-mobility.webp",
    },
    {
      title: "Data Management & Digital Services",
      points: [
        "Cloud-Based Platforms: Scalable systems for data storage, integration, and analytics.",
        "IoT Integration: Connecting devices and infrastructure for real-time data exchange.",
        "AI-Driven Insights: Transforming raw data into actionable intelligence for city planning.",
        "Smart Dashboards: Centralized platforms for utility, energy, and operations monitoring.",
      ],
      image: "/Transportation-mobility/smart-infrastructure/data-services.webp",
    },
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Complete Lifecycle Solutions",
      desc: "From planning and design to implementation and digital operation, ensuring seamless project execution.",
    },
    {
      icon: Users,
      title: "Cross-Disciplinary Expertise",
      desc: "Combining engineers, IT specialists, and smart city strategists for integrated, holistic outcomes.",
    },
    {
      icon: Cpu,
      title: "Adaptive Systems",
      desc: "Scalable frameworks designed to evolve with emerging technologies and future city needs.",
    },
    {
      icon: Lock,
      title: "Resilience by Design",
      desc: "Built-in safety, cybersecurity, and operational reliability at every stage of the system lifecycle.",
    },
    {
      icon: Award,
      title: "Proven Results",
      desc: "Successfully delivering connected urban systems and smart infrastructure projects across the region.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-semibold">
              Digital Infrastructure & Smart City Systems
            </h1>
            <p>
              At Milestone PM, we plan, design, and deliver intelligent digital
              infrastructure that powers the cities of tomorrow. Our goal is to
              create smart, efficient, and sustainable environments that enhance
              connectivity, improve quality of life, and support long-term urban
              growth. <span className="block mt-2" /> From high-speed
              communication systems and integrated data platforms to automated
              buildings and urban control centers, we provide complete digital
              solutions that connect people, places, and technology. Our
              experienced professionals work with government bodies, developers,
              and private enterprises to design and implement scalable digital
              ecosystems that support mobility, safety, energy efficiency, and
              innovation.
            </p>
          </div>
          <div className="w-full h-[450px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/smart-infrastructure/hero.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Our Smart Infrastructure Capabilities
        </h2>
        <p className="mt-3 text-slate-600">
          We bring together digital engineering, urban planning, and data
          technology to deliver integrated systems that keep cities running
          smarter and smoother.
        </p>

        <div className="space-y-24 container">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">
                  {cap.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  {cap.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 mx-auto max-w-4xl">
            Why Choose Milestone PM for Smart City Infrastructure?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Shaping Smarter Cities for the Future"
        desc="Aligned with the UAE’s vision for sustainable and connected development, Milestone PM’s Digital Infrastructure & Smart City Systems are helping build modern environments where data, design, and technology come together to improve daily life and long-term efficiency."
        btn="Start Your Smart City Journey with Us"
      />
    </main>
  );
}
