"use Client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[360px] h-[180px] gap-[30px] rounded-md cursor-pointer  "
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40 " />
          <h1 className="text-black text-xl font-semibold ">{title}</h1>
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn More &gt;
          </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-purple-900 to-black group relative flip-card-back bg-transparent bg-cover bg-center text-white rounded-lg p-4">
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-3 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-sm">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
