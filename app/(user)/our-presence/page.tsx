"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import EngineeringCTA from "../app_chunks/CTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/globals.css";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    country: "Kingdom of Saudi Arabia (KSA)",
    color: "from-purple-600 to-pink-500",
    img: "/locations/ksa.webp",
    content:
      "Our presence in Saudi Arabia highlights our role as a trusted partner in the Kingdom’s continued transformation. We deliver a wide range of project management, engineering, and advisory services that support infrastructure expansion and urban modernization across the region. By working closely with public and private sector clients, we help deliver projects that align with the Kingdom’s goals for growth, sustainability, and economic diversification. Our experienced team in KSA ensures that every project follows international standards, while adapting to local conditions and regulations. Through commitment, collaboration, and innovation, we continue to contribute to the Kingdom’s evolving built environment.",
  },

  {
    country: "Egypt",
    color: "from-amber-600 to-orange-500",
    img: "/locations/egypt.webp",
    content:
      "In Egypt, we are proud to be part of one of the region’s fastest-growing markets. Our team focuses on infrastructure, real estate, and transportation projects that support the nation’s rapid urban development. We deliver cost-efficient, sustainable, and high-quality project management and engineering solutions that help both public and private clients achieve their goals. With deep knowledge of local regulations and strong technical expertise, we bring international best practices to every stage of project delivery. Our work in Egypt reflects our mission to create long-term value through smart planning, sustainable design, and reliable project execution.",
  },
  {
    country: "United Arab Emirates (UAE)",
    color: "from-pink-600 to-rose-500",
    img: "/locations/uae.webp",
    content:
      "The United Arab Emirates is the center of our operations and the foundation of our success. From our head office in Dubai, we manage projects that shape the nation’s infrastructure, skyline, and communities. Our work includes real estate, smart city, transportation, and large-scale infrastructure projects, designed to meet the UAE’s ambitious growth and sustainability goals. With a diverse and talented team, we bring together innovation, accuracy, and strong project controls to ensure every project is delivered on time and within scope. As a leading project management company in Dubai, we are proud to support the UAE’s long-term vision for development and sustainability.",
  },
  {
    country: "India",
    color: "from-indigo-600 to-yellow-500",
    img: "/location/red-fort.webp",
    content:
      "Our presence in India strengthens our ability to deliver world-class solutions across South Asia. India’s dynamic market allows us to combine local insights with global project management expertise, offering solutions that meet diverse client needs. We focus on infrastructure, construction, and urban development projects, where efficiency, innovation, and precision make the difference. By investing in skilled professionals and digital tools, we ensure every project is completed with the highest level of safety, quality, and cost control. Through our operations in India, we aim to support regional growth while empowering local talent to be part of global-standard developments.",
  },
];

export default function OurPresence() {
  return (
    <section className="relative overflow-hidden">
      {/* Heading */}
      <section className="text-start container my-10">
        <h1 className="text-4xl lg:text-5xl text-yellow-600 font-bold">
          Our Presence
        </h1>
      </section>

      <section className="h-[500px] w-full">
        <Image
          width={900}
          height={400}
          src="https://images.pexels.com/photos/335394/pexels-photo-335394.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-5xl mx-auto mt-10">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          At Milestone Project Management, we bring together global expertise
          and local understanding to deliver successful projects across the
          region. Headquartered in Dubai, United Arab Emirates, we have expanded
          our footprint to Saudi Arabia, Egypt, and India. Each of our offices
          operates with the same commitment to deliver high-quality project
          management, engineering consultancy, and construction advisory
          services that add value to every stage of development. By combining
          modern technology, proven project delivery systems, and experienced
          professionals, we help our clients build projects that are
          sustainable, efficient, and future-ready.
        </p>
      </section>

      {/* Office Cards */}
      <div className="container grid grid-cols-1 mt-16">
        {offices.map((office, idx) => (
          <OfficeCard
            length={offices.length}
            key={office.country}
            office={office}
            idx={idx}
          />
        ))}
      </div>

      <EngineeringCTA
        title="Partner With Us, Wherever You Are"
        desc="From the Middle East to Europe and beyond, our teams are ready to deliver innovative, sustainable, and future-ready engineering solutions tailored to your market."
      />
    </section>
  );
}

function OfficeCard({
  office,
  idx,
  length,
}: {
  office: { country: string; img: string; content: string };
  idx: number;
  length: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const img = wrapper.querySelector<HTMLImageElement>("img.img-project");
    if (!img) return;

    // Ensure image is hidden until reveal starts
    img.style.opacity = "0";

    // Use the resolved image URL from Next/Image
    const src = (img as HTMLImageElement).currentSrc || img.src;

    // Create 9 masks
    const initialClipPaths = [
      "polygon(0 0,0 0,0 0,0 0)",
      "polygon(33.33% 0,33.33% 0,33.33% 0,33.33% 0)",
      "polygon(66.66% 0,66.66% 0,66.66% 0,66.66% 0)",
      "polygon(0 33.33%,0 33.33%,0 33.33%,0 33.33%)",
      "polygon(33.33% 33.33%,33.33% 33.33%,33.33% 33.33%,33.33% 33.33%)",
      "polygon(66.66% 33.33%,66.66% 33.33%,66.66% 33.33%,66.66% 33.33%)",
      "polygon(0 66.66%,0 66.66%,0 66.66%,0 66.66%)",
      "polygon(33.33% 66.66%,33.33% 66.66%,33.33% 66.66%,33.33% 66.66%)",
      "polygon(66.66% 66.66%,66.66% 66.66%,66.66% 66.66%,66.66% 66.66%)",
    ];

    const finalClipPaths = [
      "polygon(0 0,33.33% 0,33.33% 33.33%,0 33.33%)",
      "polygon(33.33% 0,66.66% 0,66.66% 33.33%,33.33% 33.33%)",
      "polygon(66.66% 0,100% 0,100% 33.33%,66.66% 33.33%)",
      "polygon(0 33.33%,33.33% 33.33%,33.33% 66.66%,0 66.66%)",
      "polygon(33.33% 33.33%,66.66% 33.33%,66.66% 66.66%,33.33% 66.66%)",
      "polygon(66.66% 33.33%,100% 33.33%,100% 66.66%,66.66% 66.66%)",
      "polygon(0 66.66%,33.33% 66.66%,33.33% 100%,0 100%)",
      "polygon(33.33% 66.66%,66.66% 66.66%,66.66% 100%,33.33% 100%)",
      "polygon(66.66% 66.66%,100% 66.66%,100% 100%,66.66% 100%)",
    ];

    // Ensure wrapper is the stacking context
    wrapper.style.position = "relative";

    const masks: HTMLDivElement[] = [];
    for (let i = 0; i < 9; i++) {
      const mask = document.createElement("div");
      mask.className = "mask-tile";
      Object.assign(mask.style, {
        position: "absolute",
        inset: "0",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: initialClipPaths[i],
        transform: "translateZ(0)",
        willChange: "clip-path",
        zIndex: "2",
      } as CSSStyleDeclaration);
      wrapper.appendChild(mask);
      masks.push(mask);
    }

    // Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 75%",
        once: true,
      },
      defaults: { ease: "power4.out" },
      onComplete: () => {
        img.style.opacity = "1";
        masks.forEach((m) => m.remove());
        ScrollTrigger.refresh();
      },
    });

    // Optional: subtle image zoom-out while tiles reveal
    tl.fromTo(
      img,
      { scale: 1.08 },
      { scale: 1, duration: 0.2, ease: "power3.out" },
      0
    );

    const order = [[0], [1, 3], [2, 4, 6], [5, 7], [8]];
    order.forEach((group, i) => {
      tl.to(
        group.map((idx) => masks[idx]),
        {
          // map each element to its corresponding final clip-path
          clipPath: (index: number) => finalClipPaths[group[index]],
          duration: 0.4,
          stagger: 0.06,
        },
        i * 0.18
      );
    });

    // Cleanup
    return () => {
      tl.kill();
      masks.forEach((m) => m.remove());
    };
  }, [office.img]);

  return (
    <div
      className={`grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 ${
        length - 1 !== idx ? "border-b py-10 border-slate-500/30" : "pt-10"
      } overflow-hidden`}
    >
      {/* Image Wrapper */}
      <div
        ref={wrapperRef}
        className={`relative w-full h-[450px] overflow-hidden shadow-lg ${
          idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={office.img}
          alt={office.country}
          fill
          className="img-project object-cover w-full h-full"
          data-animate="true"
        />
      </div>

      {/* Content */}
      <div className={`${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
        <h2 className="text-4xl lg:text-5xl py-1 font-[600] mb-3 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
          <span className="text-5xl lg:text-6xl text-gray-700">0{idx + 1}</span>{" "}
          {office.country}
        </h2>
        <p className="text-gray-700 leading-relaxed">{office.content}</p>
      </div>
    </div>
  );
}
