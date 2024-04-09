"use client";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { data } from "@/data/data";
import Title from "@/app/(Home)/_components/Title";
import { useTheme } from "next-themes";

const WorkHistory = () => {
    const { theme } = useTheme();
    const { experients } = data;

    return (
        <div className="max-w-screen-xl mx-auto px-4 w-full border-t border-zinc-100 py-7 dark:border-zinc-800">
            <Title title="Work History" />
            <VerticalTimeline lineColor={theme === "dark" ? "white" : "#F4F4F5"}>
                {experients.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            key={item.id}
                            date={item.time}
                            icon={item.icon}
                            iconStyle={{ background: theme === "dark" ? "#27272A" : "white", color: theme === "dark" ? "white" : "#6d28d9" }}
                            visible={true}
                            contentStyle={{ background: theme === 'dark' ? "#27272A" : "#F4F4F5", color: "white", boxShadow: "none" }}
                            contentArrowStyle={{ borderRight: theme === 'dark' ? "0.4rem solid #27272A" : "0.4rem solid #F4F4F5" }}
                        >
                            <h3 className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">
                                {item.title}
                            </h3>
                            <div className="text-base md:text-lg font-semibold text-black dark:text-zinc-400">{item.description}</div>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default WorkHistory;
