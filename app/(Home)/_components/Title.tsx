import React from "react";

type Props = { title: string};
const Title = ( {title} : Props ) => {
    return (
        <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold mb-3">
            {title}
        </h3>
    );
};

export default Title;
