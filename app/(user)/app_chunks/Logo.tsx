import React from "react";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  img?: string;
  width?: number;
  height?: number;
};

const Logo = ({ img = "/Logo.png", width = 200, height = 12 }: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image src={img} width={width} height={height} alt="Logo" />
    </Link>
  );
};

export default Logo;
