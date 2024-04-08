import React from "react";

const AboutSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 w-full border-t border-zinc-100 py-7 dark:border-zinc-800">
            <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold mb-3">
                About
            </h3>
            <div className="text-xl md:text-2xl font-semibold capitalize text-black dark:text-white">
                hello everyone 👋
            </div>
            <div className="mt-3 text-base md:text-lg font-semibold text-black dark:text-zinc-400">
            I&apos;m Xuong, a seasoned frontend developer proficient in JavaScript, Angular, React, Next.js, and Tailwind, among other technologies. With a wealth of experience, I&apos;ve contributed to the development of diverse websites catering to e-commerce, Fintech, corporate entities, and business services. My expertise spans across multiple programming languages including HTML5, JavaScript, and CSS, as well as specialized frameworks like React.js. Beyond technical skills, I possess a robust background in effective task management and fostering strong client relationships.
            </div>
        </div>
    );
};

export default AboutSection;
