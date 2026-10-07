import { Dispatch, SetStateAction } from "react";

export default function SearchBar({search, setSearch} : {search: string, setSearch: Dispatch<SetStateAction<string>> }) {
    return (
        <div className="flex gap-6 px-8 py-5 max-w-120 w-full mr-auto shadow-md rounded-lg bg-primary">
            <img alt="" src="/icons/search-icon.svg" className="w-[17.5px] dark:brightness-0 dark:invert"></img>
            <input type="text" value={search} onInput={(e) => {setSearch(e.currentTarget.value)}} placeholder="Search for a country..." className="dark:text-white dark:placeholder-white outline-0 w-full text-[12px] md:text-[14px]"></input>
        </div>
    );
}