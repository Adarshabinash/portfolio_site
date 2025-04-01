"use client";

import React from "react";
import { Projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex flex-col flex-wrap gap-4 items-center justify-center bg-center bg-cover "
    >
      <h1 className="font-semibold text-4xl text-transparent pb-[20px] bg-gradient-to-r from-blue-700 via-blue-300 to-green-400 bg-clip-text ">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-[60px] max-w-[90%] max-w-[90%] ">
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
