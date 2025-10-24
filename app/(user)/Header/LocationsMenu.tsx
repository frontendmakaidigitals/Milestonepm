"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LocationMenu = () => {
  const locationsites = [
    { label: "UAE", href: "", img: "uae.webp" },
    { label: "KSA", href: "", img: "ksa.webp" },
    { label: "Egypt", href: "", img: "egypt.webp" },
    { label: "India", href: "", img: "red-fort.webp" },
  ];
  return (
    <div className="flex justify-between gap-10 ">
      <div className="">
        <h1 className="text-xl mb-4 font-[700]">Our Location Sites</h1>
        <ul className="grid grid-cols-4 gap-10">
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
                <div className="h-[350px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={`/location/${location.img}`}
                    alt=""
                    width={300}
                    height={300}
                    className=""
                  />
                </div>
                <h2 className="text-lg font-[600] mt-4">{location.label}</h2>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationMenu;
