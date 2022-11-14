import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Baseboard from "../Baseboard/Baseboard";

import ThemeContextProvider from "../../hooks/useTheme";

const Layout = ({ children }) => {
    return (
        <ThemeContextProvider>
            <div className="dark:bg-slate-800 dark:text-gray-300">
                <div id="top"></div>
                <Navbar />
                <main>
                    {children}
                </main>
                <Baseboard />
                <Footer />
            <div className="text-gray-500 border-t border-gray-500 p-3 text-center font-semibold">
                <p>Criado por <span className="font-bold"
                >Jackson Souza</span> - 2022 &copy;</p>
            </div>
            </div>
        </ThemeContextProvider>
    );
};

export default Layout;