"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-20 max-w-[90%] md:max-w-[85%] lg:max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">
            Skills
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[45px]">
              {" "}
              &{" "}
            </span>{" "}
            Technologies
          </h1>
          <p className="bg-gradient-to-r from-blue-300 via-grey-500 to-purple-400 bg-clip-text text-transparent text-sm sm:text-base md:text-lg">
            Using the latest tech this world has to offer.
          </p>
        </div>

        {/* First Swiper */}
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center p-2">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className="object-contain max-h-16 sm:max-h-20 md:max-h-24"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper (reverse direction) */}
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center p-2">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className="object-contain max-h-16 sm:max-h-20 md:max-h-24"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
