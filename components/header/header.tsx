import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import SubInfo from "@/components/sub-info";
import { IoIosSchool } from "react-icons/io";

const Header = () => {
    return (
        <div className="mt-20">
            <div className="flex items-center gap-x-7 flex-col md:flex-row">
                <Avatar className="w-[200px] h-[200px] md:w-[150px] md:h-[150px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className="font-bold text-5xl dark:text-white text-violet-700">
                        Huỳnh Long Xưỡng
                    </h1>
                    <h2 className="mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize dark:text-zinc-400">
                        Frontend Developer
                    </h2>
                    <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4">
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
