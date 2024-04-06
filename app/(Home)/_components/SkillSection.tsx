import { data } from "@/data/data";
import Image from "next/image";
import React from "react";

const SkillSection = () => {
    const { skills } = data;
    return (
        <div className="border-t border-zinc-100 py-7 dark:border-zinc-800">
            <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold mb-3">
                Skills
            </h3>
            <div className="flex flex-wrap gap-5 items-center">
                {skills.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
                    >
                        <Image src={item.image} width={25} height={25} alt={item.name} />
                        <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
