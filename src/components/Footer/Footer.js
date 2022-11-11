import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="footer" className="
            flex flex-row justify-around items-center
            h-52">
            <div>Logo</div>
            <div className="flex flex-col">

                <h4 className="text-xl font-semibold">Contatos</h4>

                <a href="mailto:contatoJacksonSouza@hotmail.com"
                    className="hover:text-blue-500 flex items-center">
                    <span className="text-xl"><HiOutlineMail></HiOutlineMail></span>
                    contatoJacksonSouza@hotmail.com
                </a>
                <a href="https://wa.me/5584994015772" target="_blanck"
                    className="hover:text-green-500 flex items-center">
                    <span className="text-xl"><AiOutlineWhatsApp></AiOutlineWhatsApp></span>
                    WhatsApp
                </a>
                <a href="https://t.me/+5584994015772" target="_blank"
                    className="hover:text-blue-600 flex items-center">
                    <span className="text-xl"><RiTelegramLine></RiTelegramLine></span>
                    Telegram
                </a>

            </div>
            <div>

                <h4 className="text-xl font-semibold">Redes sociais</h4>

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
                            className=" flex items-center text-xl hover:text-gray-600">
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