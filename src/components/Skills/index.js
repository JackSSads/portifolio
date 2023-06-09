import Carrossel from "../Carrossel";

const Skills = () => {
    return (
        <div className="
            flex flex-row items-center justify-between
            mt-32 h-full">

            <img src="assets/img/image2.jpg" alt="" className="hidden md:block md:h-full w-72 rounded-xl" />

            <div className="w-full md:w-1/2 text-left font-semibold text-3xl">
                <p className="font-light text-lg mb-1">
                    Habilidades
                </p>

                <h2 className="text-start font-bold uppercase">Meu objetivo é desenvolver as
                    <span className="text-blue-500 uppercase font-bold"> Melhores </span>
                    aplicações Web
                </h2>

                <Carrossel />
            </div>

        </div>
    );
};

export default Skills;