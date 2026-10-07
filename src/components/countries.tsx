"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import { Filters } from "@/app/page";
import countries from "@/data/data.json";

export interface Country {
    name: string,
    population: number,
    region: string,
    capital: string,
    flags: {
        png: string
    }
}

const filterCountries = (contries : Country[], filter : Filters | null, search : string) => {
    let filteredCountries = contries.filter(c => !filter || filter == c.region)
    filteredCountries = filteredCountries.filter(c => c.name.toLowerCase().includes(search.trim().toLowerCase()));

    return filteredCountries;
}

export default function Countries({search, filter} : {search: string, filter: Filters | null}) {
    
    const [contries, setContries] = useState<Country[]>(countries.map(c => ({
        name: c.name,
        population: c.population,
        region: c.region,
        capital: c.capital ?? "-",
        flags: {
            png: c.flags.svg
        }
    })));    

    return (
        <div className="grid mx-auto md:gap-18 gap-10 justify-items-center grid-cols-[repeat(auto-fit,minmax(264px,1fr))]">
            {filterCountries(contries, filter, search).map(c => (<Card key={c.name} country={c}></Card>))}
        </div>
    );
}