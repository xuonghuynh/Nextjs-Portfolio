'use client';
import { data } from "@/data/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillSection = () => {

    const animateVariants = (index: number) => ({
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.07 * index
            }
        }
    });

    const { skills } = data;

    return (
        <div className="max-w-screen-xl mx-auto px-4 w-full border-t border-zinc-100 py-7 dark:border-zinc-800">
            <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold mb-3">
                Skills
            </h3>
            <div className="flex flex-wrap gap-5 items-center">
                {skills.map((item, index) => (
                    <motion.li
                        key={item.name}
                        className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
                        variants={animateVariants(index)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <Image src={item.image} width={25} height={25} alt={item.name} />
                        <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">{item.name}</span>
                    </motion.li>
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
