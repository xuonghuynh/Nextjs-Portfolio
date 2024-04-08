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
    const words = [
        {
            text: "Huỳnh",
        },
        {
            text: "Long",
        },
        {
            text: "Xưỡng",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="relative py-20 h-[60dvh]">
            <Particle />
            <div className="max-w-screen-xl mx-auto px-4 grid grid-rows-1 grid-rows-reverse md:grid-cols-2 w-full h-full items-center">
                <div>
                    <div className="font-bold dark:text-white text-violet-700">
                        <h1 className="text-[35px] md:text-[50px] font-bold uppercase">HI, I&apos;M <span className="text-yellow-400 capitalize"> XƯỠNG</span></h1>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Frontend Developer",
                                1500, // wait 1s before replacing "Mice" with "Hamsters"
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
                                textTransform: "uppercase"
                            }}
                            repeat={Infinity}
                            className="text-[35px] md:text-[3rem] text-[#55e6e5] font-bold"
                        />
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4">
                        <SubInfo
                            icon={FaMapMarkerAlt}
                            label="Ho Chi Minh, Vietnam"
                        />
                        <SubInfo
                            icon={BsTerminalFill}
                            label="5 Years of experience"
                        />
                        <SubInfo icon={IoIosSchool} label="BSc FPT Greenwich" />
                    </div>
                </div>
                <div className="bg-[url('/avatar-1.png')] w-[200px] h-[200px] md:w-[400px] md:h-[400px] animate-profile shadow-profile bg-cover bg-center bg-no-repeat mx-auto z-50" />
            </div>
        </div>
    );
};

export default Header;
