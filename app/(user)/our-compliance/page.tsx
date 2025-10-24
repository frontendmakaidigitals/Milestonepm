"use client";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import BgLayer from "../app_chunks/BgLayer";
import { motion } from "motion/react";
import EngineeringCTA from "@/app/(user)/app_chunks/CTA";
import Link from "next/link";
const codeItems = [
  "Commitment to legal and regulatory compliance across all operations.",
  "Clear ethical guidelines guiding every business decision and interaction.",
  "Zero tolerance for bribery, corruption, or any form of misconduct.",
  "Responsibility for ensuring health, safety, and environmental care in all projects.",
  "Promise of fairness, confidentiality, and transparency in every client relationship.",
];

export default function Page() {
  return (
    <main className="">
      <section className="min-h-[85vh] py-12 lg:py-0 overflow-hidden relative">
        <BgLayer />
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter  mb-4">
                Our Compliance
              </h1>
              <p className="text-lg text-gray-700">
                At Milestone Project Management, we believe that success is
                built on integrity, responsibility, and trust. Our commitment to
                compliance goes beyond following rules, it’s about doing
                business with honesty and fairness in everything we do. We make
                sure that our operations, partnerships, and project practices
                meet the highest ethical, legal, and professional standards
                across all the countries we work in.{" "}
                <span className="block mt-2" /> Our reputation is built not only
                on our technical excellence but also on our promise to act
                transparently and ethically at all times.
              </p>

              <Link
                href={"/Contact"}
                className="mt-6 w-fit bg-gradient-to-br flex justify-center items-center gap-3 from-[#FFC107] to-[#FB8C00] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition"
              >
                Discover Our Story <ArrowUpRight />
              </Link>
            </div>
            <div className="h-[450px] w-full bg-slate-100">
              <img
                src="/our division 2/heading.webp"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#B59410] text-center mb-12"
          >
            Our Ethical Culture
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-slate-100 lg:w-1/2 h-64 lg:h-[500px] relative rounded-xl overflow-hidden"
            >
              <Image
                src="/our-ethics.jpg" // replace with your image path
                alt="Ethical Culture"
                fill
                className="object-cover object-center w-full h-full rounded-xl"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <p>
                We maintain a strong culture of integrity within our
                organization. Every member of the Milestone PM team is expected
                to uphold ethical values, make responsible decisions, and act in
                the best interest of our clients and communities. We do not
                tolerate any form of unethical behavior, including corruption,
                bribery, or unfair practices. <span className="block mt-2" />{" "}
                Our leadership leads by example, ensuring that respect,
                accountability, and transparency guide every project and
                partnership.
              </p>

              {/* Training & Awareness */}
              <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
                  Training & Awareness
                </h3>
                <p className="mb-4">
                  We believe that compliance starts with awareness. All
                  employees receive regular training to understand our standards
                  of ethics and conduct. These sessions help our teams identify
                  and prevent risks while promoting a culture of honesty and
                  respect at work.
                </p>
                <ul className="space-y-2">
                  {[
                    "Understanding the company’s Code of Conduct",
                    "Recognizing and managing conflicts of interest",
                    "Anti-bribery and anti-corruption practices",
                    "Workplace respect and equal opportunity",
                    "Data protection and client confidentiality",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 fill-green-600 text-yellow-50 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  We review and update our training programs regularly to
                  reflect international best practices and evolving regulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#B59410] text-center mb-8"
          >
            Code of Conduct
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto  space-y-6 text-gray-700"
          >
            <p className="text-center">
              Our Code of Conduct is the foundation of how we operate. It
              defines clear principles and expectations for every employee,
              partner, and contractor associated with Milestone PM.
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeItems.map((item, i) => (
                <li
                  key={i}
                  className="flex bg-amber-100 p-2 rounded-lg items-start gap-3"
                >
                  <BadgeCheck className="w-5 h-5 text-yellow-50 fill-green-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs">
              This code is shared with all employees, consultants, and
              subcontractors to ensure a consistent standard of ethical behavior
              throughout every project.
            </p>
          </motion.div>
        </div>
      </section>
      <EngineeringCTA
        title=" Governance & Oversight"
        desc="To maintain high standards, our Compliance Committee, led by senior management, oversees all ethical and operational practices. The committee monitors compliance performance, conducts reviews, and ensures continuous improvement across all departments. We believe that accountability builds trust."
      />
    </main>
  );
}
