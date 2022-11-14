import { FaPencilRuler } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";

const Concepts = () => {
    return (
        <div className="
            flex flex-col justify-center mt-32 h-full">

            <div className="flex flex-col text-left">

                <p className="font-light text-lg">
                    Conceitos</p>

                <h3 className="
                    text-blue-500 font-semibold text-2xl
                    mb-16">
                    Utilizo os três principais
                    conceitos para a criação de Website
                </h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">

                <div className=" flex flex-col justify-center 
                    w-3/3 p-2 h-96 rounded-md md:w-80 md:mr-1
                    text-left shadow-lg shadow-gray-200
                    dark:shadow-md dark:shadow-gray-500">

                    <i className="text-8xl text-blue-500"
                    ><FaPencilRuler /></i>

                    <h3 className="text-2xl font-semibold py-2">
                        Design Criativo</h3>

                    <p className="text-left text-gray-500">
                        Design é a alma do site - trabalho com base
                        nos melhores layouts da atualidade para que assim,
                        seu site se destaque entre os em relação a concorrência.
                    </p>
                </div>

                <div className="flex flex-col justify-center
                    w-3/3 p-2 h-96 mt-10 rounded-md md:w-80 md:mt-0
                    text-left shadow-lg shadow-gray-200
                    dark:shadow-md dark:shadow-gray-500">

                    <i className="text-8xl text-blue-500"
                    ><GiGearHammer /></i>

                    <h3 className="text-2xl font-semibold py-2">
                        Desenvolvimento</h3>

                    <p className="text-left text-gray-500">
                        Em cada projeto surgem vários desafios os quais
                        encaro com entusiasmo.
                    </p>
                </div>

                <div className="flex flex-col justify-center
                    w-3/3 p-2 h-96 mt-10 rounded-md text-left
                    shadow-lg shadow-gray-200
                    md:w-80 md:mt-0 md:ml-1
                    dark:shadow-md dark:shadow-gray-500">

                    <i className="text-8xl text-blue-500"
                    ><MdDevicesOther /></i>

                    <h3 className="text-2xl font-semibold py-2">
                        Responsividade</h3>

                    <p className="text-left text-gray-500">
                        Outro ponto que não pode ser esquecido
                        é a responsividade, ou seja, o site deve
                        se adequar à visualização em diferentes
                        tamanhos de tela, já que hoje a maioria
                        das pesquisas na internet já são feitas
                        via mobile.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Concepts;