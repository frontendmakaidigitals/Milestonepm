"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import BgLayer from "../app_chunks/BgLayer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
const MotionImage = motion(Image);
const Services = () => {
  const services = [
    {
      title: "Construction Management",
      link: "/engineering-and-infrastructure-solutions/construction-management",
      img: "construction-management.webp",
    },
    {
      title: "Structural Engineering",
      link: "/engineering-and-infrastructure-solutions/structural-engineering",
      img: "strategic-consulting.webp",
    },
    {
      title: "Electrical and Mechanical Advisory",
      link: "/engineering-and-infrastructure-solutions/electrical-and-mechanical-advisory",
      img: "electrical-contracting.webp",
    },
    {
      title: "Foundation Solutions",
      link: "/engineering-and-infrastructure-solutions/foundation-solutions",
      img: "foundations-contracting.webp",
    },
    {
      title: "Tunnel Infrastructure",
      link: "/engineering-and-infrastructure-solutions/tunnel-infrastructure",
      img: "tunnels-trenchless-technology-and-underground-infrastructure.webp",
    },
    {
      title: "Urban Planning",
      link: "/urban-planning-and-design/urban-planning",
      img: "urban-design.webp",
    },
    {
      title: "Interior & Spatial Design",
      link: "/urban-planning-and-design/interior-and-spatial-design",
      img: "interior-architecture.webp",
    },
    {
      title: "Visualization & 3D Modeling",
      link: "/urban-planning-and-design/visualization-and-3d-modeling",
      img: "visualization-and-virtual-reality.webp",
    },
  ];
  const serviceRef = useRef(null);
  const inView = useInView(serviceRef, {
    margin: "-50% 0px -50% 0px", // top & bottom 50% to center
    amount: "some", // or 'all' depending on use case
    once: true, // or true if you want it to trigger only once
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <section className="container py-20 mx-auto">
      <h1 className="text-3xl lg:text-4xl font-[700] text-center">
        Our <span className="text-yellow-500">Services</span>
      </h1>
      <motion.ul
        transition={{ staggerChildren: 1 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-12"
        ref={serviceRef}
      >
        {services.map((service, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1],
                delay: idx * 0.05,
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden group rounded-2xl h-[340px] bg-slate-900/10 shadow-md border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <Link
                href={`/services/${service.link}`}
                className="block h-full w-full relative"
              >
                {/* Image */}
                <MotionImage
                  src={`/services/${service.img}`}
                  alt={service.title}
                  fill
                  className="object-cover absolute inset-0 rounded-2xl"
                  animate={{ scale: hoveredIndex === idx ? 1.1 : 1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Diagonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B59410]/60 via-transparent to-transparent mix-blend-overlay"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="backdrop-blur-sm bg-amber-500/20 rounded-lg p-4 border border-[#B59410]/40">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Accent border animation */}
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#B59410]/50 rounded-2xl transition-all duration-500" />
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
      <div className="flex justify-center items-center">
        <Link
          href={"/services"}
          className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
        >
          View all services <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
};

export default Services;
