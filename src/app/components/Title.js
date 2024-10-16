"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../../style";
const Title = () => {
  return (
    <>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[rgb(145,94,255)]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col">
          <h1
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
          >
            Hi, I&apos;m <span className="text-[#915EFF]">Asma</span>
          </h1>
          <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "Judy",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Title;
