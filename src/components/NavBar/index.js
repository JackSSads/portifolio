import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub, BsInstagram } from "react-icons/bs";

import ThemeMode from "../buttons/ThemeMode";
import { Link } from "../Link";

import "./index.css"

const Navbar = ({ color }) => {
    return (
        <nav className={
            `${color ? 'flex flex-row justify-between items-center fixed top-1 left-1 right-1 bg-blue-900/95 p-5 h-20 transition-all duration-500 rounded-xl z-50'
                :
                'flex flex-row justify-between items-center fixed top-0 left-0 right-0 bg-transparent p-5 h-20 w-full transition-all duration-500'}`}
        >
            {color ?
                <div className="w-1/3">
                    <img
                        src="assets/img/logo.png"
                        alt="Logo"
                        className="h-[50px] md:h-[70px]  rotate-logo" />
                </div>
                :
                <div className="w-1/3 flex justify-start items-center">
                    <img
                        src="assets/img/logo.png"
                        alt="Logo"
                        className="h-[50px] md:h-[70px] rotate-logo"
                    />
                    <img
                        src="assets/img/logo-name.png"
                        alt="Logo"
                        className="hidden md:block md:w-[150px] ml-2" />
                </div>
            }

            <ul className={` ${color ? 'text-white' : ''}
                    hidden sm:flex flex-row w-1/3 justify-start
                    font-light  dark:text-gray-400`}>

                <Link text="Inicio" href="#root" />
                <Link text="Sobre" href="#about" />
                <Link text="Contato" href="#contact" />
            </ul>

            <ul className="flex gap-1 flex-row w-1/3 justify-around text-gray-400 sm:w-1/6">

                <li>
                    <a href="https://www.linkedin.com/in/jackson-souza-ads/" rel="external"
                        className="text-xl hover:text-blue-600"><IoLogoLinkedin />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/JackSSads" rel="external"
                        className={` ${color ? 'hover:text-white' : 'hover:text-black'}
                            text-xl dark:hover:text-white`}
                    ><BsGithub />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/jackssads/" rel="external"
                        className="text-xl hover:text-rose-500"><BsInstagram />
                    </a>
                </li>

                <li className="border-l border-gray-500 pl-3 ml-1 lg:pl-5">
                    <ThemeMode />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
