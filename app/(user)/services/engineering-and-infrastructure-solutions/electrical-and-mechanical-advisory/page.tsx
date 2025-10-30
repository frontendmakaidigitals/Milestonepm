"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Wrench,
  Award,
  Leaf,
  BadgeCheck,
} from "lucide-react";

export default function Page() {
  const markets = [
    {
      image: "/Engineering-Infrastructure/Engineering/electrical.webp",
      title: "Infrastructure and Utilities",
      desc: "Milestone PM supports key infrastructure projects across the UAE, ensuring reliable power distribution, system resilience, and energy efficiency.",
      points: [
        "Power Transmission and Distribution Systems",
        "Pumping Stations and Treatment Facilities",
        "Street Lighting and Intelligent Control Systems",
        "SCADA Integration and Monitoring",
      ],
    },
    {
      image: "/Engineering-Infrastructure/Engineering/structure.webp",
      title: "Commercial and Residential Developments",
      desc: "From modern high-rises to large villa communities, our E&M team designs and manages systems that improve comfort, safety, and energy performance.",
      points: [
        "HVAC and Ventilation Systems",
        "Electrical Fit-Outs and Panel Design",
        "Water Supply and Drainage Systems",
        "Smart Building Automation",
      ],
    },
    {
      image: "/Engineering-Infrastructure/Engineering/Manufacturing.jpg",
      title: "Industrial and Manufacturing Facilities",
      desc: "We provide engineering support and advisory for heavy-duty and process-driven facilities requiring robust, efficient, and compliant systems.",
      points: [
        "Industrial Electrical Installations",
        "Compressed Air and Steam Systems",
        "Process Cooling and Ventilation",
        "Safety and Power Backup Systems",
      ],
    },
  ];

  const features = [
    {
      title: "Integrated Expertise",
      description:
        "Our engineers and advisors work across electrical, mechanical, and civil disciplines to deliver coordinated and cost-effective solutions.",
      icon: Wrench,
    },
    {
      title: "Local Knowledge, Global Standards",
      description:
        "With experience in the UAE, Saudi Arabia, India, and Egypt, we ensure every project meets both regional regulations and international benchmarks.",
      icon: Globe,
    },
    {
      title: "Safety and Quality Focus",
      description:
        "We maintain strict safety protocols and quality control across all E&M systems.",
      icon: ShieldCheck,
    },
    {
      title: "Sustainability-Driven Design",
      description:
        "Our solutions prioritize energy efficiency, system longevity, and reduced carbon footprint.",
      icon: Leaf,
    },
    {
      title: "Proven Delivery Record",
      description:
        "Trusted by developers, contractors, and consultants for high-performance E&M project execution.",
      icon: Award,
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Electrical & Mechanical Advisory
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/Engineering-Infrastructure/SCII/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone Project Management, we deliver end-to-end Electrical and
          Mechanical (E&M) Advisory services designed for complex infrastructure
          and building projects across the UAE and the wider region. Our team
          combines technical excellence, safety-driven execution, and advanced
          engineering practices to ensure every system performs reliably and
          efficiently, today and for years to come. With experience spanning
          residential developments, industrial facilities, transportation
          systems, and utilities, Milestone PM provides complete E&M advisory,
          from concept and design to installation and commissioning. We ensure
          every electrical and mechanical component is built to the highest
          international standards.
        </p>
      </section>
      <section className="my-20">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl lg:text-4xl text-center lg:text-start font-semibold">
              What We <span className="text-yellow-500">Do</span>
            </h1>
            <p className="mt-3 text-lg text-center lg:text-start">
              We offer comprehensive <strong>E&M consulting</strong> and project
              management services, supporting clients through every phase, from
              design coordination to implementation and maintenance. Our focus
              is on integrating electrical and mechanical systems that are safe,
              energy-efficient, and built for long-term reliability.
            </p>
          </div>
          <div className="h-[400px] w-full ">
            <img
              src={"/Engineering-Infrastructure/SCII/about.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className=" py-20">
        <div className="text-center container mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            <span className="text-yellow-500">Markets</span> We Serve
          </motion.h2>
          <p className="text-gray-600">
            Empowering infrastructure across transportation and utility sectors.
          </p>
        </div>

        <div className="space-y-16 container">
          {markets.map((item, index) => {
            const isEven = index % 2 === 0; // 0-based index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 rounded-2xl text-black"
              >
                {/* Image column */}
                <div
                  className={`h-[380px] bg-slate-100 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text column */}
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <h3 className="text-3xl text-[#B59410] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/90 mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span>
                          <BadgeCheck className="w-5 h-5 fill-green-500 text-white" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-amber-50/40 py-16">
        <div className="container px-6">
          <h2 className="text-4xl mx-auto max-w-4xl lg:text-5xl font-bold text-center text-yellow-500 mb-12">
            Why Choose{" "}
            <span className="text">Milestone Project Management?</span>
          </h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-amber-100/30 rounded-2xl p-6 shadow-md border border-yellow-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-200 text-yellow-800 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <EngineeringCTA
        title="Powering Progress with Precision"
        desc="Whether it’s a mixed-use development, a utility facility, or an infrastructure corridor, Milestone Project Management ensures every electrical and mechanical system operates efficiently. We combine innovation, reliability, and technical mastery to help our clients build smarter, safer, and more sustainable projects."
        btn="Contact Us Today"
      />
    </main>
  );
}
