import { Country } from "@/components/countries";
import { notFound } from "next/navigation";
import countries from "@/data/data.json";
import MenuBar from "@/components/menu-bar";
import BackButton from "@/components/back-button";
import Link from "next/link";

const isCountryValid = (countryName : string, data : any) => {
    for ( let country of data ) {
        if ( country.name == countryName ) {
            return {isValid: true, countryData: country};
        }
    }
    return {isValid: false,countryData: null};
}

const codeToName = (countryCode : string) => {
    for ( let country of countries ) {
        if ( country.alpha3Code == countryCode ) {
            return country.name;
        }
    }
    return "N/A";
}

export default async function CountryPage({params} : {params: Promise<{name: String}>}) {
    const { name } = await params;
    const countryName = decodeURIComponent(name.toString());
    
    const {isValid, countryData} = isCountryValid(countryName, countries);

    if ( !isValid ) {
        notFound();
    }

    return (
        <>
            <MenuBar></MenuBar>
            <section className="px-7 py-10 grid gap-16 md:px-24">
                <BackButton></BackButton>
                <div className="text-gray-950 dark:text-white grid lg:grid-cols-2 sm:justify-items-start md:justify-items-center gap-12">
                    <img className="rounded-lg overflow-hidden w-full max-h-100 object-cover object-center max-w-[560px]" src={countryData.flags.png}></img>
                    <div>
                        <h1 className="text-[24px] md:text-[32px] font-extrabold mb-4">{countryData.name}</h1>
                        <div className="text-[14px] md:text-[16px] grid gap-8 md:grid-cols-2">
                            <div>
                                <div><span className="mr-1 font-semibold">Native Name:</span><span>{countryData.nativeName}</span></div>
                                <div><span className="mr-1 font-semibold">Population:</span><span>{countryData.population.toLocaleString("en-US")}</span></div>
                                <div><span className="mr-1 font-semibold">Region:</span><span>{countryData.region}</span></div>
                                <div><span className="mr-1 font-semibold">Sub Region:</span><span>{countryData.subregion}</span></div>
                                <div><span className="mr-1 font-semibold">Capital:</span><span>{countryData.capital}</span></div>
                            </div>
                            <div>
                                <div><span className="mr-1 font-semibold">Top Level Domain:</span><span>{countryData.topLevelDomain}</span></div>
                                <div><span className="mr-1 font-semibold">Currencies:</span><span>{countryData.currencies.map((c : {name: string}) => c.name).join(", ")}</span></div>
                                <div><span className="mr-1 font-semibold">Languages:</span><span>{countryData.languages.map((c : {name: string}) => c.name).join(", ")}</span></div>
                            </div>
                        </div>
                        { countryData.borders != null ? <div className="mt-8 items-start flex flex-col md:flex-row">
                            <h2 className="font-semibold text-[16px] sm:mb-0 mb-4 mr-4 whitespace-nowrap">Border Countries:</h2>
                            <div className="flex flex-wrap gap-4">
                                { countryData.borders.map((borderCode : string) => <Link className="whitespace-nowrap text-[12px] rounded-lg shadow px-6 py-2 dark:bg-[#2B3844]" key={borderCode} href={`/${codeToName(borderCode)}`}>{codeToName(borderCode)}</Link>)}
                            </div>
                        </div> : <></>}
                    </div>
                </div>
            </section>
        </>
    )
}