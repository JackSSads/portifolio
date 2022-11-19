import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub, BsInstagram } from "react-icons/bs";

import ThemeMode from "../buttons/ThemeMode";

const Navbar = () => {
    return (
        <nav className="
            flex flex-row justify-between items-center
            p-5 h-20 w-full">

            <div>
                <img 
                src="img/logo.png" 
                alt="Logo" 
                className="w-28 md:w-40"/>
            </div>

            <ul className="
                hidden sm:flex flex-row w-1/3 justify-center 
                font-light text-gray-700 dark:text-gray-400">

                <li>
                    <a href="#top"
                        className="ml-10 hover:text-black hover:font-semibold hover:dark:text-white">
                        Inicio</a>
                </li>

                <li>
                    <a href="#about"
                        className="ml-10 hover:text-black hover:font-semibold hover:dark:text-white">
                        Sobre</a>
                </li>

                <li>
                    <a href="#footer"
                        className="ml-10 hover:text-black hover:font-semibold hover:dark:text-white">
                        Contato
                    </a>
                </li>

            </ul>

            <ul className="
                flex flex-row w-1/3 justify-around text-gray-500
                sm:w-1/6">

                <li>
                    <a href="https://www.linkedin.com/in/jackson-souza-ads/" rel="external"
                        className="text-xl hover:text-blue-600"><IoLogoLinkedin />
                    </a>
                </li>

                <li className="mx-1 md:ml-0">
                    <a href="https://github.com/JackSSads" rel="external"
                        className="
                            text-xl hover:text-black
                            dark:hover:text-white
                        "><BsGithub />
                    </a>
                </li>

                <li className="mx-1 pr-2 md:ml-0">
                    <a href="https://www.instagram.com/jackssads/" rel="external"
                        className="text-xl hover:text-rose-500"><BsInstagram />
                    </a>
                </li>

                <li className="border-l border-gray-500 pl-3 ml-1 lg:pl-5">
                    <ThemeMode/>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
