"use client";
import { motion } from "motion/react";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import type { ServiceCategory } from "../utils/site";
import BgLayer from "../app_chunks/BgLayer";

type ServicesProps = {
  services: ServiceCategory[];
};
const ServicesMenu: React.FC<ServicesProps> = ({ services }) => {
  const images = [
    { img: "/view-all.jpg", href: "/services", label: "View all services" },
    { img: "/contact-us.jpg", href: "/Contact", label: "Contact us" },
  ];
  return (
    <div className="flex justify-between gap-10 ">
      <div className="">
        <ul className="flex gap-12">
          {services.map((service, index) => (
            <li key={index} className="">
              <h3 className="text-xl mb-4 font-[600]">{service.label}</h3>
              {service.children && (
                <ul className="space-y-3 mt-4">
                  {service.children.map((child, idx) => (
                    <Link
                      href={child.href}
                      key={idx}
                      className="block text-lg w-full rounded-lg py-[.4rem] font-medium transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:px-6"
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
      <div className="grid flex-1 max-w-2xl grid-cols-2 gap-5">
        {images.map((item, idx) => (
          <Link href={item.href} className="max-h-[350px] min-h-[350px]" key={idx}>
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
