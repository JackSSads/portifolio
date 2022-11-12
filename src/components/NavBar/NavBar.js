import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="
            flex flex-row justify-around 
            sm:justify-between p-5 h-20 w-full">

            <div className="">Logo</div>

            <ul className="
                hidden sm:flex flex-row w-1/3 justify-center font-light">

                <li>
                    <a href="#top" 
                        className="text-gray-800  hover:font-semibold">
                        Inicio</a>
                </li>

                <li>
                    <a href="#about"
                        className="text-gray-800 ml-10 hover:font-semibold">
                        Sobre</a>
                </li>

                <li>
                    <a href="#footer"
                        className="text-gray-800 ml-10 hover:font-semibold">
                        Contato
                    </a>
                </li>

            </ul>

            <ul className="
                flex flex-row w-1/3 justify-around
                sm:w-1/6">

                <li>
                    <a href="https://www.linkedin.com/in/jackson-souza-ads/" target="_blank"
                        className="text-xl hover:text-blue-600"><IoLogoLinkedin />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/JackSSads" target="_blank"
                        className="text-xl hover:text-gray-600"><BsGithub />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/jackssads/" target="_blank"
                        className="text-xl hover:text-rose-500"><BsInstagram />
                    </a>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
