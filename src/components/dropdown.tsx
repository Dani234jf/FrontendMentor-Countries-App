"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Filters } from "@/app/page";

export default function DropDown({filter, setFilter} : {filter: Filters | null, setFilter: Dispatch<SetStateAction<Filters | null>>}) {
    const [dropDownOpen, setDropDownState] = useState(false);

    const onClickOption = (option : Filters) => {
        if ( option == Filters.AllRegions ) {
            setFilter(null);
        }
        else {
            setFilter(option); 
        }
        setDropDownState(false);
    }

    return (
        <div className="relative w-fit md:text-[14px] text-[12px]">
            <button type="button" aria-expanded={dropDownOpen} aria-controls="region-menu" onClick={() => {setDropDownState(!dropDownOpen)}} className="bg-primary select-none cursor-pointer flex justify-between shadow-md rounded-lg px-6 py-5 whitespace-nowrap gap-14">
                <p>{filter ?? "Filter by region"}</p>
                <img alt="" src="/icons/arrow-dropdown.svg" className="w-2.25 dark:invert"></img>
            </button>
            <div id="region-menu" className={`${dropDownOpen ? "visible scale-100" : "invisible scale-0"} bg-primary select-none origin-top flex flex-col gap-2 absolute mt-2 shadow-md rounded-lg w-full py-4 px-6 transition-all`}>    
            {
                Object.values(Filters).map((option) => 
                    (<button key={option} onClick={() => onClickOption(option)} className="cursor-pointer flex ">{option.toString()}</button>)
                )
            }
            </div>
        </div>        
    );
}