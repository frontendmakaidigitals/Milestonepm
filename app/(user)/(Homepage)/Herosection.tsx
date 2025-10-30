"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import BgLayer from "../app_chunks/BgLayer";
import { motion } from "motion/react";

const Herosection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const slides = [
    {
      title: "Global Construction Outlook 2025",
      desc: " Explore key insights into international construction trends, cost forecasts, and innovations driving the industry forward.",
      img: "/global-construction.jpg",
    },
    {
      title: " Accelerating the Net-Zero Future by Decarbonizing ",
      desc: "Discover how Milestone PM is helping clients achieve sustainability goals through innovative engineering, renewable solutions, and carbon-conscious design.",
      img: "/Net-Zero.jpg",
    },
    {
      title: "Designing Resilient Infrastructure for a Changing Climate",
      desc: " How climate resilience, material innovation, and adaptive planning are shaping sustainable urban and industrial ecosystems.",
      img: "/Resilient Infrastructure.jpg",
    },
    {
      title: "The New Era of Project Delivery",
      desc: "Learn how coordination, data-driven decision-making, and agile execution are reducing risks and driving faster, smarter outcomes.",
      img: "/Project Delivery.webp",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Sync with carousel API
  useEffect(() => {
    if (!api) return;
    api.scrollTo(activeIndex);
  }, [activeIndex, api]);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[500px] h-[50vh] lg:h-[65vh]">
      <Carousel
        opts={{
          watchDrag: false,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[50vh] min-h-[500px] lg:h-[65vh] relative overflow-hidden">
                {/* Left & Right Arrows */}

                <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
                  <div className="w-full mx-auto container">
                    <motion.h1
                      key={slides[activeIndex].title}
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 1.4,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="text-3xl lg:text-4xl !text-slate-50 font-[600] max-w-2xl"
                    >
                      {slides[activeIndex].title}
                    </motion.h1>
                    <motion.p
                      key={slides[activeIndex].desc}
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3,
                        duration: 1.4,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="text-slate-50 mt-3 max-w-2xl"
                    >
                      {slides[activeIndex].desc}
                    </motion.p>
                    <Link href={"/Services"}>
                      <motion.button
                        key={slides[activeIndex].img}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.4,
                          duration: 1.4,
                          ease: [0.19, 1, 0.22, 1],
                        }}
                        className="bg-gradient-to-br mt-4 px-4 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#FFC107] to-[#F57C00]"
                      >
                        Explore Our Services <ArrowUpRight />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                <BgLayer color="bg-black/40" />
                <img
                  src={`/hero-slider${slides[activeIndex].img}`}
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-5 bg-yellow-500/30 p-1 rounded-full flex items-center gap-2 right-5">
          <button
            onClick={handlePrev}
            className=" z-20 bg-amber-500/40 cursor-pointer backdrop-blur-2xl backdrop-filter text-[#f9e69a] hover:text-amber-500 p-2 rounded-full hover:bg-amber-700/50 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className=" z-20 bg-amber-500/40  cursor-pointer backdrop-blur-2xl backdrop-filter text-[#f9e69a] hover:text-amber-500 p-2 rounded-full hover:bg-amber-700/50 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Carousel>
    </section>
  );
};

export default Herosection;
