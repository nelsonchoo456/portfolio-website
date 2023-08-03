import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { projects } from "./projects";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-2xl font-medium mb-2">
                      {project.name}
                    </h1>
                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <h4 className="text-xl font-semibold leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      Tech Stack
                    </h4>
                    <div className="flex flex-row align-bottom gap-6 mb-8">
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      {project.skills?.map((skill, idx) => {
                        return (
                          <div
                            key={idx}
                            className="flex-item flex flex-col justify-center items-center mb-2 group text-gray-400 hover:text-gray-500 relative"
                          >
                            {skill.svg}
                            <span className="absolute -bottom-7 text-xs opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap  p-2 rounded">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <a
                      className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded"
                      href={project.github}
                    >
                      View on Github
                    </a>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
