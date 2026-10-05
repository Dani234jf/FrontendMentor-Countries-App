import Link from "next/link";
import { Country } from "./countries";

export default function Card({country}:{country : Country}) {
    return (
        <Link href={`/${country.name}`} className="dark:bg-[#2B3844] grid w-66 overflow-hidden shadow-md rounded-lg cursor-pointer select-none hover:scale-[102%] hover:shadow-lg transition-all ease-in-out">
            <img className="w-full object-cover object-center h-40" src={country.flags.png}></img>
            <div className="p-5">                
                <p className="font-extrabold text-[18px] mb-4.5">{country.name}</p>
                <div className="mb-1.5">
                    <span className="font-semibold mr-1">Population:</span><span className="font-light">{country.population.toLocaleString("en-US")}</span>
                </div>
                <div className="mb-1.5">
                    <span className="font-semibold mr-1">Region:</span><span className="font-light">{country.region}</span>
                </div>
                <div>
                    <span className="font-semibold mr-1">Capital:</span><span className="font-light">{country.capital}</span>
                </div>
            </div>
        </Link>
    );
}