import Link from "next/link";

export default function BackButton() {
    return (
        <Link href="/" className="dark:bg-[#2B3844] shadow-sm flex rounded-lg gap-2 self-start w-fit px-6 py-2">
            <img src="/icons/arrow-back.svg" className="dark:invert"></img>
            <p>Back</p>                
        </Link>
    );
}