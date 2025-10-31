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
import { Editor } from "@/components/blocks/editor-00/editor";
interface Blog {
  id: string | number;
  title: string;
  content: string;
  image?: string;
  author?: string;
  [key: string]: any;
}
const Herosection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // ✅ Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs((data.blogs || []).slice(0, 3)); // only first 3 blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    if (blogs.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [blogs]);

  // ✅ Sync with carousel API
  useEffect(() => {
    if (!api) return;
    api.scrollTo(activeIndex);
  }, [activeIndex, api]);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % blogs.length);

  // ✅ Loading placeholder
  if (blogs.length === 0) {
    return (
      <section className="relative min-h-[500px] h-[50vh] lg:h-[65vh] flex items-center justify-center bg-gray-200 text-gray-500">
        Loading featured insights...
      </section>
    );
  }
  return (
    <section className="relative min-h-[500px] h-[50vh] lg:h-[65vh] overflow-hidden">
      <Carousel opts={{ watchDrag: false }} className="w-full" setApi={setApi}>
        <CarouselContent>
          {blogs.map((item, index) => (
            <CarouselItem key={index}>
              <div className="h-[50vh] min-h-[500px] lg:h-[65vh] relative overflow-hidden">
                {/* Text content */}
                <div className="absolute z-10 w-full top-1/2 -translate-y-1/2">
                  <div className="w-full mx-auto container">
                    <motion.h1
                      key={item.title}
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 1.4,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      className="text-3xl lg:text-4xl !text-slate-50 font-[600] max-w-2xl"
                    >
                      {item.title}
                    </motion.h1>

                    <div className="mt-1 text-sm !text-slate-50 max-w-2xl">
                      {item.content ? (
                        <Editor
                          text="text-white"
                          editorSerializedState={
                            typeof item.content === "string"
                              ? JSON.parse(item.content)
                              : item.content
                          }
                          readOnly
                          clampLines={3}
                          blogPage={false}
                        />
                      ) : null}
                    </div>

                    <Link
                      href={`/blogs/${encodeURIComponent(
                        item.title.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                    >
                      <motion.button
                        key={item.image}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.4,
                          duration: 1.4,
                          ease: [0.19, 1, 0.22, 1],
                        }}
                        className="bg-gradient-to-br mt-4 px-4 py-[.45rem] text-sm rounded-lg text-slate-50 flex items-center gap-2 from-[#FFC107] to-[#F57C00]"
                      >
                        Read more <ArrowUpRight />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Background Layer & Image */}
                <BgLayer color="bg-black/40" />
                <img
                  src={`/api/uploads/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <div className="absolute bottom-5 bg-yellow-500/30 p-1 rounded-full flex items-center gap-2 right-5">
          <button
            onClick={handlePrev}
            className="z-20 bg-amber-500/40 cursor-pointer backdrop-blur-2xl text-[#f9e69a] hover:text-amber-500 p-2 rounded-full hover:bg-amber-700/50 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="z-20 bg-amber-500/40 cursor-pointer backdrop-blur-2xl text-[#f9e69a] hover:text-amber-500 p-2 rounded-full hover:bg-amber-700/50 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Carousel>
    </section>
  );
};

export default Herosection;
