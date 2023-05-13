import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

import { useTheme } from "../../hooks/useTheme";

export default function ThemeMode() {

    const { theme, setTheme } = useTheme();


    return (
        <>
            {theme === "dark" ?
                (
                    <IoMdSunny
                        className="text-xl cursor-pointer rounded-full
                            hover:shadow-xl hover:shadow-yellow-300 hover:text-yellow-400"
                        onClick={() => setTheme("light")}
                    />
                ) : (
                    <MdDarkMode
                        className="text-xl cursor-pointer rounded-full
                            hover:shadow-lg hover:shadow-gray-400 hover:text-neutral-900"
                        onClick={() => setTheme("dark")}
                    />
                )}
        </>
    )
}