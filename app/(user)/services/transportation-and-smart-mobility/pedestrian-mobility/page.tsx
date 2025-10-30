"use client";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import { Building, Users, Footprints } from "lucide-react";

export default function Page() {
  const steps = [
    {
      title: "Built Environment Layout",
      desc: "Spatial configuration of corridors, entrances, exits, stairs, escalators, and open areas that define movement pathways.",
      icon: <Building className="w-8 h-8 text-yellow-600" />,
      img: "/Transportation-mobility/pedestrian-movement/Physical.webp", // mall/hallway
    },
    {
      title: "Pedestrian Volume",
      desc: "The number of people entering, exiting, or moving within a space over time — critical for assessing flow and congestion.",
      icon: <Users className="w-8 h-8 text-green-600" />,
      img: "/Transportation-mobility/pedestrian-movement/Pedestrian Volume.webp", // crowded street
    },
    {
      title: "Behavioral Patterns",
      desc: "Walking speed, group dynamics, crowd responses, and personal space preferences that influence movement behavior.",
      icon: <Footprints className="w-8 h-8 text-purple-600" />,
      img: "/Transportation-mobility/pedestrian-movement/Behavior.webp", // people walking
    },
  ];

  const variables = [
    {
      title: "Time-Based Movement",
      desc: "Analyze peak and off-peak pedestrian flows to understand congestion patterns and capacity needs throughout the day.",
      img: "/Transportation-mobility/pedestrian-movement/Time-Based Movement.webp", // busy metro crowd
    },
    {
      title: "Walking Speeds",
      desc: "Reflect diverse mobility profiles — including children, the elderly, passengers with luggage, and individuals with varied walking speeds.",
      img: "/Transportation-mobility/pedestrian-movement/walking footpath.webp", // people walking different speeds
    },
    {
      title: "Space Requirements & Footprint",
      desc: "Evaluate the physical space people occupy, factoring in luggage, bicycles, cultural preferences for personal space, and situational crowd tolerance.",
      img: "/Transportation-mobility/pedestrian-movement/user-spce.webp", // crowd in station
    },
  ];

  const cases = [
    {
      title: "Emergency & Evacuation Planning",
      desc: "Model evacuation scenarios and blocked exits to enhance crowd safety and improve emergency response strategies.",
    },
    {
      title: "Capacity Planning & Future-Proofing",
      desc: "Evaluate how increasing pedestrian volumes will impact space efficiency, comfort, and long-term performance.",
    },
    {
      title: "Design Optimization",
      desc: "Compare multiple layout configurations to identify the most effective and user-friendly design solution.",
    },
    {
      title: "Operational Planning for Events",
      desc: "Simulate peak-hour conditions, public gatherings, and seasonal surges for better crowd control and staffing decisions.",
    },
    {
      title: "Construction Phasing & Access Management",
      desc: "Analyze how temporary barriers, diversions, or phased construction affect pedestrian movement and accessibility.",
    },
  ];

  return (
    <main className=" text-gray-900">
      <section className="py-10">
        <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-[600]">
              Pedestrian Mobility
            </h1>
            <p>
              At Milestone PM, we design spaces where people move seamlessly,
              safely, and comfortably. Our Pedestrian Mobility services use
              advanced simulation tools to model real-world pedestrian behavior
              and crowd dynamics in any environment. From transit hubs and
              airports to shopping centers, stadiums, and public squares, we
              provide data-driven insights to improve traffic flow, prevent
              congestion, and enhance the overall user experience.{" "}
              <span className="mt-2" /> By understanding how people navigate,
              pause, and interact within a space, we help urban planners,
              developers, architects, and operators make informed decisions that
              prioritize efficiency, safety, and accessibility.
            </p>
          </div>
          <div className="w-full h-[400px] bg-slate-100 rounded-lg">
            <img
              src={"/Transportation-mobility/pedestrian-movement/hero.webp"}
              className="w-full h-full object-cover"
              alt={"pedestrian movement"}
            />
          </div>
        </div>
      </section>
      <section className="py-20 container">
        <div className=" ">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              How It Works: Dynamic Pedestrian Modeling
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our approach uses dynamic simulation software to replicate human
              movement patterns in realistic scenarios. Each analysis considers
              three critical components:
            </p>
          </div>

          {/* Grid */}
          <div className="grid max-w-6xl mx-auto md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg;text-5xl font-bold text-gray-900">
              Key Variables We Study
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our simulations incorporate real-life variability for more precise
              planning:
            </p>
          </div>

          {/* Grid with images */}
          <div className="grid md:grid-cols-3 gap-8">
            {variables.map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="/Transportation-mobility/pedestrian-movement/planning.webp" // replace with your choice
              alt="Measurable Outcomes"
              className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Measurable Outcomes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our simulations produce actionable results to guide design and
              operational strategies:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Space Utilization & Circulation Rates",
                "Crowd Density & Bottleneck Identification",
                "Queueing Behavior & Wait Times",
                "Flow Rates & Directional Movement",
                "Walk Time & Clearance Time",
                "Congestion Mapping & Risk Hotspots",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-yellow-600"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Applications & Use Cases
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our pedestrian modeling services are relevant across all project
              phases, from planning to post-occupancy evaluation. Common
              applications include:
            </p>
          </div>

          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-amber-100/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-yellow-500">
              Milestone Project Management?
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            With deep expertise in urban design, infrastructure planning, and
            simulation modelling, Milestone Project Management delivers
            practical, high-impact pedestrian movement insights tailored to your
            project goals. Our analysis helps you design inclusive, efficient,
            and future-ready spaces where people feel safe and confident moving.
          </p>
        </div>
      </section>
      <section className="container">
        <EngineeringCTA
          title="Why Choose Milestone PM?"
          desc="With expertise in urban planning, infrastructure design, and dynamic simulation, Milestone PM delivers practical, high-impact pedestrian mobility solutions. Our insights help you create inclusive, safe, and efficient spaces where people move with confidence."
          btn="Contact Us Today"
        />
      </section>
    </main>
  );
}
