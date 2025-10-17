import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface dataProps {
  data: {
    label: string;
    description: string;
    img: string;
    link: string;
  }[];
  tabs?: { label: string; link: string }[];
  onNavigate?: () => void;
}

const WhyMilestonepm = ({ data, tabs, onNavigate }: dataProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 text-white">
      {/* Left Section */}
      <div className="lg:flex hidden  flex-col items-start space-y-4 pr-5 border-r border-slate-200/40">
        <div className=" w-[300px] h-[270px]">
          <img
            src="https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg"
            alt="Cityscape"
            className="w-full h-full object-cover rounded"
          />
        </div>

        <p className="text-base">+966 54 154 0090</p>

        <div className="flex items-center gap-3">
          <Link
            href={"/Contact"}
            onClick={onNavigate}
            className="bg-amber-200 text-black px-4 py-1.5 font-medium rounded"
          >
            Contact us
          </Link>
          <button className="bg-yellow-500 text-white px-4 py-1.5 font-medium rounded">
            Follow
          </button>
          <Instagram className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-start w-full">
        <h2 className="text-xl font-semibold mb-6">
          Al Yusr is Proven and Certified to Shape the Kingdom
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item, idx) => (
            <Link
              key={idx}
              onClick={onNavigate}
              href={`/Why-Al-Yusr/${item.link}`}
              className="flex items-start gap-3"
            >
              <div className="w-[100px] h-[70px] rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={100}
                  height={70}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-yellow-300 font-medium">{item.label}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {tabs && tabs.length > 0 && (
          <div className="flex  flex-col lg:flex-row lg:flex-wrap gap-4 mt-6">
            {tabs.map((tab, idx) => (
              <Link
                key={idx}
                onClick={onNavigate}
                href={tab.link}
                className="border text-yellow-300 border-yellow-200/60 rounded-full px-5 py-[.7rem] lg:px-4 lg:py-1 text-sm"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyMilestonepm;
