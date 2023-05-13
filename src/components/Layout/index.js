import { useState, useEffect } from "react"

import Footer from "../Footer";
import Navbar from "../NavBar";
import Baseboard from "../Baseboard";

import ThemeContextProvider from "../../hooks/useTheme";

const Layout = ({ children }) => {

  const [colorNavbar, setColorNavbar] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setColorNavbar(true);
      }
      else {
        setColorNavbar(false);
      };
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <ThemeContextProvider>
      <div className="dark:bg-neutral-900 dark:text-gray-300 pt-20 transition-all duration-500">
        <div id="top"></div>
        <Navbar color={colorNavbar} />
        <main>
          {children}
        </main>
        <Baseboard />
        <Footer />
        <div className="text-white bg-blue-900 p-3 text-center font-semibold">
          <p>Copyright&copy; 2023 - <span className="font-bold underline"
          >Jackson Souza</span></p>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Layout;