"use client";
import React, { useState, useEffect } from "react";
import Logo from "../app_chunks/Logo";
import { siteConfig } from "../utils/site";
import type { SiteConfig } from "../utils/site";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import AboutMenu from "./About-menu";
import ServicesMenu from "./Services-menu";
import LocationMenu from "./LocationsMenu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../app_chunks/Accordion";
import type { NavItem, AboutNavItem, ServicesNavItem } from "../utils/site";
import { sortedLastIndexOf } from "lodash";
const Navbar = () => {
  const [currIdx, setCurrIdx] = useState<null | number>(null);
  const [prevIdx, setPrevIdx] = useState<null | number>(null);
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const menu: SiteConfig["navItems"] = siteConfig.navItems;
  function isAboutNavItem(item: NavItem): item is AboutNavItem {
    return "menus" in item;
  }

  function isServicesNavItem(item: NavItem): item is ServicesNavItem {
    return "services" in item;
  }
  const direction =
    prevIdx === null || currIdx === null
      ? null
      : currIdx > prevIdx
      ? "right"
      : "left";

  const hoverAnimation = {
    initial: { scaleY: 0, opacity: 0, originY: 1 },
    hover: {
      scaleY: 1,
      opacity: 1,
      originY: 1,
      transition: {
        duration: 0.45,
        ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <header className="bg-[#fffef6] py-3 relative z-50">
      <div className="flex py-3 lg:py-0 justify-between items-center container mx-auto">
        <Logo />

        <ul className="lg:flex hidden text-sm justify-between items-center">
          {menu.map((site, idx) => (
            <li
              key={idx}
              onMouseEnter={() => {
                setPrevIdx(currIdx);
                setCurrIdx(idx);
                setIsMenuShowing(!!site.isDropDown);
              }}
              onMouseLeave={() => {
                setCurrIdx(null);
                setPrevIdx(null);
                setIsMenuShowing(false);
              }}
              className={cn(
                idx === currIdx
                  ? "text-black font-[600]"
                  : "text-black font-[600]"
              )}
            >
              {/* BUTTON OR LINK */}
              {site.isDropDown ? (
                <motion.button
                  className="relative px-6 py-5 flex group items-center gap-2 overflow-hidden"
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  <motion.span
                    variants={hoverAnimation}
                    className="absolute inset-0 w-full   bg-gradient-to-tr from-yellow-700 to-amber-600 z-[10]"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <span className="relative group-hover:text-white z-20">
                    {site.label}
                  </span>
                  <ChevronDown className="size-3 group-hover:text-white relative z-10 text-black" />
                </motion.button>
              ) : (
                site.href && (
                  <Link href={site.href} className="cursor-pointer">
                    <motion.span
                      className="relative px-6 py-5 flex group items-center gap-2 overflow-hidden"
                      initial="initial"
                      whileHover="hover"
                      animate="initial"
                    >
                      <motion.span
                        variants={hoverAnimation}
                        className="absolute inset-0 w-full bg-gradient-to-tr  from-yellow-700 to-amber-600 z-[10]"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                      <span className="relative z-20 group-hover:text-white">
                        {site.label}
                      </span>
                    </motion.span>
                  </Link>
                )
              )}

              {/* DROPDOWN MENU */}
              <AnimatePresence mode="wait">
                {isMenuShowing && currIdx === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      ease: [0.19, 1, 0.22, 1],
                      duration: 0.3,
                      delay: 0.25,
                    }}
                    className="w-full absolute shadow-lg top-[85%] left-0 overflow-hidden bg-[#fffef6] z-[50]"
                  >
                    <motion.div
                      key={`${idx}-content`}
                      initial={{
                        x:
                          direction === "right"
                            ? 50
                            : direction === "left"
                            ? -50
                            : 0,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.19, 1, 0.22, 1],
                          delay: 0.25,
                        },
                      }}
                      exit={{ opacity: 0 }}
                      className="container mx-auto py-10"
                    >
                      {isAboutNavItem(site) && site.label === "About us" ? (
                        <AboutMenu menu={site.menus} />
                      ) : null}

                      {isServicesNavItem(site) &&
                      site.label.toLowerCase() === "services" ? (
                        <ServicesMenu services={site.services} />
                      ) : null}

                      {site.label.toLowerCase() === "digital solutions" ? (
                        <LocationMenu />
                      ) : null}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
        <MenuMobile menu={menu} />
      </div>
    </header>
  );
};

export default Navbar;

const MenuMobile = ({ menu }: { menu: SiteConfig["navItems"] }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }

    return () => {
      document.body.style.overflow = ""; // cleanup
    };
  }, [isOpen]);
  function isAboutNavItem(item: NavItem): item is AboutNavItem {
    return "menus" in item;
  }

  function isServicesNavItem(item: NavItem): item is ServicesNavItem {
    return "services" in item;
  }

  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-slate-50/40"
      >
        {isOpen ? (
          <X className="text-black" />
        ) : (
          <Menu className="text-black" />
        )}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed z-50 bg-[#fffef6] w-screen h-[calc(100vh-86px)] left-0 top-[86px] p-6 overflow-y-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {menu.map((item, idx) =>
                item.isDropDown ? (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-amber-200"
                  >
                    <AccordionTrigger className="text-black text-lg flex items-center justify-between">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      {isAboutNavItem(item) && item.label === "About us" ? (
                        <AboutMenu menuProp={setIsOpen} menu={item.menus} />
                      ) : null}

                      {isServicesNavItem(item) &&
                      item.label.toLowerCase() === "services" ? (
                        <ServicesMenu
                          menuProp={setIsOpen}
                          services={item.services}
                        />
                      ) : null}

                      {item.label.toLowerCase() === "digital solutions" ? (
                        <LocationMenu menuProp={setIsOpen} />
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  "href" in item &&
                  item.href && (
                    <div
                      key={idx}
                      className={`${
                        idx !== menu.length - 1 ? "border-b " : ""
                      } border-amber-200 py-3 `}
                    >
                      <Link
                        href={item.href}
                        className="text-black text-lg font-[500]  hover:text-amber-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  )
                )
              )}
            </Accordion>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
