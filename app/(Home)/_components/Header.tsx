import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import SubInfo from "@/app/(Home)/_components/SubInfo";
import { IoIosSchool } from "react-icons/io";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

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
        <div className="mt-20">
            <div className="flex items-center gap-x-7 flex-col md:flex-row pb-7">
                <Avatar className="w-[200px] h-[200px] md:w-[150px] md:h-[150px]">
                    <AvatarImage src="/avatar-1.png" />
                    <AvatarFallback>HLX</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className="font-bold text-5xl dark:text-white text-violet-700">
                    <TypewriterEffectSmooth words={words} />
                    </h1>
                    <h2 className="mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize dark:text-zinc-400">
                        Frontend Developer
                    </h2>
                    <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4">
                        <SubInfo icon={FaMapMarkerAlt} label="Ho Chi Minh, Vietnam" />
                        <SubInfo icon={BsTerminalFill} label="5 Years of experience" />
                        <SubInfo icon={IoIosSchool} label="BSc FPT Greenwich" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;