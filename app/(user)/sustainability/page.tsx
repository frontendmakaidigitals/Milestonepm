"use client";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import BgLayer from "../app_chunks/BgLayer";
import Link from "next/link";
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
            Sustainability at Milestone Project Management
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-5xl lg:text-6xl font-semibold">
            Our Commitment: Building a Sustainable Future Together
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-bottom"
          src="/sustainability 2/banner.webp"
          alt="Milestone Project Management Engineering Hero Background"
        />
      </motion.div>

      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}
        <BgLayer />
        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-amber-200/40 to-transparent" />

        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tighter  mb-4">
                Our Commitment: Building a Sustainable Future Together
              </h1>
              <p className="text-lg text-gray-700">
                At Milestone Project Management, we believe that true success
                means creating value that lasts, for people, the planet, and
                future generations. Sustainability is part of our core values
                and is reflected in the way we plan, design, and deliver every
                project. <span className="block mt-2" /> We work closely with
                clients and partners to build developments that respect the
                environment, enhance community well-being, and support long-term
                growth across the UAE and beyond.
              </p>

              <Link
                href={"/Contact"}
                className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
              >
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
            <div className="h-[450px]">
              <img
                src="/sustainability 2/heading.webp"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sustainability Matters */}
      <section className="py-20 ">
        <div className="container  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="/sustainability 2/why.webp"
            alt="Sustainable city"
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className=" lg:text-4xl font-semibold mb-4">
              Why <span className="text-yellow-500">Sustainability</span>{" "}
              Matters to Us
            </h2>
            <p className="text-gray-700 ">
              As the UAE leads the region toward a cleaner and greener future,
              sustainability has become a shared responsibility. Guided by the
              country’s Net Zero 2050 vision, we are proud to contribute through
              responsible engineering, smart project planning, and innovative
              solutions that reduce environmental impact.{" "}
              <span className="block mt-2" /> Our mission is to help clients
              meet their sustainability goals while improving efficiency,
              reducing costs, and supporting economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="container place-items-center grid grid-cols-1 lg:grid-cols-2 py-20 gap-10">
        <div className="">
          <h2 className="text-4xl font-semibold mb-6">
            Our Approach: Turning Vision into Action
          </h2>
          <p>
            At Milestone PM, sustainability is more than a goal; it’s a
            structured approach built on practical steps and measurable results.
            We help our clients design and manage projects that balance
            performance with environmental responsibility.
            <span className="mt-3 block" />
            Our sustainability framework is built around four key pillars:
          </p>

          <ul className="space-y-4 text-gray-700 mt-3">
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
              </div>
              <span>
                <strong>Sustainable Design: </strong>Integrating eco-friendly
                materials and energy-efficient methods into every project.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
              </div>
              <span>
                <strong>Net Zero Vision:</strong> Reducing carbon emissions
                through smart design and renewable energy solutions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
              </div>
              <span>
                <strong>Governance & Ethics:</strong> Ensuring transparency,
                accountability, and compliance in all operations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                {" "}
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
              </div>
              <span>
                <strong>Social Responsibility:</strong> Promoting health,
                safety, and inclusivity for communities and workforces.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full h-[450px]  rounded-xl">
          <img
            src="/sustainability 2/approach.webp"
            alt="Sustainable city"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-yellow-50  py-20">
        <div className="place-items-center grid grid-cols-1 lg:grid-cols-2 container">
          {" "}
          <div className="w-full h-[450px]  rounded-xl">
            {" "}
            <img
              src="/sustainability 2/commitment.webp"
              alt="Sustainable city"
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="max-w-5xl mx-auto mt-12 lg:mt-0 container">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
              Our Global and Regional Commitment
            </h2>
            <p className="text-gray-700 text-lg">
              Milestone PM aligns with international sustainability frameworks
              while supporting local environmental goals set by the UAE
              government. We take pride in delivering projects that conserve
              energy, reduce waste, and promote long-term resilience, from
              sustainable infrastructure and green buildings to digital energy
              management systems. <span className="block mt-2" /> Our goal is
              simple: to build smarter, cleaner, and more sustainable cities for
              the future.
            </p>
          </div>
        </div>
      </section>
      {/* Innovation & Initiatives */}
      <section className=" py-20 ">
        <div className="container place-items-center gap-10 grid grid-cols-1 lg:grid-cols-2">
          {" "}
          <div className="">
            <h2 className="text-4xl font-semibold mb-6">
              Innovation Driving Sustainability
            </h2>
            <p>
              We embrace technology and innovation as key drivers of sustainable
              development. Our teams use advanced digital tools, energy modeling
              systems, and green construction practices to improve efficiency
              and minimize environmental impact.
            </p>
            <h2 className="font-[500] text-xl mt-3"> We help clients:</h2>
            <ul className="space-y-4 text-gray-700 mt-3">
              <li className="flex items-start gap-3">
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
                <span>Implement energy-efficient systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
                <span>Design low-carbon developments.</span>
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck className=" text-slate-50 fill-green-600 w-6 h-6" />
                <span>
                  Monitor environmental performance through smart technologies.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Every milestone we achieve brings us closer to a future where
              development and sustainability go hand in hand.
            </p>
          </div>
          <div className="w-full h-[450px] overflow-hidden rounded-xl">
            <img
              src="/sustainability 2/innovation.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <EngineeringCTA
        title="Stay Connected with our Insights"
        desc="We continue to share updates, research, and success stories on sustainability in engineering and project management. Follow Milestone Project Management as we help shape a sustainable, climate-resilient future for the UAE and beyond."
      />
    </div>
  );
}
