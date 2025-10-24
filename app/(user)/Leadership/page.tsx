"use client";

import {
  Building2,
  Users,
  Compass,
  Globe,
  Brain,
  TreeDeciduous,
  Network,
} from "lucide-react";
import BgLayer from "../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
export default function Page() {
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  const services = [
    {
      icon: <Building2 className="w-6 h-6 text-amber-700" />,
      title: "Urban Development & Smart Cities",
      desc: "Planning and managing residential, commercial, and mixed-use communities that support the UAE’s urban and sustainability goals.",
    },
    {
      icon: <Network className="w-6 h-6 text-amber-700" />,
      title: "Infrastructure & Connectivity",
      desc: "Delivering projects that strengthen connectivity, from roads and bridges to utilities and public transport systems.",
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-700" />,
      title: "Digital Transformation",
      desc: "Adopting modern tools like BIM, GIS, and digital project monitoring to improve coordination, accuracy, and sustainability.",
    },
    {
      icon: <TreeDeciduous className="w-6 h-6 text-amber-700" />,
      title: "Sustainability & Environment",
      desc: "Promoting eco-friendly engineering, green design, and energy-efficient solutions that reduce carbon impact and protect natural resources.",
    },
    {
      icon: <Brain className="w-6 h-6 text-amber-700" />,
      title: "Private Sector Enablement",
      desc: "Supporting developers, investors, and government partners with expert project management, advisory, and supervision services.",
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-700" />,
      title: "Nationwide Impact",
      desc: "From NEOM to Tabuk, delivering value that lasts for generations.",
    },
  ];
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Leadership & Vision
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-5xl lg:text-6xl font-semibold">
            Guiding Innovation. Building the Future.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/Leadership-Vision 2/banner.webp"
          alt="Milestone Project Management Engineering Hero Background"
        />
      </motion.div>

      {/* Leadership Section */}
      <section className="py-20 lg:px-6 bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Leadership That Inspires Progress
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Milestone Project Management (Milestone PM), leadership is not
              just about managing projects; it’s about creating impact, driving
              innovation, and shaping the future of engineering and development.
              Led by an experienced management team and skilled department
              heads, we bring together strong technical expertise, strategic
              direction, and a passion for excellence in every project we
              deliver.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our leadership team includes professionals from diverse
              backgrounds in project management, design, construction, digital
              transformation, and engineering consultancy. Together, they ensure
              that each milestone we achieve reflects our core values —
              integrity, quality, innovation, and sustainability.
            </p>
          </div>
          <div className="rounded-xl h-[260px] lg:h-[450px] overflow-hidden">
            <img
              src="/our-ethics.jpg"
              alt="Leadership at Milestone Project Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-amber-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="rounded-xl mb-4 h-[350px] overflow-hidden">
              <img
                src="/Leadership-Vision 2/leadership.webp"
                alt="Leadership at Milestone Project Management"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading project management and engineering consultancy
              that helps build the cities of tomorrow, advancing sustainable
              growth, modern infrastructure, and innovation across the UAE and
              beyond.
            </p>
          </div>
          <div>
            <div className="rounded-xl h-[350px] mb-4 overflow-hidden">
              <img
                src="/Leadership-Vision 2/mission.webp"
                alt="Leadership at Milestone Project Management"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver smart, efficient, and future-ready project management
              solutions that create real value for clients, communities, and the
              environment. We focus on every stage of a project, from early
              planning and feasibility to execution and long-term performance,
              ensuring success that lasts.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 lg:px-6">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT BLOCK */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
              Our Commitment to <br className="hidden sm:inline" />
              <span className="text-amber-700">Vision 2030</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              We proudly align with the Kingdom’s Vision 2030, contributing to
              national initiatives in housing, infrastructure, urban
              development, and sustainability. Our projects are designed to
              support a thriving economy, a vibrant society, and an ambitious
              nation.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Whether we are shaping smart cities, supporting green
              infrastructure, or modernizing essential services, Milestone
              Project Management is committed to turning national goals into
              real-world outcomes.
            </p>
            <p className="text-gray-700 text-lg">
              As the Kingdom invests in infrastructure, smart cities, housing,
              and sustainability, Milestone Project Management delivers
              engineering solutions that support these goals across every
              sector. Our projects directly align with Vision 2030’s core
              pillars: a vibrant society, a thriving economy, and an ambitious
              nation.
            </p>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <img
              src="/Leadership-Vision 2/vision 2030.webp"
              alt="Vision 2030 Project"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Vision 2030 Commitment */}
      <section className="pt-12 lg:py-20 px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How We Support <span className="text-yellow-500">UAE vision</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <EngineeringCTA
        title="Nationwide Impact"
        desc="From Dubai to Abu Dhabi, and across Sharjah, Ras Al Khaimah, and beyond, Milestone PM plays a key role in delivering infrastructure and development projects that support the UAE’s growth vision. We work hand-in-hand with both public and private sector clients to ensure that every project contributes to a more sustainable, resilient, and innovative nation."
      />
    </div>
  );
}
