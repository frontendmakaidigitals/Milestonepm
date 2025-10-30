import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const Marquee = () => {
  const Icons = [
    { title: "AutoCAD", img: "autocad.webp" },
    { title: "Autodesk", img: "autodesk.webp" },
    { title: "ETABS", img: "etabs.webp" },
    { title: "ETAP", img: "etap.webp" },
    { title: "Gsuite", img: "Gsuite-logo.webp" },
    { title: "HAP", img: "hap.webp" },
    { title: "Lumion", img: "lumion.webp" },
    { title: "Microsoft Office", img: "msOffice.webp" },
    { title: "Primavera P6 (Oracle)", img: "p6Oracle.webp" },
    { title: "Revit", img: "revit.webp" },
    { title: "Microsoft Teams", img: "Teams.webp" },
    { title: "Tekla", img: "Tekla.webp" },
    { title: "V-Ray", img: "v-ray.webp" },
  ];

  return (
    <section className="py-20">
      <h1 className="text-3xl  lg:text-4xl text-center max-w-xl mx-auto font-[600]">
        <span className="text-yellow-600">Smart Solutions</span> with Precise
        Results
      </h1>

      <div className="mt-7">
        {" "}
        <InfiniteMovingCards
          dir={"Icon"}
          items={Icons}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Marquee;
