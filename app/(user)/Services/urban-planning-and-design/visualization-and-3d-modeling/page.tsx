"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Layers,
  Globe2,
  Zap,
  BadgeCheck,
} from "lucide-react";
export default function Page() {
  const services = [
    {
      title: "High-Definition 3D Modeling",
      desc: "We build detailed digital models that capture form, texture, and proportions. These serve as the foundation for design validation, technical coordination, and stakeholder visualization.",
      img: "/urban-planning/visualization/Virtual Reality.webp",
    },
    {
      title: "Architectural Rendering",
      desc: "Our lifelike 3D renders showcase projects in realistic lighting and material contexts, perfect for client presentations, marketing, and investor approvals.",
      img: "/urban-planning/visualization/augumented.webp",
    },
    {
      title: "Virtual Walkthroughs",
      desc: "Step inside your project before construction begins. Our interactive tours allow clients to explore spatial layouts and experience real-time design flow.",
      img: "/urban-planning/visualization/animations.webp",
    },
    {
      title: "Animated Flythroughs",
      desc: "Cinematic motion visuals that take viewers on a guided journey through your project, ideal for launches, marketing, and stakeholder engagement.",
      img: "/urban-planning/visualization/Visualization.webp",
    },
    {
      title: "Real-World Integration",
      desc: "We blend proposed developments with real photography or drone footage to evaluate scale, placement, and environmental harmony with unmatched precision.",
      img: "/urban-planning/visualization/Photomontages.webp",
    },
  ];

  const points = [
    "Design Concept Presentations",
    "Planning Submissions and Authority Approvals",
    "Public Engagement and Investor Showcases",
    "Sales and Marketing Visuals",
    "Technical Coordination and Design Verification",
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast & Flexible Delivery",
    },
    {
      icon: Globe2,
      title: "Global Perspective, Local Insight",
    },
    {
      icon: Users,
      title: "Client-Focused Collaboration",
    },
    {
      icon: CheckCircle,
      title: "Proven Impact",
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl  md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Visualization & 3D Modeling
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/urban-planning/visualization/3d.jpg"}
          className="w-full h-full object-cover object-top"
          alt={"hero"}
          width={1200}
          height={700}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, we turn imagination into reality through advanced
          visualization and 3D modeling solutions. Our work bridges the gap
          between concept and construction, allowing clients to explore and
          refine their projects before a single brick is laid. With realistic 3D
          imagery and immersive digital environments, we help developers,
          architects, and stakeholders see the future of their designs, clearly,
          accurately, and in detail. These visual tools bring better
          communication, faster decisions, and stronger project confidence at
          every stage.
        </p>
      </section>

      <section className="py-16 ">
        <div className=" container ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            What <span className="text-yellow-500">We Offer</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className=" rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Supporting Every Stage of Development
            </h2>
            <p className="text-gray-600">
              Our 3D visualization and modeling services add value throughout
              the entire project lifecycle, from concept design to construction
              documentation and promotion.
            </p>

            <ul className="space-y-3">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className=" text-lg">
                    <BadgeCheck className="text-white fill-green-500" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[230px] lg:h-[420px]  rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={"/urban-planning/visualization/about2.webp"}
              alt="Visualization Communication"
              fill
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-10">
            Why Choose{" "}
            <span className="text-yellow-500">
              Milestone Project Management
            </span>
            ?
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start p-6  rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-600/10 flex items-center justify-center text-yellow-600 mr-4">
                  <item.icon size={24} />
                </div>
                <p className="text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Experience the Power of Visualization"
          desc="Whether you need a simple render or a full 3D virtual journey, Milestone PM helps you bring your design ideas to life,  visually, accurately, and creatively. Let’s make your vision real before it’s built."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
