"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceCategory } from "../utils/site";
import BgLayer from "../app_chunks/BgLayer";

type ServicesProps = {
  services: ServiceCategory[];
  menuProp?: React.Dispatch<React.SetStateAction<boolean>>;
};
const ServicesMenu: React.FC<ServicesProps> = ({ services, menuProp }) => {
  const images = [
    { img: "/view-all.jpg", href: "/services", label: "View all services" },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 ">
      <div className="">
        <ul className="flex flex-col lg:flex-row gap-12">
          {services.map((service, index) => (
            <li key={index} className="">
              <h2 className="text-xl mb-4 font-[600]">{service.label}</h2>
              {service.children && (
                <ul className="space-y-3 mt-4">
                  {service.children.map((child, idx) => (
                    <Link
                      href={`/services${child.href}`}
                      key={idx}
                      onClick={() => {
                        if (menuProp) menuProp(false); // ✅ Only run if true
                      }}
                      className="block text-[1rem] w-full rounded-lg py-[.4rem] font-[400] transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:px-6"
                    >
                      {child.label}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid flex-1 lg:max-w-xs grid-cols-1 gap-5">
        {images.map((item, idx) => (
          <Link
            href={item.href}
            className=" max-h-[150px] lg:max-h-[300px] lg:min-h-[300px]"
            key={idx}
            onClick={() => {
              if (menuProp) menuProp(false); // ✅ Only run if true
            }}
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.1 * idx,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              }}
              exit={{ y: -200, opacity: 0 }}
              className="w-full h-full hover:shadow-md rounded-xl overflow-hidden relative"
            >
              <BgLayer />
              <Image
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
              <h2 className="text-xl text-white absolute bottom-4 left-3">
                {item.label}
              </h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesMenu;
