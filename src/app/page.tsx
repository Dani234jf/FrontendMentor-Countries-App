"use client";

import Countries from "@/components/countries";
import DropDown from "@/components/dropdown";
import SearchBar from "@/components/search-bar"
import { useState } from "react";

export enum Filters {
  AllRegions = "All regions",
  Africa = "Africa",
  America = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceana = "Oceania"
}

export default function Home() {
  
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filters | null>(null);
  
  return (
      <main>
        <h1 className="sr-only">Countries of the world</h1>
        <section className="md:p-10 p-5">
          <div className="flex flex-col sm:flex-row align-middle gap-3 mb-12">
            <SearchBar search={search} setSearch={setSearch}></SearchBar>
            <DropDown filter={filter} setFilter={setFilter}></DropDown>
          </div>
          <Countries search={search} filter={filter}></Countries>
        </section>
      </main>
  );
}
