"use client";

import React from "react";
import { Projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-center bg-cover py-8 px-4"
    >
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-transparent pb-4 md:pb-6 bg-gradient-to-r from-blue-700 via-blue-300 to-green-400 bg-clip-text text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-screen-lg px-2 sm:px-4 place-items-center">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
