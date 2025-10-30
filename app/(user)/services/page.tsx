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
    img: "pedestrian-mobility.webp",
  },
  {
    title: "Rail & Transit Advisory",
    link: "/transportation-and-smart-mobility/rail-and-transit-advisory",
    img: "rail-and-transit-advisory.webp",
  },
  {
    title: "Urban Planning",
    link: "/transportation-and-smart-mobility/urban-planning",
    img: "urban-planning.webp",
  },
  {
    title: "Vertical Mobility Solutions",
    link: "/transportation-and-smart-mobility/vertical-mobility-solutions",
    img: "vertical-mobility-solutions.webp",
  },

  // Urban Planning & Design
  {
    title: "City Planning",
    link: "/urban-planning-and-design/city-planning",
    img: "city-planning.webp",
  },
  {
    title: "Community Design",
    link: "/urban-planning-and-design/community-design",
    img: "community-design.webp",
  },
  {
    title: "Interior & Spatial Design",
    link: "/urban-planning-and-design/interior-and-spatial-design",
    img: "interior-and-spatial-design.webp",
  },
  {
    title: "Urban Planning",
    link: "/urban-planning-and-design/urban-planning",
    img: "urban-planning-design.webp",
  },
  {
    title: "Visualization & 3D Modeling",
    link: "/urban-planning-and-design/visualization-and-3d-modeling",
    img: "visualization-and-3d-modeling.webp",
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
          }, 1200); // show loading for 500ms
        }
      },
      { threshold: 1.0 }
    );

    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, [visibleChunks, loading]);

  return (
    <main>
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-3">
            <h1 className="text-4xl sm:text-3xl lg:text-4xl font-semibold text-yellow-950 leading-tight">
              Services
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

      <section className="container">
        <ul className="grid grid-cols-1 gap-1 lg:grid-cols-4">
          {chunks
            .slice(0, visibleChunks)
            .flat()
            .map((service, idx) => (
              <motion.li
                animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                viewport={{ once: true }}
                ref={ref}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  delay: 0.1 * idx,
                }}
                key={idx}
                className="aspect-square w-full relative"
              >
                <Link href={`/Services${service.link}`}>
                  <h2 className="absolute z-10 bottom-3 left-3 text-xl font-medium text-slate-50">
                    {service.title}
                  </h2>
                  <BgLayer color="bg-slate-900/50" />
                  <Image
                    width={300}
                    height={300}
                    src={`/services/${service.img}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </motion.li>
            ))}
          {loading &&
            Array.from({ length: 12 }).map((_, idx) => (
              <Skeleton
                key={`skeleton-${idx}`}
                className="aspect-square w-full "
              />
            ))}
        </ul>

        <div ref={bottomRef} className="h-10" />
      </section>
    </main>
  );
};

export default Page;
