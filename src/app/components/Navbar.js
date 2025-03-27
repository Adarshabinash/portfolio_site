import Image from "next/image";
import React from "react";
import { Socials } from "../constants";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] w-full h-[100px] bg-transparent-white flex justify-between items-center  md:px-10">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-2xl font-semibold">
          Adarsh Kumar Mishra
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social, id) => (
          <Image
            key={id}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
