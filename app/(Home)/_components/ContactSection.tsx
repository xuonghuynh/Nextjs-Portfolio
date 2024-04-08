import { data } from "@/data/data";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGithub, FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    const { contact } = data;
    return (
        <div className="max-w-screen-xl mx-auto px-4 w-full border-t border-zinc-100 py-7 dark:border-zinc-800">
            <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold mb-3">Contact</h3>
            <div className="flex flex-wrap gap-5 items-center">
                {contact.map((item) => {
                    const Icon = item.icon;
                    return (
                        (
                            <Link href={item.url} key={item.name} target="_blank">
                                <div className="flex items-center flex-row gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 space-x-2">
                                    <Icon size={18} className="text-black dark:text-white" />
                                    {item.name}
                                </div>
                            </Link>
                        )
                    )    
                })}
            </div>
        </div>
    );
};

export default ContactSection;
