import React from "react";
import { IconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";

type SubInfoProps = {
    icon: IconType;
    label: string;
};

const SubInfo = ({ icon: Icon, label }: SubInfoProps) => {
    return (
        <div className="flex items-center gap-x-2 capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400">
            <Icon size={16} />
            {label}
        </div>
    );
};

export default SubInfo;
