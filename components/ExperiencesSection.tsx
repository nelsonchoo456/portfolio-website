import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { experiences } from "./experiences";

const ExperiencesSection = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 mb-4">
        {experiences.map((experience, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:mt-0 md:w-4/7 order-2 md:order-1">
                    <h1 className="text-2xl font-medium mb-2">
                      {experience.name}
                    </h1>
                    <h4 className="text-xl text-gray-500 mb-2">
                      {experience.date}
                    </h4>
                    <div className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {experience.description}
                    </div>
                    <h4 className="text-xl font-semibold leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      Tech Stack
                    </h4>
                    <div className="flex flex-row align-bottom space-x-4">
                      {experience.skills?.map((skill, idx) => {
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
                  </div>
                  <div className="md:w-3/7 order-1 md:order-2">
                    <Image
                      src={experience.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl"
                    />
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

export default ExperiencesSection;
