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
            A Worldwide Footprint,{" "}
            <span className="text-yellow-500">Globally Present</span>
          </h1>
          <p className="mt-5">
            Milestonepm Engineering Consulting proudly operates across multiple
            regions, reflecting its commitment to delivering world-class
            engineering solutions with local insight. Headquartered in Riyadh,
            Saudi Arabia, the company has expanded its footprint with strategic
            offices in Egypt, the United Kingdom, and Sri Lanka. This global
            presence enables Milestonepm to serve a diverse client base, adapt
            to international standards, and seamlessly manage projects across
            borders, while maintaining a deep understanding of local
            regulations, culture, and market dynamics.
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
