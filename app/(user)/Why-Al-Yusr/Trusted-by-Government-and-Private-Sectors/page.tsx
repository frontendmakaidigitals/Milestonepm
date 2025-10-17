"use client";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import BgLayer from "@/app/(user)/app_chunks/BgLayer";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Landmark,
  Building2,
  ShieldCheck,
  Timer,
  ClipboardList,
  Eye,
  Users,
  DollarSign,
  Cpu,
  Repeat,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
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
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);

    return () => {
      api.off?.("select", update);
    };
  }, [api]);
  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-50">
            Trusted by Government and Private Sectors
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Delivering Confidence Through Proven Performance
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/why/govt-sector-hero.jpeg"
          alt="Milestonepm Engineering Hero Background"
        />
      </motion.div>

      {/* OVERVIEW SECTION */}
      <div className="relative z-10 min-h-[85vh] py-20 lg:py-0 flex flex-col h-full justify-center items-center">
        <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-semibold text-amber-800 leading-tighter mb-4">
              Government and Private Sector Approved
            </h1>
            <p className="text-lg text-gray-700">
              For over a decade, Milestonepm Engineering Consulting has been a
              trusted partner to some of the most prominent government entities,
              developers, and private organizations in the Kingdom of Saudi
              Arabia and beyond.
            </p>
            <p className="mt-3">
              Our Class A certification and ISO-accredited methodologies reflect
              our deep commitment to quality, safety, and accountability, making
              us a go-to choice for critical national infrastructure,
              high-impact private developments, and strategic consulting.
            </p>

            <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
              Discover Our Story <ArrowUpRight />
            </button>
          </div>
          <div className="h-[450px]">
            <img
              src="/why/govt-sector-about.jpeg"
              alt="About Background"
              className=" w-full h-full object-cover"
            />
            <BgLayer />
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS LIST */}
      <section className="bg-gradient-to-b from-white via-amber-50 to-white py-24 lg:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* HEADLINE */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Trusted by Public & Private Sectors Alike
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Milestonepm delivers excellence to both government authorities and
              leading private developers — united by a commitment to compliance,
              innovation, and results.
            </p>
          </div>

          {/* GOVERNMENT BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-white border border-yellow-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-amber-700" />
                <h3 className="text-xl font-semibold text-amber-800">
                  Preferred by Government Authorities
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                We proudly support Saudi Arabia’s public sector with end-to-end
                services in engineering, planning, sustainability, and program
                management.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm pl-1">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-1 text-amber-600" />
                  Transparent processes and compliance with Saudi building codes
                </li>
                <li className="flex items-start gap-2">
                  <Timer className="w-4 h-4 mt-1 text-amber-600" />
                  Timely project delivery aligned with national priorities
                </li>
                <li className="flex items-start gap-2">
                  <ClipboardList className="w-4 h-4 mt-1 text-amber-600" />
                  Experience with permitting, code approvals, and regulatory
                  frameworks
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 mt-1 text-amber-600" />
                  Deep understanding of Vision 2030 objectives and governance
                  models
                </li>
              </ul>
            </div>

            {/* PRIVATE BLOCK */}
            <div className="bg-gradient-to-br from-indigo-50 via-indigo-100 to-white border border-indigo-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Trusted by Leading Private Developers
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                From real estate and hospitality to industrial and commercial
                sectors, Milestonepm delivers solutions to some of the region’s
                most ambitious private ventures.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm pl-1">
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 mt-1 text-amber-600" />
                  Agile project coordination and technical expertise
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 mt-1 text-amber-600" />
                  Value engineering and cost-effective designs
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 mt-1 text-amber-600" />
                  Integration of smart technologies and sustainability practices
                </li>
                <li className="flex items-start gap-2">
                  <Repeat className="w-4 h-4 mt-1 text-amber-600" />
                  Full lifecycle consulting, from feasibility to handover
                </li>
              </ul>
            </div>
          </div>

          {/* WHY CLIENTS CHOOSE Milestonepm */}
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
              Why Public & Private{" "}
              <span className="text-yellow-500">
                Clients Choose Milestonepm
              </span>
            </h3>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-full" // Add horizontal padding to avoid edge cuts
          >
            <CarouselContent className="gap-4 px-10">
              {" "}
              {/* optional spacing between cards */}
              {[
                {
                  title: "Strategic Alignment",
                  img: "/why/in-house-Strategic-Alignment.jpeg",
                },
                {
                  title: "Streamlined Oversight",
                  img: "/why/in-house-Streamlined Oversight.jpeg",
                },
                {
                  title: "Consistent Quality",
                  img: "/why/in-house-Consistent-Quality.jpeg",
                },
                {
                  title: "Client Trust",
                  img: "/why/in-houseClient Trust.jpeg",
                },
              ].map((point, i) => (
                <CarouselItem
                  key={i}
                  className="group md:basis-1/2 !p-0 lg:basis-1/3 bg-slate-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="group border bg-yellow-500 border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                    <div className="relative h-[300px] w-full bg-amber-100">
                      <Image
                        src={point.img}
                        alt={point.title}
                        fill
                        className="object-cover  group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-center  text-gray-50 text-sm font-semibold group-hover:text-amber-50 transition-colors duration-300">
                        {point.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="my-6 flex justify-end gap-2">
            <button
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
              className="bg-yellow-500 disabled:bg-slate-400 cursor-pointer text-white p-2 rounded-full"
            >
              <ArrowLeft />
            </button>
            <button
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
              className="bg-yellow-500 disabled:bg-slate-400 cursor-pointer text-white p-2 rounded-full"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
