import { ArrowUpRight } from "lucide-react";
import React from "react";
import BgLayer from "../app_chunks/BgLayer";
import Link from "next/link";
const About = () => {
  return (
    <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
      {/* Background image */}
      <img
        src="/our division 2/Architecture-Urban Planning.webp"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <BgLayer />

      {/* Left gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent" />

      <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
        <div className="container mx-auto px-4  ">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tighter  mb-4">
              <span className="text-yellow-500">Delivering Projects</span>{" "}
              through AI, Technology, and Experience
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              At Milestone Project Management Dubai, we believe that successful
              projects begin with collaboration, innovation, and trust. Our
              approach combines cutting-edge technology, proven methodologies,
              and hands-on industry experience to deliver results that exceed
              expectations. Every project is managed by a dedicated team of
              professionals who understand the unique challenges of the UAE and
              other global markets. We bring together technical expertise,
              creative problem-solving, and strategic leadership to ensure
              precision at every stage, from concept and planning to execution
              and delivery. At Milestone PM, our people are our greatest
              strength. We invest in continuous learning, mentorship, and a
              positive work culture that inspires excellence. This commitment
              enables us to deliver sustainable, efficient, and future-ready
              solutions across infrastructure, construction, and development
              sectors in Dubai and beyond.
            </p>

            <Link
              href={"/company-profile"}
              className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
            >
              Discover Our Story <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
