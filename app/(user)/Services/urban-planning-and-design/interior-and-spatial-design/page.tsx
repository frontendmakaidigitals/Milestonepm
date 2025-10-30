"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { BadgeCheck } from "lucide-react";

export default function Page() {
  const services = [
    {
      title: "Concept Design & Visualization",
      desc: "Creative design development that captures the project’s character and desired experience.",
      img: "/urban-planning/interior/interior-design.webp",
    },
    {
      title: "Functional Space Planning",
      desc: "Smart spatial layouts that improve flow, accessibility, and user comfort.",
      img: "/urban-planning/interior/sapce-planning.webp",
    },
    {
      title: "Material & Finish Selection",
      desc: "Sustainable, high-quality materials that enhance both durability and style.",
      img: "/urban-planning/interior/material.webp",
    },
    {
      title: "Lighting & Acoustic Planning",
      desc: "Designing with natural and artificial light to create balanced, comfortable spaces.",
      img: "/urban-planning/interior/lighting.webp",
    },
    {
      title: "Furniture & Fixture Coordination",
      desc: "Selection and layout of furniture, fittings, and décor for harmony and usability.",
      img: "/urban-planning/interior/furniture.webp",
    },
    {
      title: "Brand Identity & Wayfinding Design",
      desc: "Integrating visual cues and branding into the spatial experience.",
      img: "/urban-planning/interior/wayfinding.webp",
    },
    {
      title: "Detailed Drawings & Technical Support",
      desc: "Clear documentation and coordination from concept through completion.",
      img: "/urban-planning/interior/millwork.webp",
    },
    {
      title: "3D Modeling & Walkthroughs",
      desc: "Realistic visualizations that bring designs to life before execution.",
      img: "/urban-planning/interior/Visualization.webp",
    },
  ];

  const expertise = [
    {
      title: "Corporate & Office Environments",
      desc: "We design efficient and inspiring workplaces that foster creativity, focus, and collaboration. Every office layout reflects brand identity while supporting flexibility and well-being.",
      img: "/urban-planning/interior/Corporate.webp",
    },
    {
      title: "Retail & Commercial Spaces",
      desc: "Our retail interiors encourage engagement and maximize customer experience. We plan layouts that enhance visibility, flow, and brand storytelling.",
      img: "/urban-planning/interior/Retail.webp",
    },
    {
      title: "Hospitality & Leisure",
      desc: "From hotels to restaurants, we design welcoming spaces that offer comfort, elegance, and memorable experiences for every guest.",
      img: "/urban-planning/interior/Hotels.webp",
    },
    {
      title: "Healthcare & Wellness Centers",
      desc: "We create calm, functional, and healing spaces that prioritize safety, hygiene, and human comfort.",
      img: "/urban-planning/interior/Healthcare.webp",
    },
    {
      title: "Educational & Cultural Facilities",
      desc: "We design learning and cultural environments that inspire imagination, creativity, and connection.",
      img: "/urban-planning/interior/Education.webp",
    },
    {
      title: "Public & Government Interiors",
      desc: "Milestone PM delivers civic interiors that are practical, secure, and representative of trust, service, and innovation.",
      img: "/urban-planning/interior/Government.webp",
    },
    {
      title: "Luxury Residences",
      desc: "We craft bespoke living spaces that combine style, technology, and comfort, reflecting the individuality and lifestyle of each client.",
      img: "/urban-planning/interior/Luxury Residential.webp",
    },
  ];

  const points = [
    "Experienced multidisciplinary team with regional and global exposure",
    "Complete design-to-delivery approach with full project support",
    "Custom design solutions tailored to each client’s goals and space",
    "Advanced BIM and visualization tools for accuracy and collaboration",
    "Focus on sustainability, comfort, and innovation",
    "Proven experience across corporate, hospitality, and residential sectors",
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Interior & Spatial Design
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/urban-planning/interior/hero.jpg"}
          className="w-full h-full object-cover"
          alt={""}
          width={1200}
          height={700}
        />
      </section>

      <section className="">
        <div className="container py-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl lg:text-5xl text-amber-700 font-bold ">
              Collaborative, Creative, and Purpose-Driven
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Our design approach is grounded in balance and collaboration.
              Every project begins with understanding your brand, culture, and
              aspirations. We then bring together a team of creative designers,
              technical experts, and project managers to translate your vision
              into an integrated spatial experience.
              <br /> <br /> By aligning spatial planning with materials,
              lighting, acoustics, furniture, and user behavior, we create
              holistic interiors that reflect purpose and elevate the quality of
              life. Our process is hands-on, responsive, and continuous,
              ensuring continuity from concept through construction.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-00">
            <img
              src={"/urban-planning/interior/creative.webp"}
              alt={"team"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="container max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-yellow-600">Interior Architecture</span>{" "}
            Services
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
            {services.map((item, index) => (
              <div
                key={index}
                className=" rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Sectors We Work In
          </h2>
          <p className="text-lg text-muted-foreground">
            Interior architecture tailored to every sector&apso;s unique demands
            — from healthcare to hospitality and everything in between.
          </p>
        </div>

        <div className="grid gap-14">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl text-amber-700 font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="">
        <div className="container py-12 place-items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-[700] text-amber-700">
              Integrated Team from Start to Finish
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              At Milestone PM, our design and project management teams work side
              by side from day one. This integrated approach ensures that
              creative intent, quality, and timelines remain aligned throughout
              the project. By maintaining close communication between designers,
              engineers, and contractors, we guarantee seamless delivery, from
              planning to final fit-out.
            </p>
          </div>
          <div className="w-full h-[450px] bg-red-100">
            <img
              src={"/urban-planning/interior/team.webp"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className=" py-20 px-4">
        <div className="max-w-3xl container text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Milestone PM for Interior & Spatial Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining creativity with technical expertise, we deliver
            exceptional interior environments that elevate experience, express
            identity, and enhance functionality.
          </p>
        </div>

        <div className="grid max-w-5xl grid-cols-1 lg:grid-cols-2 gap-10 container">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-amber-100/60 p-3 rounded-xl"
            >
              <span>
                <BadgeCheck className="text-white fill-green-500 w-6 h-6 mt-1 shrink-0" />
              </span>
              <p className="text-lg leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Let’s Design Your Vision Together"
          desc="Whether you are developing a new project or reimagining an existing space, Milestone Project Management will help you create an environment that inspires, performs, and lasts. Reach out to our team today to start your next Interior & Spatial Design project."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
