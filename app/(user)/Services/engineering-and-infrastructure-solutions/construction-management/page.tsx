"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import {
  FileSearch,
  CalendarClock,
  Goal,
  Users,
  Ruler,
  ShieldAlert,
  UserCog,
  Hammer,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";

const specialCapabilities = [
  "Commercial & Mixed-Use Developments",
  "Residential & Villa Projects",
  "Industrial & Infrastructure Projects",
  "Institutional & Civic Developments",
  "Post-Construction Advisory & Handover Services",
];

const differentiators = [
  {
    title: "Leadership-Driven Approach",
    desc: "Our leadership team is directly involved in every project, ensuring technical insight, fast decision-making, and top-quality delivery.",
    image: "/Engineering-Infrastructure/construction/Strategy.webp", // leadership / team direction
  },
  {
    title: "Integrated In-House Capabilities",
    desc: "We combine architecture, engineering, and project management under one umbrella — creating smooth coordination and cost efficiency.",
    image: "/Engineering-Infrastructure/construction/inhouse.webp", // integrated team / collaboration
  },
  {
    title: "Certified & Trusted Experts",
    desc: "We follow international standards and industry best practices, ensuring full compliance, quality assurance, and reliable outcomes.",
    image: "/Engineering-Infrastructure/construction/certified.webp", // certification / quality assurance
  },
  {
    title: "Proven Track Record",
    desc: "Our portfolio includes a range of large-scale developments across the UAE and GCC, showcasing our ability to deliver complex projects successfully.",
    image: "/Engineering-Infrastructure/construction/track-record.webp", // successful projects / skyline
  },
  {
    title: "Technology-Driven Project Delivery",
    desc: "We use modern tools and software like BIM, Primavera, and digital dashboards to monitor performance, minimize risk, and ensure transparency throughout the project.",
    image: "/Engineering-Infrastructure/construction/tech-driven.webp", // technology / digital monitoring
  },
];

const keyResponsibilities = [
  {
    title: "Project Feasibility & Initial Studies",
    icon: FileSearch,
  },
  {
    title: "Defining Project Scope, Budgets, and Schedules",
    icon: CalendarClock,
  },
  {
    title: "Strategic Development & Execution Planning",
    icon: Goal,
  },
  {
    title: "Program & Resource Management",
    icon: Users,
  },
  {
    title: "Design Coordination & Buildability Review",
    icon: Ruler,
  },
  {
    title: "Risk Assessment and Mitigation",
    icon: ShieldAlert,
  },
  {
    title: "Project Team Coordination",
    icon: UserCog,
  },
  {
    title: "Construction Supervision & Site Management",
    icon: Hammer,
  },
  {
    title: "Health, Safety & Environmental (HSE) Compliance",
    icon: ShieldCheck,
  },
  {
    title: "Quality Assurance & Final Handover",
    icon: BadgeCheck,
  },
];

const lifecyclePhases = [
  {
    title: "Project Feasibility & Analysis",
    image: "/Engineering-Infrastructure/construction/Project Feasibility.webp",
  },
  {
    title: "Objective Setting & Stakeholder Alignment",
    image: "/Engineering-Infrastructure/construction/Stakeholder.webp",
  },
  {
    title: "Budgeting, Scheduling & Scope Definition",
    image: "/Engineering-Infrastructure/construction/Budgeting.webp",
  },
  {
    title: "Strategy Development & Planning",
    image: "/Engineering-Infrastructure/construction/Strategy.webp",
  },
  {
    title: "Design Management & Risk Mitigation",
    image: "/Engineering-Infrastructure/construction/Strategy Development.webp",
  },
  {
    title: "Resource Allocation & Team Coordination",
    image: "/Engineering-Infrastructure/construction/team.webp",
  },
  {
    title: "Progress Monitoring & Communication Flow",
    image: "/Engineering-Infrastructure/construction/progress.webp",
  },
  {
    title: "On-Site Construction Management",
    image: "/Engineering-Infrastructure/construction/Construction.webp",
  },
  {
    title: "Safety & Environmental Compliance",
    image: "/Engineering-Infrastructure/construction/safety.webp",
  },
  {
    title: "Quality Control, Close-Out & Handover",
    image: "/Engineering-Infrastructure/construction/quality.webp",
  },
];

export default function ConstructionManagementPage() {
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
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#8C7610]">
          Construction Management
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/Engineering-Infrastructure/construction/Construction.webp"}
          className="w-full h-full object-cover"
          alt={""}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At <strong>Milestone Project Management</strong>, we provide complete
          construction and project management services for infrastructure,
          engineering, and real estate developments. With years of hands-on
          experience and a commitment to excellence, our team ensures that every
          project is delivered on time, within budget, and to the highest safety
          and quality standards. From early planning to final handover, we
          manage every stage with precision, transparency, and care.
        </p>{" "}
      </section>
      {/* Features */}
      <section className="container my-20">
        <motion.h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
          Our Key <span className="text-yellow-500">Responsibilities</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {keyResponsibilities.map((item, i) => {
            const Icon = item.icon; // Extract the icon component
            return (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-xl shadow hover:shadow-md border overflow-hidden"
                initial="hidden"
                whileInView="visible"
                custom={i}
              >
                <div className="p-6 ">
                  <span>
                    <Icon className="w-10 h-10 text-yellow-500" />
                  </span>
                  <h3 className="font-semibold mt-4">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-sm max-w-3xl mx-auto text-center">
          We act as the main communication hub between clients, consultants,
          authorities, and contractors, ensuring smooth collaboration, fast
          decisions, and clear progress tracking at every step.
        </p>
      </section>
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className=" flex flex-col lg:flex-row items-center gap-5">
          <div>
            <motion.h2 className="text-4xl font-bold mb-2 text-start">
              Full <span className="text-yellow-500">Project Lifecycle</span>{" "}
              Expertise
            </motion.h2>

            <motion.p
              className="text-start "
              initial="hidden"
              whileInView="visible"
              custom={0}
            >
              Our experienced project managers oversee every stage of the
              construction lifecycle. From concept to commissioning, we apply a
              structured and proactive approach to ensure efficiency,
              accountability, and client satisfaction.
            </motion.p>
          </div>

          <div>
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
            <Carousel
              opts={{
                align: "start",
              }}
              setApi={setApi}
              className="!w-full"
            >
              <CarouselContent className="-ml-4 ">
                {lifecyclePhases.map((phase, i) => (
                  <CarouselItem
                    key={i}
                    className="basis-4/5 pt-5 relative lg:basis-1/3 pl-4" // <-- spacing added
                  >
                    <motion.h2 className="text-5xl lg:text-6xl z-10 left-8 text-white/80 font-bold absolute top-0 -translate-y-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]">
                      {i + 1}
                    </motion.h2>

                    <div className="bg-yellow-50 h-full relative shadow-sm">
                      <div className=" h-[400px] overflow-hidden rounded-lg relative">
                        <div className="absolute inset-0 w-full h-full bg-black/30" />
                        <Image
                          src={phase.image}
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                          alt={""}
                        />
                      </div>
                      <h3 className="font-semibold absolute text-xl max-w-[90%] text-slate-50 p-4 bottom-0  left-0">
                        {phase.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>{" "}
          </div>
        </div>
      </section>

      <section className="py-16 container">
        <motion.h2
          className="text-3xl lg:text-4xl max-w-3xl mx-auto font-semibold text-center mb-6"
          initial="hidden"
          whileInView="visible"
        >
          Technical Strength of
          <span className="text-yellow-500"> Milestone PM</span>
        </motion.h2>
        <motion.p
          className="text-center text-sm  lg:text-md max-w-4xl mb-10"
          initial="hidden"
          whileInView="visible"
        >
          With certified professionals, advanced tools, and a multidisciplinary
          team of engineers, architects, and planners, we handle projects of
          every scale and complexity. Whether it’s a commercial tower,
          residential development, industrial facility, or infrastructure
          project, we bring precision, innovation, and accountability to every
          stage.
        </motion.p>

        <motion.h3
          className="text-2xl text-amber-700 font-semibold mb-6"
          initial="hidden"
          whileInView="visible"
        >
          Special Capabilities
        </motion.h3>
        <ul className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {specialCapabilities.map((cap, i) => (
            <motion.li
              key={i}
              className=" bg-yellow-50 border border-yellow-200 p-4 rounded-lg"
              initial="hidden"
              whileInView="visible"
              custom={i}
            >
              <span className="">
                <BadgeCheck className="text-green-50 w-8 h-8 fill-green-400 mb-3" />
              </span>
              <span className="font-[500]">{cap}</span>
            </motion.li>
          ))}
        </ul>
      </section>
      <section className="py-16 container">
        <motion.h2
          className="text-3xl lg:text-4xl font-semibold text-center mb-3"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          What <span className="text-yellow-500">Sets Us</span> Apart
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto mb-12 text-gray-600"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            },
          }}
        >
          At Milestone Project Management, we don’t just manage projects — we
          create systems that ensure every milestone is achieved successfully.
          Our expertise, technology, and collaborative culture make us a trusted
          partner for clients across multiple sectors.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              className="bg-amber-100 border p-2 border-slate-500/10 rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="h-[280px] rounded-lg border border-slate-900/40 overflow-hidden w-full relative">
                <Image
                  src={item.image}
                  width={300}
                  height={400}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-yellow-900 font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-yellow-950">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Need Reliable Project Oversight?"
          desc="At Milestone Project Management, we bring structure, clarity, and confidence to your construction journey. From concept to completion, our team ensures your project is executed smoothly, safely, and successfully — so you can focus on long-term goals while we handle the details."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
