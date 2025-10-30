"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";

import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";
export default function Page() {
  const phases = [
    {
      title: "Site Study & Data Analysis",
      desc: "We begin with comprehensive research on land use, demographics, mobility, environmental factors, and community needs — establishing a solid foundation for smart, data-informed planning decisions.",
      step: "01",
      gradient: "bg-gradient-to-tr from-[#fce2db] via-[#f1c6d3] to-[#e4a3d4]",
    },
    {
      title: "Vision Development & Concept Design",
      desc: "In collaboration with stakeholders, we define a unified vision for the community and translate it into practical spatial layouts, design concepts, and guiding frameworks.",
      step: "02",
      gradient: "bg-gradient-to-br from-[#f4f5db] to-[#d9dab0]",
    },
    {
      title: "Detailed Masterplan & Design Guidelines",
      desc: "We craft the overall masterplan, including zoning strategies, street networks, green spaces, and infrastructure layouts, ensuring functionality, comfort, and long-term sustainability.",
      step: "03",
      gradient: "bg-gradient-to-b from-[#dfdfde] to-[#f7f5f2]",
    },
    {
      title: "Implementation & Phasing Strategy",
      desc: "Our plans include clear execution steps, governance policies, and phased development timelines to ensure structured, efficient, and sustainable project delivery.",
      step: "04",
      gradient: "bg-gradient-to-tr from-[#f4cca4] to-[#d99879]",
    },
  ];

  const offerings = [
    {
      title: "Comprehensive Masterplans",
      desc: "Complete land-use frameworks that define how space will be organized, used, and developed over time.",
      img: "/urban-planning/community-engagement/innovative-engagement.webp",
    },
    {
      title: "Human-Centric Design",
      desc: "Layouts that promote walkability, community engagement, and inclusive access for all residents.",
      img: "/urban-planning/city-planning/Green Urbanism.webp",
    },
    {
      title: "Regulatory & Planning Compliance",
      desc: "We align all plans with local planning laws, sustainability codes, and infrastructure requirements.",
      img: "/urban-planning/planning-and-advisory/Policy.webp",
    },
    {
      title: "Green & Open Space Integration",
      desc: "Incorporating parks, shaded walkways, and public gathering areas to enhance livability and health.",
      img: "/urban-planning/planning-and-advisory/community.webp",
    },
    {
      title: "Mobility & Transport Frameworks",
      desc: "Designing efficient road layouts, public transit links, and cycling networks to ensure seamless connectivity.",
      img: "/urban-planning/community-planning/hero.webp",
    },
    {
      title: "Social & Economic Growth Strategies",
      desc: "Encouraging balanced growth that supports businesses, housing, and quality of life across all groups.",
      img: "/urban-planning/visualization/about1.webp",
    },
  ];

  const sustainablePoints = [
    "Smart water and energy management",
    "Green mobility systems",
    "Low-carbon infrastructure",
    "Biodiversity and landscape conservation",
    "Culturally sensitive design approaches",
  ];

  const experienceAreas = [
    "Mixed-use and residential districts",
    "Community redevelopments",
    "Industrial and logistics zones",
    "Tourism and waterfront developments",
    "Smart and sustainable neighborhood plans",
  ];

  const points = [
    "Deep understanding of the UAE’s planning laws and design standards",
    "Team of planners, engineers, architects, and sustainability experts",
    "Focus on livability, innovation, and social well-being",
    "Experience in both new and existing community developments",
    "Strong commitment to quality and client satisfaction",
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Community Design
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={
            "/Transportation-mobility/pedestrian-movement/Pedestrian Volume.webp"
          }
          className="w-full h-full object-cover object-bottom"
          alt={""}
          width={1100}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone Project Management, we believe that great communities
          don’t just grow; they are carefully planned and designed to bring
          people together. Our Community Design services focus on creating
          vibrant, functional, and sustainable neighborhoods that balance modern
          development with human needs and cultural values. From new residential
          developments to mixed-use districts and community redevelopments, we
          help shape spaces where people can live, work, and connect in
          meaningful ways.
        </p>{" "}
      </section>
      <section className=" py-20 px-4">
        <div className="container text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our <span className="text-yellow-500">Design Framework</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We follow a clear, step-by-step process that helps clients move
            smoothly from vision to implementation:
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-7">
          {phases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 text-white shadow-xl ${item.gradient}`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-black/60 shrink-0 mb-4">
                {item.step}
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="container ">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">
            What We <span className="text-yellow-500">Deliver</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-[330px] w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition duration-300" />
                <div className="absolute bottom-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-[700] mb-6 bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Community Engagement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            We believe successful communities are built with people, not just
            for them. Milestone PM ensures public participation through
            meetings, workshops, and digital platforms where stakeholders can
            share feedback. This transparent approach helps create designs that
            truly reflect local identity, culture, and long-term aspirations.
          </motion.p>
        </div>
      </section>

      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Sustainable Communities */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-amber-600">
                Building Resilient & Green Communities
              </h2>
              <p className="mb-6 text-gray-700">
                Every community we design aims to balance growth with
                sustainability. Our strategies include:
              </p>
              <ul className="space-y-3 text-gray-800">
                {sustainablePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className=" mt-1">
                      <BadgeCheck className="text-white fill-green-500" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500">
                We align our work with international sustainability standards
                such as LEED for Neighborhood Development and the UAE’s green
                building frameworks to ensure long-term environmental
                responsibility.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-slate-100 overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={
                  "/urban-planning/community-planning/Resilient Communities.webp"
                }
                alt="Sustainable Community"
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Experience Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/urban-planning/community-planning/private-sector.webp"}
                alt="Urban Development Experience"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-amber-600">
                Our Experience
              </h2>
              <p className="mb-6 text-gray-700">
                We have successfully contributed to projects across:
              </p>
              <ul className="space-y-3 text-gray-800">
                {experienceAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className=" mt-1">
                      <BadgeCheck className="text-white fill-green-500" />
                    </span>
                    <span className="">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className=" py-20 ">
        <div className="max-w-5xl container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl max-w-4xl mx-auto lg:text-5xl font-bold text-gray-800 mb-10"
          >
            Why Choose{" "}
            <span className="text-yellow-500">
              Milestone Project Management?
            </span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 text-left max-w-5xl mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-yellow-100 p-3 rounded-lg"
              >
                <BadgeCheck className="text-white fill-green-500 mt-1 shrink-0" />
                <span className="text-gray-700 text-lg">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        {" "}
        <EngineeringCTA
          title="Let’s Design Better Communities Together"
          desc="From concept to completion, Milestone Project Management helps you create well-planned, inclusive, and sustainable communities that enhance everyday life. Reach out to our team to start building your next great community vision today."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
