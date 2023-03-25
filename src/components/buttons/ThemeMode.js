import { MdDarkMode } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";

import { useTheme } from "../../hooks/useTheme";

export default function ThemeMode() {

    const { theme, setTheme } = useTheme();


    return (
        <>
            {theme === "dark" ?
                (
                    <BsFillLightbulbFill
                        className="text-xl cursor-pointer rounded-full
                            hover:shadow-xl hover:shadow-yellow-300 hover:text-yellow-400"
                        onClick={() => setTheme("light")}
                    />
                ) : (
                    <MdDarkMode
                        className="text-xl cursor-pointer rounded-full
                            hover:shadow-lg hover:shadow-gray-400 "
                        onClick={() => setTheme("dark")}
                    />
                )}
        </>
    )
}