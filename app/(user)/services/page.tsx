"use client";
import React, { useState, useRef, useEffect } from "react";
import BgLayer from "../app_chunks/BgLayer";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import Link from "next/link";
const services = [
  // Engineering & Infrastructure Solutions
  {
    title: "Construction Management",
    link: "/engineering-and-infrastructure-solutions/construction-management",
    img: "construction-management.webp",
  },
  {
    title: "Electrical & Mechanical Advisory",
    link: "/engineering-and-infrastructure-solutions/electrical-and-mechanical-advisory",
    img: "electrical-contracting.webp",
  },
  {
    title: "Foundation Solutions",
    link: "/engineering-and-infrastructure-solutions/foundation-solutions",
    img: "foundations-contracting.webp",
  },
  {
    title: "Structural Engineering",
    link: "/engineering-and-infrastructure-solutions/structural-engineering",
    img: "strategic-consulting.webp",
  },
  {
    title: "Tunnel Infrastructure",
    link: "/engineering-and-infrastructure-solutions/tunnel-infrastructure",
    img: "tunnels-trenchless-technology-and-underground-infrastructure.webp",
  },

  // Project Advisory & Program Management
  {
    title: "Asset Lifecycle Advisory",
    link: "/project-advisory-and-program-management/asset-lifecycle-advisory",
    img: "asset-advisory.webp",
  },
  {
    title: "Cost Advisory",
    link: "/project-advisory-and-program-management/cost-advisory",
    img: "cost-management.webp",
  },
  {
    title: "Program & Portfolio Management",
    link: "/project-advisory-and-program-management/program-and-portfolio-management",
    img: "program-management.webp",
  },
  {
    title: "Project Scheduling",
    link: "/project-advisory-and-program-management/project-scheduling",
    img: "planning-2.webp",
  },
  {
    title: "Risk Mitigation & Scheduling",
    link: "/project-advisory-and-program-management/risk-mitigation-and-scheduling",
    img: "risk-management-resilience.webp",
  },

  // Sustainability, Environment & Resilience
  {
    title: "Climate Adaptation",
    link: "/sustainability-environment-and-resilience/climate-adaptation",
    img: "climate-adaptation.webp",
  },
  {
    title: "Environmental Assessment",
    link: "/sustainability-environment-and-resilience/environmental-assessment",
    img: "environmental-contracting.webp",
  },
  {
    title: "Smart City Systems",
    link: "/sustainability-environment-and-resilience/smart-city-systems",
    img: "cities-solutions.webp",
  },
  {
    title: "Sustainable Consulting",
    link: "/sustainability-environment-and-resilience/sustainable-consulting",
    img: "environmental-contracting.webp",
  },

  // Transportation & Smart Mobility
  {
    title: "City Development",
    link: "/transportation-and-smart-mobility/city-development",
    img: "pedestrian-modelling-(north-america).webp",
  },
  {
    title: "Pedestrian Mobility",
    link: "/transportation-and-smart-mobility/pedestrian-mobility",
    img: "pedestrian-modelling-in-action.webp",
  },
  {
    title: "Rail & Transit Advisory",
    link: "/transportation-and-smart-mobility/rail-and-transit-advisory",
    img: "rail-simulations.webp",
  },
  {
    title: "Urban Planning",
    link: "/transportation-and-smart-mobility/urban-planning",
    img: "urbanism-+-planning.webp",
  },
  {
    title: "Vertical Mobility Solutions",
    link: "/transportation-and-smart-mobility/vertical-mobility-solutions",
    img: "vertical-transportation-services-(north-america)-2.webp",
  },

  // Urban Planning & Design
  {
    title: "City Planning",
    link: "/urban-planning-and-design/city-planning",
    img: "program-management.webp",
  },
  {
    title: "Community Design",
    link: "/urban-planning-and-design/community-design",
    img: "Planning.webp",
  },
  {
    title: "Interior & Spatial Design",
    link: "/urban-planning-and-design/interior-and-spatial-design",
    img: "interior-architecture.webp",
  },
  {
    title: "Urban Planning",
    link: "/urban-planning-and-design/urban-planning",
    img: "urban-design.webp",
  },
  {
    title: "Visualization & 3D Modeling",
    link: "/urban-planning-and-design/visualization-and-3d-modeling",
    img: "visualization-and-virtual-reality.webp",
  },
];
const Page = () => {
  const chunkArray = (
    arr: { title: string; link: string; img: string }[],
    chunkSize: number
  ) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };
  const [visibleChunks, setVisibleChunks] = useState(1);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chunks = chunkArray(services, Math.ceil(services.length / 5));
  const { inView, ref } = useInView();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && visibleChunks < chunks.length && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisibleChunks((prev) => Math.min(prev + 1, chunks.length));
            setLoading(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [visibleChunks, loading]);

  return (
    <main>
      <section className=" py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-3">
            <h1 className="text-4xl sm:text-3xl lg:text-4xl font-semibold text-amber-700 leading-tight">
              Our Services
            </h1>
            <h2 className=" text-xl text-slate-700 font-normal leading-relaxed">
              Milestone Project Management partners with public and private
              sector clients to solve their most complex engineering and
              development challenges, transforming ambitious visions into
              excellent results. Across Saudi Arabia and international markets,
              our expert teams push the boundaries of innovation and precision.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-yellow-50/30 p-8 rounded-xl border border-yellow-200/20 shadow-xs">
              <p className="text-lg text-slate-800 leading-relaxed">
                From national infrastructure to sustainable urban design, we
                deliver projects that make a lasting, positive impact on people,
                cities, and economies. We proudly contribute to the Kingdom’s
                Vision 2030 and global development goals, engineering
                residential communities, modern road networks, advanced drainage
                systems, LEED-certified facilities, and digital design models
                that define the nxt generation of infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="container pb-24">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {chunks
            .slice(0, visibleChunks)
            .flat()
            .map((service, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative group overflow-hidden rounded shadow-md border border-slate-200/40 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500"
              >
                <Link href={`/Services${service.link}`}>
                  <div className="relative w-full h-[300px] overflow-hidden">
                    <Image
                      width={600}
                      height={600}
                      src={`/services/${service.img}`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <h2 className="absolute bottom-4 left-4 text-xl font-semibold text-white drop-shadow-lg">
                      {service.title}
                    </h2>
                  </div>
                </Link>
              </motion.li>
            ))}

          {/* Skeleton Loading */}
          {loading &&
            Array.from({ length: 8 }).map((_, idx) => (
              <Skeleton
                key={`skeleton-${idx}`}
                className="w-full h-[300px] rounded"
              />
            ))}
        </ul>

        <div ref={bottomRef} className="h-10" />
      </section>
    </main>
  );
};

export default Page;
