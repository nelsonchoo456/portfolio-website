import React from "react";
import Image from "next/image";
import { languages, frameworks, developer } from "./skills";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 text-lg">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              {/* <p>
                Hi, my name is Nelson and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> software engineer
                based in Los Angeles, CA.
              </p>
              <br /> */}
              <p>
                I am a penultimate year student at the National University of
                Singapore pursuing a Bachelor&#39;s in Computing in Information
                Systems, pursuing a specialisation in Financial Technology.
              </p>
              <br />
              <p>
                I enjoy building software with new technologies and solving
                different problems. I am also interested in big data engineering
                and analytics, using machine learning to derive insights and
                address business needs.
              </p>
              <br />
              <p>
                I believe that you should{" "}
                <span className="font-bold text-teal-500">
                  never stop growing
                </span>{" "}
                and that&#39;s what I strive to do, I have a passion for
                technology and a desire to always push the limits of what is
                possible. I am excited to see where my career takes me and am
                always open to new opportunities. 🙂
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <h1 className="text-xl font-semibold leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              Languages
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start gap-6">
              {languages.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex-item flex flex-col justify-center items-center mb-2 group text-gray-400 hover:text-gray-500 relative"
                  >
                    {item.svg}
                    <span className="absolute -bottom-7 text-xs opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap  p-2 rounded">
                      {item.skill}
                    </span>
                  </div>
                );
              })}
            </div>
            <h1 className="text-xl font-semibold leading-7 my-4 text-neutral-600 dark:text-neutral-400">
              Frameworks
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start gap-6">
              {frameworks.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex-item flex flex-col justify-center items-center mb-2 group text-gray-400 hover:text-gray-500 relative"
                  >
                    {item.svg}
                    <span className="absolute -bottom-7 text-xs opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap  p-2 rounded">
                      {item.skill}
                    </span>
                  </div>
                );
              })}
            </div>
            <h1 className="text-xl font-semibold leading-7 my-4 text-neutral-600 dark:text-neutral-400">
              Developer Tools
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start gap-6">
              {developer.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex-item flex flex-col justify-center items-center mb-2 group text-gray-400 hover:text-gray-500 relative"
                  >
                    {item.svg}
                    <span className="absolute -bottom-7 text-xs opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap  p-2 rounded">
                      {item.skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
