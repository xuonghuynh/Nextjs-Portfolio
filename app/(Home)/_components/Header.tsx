"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import SubInfo from "@/app/(Home)/_components/SubInfo";
import { IoIosSchool } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import Particle from "@/components/ui/particles";

const Header = () => {
  return (
    <div className="relative h-[700px] py-20 lg:h-[60dvh]">
      <Particle />
      <div className="grid-reverse mx-auto grid h-full w-full max-w-screen-xl grid-rows-1 items-center px-4 lg:grid-cols-2">
        <div className="order-2 lg:order-1 z-50">
          <div className="text-center font-bold text-violet-700 dark:text-white xl:text-left">
            <h1 className="text-[26px] font-bold uppercase md:text-[3rem]">
              HI, I&apos;M{" "}
              <span className="capitalize text-yellow-400"> XƯỠNG</span>
            </h1>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Web Developer",
                1500,
                "Programmer",
                1500,
                "Coder",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{
                // fontSize: "45px",
                display: "inline-block",
                textTransform: "uppercase",
              }}
              repeat={Infinity}
              className="text-[26px] font-bold text-[#55e6e5] md:text-[3rem] z-50"
            />
          </div>
          <div className="mt-3 flex flex-col flex-wrap items-center justify-center gap-x-4 gap-y-2 md:flex-row md:items-start xl:justify-start z-50">
            <SubInfo icon={FaMapMarkerAlt} label="Ho Chi Minh, Vietnam" />
            <SubInfo icon={BsTerminalFill} label="5 Years of experience" />
            <SubInfo icon={IoIosSchool} label="BSc FPT Greenwich" />
          </div>
        </div>
        <div className="z-50 order-1 mx-auto h-[220px] w-[220px] animate-profile bg-[url('/avatar-1.png')] bg-cover bg-center bg-no-repeat shadow-profile md:h-[280px] md:w-[280px] lg:order-2 lg:h-[400px] lg:w-[400px]" />
      </div>
    </div>
  );
};

export default Header;
