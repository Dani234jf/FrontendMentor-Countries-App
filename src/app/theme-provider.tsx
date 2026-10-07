"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type ThemeContextType = {
    darkModeToggle: boolean,
    setDarkModeToggle: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null); 

export default function ThemeProvider({children} : {children: any}) {
    const [darkModeToggle, setDarkModeToggle] = useState(false);

    return (
        <ThemeContext.Provider value={{darkModeToggle, setDarkModeToggle}}>
            <div className={`${darkModeToggle == true ? "dark" : ""} h-full flex flex-col`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}