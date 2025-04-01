import Image from "next/image";
import React from "react";
import { Socials } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] w-full h-[70px] bg-white/5 backdrop-blur-sm  flex justify-between items-center md:px-10">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-contain rounded-full"
            />
          </Link>
        </div>
        <h1
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text
        text-transparent text-[25px] font-bold"
        >
          Adarsh Kumar Mishra
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social, id) => (
          <Link href={social.pathname} key={id} target="blank">
            <Image
              key={id}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
