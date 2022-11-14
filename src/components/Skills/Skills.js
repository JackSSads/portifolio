import { SiJavascript, SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    return (
        <div className="
            flex flex-row items-center justify-between
            mt-32 h-full">

            <img src="img/image2.jpg" alt="" className="hidden md:block md:h-full w-72 rounded-xl" />

            <div className="w-full md:w-1/2 text-left font-semibold text-3xl">
                <p className="font-light text-lg mb-1">
                    Habilidades
                </p>
        
                <h2 className="text-start font-bold uppercase">Meu objetivo é desenvolver as
                    <span className="
                    text-blue-500 uppercase font-bold"> Melhores </span>
                    aplicações Web
                </h2>

                <div className="
                    flex flex-row justify-between
                    w-full h-3/4 mt-10">

                    <div className="
                        h-32 mr-1 p-2 flex flex-col justify-around items-center
                        mt-16 rounded-lg bg-blue-500 
                        text-white font-bold text-6xl md:h-44 w-44">
                        <SiJavascript></SiJavascript></div>

                    <div className="
                        h-32 mr-1 p-2 flex flex-col justify-around items-center
                        mt-16 rounded-lg bg-blue-500 
                        text-white font-bold text-6xl md:h-44 w-44">
                        <TbBrandNextjs></TbBrandNextjs></div>

                    <div className="
                        h-32 mr-1 p-2 flex flex-col justify-around items-center
                        mt-16 rounded-lg bg-blue-500 
                        text-white font-bold text-6xl md:h-44 w-44">
                        <SiNestjs></SiNestjs></div>

                </div>
            </div>
        </div>
    );
};

export default Skills;