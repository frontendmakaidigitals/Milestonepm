"use client";
import Image from "next/image";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import {
  Compass,
  AlertTriangle,
  BarChart3,
  Layers,
  PackageCheck,
  Ruler,
  ClipboardCheck,
  Users,
  CircleDollarSign,
  CalendarClock,
  BadgeCheck,
  FileText,
  MonitorDot,
  Settings2,
} from "lucide-react";
export default function Page() {
  const services = [
    {
      title: "Program & Portfolio Strategy and Advisory",
      icon: Compass,
    },
    {
      title: "Project Planning, Coordination & Oversight",
      icon: ClipboardCheck,
    },
    {
      title: "Master Scheduling & Timeline Optimization",
      icon: CalendarClock,
    },
    {
      title: "Budgeting, Cost Forecasting & Financial Control",
      icon: CircleDollarSign,
    },
    {
      title: "Design Review & Quality Management",
      icon: Ruler,
    },
    {
      title: "Procurement & Delivery Planning",
      icon: PackageCheck,
    },
    {
      title: "Risk Identification & Mitigation Strategies",
      icon: AlertTriangle,
    },
    {
      title: "Contract Management & Dispute Resolution",
      icon: FileText,
    },
    {
      title: "Value Engineering & Cost Efficiency",
      icon: Settings2,
    },
    {
      title: "Performance Monitoring & Real-Time Reporting",
      icon: BarChart3,
    },
    {
      title: "Asset Lifecycle Assessment & Maintenance Planning",
      icon: Layers,
    },
    {
      title: "Stakeholder Engagement & Change Management",
      icon: Users,
    },
    {
      title: "Digital Program Dashboards & Analytics",
      icon: MonitorDot,
    },
  ];

  const points = [
    "Multidisciplinary teams with proven portfolio and program management expertise",
    "Extensive experience across infrastructure, urban, and multi-project developments",
    "Strong alignment with UAE and GCC strategic visions — innovation, sustainability, and resilience",
    "Transparent governance, reporting, and stakeholder engagement processes",
    "Digital-first approach with BIM, analytics, dashboards, and real-time performance tracking",
    "Best-practice methodologies customized for regional and regulatory contexts",
  ];

  return (
    <main className=" text-gray-900">
      <div className="container  my-10">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#B59410]">
          Program & Portfolio Management
        </h1>
      </div>
      <section className=" w-full h-[300px] lg:h-[500px] text-center ">
        <Image
          src={"/project-advisory/project-planning/hero2.jpg"}
          className="w-full h-full object-cover"
          alt={"Program Management Hero"}
          width={1200}
          height={800}
        />
      </section>
      <section className="px-4 max-w-5xl mt-10 mx-auto">
        <p className="mt-3 text-center w-full text-lg">
          At Milestone PM, we understand that managing today’s large-scale
          programs requires more than meeting schedules and budgets. It’s about
          aligning complex, multi-project initiatives with strategic, economic,
          social, and environmental objectives. Our Program & Portfolio
          Management services help public and private sector clients transform
          ambitious plans into sustainable, measurable results.
        </p>
        <p className="mt-3 text-center w-full text-lg">
          We bring clarity and oversight to extensive programs by accounting for
          urban dynamics, regulatory requirements, digital innovation, and
          long-term asset performance. Our multidisciplinary teams apply proven
          management frameworks, real-time analytics, and collaborative tools to
          guide programs from planning to delivery efficiently and
          transparently.
        </p>
      </section>
      <section className="py-16">
        <div className="container place-items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {" "}
            <h1 className="text-3xl lg:text-4xl text-amber-400 font-[600]">
              Strategic, Outcome-Focused Management
            </h1>
            <p className="mt-3">
              We work hand-in-hand with clients to define what success looks
              like from the outset — whether it’s improving operational
              efficiency, enhancing community value, or maximizing return on
              investment. By connecting individual projects to overall program
              benefits, we move beyond traditional project management to create
              lasting transformation.
              <br /> <br />
              Our role goes beyond coordination; we act as your strategic
              advisor, providing insight, governance, and monitoring throughout
              the lifecycle of your investments. Each milestone is managed to
              deliver measurable impact while maintaining alignment with broader
              objectives.
            </p>
          </div>
          <div className="h-[300px] lg:h-[450px] w-full bg-slate-100">
            <Image
              src={"/project-advisory/process-development/hero.webp"}
              alt={"Outcome Driven Leadership"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container ">
          <div className="text-center max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our <span className="text-amber-400">Program & Portfolio</span>{" "}
              <span className="text-blue-500">Capabilities</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Milestone PM’s solutions cover the full spectrum of program and
              portfolio management, from initial strategy to execution,
              tracking, and long-term asset planning. Our services include:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-amber-100/60 shadow-sm rounded-2xl hover:shadow-md transition"
              >
                <div className="p-3 rounded-xl bg-amber-100 text-yellow-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={
                  "/project-advisory/strategic-consulting/strategic-consulting.webp"
                }
                alt="Built for Scale"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Flexible Teams for{" "}
                <span className="text-amber-400">Complex Programs</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We customize each program team to match the size, sector, and
                complexity of the initiative. Our experts include specialists in
                engineering, finance, legal, sustainability, and digital
                systems. Whether managing a city-wide infrastructure program or
                a portfolio of mixed-use developments, we bring agility,
                insight, and alignment to every project.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-500">Technology-Enabled</span>{" "}
                Program Delivery
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Milestone PM leverages digital tools such as BIM, GIS, and
                integrated dashboards to enhance transparency, coordination, and
                decision-making. Clients gain real-time insights, predictive
                analytics, and actionable data, enabling proactive management,
                risk mitigation, and adaptive strategies.
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/project-advisory/project-management/digital.webp"
                alt="Digital Delivery"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container">
          {/* Heading */}
          <div className="text-center max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl max-w-5xl mx-auto font-bold">
              Why <span className="text-amber-400">Milestone PM?</span>
            </h2>
          </div>

          {/* Points Grid */}
          <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 lg:grid-cols-3">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex rounded-lg bg-amber-100 p-4 items-start gap-2"
              >
                <span className="mt-1">
                  <BadgeCheck className="w-7 h-7 text-white fill-green-500" />
                </span>
                <p className="text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Driving Results, Building Legacies"
          desc="At Milestone PM, we don’t just manage programs, we create long-term value. Our program and portfolio management solutions are designed to support strategic objectives, empower clients, and deliver transformative outcomes."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
