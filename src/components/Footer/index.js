import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {

    return (
        <footer id="contact" className="
            flex flex-col justify-around items-start ml-5 mt-20 pb-5 h-full 
            text-gray-500 md:ml-0 md:flex-row md:items-center md:my-5">

            <div className=" w-full flex justify-center items-center md:w-auto">
                <img
                    src="img/logo-and-name.png"
                    alt="Logo"
                    className="w-40 h-40" />
            </div>

            <div className="flex flex-col">

                <h4 className="text-xl text-gray-600 font-semibold underline">Contatos</h4>

                <a href="mailto:contatoJacksonSouza@hotmail.com"
                    className="hover:text-blue-500 text-xl flex items-center">
                    <HiOutlineMail></HiOutlineMail>contatoJacksonSouza@hotmail.com
                </a>
                <a href="https://wa.me/5584994015772" rel="noreferrer"
                    className="hover:text-green-500 text-xl flex items-center">
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>WhatsApp
                </a>
                <a href="https://t.me/+5584994015772" rel="noreferrer"
                    className="hover:text-blue-600 text-xl flex items-center">
                    <RiTelegramLine></RiTelegramLine>Telegram
                </a>
            </div>

            <div className="flex flex-col">
                <h4 className="text-xl text-gray-600 font-semibold mt-5 underline">Redes sociais</h4>

                <ul className="
                    flex flex-col
                    justify-between">

                    <li>
                        <a href="https://www.linkedin.com/in/jackson-souza-ads/" rel="external"
                            className=" flex items-center text-xl hover:text-blue-600">
                            <IoLogoLinkedin /> Linkedin
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/JackSSads" rel="external"
                            className=" flex items-center text-xl hover:text-black dark:hover:text-white">
                            <BsGithub /> GitHub
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/jackssads/" rel="external"
                            className=" flex items-center text-xl hover:text-rose-500">
                            <BsInstagram /> Instagran
                        </a>
                    </li>

                </ul>
            </div>

        </footer>
    );
};

export default Footer;