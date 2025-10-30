"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ArrowUpRight } from "lucide-react";
const GlobalSection = () => {
  const { ref, inView } = useInView({ amount: 0.9, once: true });

  return (
    <div className="py-20 bg-[#F6F6F5]">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-12 container mx-auto">
        <div ref={ref} className="">
          <h1 className="text-4xl lg:text-6xl font-[500]">
            A <span className="text-gray-500">Global Presence</span> with Local
            Expertise
          </h1>
          <p className="mt-5">
            Milestone Project Management operates across multiple regions,
            delivering world-class project management and engineering
            consultancy services with a deep understanding of local markets.
            Headquartered in Dubai, United Arab Emirates, Milestone has expanded
            its regional footprint with offices in Saudi Arabia, India, and
            Egypt, strengthening our ability to manage complex projects
            seamlessly across borders. <br /> Our global presence allows us to
            combine international best practices with local insights, ensuring
            that every project meets the highest standards of quality,
            efficiency, and sustainability. Whether managing large-scale
            infrastructure, urban developments, or industrial projects, we bring
            the same precision, commitment, and excellence to every milestone we
            deliver.
          </p>
          <Link href="/our-presence">
            <button className="bg-gradient-to-br cursor-pointer mt-4 px-4 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#FFC107] to-[#F57C00]">
              Explore our locations <ArrowUpRight />
            </button>
          </Link>
        </div>

        <motion.img
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="w-full object-contain h-[330px] xl:h-[520px] 2xl:h-[550px]"
          src={"/global-connectivity.png"}
        />
      </div>
    </div>
  );
};

export default GlobalSection;
