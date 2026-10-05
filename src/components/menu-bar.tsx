import ColorModeButton from "./color-mode-button";

export default function MenuBar() {
    return (
        <div className="flex justify-between lg:px-20 md:px-10 px-4 py-5 shadow dark:bg-[#2B3844]">
            <h1 className="text-gray-950 dark:text-white font-extrabold lg:text-2xl text-[14px] ">Where in the world?</h1>
            <ColorModeButton></ColorModeButton>
        </div>
    );
}