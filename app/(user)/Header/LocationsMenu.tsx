"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LocationMenu = () => {
  const locationsites = [
    {
      label: "Multi-Sector Solutions",
      href: "/digital-solutions/multi-sector-digital-solutions",
      img: "/digital/1703111233282.jpeg",
    },
    {
      label: "Digital Solutions",
      href: "/digital-solutions/intelligent-digital-solutions",
      img: "/digital/server.jpg",
    },
    {
      label: "Resilience & Environmental Solutions",
      href: "/digital-solutions/resilience-and-environmental-digital-solutions",
      img: "/digital/environment.jpg",
    },
    {
      label: "Transport & Mobility Solutions",
      href: "/digital-solutions/transport-and-mobility-Digital-Solutions",
      img: "/digital/transportaiton.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className="">
        <h1 className="text-xl mb-4 font-[700]">Our Digital Solutions</h1>
        <ul className="grid  grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
          {locationsites.map((location, index) => (
            <motion.li
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: [0.19, 1, 0.22, 1],
              }}
              exit={{ y: -100 }}
              key={index}
            >
              <Link
                href={location.href}
                className=" text-lg w-full rounded-lg "
              >
                <div className="h-[150px] lg:h-[350px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={`${location.img}`}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-sm font-[600] mt-4">{location.label}</h2>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationMenu;
