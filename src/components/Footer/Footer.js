import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="footer" className="
            flex flex-col my-20 ml-2 justify-around items-start
            h-52 text-gray-800 md:flex-row md:items-center md:my-5">

            <div>Logo</div>

            <div className="flex flex-col ">

                <h4 className="text-xl font-semibold underline">Contatos</h4>

                <a href="mailto:contatoJacksonSouza@hotmail.com"
                    className="hover:text-blue-500 text-xl flex items-center">
                    <HiOutlineMail></HiOutlineMail>contatoJacksonSouza@hotmail.com
                </a>
                <a href="https://wa.me/5584994015772" target="_blanck"
                    className="hover:text-green-500 text-xl flex items-center">
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>WhatsApp
                </a>
                <a href="https://t.me/+5584994015772" target="_blank"
                    className="hover:text-blue-600 text-xl flex items-center">
                    <RiTelegramLine></RiTelegramLine>Telegram
                </a>
            </div>

            <div>
                <h4 className="text-xl font-semibold mt-5 underline">Redes sociais</h4>

                <ul className="
                    flex flex-col
                    justify-between">

                    <li>
                        <a href="https://www.linkedin.com/in/jackson-souza-ads/" target="_blank"
                            className=" flex items-center text-xl hover:text-blue-600">
                            <IoLogoLinkedin /> Linkedin
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/JackSSads" target="_blank"
                            className=" flex items-center text-xl hover:text-black">
                            <BsGithub /> GitHub
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/jackssads/" target="_blank"
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