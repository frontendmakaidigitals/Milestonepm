"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Building2,
  Star,
  Wrench,
  Globe2,
  Handshake,
  BadgeCheck,
  Users,
  ClipboardCheck,
  Layers,
} from "lucide-react";

import { Map, Leaf, Network } from "lucide-react";
export default function Page() {
  const planningData = [
    {
      title: "Comprehensive Master Planning",
      desc: "We develop strategic and detailed master plans that guide urban growth, infrastructure, and land-use patterns to achieve sustainable and future-ready cities.",
      image: "/urban-planning/city-planning/Master Planning.webp",
      icon: Map,
      points: [
        "Urban expansion and redevelopment strategies",
        "Mixed-use and residential community planning",
        "Economic and industrial development zones",
        "Transit-oriented and walkable city layouts",
        "Smart infrastructure and energy-efficient design",
      ],
    },
    {
      title: "Sustainability and Environmental Resilience",
      desc: "Our city plans integrate sustainability at every level — ensuring long-term resilience, resource efficiency, and environmental balance.",
      image: "/urban-planning/city-planning/Climate Resilience.webp",
      icon: Leaf,
      points: [
        "Low-carbon and energy-efficient city models",
        "Water conservation and waste management systems",
        "Urban greening and biodiversity enhancement",
        "Climate adaptation and risk mitigation strategies",
      ],
    },
    {
      title: "Data-Driven Urban Planning",
      desc: "We combine urban design expertise with advanced digital tools — leveraging GIS, analytics, and predictive modeling to inform smarter city decisions.",
      image: "/urban-planning/city-planning/Smart City.webp",
      icon: Network,
      points: [
        "GIS-based mapping and urban analytics",
        "Land-use and population density forecasting",
        "Transport and traffic flow simulations",
        "Smart city data integration frameworks",
      ],
    },
    {
      title: "Community-Centered Planning",
      desc: "Our planning process focuses on people — fostering inclusive, culturally aware, and community-driven urban environments.",
      image:
        "/Transportation-mobility/smart-infrastructure/global-connectivity.webp",
      icon: Users,
      points: [
        "Stakeholder engagement and consultation sessions",
        "Social impact studies and demographic analysis",
        "Cultural identity preservation and public realm design",
        "Policy and development guideline support",
      ],
    },
    {
      title: "Implementation and Delivery Strategy",
      desc: "We go beyond planning — supporting clients through execution, monitoring, and phased delivery to ensure that the city vision is realized sustainably.",
      image: "/Transportation-mobility/urban-mobility/freight-planning.webp",
      icon: ClipboardCheck,
      points: [
        "Phased infrastructure delivery planning",
        "Development zoning and land-use management",
        "Financial feasibility and cost assessment",
        "Progress tracking, monitoring, and evaluation",
      ],
    },
    {
      title: "Complementary Services",
      desc: "Supporting urban growth through environmental, economic, and design-focused complementary solutions.",
      image:
        "/Transportation-mobility/smart-infrastructure/smart-buildings.webp",
      icon: Layers,
      points: [
        "Environmental and social impact assessments",
        "Economic growth and investment promotion strategies",
        "Urban architecture and design identity creation",
        "Mapping and digital modeling solutions",
        "Signage, orientation, and wayfinding systems",
      ],
    },
  ];

  const services = [
    {
      title: "Environmental & Social Impact Assessments",
      image: "/urban-planning/city-planning/Environmental.webp",
    },
    {
      title: "Economic Growth & Investment Promotion",
      image: "/urban-planning/city-planning/Economic.webp",
    },
    {
      title: "Urban Architecture & Design Identity",
      image: "/urban-planning/city-planning/Concept Architecture.webp",
    },
    {
      title: "Mapping & Digital Modeling Solutions",
      image: "/urban-planning/city-planning/Geospatial.webp",
    },
  ];

  const points = [
    {
      title: "Multidisciplinary Expertise",
      desc: "Expertise spanning planning, engineering, and sustainability to deliver holistic urban solutions.",
      icon: Building2,
    },
    {
      title: "Experience with Large-Scale Developments",
      desc: "Proven success across major projects in the UAE and GCC, from master plans to complex infrastructure.",
      icon: Star,
    },
    {
      title: "Cutting-Edge Tools",
      desc: "Integration of BIM, GIS, and other digital technologies to enhance precision and collaboration.",
      icon: Wrench,
    },
    {
      title: "Sustainable Urban Vision",
      desc: "Focused on achieving measurable environmental outcomes through sustainable design and strategy.",
      icon: Globe2,
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          City Master Planning
        </h1>
      </div>
      <section className=" w-full h-[500px] text-center ">
        <Image
          src={"/Transportation-mobility/city-analytics/smart-city.jpg"}
          className="w-full h-full object-cover object-bottom"
          alt={"City planning Hero"}
          width={1200}
          height={400}
          loading="lazy"
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          As urban populations expand and global priorities shift toward
          sustainability, cities must evolve intelligently. At Milestone Project
          Management, we specialize in creating forward-looking city plans that
          combine innovation, livability, and environmental responsibility. Our
          team of planners, engineers, and sustainability experts collaborates
          to design cities that promote mobility, inclusion, and economic
          vitality, while protecting natural resources for generations to come.
          From vision to execution, our city master planning services deliver
          practical frameworks that align with the UAE Vision and global urban
          sustainability goals.
        </p>
      </section>
      <section className=" py-20 px-4 md:px-8">
        <div className="container mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-500">City Planning</span> Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe that great cities are built on thoughtful planning, not
            chance. Every city should tell a story, one that connects people,
            nature, and infrastructure in harmony.
          </p>
        </div>

        <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10">
          {planningData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className=" rounded-lg bg-amber-50/90 overflow-hidden">
                {/* Top image */}
                <div className="relative h-[300px] bg-slate-100 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full absolute bottom-0 translate-y-1/2 left-6">
                    <Icon className="text-yellow-600 w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 mt-3 space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <ul className=" text-gray-700 space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="">
                          <BadgeCheck className="text-white fill-green-500" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className=" py-20 px-4 md:px-8">
        <div className="container text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-green-500">Supporting</span> Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 container">
          {services.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative bg-slate-100 w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" py-20 px-6 md:px-12">
        <div className="container text-center mb-16">
          <h2 className="text-3xl lg:text-4xl  font-bold text-gray-900 mb-4">
            Why Choose <span className="text-yellow-500">Milestone PM?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering more than plans — we build purpose-driven, resilient
            cities with impact-focused partnerships and integrated expertise.
          </p>
        </div>

        <div className="grid container grid-cols-1 lg:grid-cols-4 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition p-6 text-left flex flex-col gap-4"
              >
                <div className="bg-yellow-100 p-3 w-fit rounded-md">
                  <Icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Building the Cities of Tomorrow"
          desc="At Milestone Project Management, we are dedicated to shaping urban environments that inspire progress and improve lives. Reach out to us today to explore how we can help you plan and deliver your next city, district, or community development, designed for the future, built for people."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
