import { ArrowRight } from "lucide-react";
import BgLayer from "./BgLayer";
import Link from "next/link";
export default function EngineeringCTA({
  title,
  desc,
  btn = "Get Started Now",
}: {
  title?: string;
  desc?: string;
  btn?: string;
}) {
  return (
    <section className="relative rounded-xl overflow-hidden bg-gradient-to-b from-amber-400 via-yellow-400 to-amber-500 my-24 container max-w-5xl mx-auto">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-12 w-48 h-48 border-4 border-white border-dashed rounded-full opacity-10 pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 border-8 border-white border-dotted rounded-full opacity-10 pointer-events-none z-0" />

      {/* Background Decorative Layer */}
      <div className="absolute inset-0 z-0">
        <BgLayer />
      </div>

      {/* Foreground CTA Content */}
      <div className="relative z-10 text-white overflow-hidden py-8">
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-amber-50">
            {title}
          </h2>

          <p className="text-white text-opacity-90 max-w-3xl mx-auto mb-8">
            {desc}
          </p>

          <Link
            href={"/Contact"}
            className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-100 transition duration-300"
          >
            {btn}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
