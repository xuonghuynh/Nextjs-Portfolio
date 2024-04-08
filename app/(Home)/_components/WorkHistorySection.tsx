"use client";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { data } from "@/data/data";
import Title from "@/app/(Home)/_components/Title";

const WorkHistory = () => {
    
    const { experients } = data;

    return (
        <div className="max-w-screen-xl mx-auto px-4 w-full border-t border-zinc-100 py-7 dark:border-zinc-800">
            <Title title="Work History" />
            <VerticalTimeline lineColor="">
                {experients.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            key={item.id}
                            date={item.time}
                            iconStyle={{ background: "black", color: "white" }}
                            visible={true}
                        >
                            <h3 className="text-xl font-semibold text-black dark:text-white">
                                {item.title}
                            </h3>
                            <span>{item.description}</span>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default WorkHistory;
