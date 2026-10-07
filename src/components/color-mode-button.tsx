"use client";

import { ThemeContext } from "@/app/theme-provider";
import { useContext, useState } from "react";

export default function ColorModeButton() {
    const theme = useContext(ThemeContext);

    return (
        <button className="flex gap-2 cursor-pointer" onClick={() => {theme?.setDarkModeToggle(!theme.darkModeToggle)} }>
                <img alt="" src={theme?.darkModeToggle == false ? "/icons/dark-mode.svg" : "/icons/light-mode.svg"} className="w-4"></img>
                <p className="my-auto font-semibold lg:text-[16px] text-[12px] dark:text-white">{theme?.darkModeToggle == false ? "Dark Mode" : "Light Mode"}</p>
        </button>
    );
}