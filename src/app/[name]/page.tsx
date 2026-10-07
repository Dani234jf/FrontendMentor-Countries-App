import Countries, { Country } from "@/components/countries";
import { notFound } from "next/navigation";
import countries from "@/data/data.json";
import MenuBar from "@/components/menu-bar";
import BackButton from "@/components/back-button";
import Link from "next/link";


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
    
    const countryData = countries.find( country => country.name == countryName );
    
    if ( !countryData ) {
        notFound();
    }
    
    const getCountryData = (countryProperty : string) => {        
        return (countryData as any)[countryProperty] ?? "-";
    }


    return (
        <main>
            <section className="px-7 py-10 grid gap-16 md:px-24">
                <BackButton></BackButton>
                <div className="text-gray-950 dark:text-white grid lg:grid-cols-2 sm:justify-items-start md:justify-items-center gap-12">
                    <img alt={`Flag of ${countryData.name}`} draggable="false" className="select-none rounded-lg overflow-hidden w-full max-h-100 object-cover object-center max-w-[560px]" src={countryData.flags.png}></img>
                    <div>
                        <h1 className="text-[24px] md:text-[32px] font-extrabold mb-4">{countryData.name}</h1>
                        <div className="text-[14px] md:text-[16px] grid gap-8 md:grid-cols-2">
                            <div>
                                <div><span className="mr-1 font-semibold">Native Name:</span><span>{getCountryData("nativeName")}</span></div>
                                <div><span className="mr-1 font-semibold">Population:</span><span>{getCountryData("population").toLocaleString("en-US")}</span></div>
                                <div><span className="mr-1 font-semibold">Region:</span><span>{getCountryData("region")}</span></div>
                                <div><span className="mr-1 font-semibold">Sub Region:</span><span>{getCountryData("subregion")}</span></div>
                                <div><span className="mr-1 font-semibold">Capital:</span><span>{getCountryData("capital")}</span></div>
                            </div>
                            <div>
                                <div><span className="mr-1 font-semibold">Top Level Domain:</span><span>{getCountryData("topLevelDomain")}</span></div>
                                <div><span className="mr-1 font-semibold">Currencies:</span><span>{!countryData.currencies ? "-" : countryData.currencies.map((c : {name: string}) => c.name).join(", ")}</span></div>
                                <div><span className="mr-1 font-semibold">Languages:</span><span>{!countryData.languages ? "-" : countryData.languages.map((c : {name: string}) => c.name).join(", ")}</span></div>
                            </div>
                        </div>
                        { countryData.borders != null ? <div className="mt-8 items-start flex flex-col md:flex-row">
                            <h2 className="font-semibold text-[16px] sm:mb-0 mb-4 mr-4 whitespace-nowrap">Border Countries:</h2>
                            <div className="flex flex-wrap gap-4">
                                { countryData.borders.map((borderCode : string) => <Link className="whitespace-nowrap text-[12px] rounded-lg shadow px-6 py-2 bg-primary" key={borderCode} href={`/${codeToName(borderCode)}`}>{codeToName(borderCode)}</Link>)}
                            </div>
                        </div> : <></>}
                    </div>
                </div>
            </section>
        </main>
    )
}