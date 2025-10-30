"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Globe2, Cpu, FileCheck, Users, BadgeCheck } from "lucide-react";

export default function Page() {
  const items = [
    {
      title: "Early Integration",
      desc: "Engage in project design from the outset to anticipate permitting requirements and prevent costly delays.",
      icon: FileCheck,
    },
    {
      title: "Technology-Enhanced Assessments",
      desc: "Leverage drones, GIS, and web-based platforms for faster, more accurate data collection and analysis.",
      icon: Cpu,
    },
    {
      title: "Stakeholder Collaboration",
      desc: "Facilitate transparent consultations to build trust, align interests, and accelerate project approvals.",
      icon: Users,
    },
    {
      title: "Global Expertise",
      desc: "Access multidisciplinary specialists with proven experience across regions and industries to ensure high-quality outcomes.",
      icon: Globe2,
    },
  ];

  const services = [
    {
      title: "Baseline Environmental Surveys",
      desc: "Conduct ecological, biological, and environmental studies to identify sensitive habitats, species, and resources critical for informed decision-making.",
      img: "/Environment-Sustainability/climate-response/climate-risk.webp",
    },
    {
      title: "Cultural & Heritage Assessments",
      desc: "Evaluate historical, archaeological, and cultural sites to ensure their protection and compliance with local and international heritage regulations.",
      img: "/Environment-Sustainability/climate-response/heritage.jpg",
    },
    {
      title: "Digital Environmental Analysis",
      desc: "Deliver interactive environmental reports and GIS-based maps using drones and digital platforms to accelerate permitting and improve transparency.",
      img: "/Environment-Sustainability/climate-response/digital.webp",
    },
    {
      title: "Ecological Restoration & Sustainable Design",
      desc: "Design and implement habitat restoration, sustainable landscapes, and resilient ecosystems that promote biodiversity and long-term environmental health.",
      img: "/Environment-Sustainability/Environmental Assessment/Environmental-Planning.webp",
    },
    {
      title: "Impact Assessments & Compliance Documentation",
      desc: "Prepare environmental and social impact assessments aligned with both local and international regulatory frameworks for smooth project approvals.",
      img: "/Environment-Sustainability/Environmental Assessment/Noise Impact Assessments.webp",
    },
    {
      title: "Mitigation Planning & Monitoring",
      desc: "Develop and implement strategies to minimize environmental impacts during construction and operations, supported by continuous monitoring programs.",
      img: "/Environment-Sustainability/Environmental Assessment/climate-chnage.webp",
    },
    {
      title: "Policy Development & Advisory",
      desc: "Assist organizations in crafting and implementing environmental policies that align with best practices, sustainability goals, and compliance standards.",
      img: "/Environment-Sustainability/Environmental Assessment/policies.jpg",
    },
    {
      title: "Permit Acquisition & Regulatory Support",
      desc: "Manage environmental permitting processes, negotiate with regulatory bodies, and resolve compliance challenges efficiently and proactively.",
      img: "/Environment-Sustainability/Environmental Assessment/permit.webp",
    },
    {
      title: "Site Feasibility & Program Oversight",
      desc: "Assess site suitability, guide environmental approval processes, and provide end-to-end program management to support sustainable project delivery.",
      img: "/Environment-Sustainability/Environmental Assessment/Digital Analyses-Data Conveyance.webp",
    },
   
  ];

  const reasons = [
    {
      title: "Global Expertise",
      desc: "Access to a worldwide network of environmental and permitting specialists with proven regional experience and international best practices.",
    },
    {
      title: "End-to-End Support",
      desc: "Comprehensive guidance from feasibility assessments through permitting, monitoring, and post-project reporting.",
    },
    {
      title: "Cultural Heritage Knowledge",
      desc: "Deep expertise in archaeology, anthropology, and heritage management ensures protection of cultural assets and compliance with regulations.",
    },
    {
      title: "Biodiversity & Species Protection",
      desc: "Specialists leveraging advanced methodologies and digital tools to ensure compliance and promote ecological conservation.",
    },
    {
      title: "Digital-First Reporting",
      desc: "Interactive, web-based environmental assessments that enhance transparency and accelerate approval timelines.",
    },
    {
      title: "Proven Track Record",
      desc: "A strong history of successful environmental compliance and permitting across diverse sectors and geographies.",
    },
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-green-500">Environmental</span> Compliance
            </h1>
            <p>
              At Milestone PM, we provide efficient, reliable, and
              forward-thinking environmental compliance and permitting solutions
              that allow projects to progress confidently. By combining
              innovative technologies, advanced data collection, and extensive
              global expertise, we help clients assess, manage, and mitigate
              environmental and social impacts while ensuring full regulatory
              compliance. <span className="mt-2" /> From drone-based site
              surveys to interactive digital reporting tools, our approach
              streamlines environmental studies, enhances decision-making, and
              builds trust with regulators, stakeholders, and communities. We
              serve energy, industrial, transportation, and government sectors,
              ensuring projects meet compliance requirements while supporting
              sustainability and community engagement.
            </p>
          </div>
          <div className="w-full h-[270px] lg:h-[400px] bg-slate-100 rounded-lg">
            <img
              src={
                "/Environment-Sustainability/Environmental Assessment/hero.webp"
              }
              className="w-full h-full object-cover"
              alt={"environmental assesment hero"}
            />
          </div>
        </div>
      </section>
      <section className="py-20 container ">
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-12">
            Our <span className="text-yellow-600">Approach</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex bg-amber-100 p-3 rounded-lg items-start gap-4">
                <div className="p-3 bg-amber-100/70 rounded-xl">
                  <item.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-green-600">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-green-100 p-1 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 mt-1">
                  <h3 className=" text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose <span className="text-yellow-500">Milestone PM?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex bg-amber-100 p-3 rounded-xl items-start space-x-4"
              >
                <span>
                  <BadgeCheck className="w-7 h-7 fill-green-500 text-white flex-shrink-0 mt-1" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Build Smarter, Sustainable Projects"
          desc="At Milestone PM, we go beyond regulatory compliance. We help clients achieve faster approvals, minimize risks, and strengthen relationships with communities while protecting the environment. Whether developing new infrastructure, upgrading existing facilities, or restoring ecosystems, our Environmental Compliance team delivers results with efficiency, accuracy, and innovation."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
