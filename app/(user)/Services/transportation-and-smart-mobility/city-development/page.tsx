"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Map,
  Leaf,
  Compass,
  Building2,
  BarChart3,
  BadgeCheck,
} from "lucide-react";
import { motion } from "motion/react";
export default function Page() {
  const tools = [
    {
      title: "Environmental Impact & Sustainability Assessment Tools",
      icon: Leaf,
    },
    {
      title: "Economic Growth & Development Modeling Platforms",
      icon: BarChart3,
    },
    {
      title: "Conceptual Architecture & Urban Branding Frameworks",
      icon: Building2,
    },
    {
      title: "Geospatial Intelligence & Mapping Systems",
      icon: Map,
    },
    {
      title: "Wayfinding, Signage & Orientation Design Tools",
      icon: Compass,
    },
  ];

  const focusAreas = [
    {
      title: "Master Planning & Urban Design",
      desc: "We develop integrated master plans that balance land use, mobility, and community growth. Our designs foster mixed-use, transit-oriented, and sustainable neighborhoods that enhance quality of life and long-term urban resilience.",
      img: "/Transportation-mobility/city-analytics/urban-design.jpg",
    },
    {
      title: "Sustainability & Resilience",
      desc: "We embed sustainability and climate resilience into every phase of planning, addressing carbon reduction, renewable integration, and adaptive urban strategies that safeguard communities from environmental risks.",
      img: "/Transportation-mobility/city-analytics/sustainable-infra.webp",
    },
    {
      title: "Urban Analytics & Smart City Tools",
      desc: "Using advanced data analytics, GIS mapping, and simulation tools, we enable smarter decision-making for cities—optimizing mobility, energy use, and infrastructure performance through evidence-based insights.",
      img: "/Transportation-mobility/city-analytics/smartCity-tool.avif",
    },
    {
      title: "Community Engagement & Social Planning",
      desc: "Inclusive engagement ensures people are at the heart of planning. We facilitate consultations, social impact studies, and cultural assessments to align development with community aspirations and values.",
      img: "/Transportation-mobility/city-analytics/smart-city.webp",
    },
    {
      title: "Implementation & Phased Development",
      desc: "From feasibility to delivery, we support clients with clear phasing, zoning, and regulatory strategies, ensuring projects transition from vision to execution efficiently and sustainably.",
      img: "/Transportation-mobility/city-analytics/hero.webp",
    },
  ];

  const points = [
    "Multidisciplinary expertise across planning, engineering, design, and sustainability.",
    "Extensive experience delivering large-scale, high-impact urban projects.",
    "Technology-driven solutions integrating GIS, BIM, and advanced digital modeling.",
    "Commitment to sustainable, resilient, and inclusive urban development.",
    "Strong collaboration with government entities and private sector partners.",
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-green-500">City</span> Development
            </h1>
            <p>
              With cities growing rapidly and facing challenges such as climate
              change, population pressures, and shifting economies, strategic
              urban development is essential. At Milestone PM, we combine
              expertise in urban design, infrastructure, environment, and
              economics to create cities that are functional, sustainable, and
              people-centered.
              <span className="mt-2" /> From initial concept to implementation,
              our city development solutions focus on enhancing livability,
              supporting long-term growth, and protecting natural resources.
              Whether it’s a new urban district, mixed-use development, or
              rejuvenating an existing area, we provide practical strategies
              that are future-ready and aligned with global sustainability
              standards.
            </p>
          </div>
          <div className="w-full h-[300px] lg:h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/city-analytics/smart-city.jpg"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-green-400/5">
        <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12">
          {/* Image Left */}
          <div className="w-full h-[300px] lg:h-[400px] bg-slate-50 rounded-lg">
            <img
              src={"/Transportation-mobility/city-analytics/saudi-tech.jpg"}
              className="w-full h-full object-cover"
              alt={""}
            />
          </div>

          {/* Content Right */}
          <div className="w-full space-y-2">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Where <span className="text-green-500">Strategy</span> Meets{" "}
              <span className="text-yellow-500">Technology</span>
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              We lead the way in applying analytics and simulation tools to
              real-world urban challenges. Our specialists develop
              performance-based models, interactive planning tools, and digital
              dashboards to visualize trends, test scenarios, and measure
              outcomes across a city’s lifecycle, from land use and energy to
              mobility, infrastructure, and climate resilience.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our City Analytics services support both public and private sector
              clients in making informed, data-driven decisions, ensuring urban
              development is not only visionary but also measurable and
              actionable.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Our <span className="text-green-500">City Development</span>{" "}
              Approach
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className=" rounded-2xl shadow-md overflow-hidden border border-border"
              >
                <div className="bg-slate-50 w-full h-[250px]">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-xl mb-1 font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              <span className="text-yellow-500">Tools</span> We Use
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl shadow-md p-8 border border-border flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-yellow-100  rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {tool.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Why Choose Milestone PM?
            </h2>
          </div>

          {/* Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-md border border-border"
              >
                <div className="flex-shrink-0">
                  <BadgeCheck className="w-6 text-white  h-6 fill-green-500" />
                </div>
                <p className="text-base text-muted-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        {" "}
        <EngineeringCTA
          title="Shaping the Cities of Tomorrow"
          desc="Milestone PM helps you design, plan, and deliver urban environments that are smart, sustainable, and adaptable. Together, we can create cities that enhance quality of life, support economic growth, and stand resilient for future generations."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
