import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState(localStorage.getItem("theme") !== "light" ? "dark" : "light");

    useEffect(() => {

        const removeOldTheme = theme === "dark" ? "light" : "dark";
        
        const root = window.document.documentElement;

        root.classList.remove(removeOldTheme);

        root.classList.add(theme);

        localStorage.setItem("theme", theme);
        
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext)
}