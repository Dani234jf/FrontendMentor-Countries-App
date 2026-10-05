"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Filters } from "@/app/page";

export default function DropDown({filter, setFilter} : {filter: Filters, setFilter: Dispatch<SetStateAction<Filters>>}) {
    const [dropDownOpen, setDropDownState] = useState(false);

    const onClickOption = (option : Filters) => {
        setFilter(option); 
        setDropDownState(false);
    }

    return (
        <div className="relative w-fit md:text-[14px] text-[12px]">
            <div onClick={() => {setDropDownState(!dropDownOpen)}} className="dark:bg-[#2B3844] select-none cursor-pointer flex justify-between shadow-md rounded-lg px-6 py-5 whitespace-nowrap gap-14">
                <p>{filter.toString()}</p>
                <img src="/icons/arrow-dropdown.svg" className="w-2.25 dark:invert"></img>
            </div>
            <div className={`${dropDownOpen ? "scale-100" : "scale-0"} bg-white dark:bg-[#2B3844] select-none origin-top flex flex-col gap-2 absolute mt-2 shadow-md rounded-lg w-full py-4 px-6 transition-all`}>    
            {
                Object.values(Filters).map((option) => 
                    (<button key={option} onClick={() => onClickOption(option)} className="cursor-pointer flex ">{option.toString()}</button>)
                )
            }
            </div>
        </div>        
    );
}