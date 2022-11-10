import CardProject from "../Templates/CardProject/CardProject";

const Projects = () => {
    return (
        <div className="
        flex flex-row justify-between items-center
        h-screen">

            <div className="text-left">
                <p className="text-gray-600 text-24 mb-1">
                    Meus Projetos
                </p>
                <h2 className="
                    text-blue-500 font-semibold text-2xl
                    mb-16">
                Veja alguns projetos desenvolvidos
                </h2>
            </div>

            <div>
                <CardProject></CardProject>
            </div>

        </div>
    );
};

export default Projects;