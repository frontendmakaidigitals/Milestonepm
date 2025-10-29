"use client";

import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Landmark,
  TreeDeciduous,
  TrainFront,
  Building,
  Users,
  Sparkle,
  Leaf,
  Brain,
  CloudSun,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const services = [
    {
      title: "Strategic City Frameworks",
      desc: "We develop long-term urban frameworks that balance growth, infrastructure, housing, and environmental priorities — guiding sustainable and organized city expansion.",
      icon: Landmark,
    },
    {
      title: "Community & District Planning",
      desc: "Designing connected, inclusive communities with accessible housing, public spaces, and essential amenities that foster livability, safety, and belonging.",
      icon: Users,
    },
    {
      title: "Mobility & Transport Planning",
      desc: "Integrating efficient transport systems, pedestrian pathways, and cycling networks to enhance connectivity, reduce congestion, and improve urban air quality.",
      icon: TrainFront,
    },
    {
      title: "Urban Renewal & Regeneration",
      desc: "Revitalizing outdated or underutilized districts with mixed-use developments that attract investment, support local economies, and preserve cultural identity.",
      icon: Building,
    },
    {
      title: "Landscape & Public Space Design",
      desc: "Creating green corridors, plazas, and recreational spaces that promote social interaction, health, and overall urban wellbeing.",
      icon: TreeDeciduous,
    },
  ];

  const capabilities = [
    {
      title: "Urban Policies & Planning Guidelines",
      desc: "We develop planning frameworks and regulatory guidelines that help public and private sectors deliver consistent, high-quality urban developments.",
      icon: <Sparkle className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Green Infrastructure Solutions",
      desc: "Our designs integrate sustainable systems like smart irrigation, energy-efficient lighting, and eco-friendly drainage to reduce environmental impact.",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Smart & Digital Planning Tools",
      desc: "Leveraging GIS mapping, digital models, and data analytics, we enable informed and efficient decision-making throughout every stage of the planning process.",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Resilient & Adaptive Design",
      desc: "We plan cities that are future-ready — adaptable to growth, climate change, and evolving economic conditions through flexible, resilient layouts.",
      icon: <CloudSun className="w-8 h-8 text-yellow-600" />,
    },
  ];

  const reasons = [
    {
      title: "Collaborative Expertise",
      desc: "We unite planners, engineers, designers, and sustainability specialists to deliver integrated, well-coordinated urban solutions.",
      img: "/urban-planning/urban-design/Collaborative-Expertise.webp",
    },
    {
      title: "Locally Informed",
      desc: "Our projects reflect the UAE’s culture, climate, and long-term vision for smart, sustainable development.",
      img: "/urban-planning/urban-design/Locally-Informed.webp",
    },
    {
      title: "Future-Focused",
      desc: "Every plan is designed with economic, environmental, and social resilience in mind — ensuring lasting value for generations.",
      img: "/urban-planning/urban-design/Future-Focused.webp",
    },
    {
      title: "Community-Driven",
      desc: "We create people-centered spaces that promote inclusivity, cultural identity, and a strong sense of belonging.",
      img: "/urban-planning/urban-design/Community-Driven.webp",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Urban Planning
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/urban-planning/urban-design/hero.webp"}
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1200}
          height={900}
        />
      </section>
      <section className="mt-10">
        <div className="grid container place-items-center grid-cols-1 lg:grid-cols-2 gap-9">
          <div>
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Designing Sustainable Cities for People and the Planet
            </h1>
            <p className="mt-4 text-lg">
              At Milestone Project Management, we understand that successful
              cities don’t happen by chance; they are the result of smart,
              inclusive, and well-designed planning. Our Urban Planning team
              brings together experts in design, infrastructure, mobility, and
              sustainability to create places where people can live, work, and
              thrive. We design human-centric, sustainable environments that
              connect communities, improve accessibility, and enhance quality of
              life. From regional frameworks to community-scale layouts, our
              work turns urban spaces into balanced, attractive, and functional
              destinations that serve both people and the planet.
            </p>
          </div>
          <div className="w-full h-[450px] rounded-lg">
            <Image
              width={500}
              height={500}
              src={"/urban-planning/urban-design/about.webp"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Our <span className="text-green-500">Urban Planning</span>{" "}
              Services
            </h2>
            <p className="text-gray-600 text-lg">
              Building vibrant, inclusive, and forward-looking cities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Our Capabilities
          </h2>
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 80 }}
                className="bg-gray-100 rounded-2xl p-8 text-left shadow-md"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4">
        <div className=" container text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why <span className="text-yellow-500">Choose</span> Milestone
            Project Management for{" "}
            <span className="text-green-500">Urban Design</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Combining Saudi values with modern innovation to deliver sustainable
            and people-centric urban solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition duration-300"
            >
              <div className="w-full h-52 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-3 text-left">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Partner With Us to Shape Tomorrow’s Cities"
        desc="From strategy to design and delivery, Milestone Project Management partners with governments, developers, and investors to turn city visions into reality. Let’s work together to create smarter, greener, and more connected urban environments that define the future of modern living."
        btn="Contact Us Today"
      />
    </main>
  );
}
