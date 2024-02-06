import { CarroselProjects } from "../CarroselProjects";

const Projects = () => {
    return (
        <div className="hidden mt-32 h-full">

            <div className="text-left">
                <p className="text-gray-600 text-24 mb-1">
                    Meus Projetos
                </p>
                <h2 className="
                    text-blue-500 font-semibold text-2xl mb-16">
                    Esses são os meu principais projetos desenvolvidos
                </h2>
            </div>
            <div className="
            w-full 
            h-52 sm:h-[380px] md:h-[450px]
            rounded-md flex justify-center">
                <CarroselProjects />
            </div>
        </div>
    );
};

export default Projects;