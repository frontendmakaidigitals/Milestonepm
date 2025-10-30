"use client";
import React from "react";
import {
  Scale,
  FileCheck,
  Shield,
  Leaf,
  Lock,
  Ban,
  Users2,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import BgLayer from "../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import Link from "next/link";
const ethicsAndGovernance = [
  {
    icon: <Scale className="w-6 h-6 text-amber-700" />,
    title: "Ethical Leadership",
    desc: "Our leadership team leads by example, ensuring that every decision upholds integrity, transparency, and professional excellence.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-green-700" />,
    title: "Fair and Transparent Dealings",
    desc: "We maintain open communication and clear documentation in all transactions, ensuring fairness and mutual respect with all stakeholders.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-blue-700" />,
    title: "Compliance and Governance",
    desc: "We adhere to all local and international regulations, with strong internal controls and audits to ensure accountability and continuous improvement.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-700" />,
    title: "Sustainable and Responsible Practices",
    desc: "Sustainability is integrated into our projects and operations — minimizing waste, conserving resources, and promoting eco-friendly practices.",
  },
  {
    icon: <Lock className="w-6 h-6 text-indigo-700" />,
    title: "Data Protection and Confidentiality",
    desc: "We safeguard client and project data through strict cybersecurity and privacy protocols to maintain confidentiality and trust.",
  },
  {
    icon: <Ban className="w-6 h-6 text-rose-700" />,
    title: "Anti-Corruption and Anti-Bribery Policy",
    desc: "Zero tolerance for corruption or unethical conduct. All employees and partners must adhere to our integrity standards and reporting system.",
  },
  {
    icon: <Users2 className="w-6 h-6 text-purple-700" />,
    title: "Fair Employment and Diversity",
    desc: "We provide equal opportunities and foster an inclusive workplace that values talent, collaboration, and respect for all.",
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-700" />,
    title: "Client-Centric Approach",
    desc: "Every decision at Milestone PM is made with the client in mind — ensuring transparency, understanding, and value-driven solutions.",
  },
];

export default function SafetyCommitmentsPage() {
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

  return (
    <section className="bg-gray-50">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Safety Commitments
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-5xl lg:text-6xl font-semibold">
            Building trust through transparency, accountability, and sustainable
            growth.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src={"/safety commitments/umit-yildirim-9OB46apMbC4-unsplash.webp"}
          alt="Milestone Project Management Engineering Hero Background"
        />
      </motion.div>
      <section className="relative overflow-hidden">
        {/* Gradient background fixed here */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-amber-200/40 to-transparent pointer-events-none" />

        {/* SECTION 1: Image Right */}
        <div className="relative z-10 py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
            {/* Text */}
            <div className="max-w-2xl">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-tighter mb-4">
                Our Business Practices
              </h1>
              <p className="text-lg text-gray-700">
                At Milestone Project Management, we believe that excellence
                begins with strong values and ethical business conduct. Our
                success is built on trust, transparency, and integrity,
                principles that guide every decision we make and every project
                we deliver. We are fully committed to operating responsibly,
                ensuring fairness, accountability, and respect for our clients,
                employees, partners, and the communities we serve.{" "}
                <span className="block mt-2" />
                Our business practices are aligned with international standards
                and designed to promote sustainable growth, innovation, and
                long-term relationships.
              </p>
              <Link
                href={"/Contact"}
                className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
              >
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
            {/* Image */}
            <div className="h-[450px] w-full">
              <img
                src="/safety commitments/sandy-millar-yvpexJFLTSU-unsplash.webp"
                alt="Safety Image"
                className="w-full h-full object-cover rounded-lg"
              />
              <BgLayer />
            </div>
          </div>
        </div>

        {/* SECTION 2: Image Left */}
        <div className="relative z-10 py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
            {/* Image */}
            <div className="h-[450px] w-full order-last lg:order-first">
              <img
                src="/safety commitments/jeriden-villegas-VLPUm5wP5Z0-unsplash.webp"
                alt="Safety Culture"
                className="w-full h-full object-cover rounded-lg"
              />
              <BgLayer />
            </div>
            {/* Text */}
            <div className="max-w-2xl">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-tighter mb-4">
                Our Culture of Integrity
              </h1>
              <p className="text-lg text-gray-700">
                Our internal culture is built on three key principles:
                <strong>Transparency</strong>, <strong>Responsibility</strong>,{" "}
                <strong>Respect</strong>. We encourage our teams to act with
                honesty and fairness in all business dealings, from project
                planning and procurement to client relations and delivery. Every
                member of our organization is expected to uphold these values as
                part of our shared commitment to ethical business behavior.
              </p>
              <Link
                href={"/Contact"}
                className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
              >
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl py-20 px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Key Business Practices & Principles
          </h1>
        </div>

        {/* Safety Cards Grid */}
        {/* Safety Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {ethicsAndGovernance.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-start gap-5 mb-4">
                {/* Icon container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 shadow-inner">
                  {item.icon}
                </div>

                {/* Title with underline effect on hover */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-yellow-700 transition">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-yellow-200 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed tracking-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Certifications & Compliance"
        desc="Milestone PM follows globally recognized standards in quality and ethical management. Our systems are regularly reviewed and aligned with best practices in governance, safety, and sustainability, ensuring our clients receive reliable, responsible, and high-quality service every time."
      />
    </section>
  );
}
