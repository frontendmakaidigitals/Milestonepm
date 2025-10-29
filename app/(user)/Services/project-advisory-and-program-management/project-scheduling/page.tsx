"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Users,
  Workflow,
  Building2,
  Cpu,
  Landmark,
  CheckCircle,
  Leaf,
} from "lucide-react";
export default function Page() {
  const capabilities = [
    "Early Feasibility Assessment & Pre-Planning",
    "Strategic Project Frameworks & Roadmaps",
    "Master Scheduling & Phased Development Plans",
    "Land Use & Site Coordination Planning",
    "Urban and Regional Policy Alignment",
    "Budgeting & Resource Allocation Plans",
    "Risk Identification & Mitigation Strategies",
    "Regulatory Liaison & Compliance Monitoring",
    "Stakeholder Communication & Coordination",
    "Infrastructure Sequencing & Utility Scheduling",
  ];

  const lifecycle = [
    "Feasibility Studies & Objective Setting",
    "Scope Definition, Scheduling & Resource Planning",
    "Development Strategy & Program Alignment",
    "Design Coordination & Constructability Reviews",
    "Risk Assessment & Performance Monitoring",
    "Construction Phase Sequencing & Supervision",
    "Health, Safety, and Environmental (HSE) Planning",
    "Project Closeout, Handover & Evaluation",
  ];

  const reasons = [
    {
      icon: Users,
      text: "Multidisciplinary team with expertise in engineering, planning, and resource management",
    },
    {
      icon: Workflow,
      text: "End-to-end scheduling support from feasibility to project handover",
    },
    {
      icon: Landmark,
      text: "Strong collaboration with regulatory authorities, municipalities, and stakeholders",
    },
    {
      icon: Cpu,
      text: "Technology-driven approach using BIM, GIS, and simulation tools",
    },
    {
      icon: Building2,
      text: "Proven experience in large-scale urban, industrial, and mixed-use developments",
    },
    {
      icon: Leaf,
      text: "Commitment to sustainability, efficiency, and project excellence",
    },
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#B59410]">
          Project Scheduling
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/project-advisory/project-planning/hero.jpg"}
          className="w-full h-full object-cover "
          alt={"Project Planning"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, we provide comprehensive project scheduling services
          that ensure your developments are efficient, cost-effective, and
          future-ready. From early-stage feasibility to detailed execution
          plans, our experts combine technical expertise with strategic planning
          to guide every phase of your project lifecycle.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          Whether it’s urban infrastructure, private sector development, or
          large-scale regeneration, our scheduling team ensures that your
          project is carefully organized, compliant, and aligned with both
          client objectives and regulatory requirements.
        </p>
      </section>
      <section className="py-16">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {" "}
            <h1 className="text-4xl lg:text-5xl font-[600]">
              <span className="text-amber-400"> Strategic Scheduling</span> for
              Successful Projects
            </h1>
            <p className="mt-3">
              We adopt a proactive and data-driven approach to project
              scheduling, integrating advanced modeling, stakeholder input, and
              regulatory considerations. By combining engineering precision with
              strategic foresight, we deliver schedules that optimize resources,
              reduce risk, and improve overall project performance.
              <br /> <br />
              Our process uses cutting-edge tools, including BIM, GIS, and
              custom planning platforms, allowing us to provide solutions that
              support sustainable growth, operational efficiency, and long-term
              value.
            </p>
          </div>
          <div className="h-[300px] lg:h-[450px] w-full bg-slate-100">
            <Image
              src={"/project-advisory/project-planning/iamge2.jpg"}
              alt={"smart planning"}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Capabilities Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-3xl text-amber-500 font-bold mb-4">
              Our Project Scheduling Services
            </h2>
            <p className="text-gray-600 mb-6">
              Milestone PM’s services go beyond conventional timelines and Gantt
              charts. We create actionable schedules that balance creativity,
              practicality, and regulatory compliance.
            </p>
            <h3 className="text-lg font-semibold mb-4">
              Key services include:
            </h3>
            <ul className="space-y-3">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Life Cycle Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-3xl text-amber-500 font-bold mb-4">
              Managing the Project Lifecycle
            </h2>
            <p className="text-gray-600 mb-6">
              Our project managers follow globally recognized best practices,
              ensuring milestones are achieved on time, within budget, and at
              the highest quality standards.
            </p>
            <h3 className="text-lg font-semibold mb-4">
              We provide oversight across all stages of a project’s life cycle:
            </h3>
            <ul className="space-y-3">
              {lifecycle.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 ">
        <div className="container text-center ">
          <h1 className="lg:leading-[4.1rem] max-w-3xl mx-auto text-4xl lg:text-6xl font-[600] mb-3 bg-gradient-to-r from-yellow-600 via-fuchsia-400 to-yellow-600 bg-clip-text text-transparent">
            Sustainability & Resilience in Scheduling
          </h1>
          <p className="text-white text-lg max-w-4xl mx-auto">
            Sustainability is central to our scheduling philosophy. We assess
            long-term environmental, social, and economic impacts and integrate
            resilience strategies into every timeline. Whether planning smart
            urban districts, infrastructure networks, or complex multi-phase
            developments, our schedules are designed to perform today and adapt
            for the future.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-amber-400">Milestone PM</span> for
            Project Scheduling?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            We combine technical expertise, regulatory insight, and innovative
            tools to deliver planning strategies that align with client goals
            and national priorities.
          </p>

          {/* Grid */}
          <div className="grid container md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-100/50  rounded-2xl p-5 flex flex-col items-center justify-center  border border-yellow-400/20"
              >
                <div className="p-2 bg-amber-100 rounded-lg w-fit mb-4">
                  <item.icon className="w-10 h-10 text-yellow-600 " />
                </div>
                <p className="text-gray-700 ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Your Plan is Our Timeline"
          desc="From unlocking site potential to managing multi-phase programs, Milestone PM delivers project schedules that turn complex concepts into actionable, high-impact timelines. If you are looking for a trusted partner to structure, coordinate, and optimize your next project, we are ready to support your vision."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
