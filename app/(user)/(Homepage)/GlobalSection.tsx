"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
const GlobalSection = () => {
  const { ref, inView } = useInView({ amount: 0.9, once: true });

  return (
    <div className="py-20  bg-gradient-to-br from-[#ebf3ff] to-[#e2ecff]">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-12 container mx-auto">
        <div ref={ref} className="">
          <h1 className="text-4xl lg:text-6xl font-[500]">
            A <span className="text-blue-500">Global Presence</span> with Local Expertise
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
        </div>

        <motion.img
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="w-full object-contain h-[330px] xl:h-[520px] 2xl:h-[550px]"
          src={"/Global.webp"}
        />
      </div>
    </div>
  );
};

export default GlobalSection;
