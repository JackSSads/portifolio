import { FaPencilRuler } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";

const Concepts = () => {
    return (
        <div className="
            flex flex-col justify-center mt-80 h-full">

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

            <div className="
                    flex justify-between">

                <div className="
                    w-80 p-2 rounded-md 
                     text-left shadow-lg shadow-gray-200">

                    <i className="text-8xl text-blue-500"
                    ><FaPencilRuler /></i>

                    <h3 className="text-2xl font-semibold py-2">
                        Design Criativo</h3>

                    <p className="text-left text-gray-500">
                        Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Porro, non
                        cum minus maxime iure cumque unde facilis.
                        Maxime, dignissimos perspiciatis tempore
                        fugiat illum quis earum odio quo velit
                        sapiente veniam.
                    </p>
                </div>

                <div className="
                    w-80 p-2 rounded-md 
                    text-left shadow-lg shadow-gray-200">

                    <i className="text-8xl text-blue-500"
                    ><GiGearHammer /></i>

                    <h3 className="text-2xl font-semibold py-2">
                        Desenvolvimento</h3>

                    <p className="text-left text-gray-500">Lorem ipsum,
                        dolor sit amet consectetur adipisicing
                        elit. Porro, non cum minus maxime iure
                        cumque unde facilis. Maxime, dignissimos
                        perspiciatis tempore fugiat illum quis
                        earum odio quo velit sapiente veniam.
                    </p>
                </div>

                <div className="
                    w-80 p-2 rounded-md 
                     text-left shadow-lg shadow-gray-200 ">

                    <i className="text-8xl text-blue-500"
                    ><MdDevicesOther /></i>

                    <h3 className="text-2xl font-semibold py-2">
                        Responsividade</h3>

                    <p className="text-left text-gray-500">Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Porro,
                        non cum minus maxime iure cumque unde facilis.
                        Maxime, dignissimos perspiciatis tempore fugiat
                        illum quis earum odio quo velit sapiente veniam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Concepts;