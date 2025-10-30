"use client";
import { motion } from "motion/react";
import React from "react";
import { SiteConfig } from "../utils/site";
import Image from "next/image";
import Link from "next/link";
import BgLayer from "../app_chunks/BgLayer";

type AboutMenuProps = {
  menu: { label: string; href: string }[];
  menuProp?: React.Dispatch<React.SetStateAction<boolean>>;
};
const AboutMenu: React.FC<AboutMenuProps> = ({ menu, menuProp }) => {
  const images = [
    { img: "/contact-us.jpg", title: "Contact us", href: "/Contact" },
    {
      img: "/collage.png",
      title: "Our Presence",
      href: "/our-presence",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      <div className="">
        <h1 className="text-xl hidden lg:block mb-4 font-[600]">About us</h1>
        <ul className="w-full min-w-2xs space-y-2">
          {menu.map((item, idx) => (
            <li key={idx} className="w-full">
              <Link
                onClick={() => {
                  if (menuProp) menuProp(false);
                }}
                href={item.href}
                className="block text-[1rem] w-full rounded-lg py-[.4rem] font-[400] transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:px-6"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-3 gap-5">
        {images.map((item, idx) => (
          <Link
            href={item.href}
            className={`max-h-[150px] lg:max-h-[350px]  ${
              idx == images.length - 1 ? "lg:col-span-2" : ""
            }`}
            key={idx}
            onClick={() => {
              if (menuProp) menuProp(false);
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
                {item.title}
              </h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutMenu;
