"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaCloudMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { cn } from "@/lib/utils";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [isMouted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMouted) return null;

    return (
        <div
            className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-400 cursor-pointer flex items-center z-50"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <span
                className={cn(
                    "w-7 h-7 flex items-center justify-center bg-violet-700 rounded-full transition-all duration-500",
                    theme === "dark" ? "ml-5" : "ml-0"
                )}
            >
                {theme === "dark" ? (
                    <FaCloudMoon size={14} color="white" />
                ) : (
                    <LuSunMoon size={14} color="white" />
                )}
            </span>
        </div>
    );
}
