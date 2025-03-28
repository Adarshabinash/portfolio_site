"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NavLinks } from "../constants";
import Link from "next/link";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeOut = setTimeout(() => {
        setIsRouting(false);
      }, 1300);

      return () => clearTimeout(timeOut);
    }
  });

  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] bottom-[-45px] w-[30%] md:w-[20%] max-h-[100px] rounded-full flex justify-between items-center border border-pink-500 "
    >
      {NavLinks.map((nav, id) => (
        <Link key={id} href={nav.link} className="mb-16 pl-4 min-w-[20%]  ">
          <nav.icon
            className={`w-[55%] h-[60%] mt-8   ${
              path === nav.name ? "text-purple-800" : "text-white"
            } `}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
