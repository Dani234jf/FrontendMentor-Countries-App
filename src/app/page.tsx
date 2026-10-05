"use client";

import Countries from "@/components/countries";
import DropDown from "@/components/dropdown";
import MenuBar from "@/components/menu-bar";
import SearchBar from "@/components/search-bar"
import { useState } from "react";

export enum Filters {
  Africa = "Africa",
  America = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceana = "Oceania",
}

export default function Home() {
  
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filters>(Filters.Europe);
  
  return (
      <>
        <MenuBar></MenuBar>
        <section className="md:p-10 p-5">
          <div className="flex flex-col sm:flex-row align-middle gap-3 mb-12">
            <SearchBar search={search} setSearch={setSearch}></SearchBar>
            <DropDown filter={filter} setFilter={setFilter}></DropDown>
          </div>
          <Countries search={search} filter={filter}></Countries>
        </section>
      </>
  );
}
