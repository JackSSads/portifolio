const Skills = () => {
    return (
        <div className="
            flex flex-row items-center justify-between
            mt-80 h-full">

            <img src="image2.jpg" className="h-96 w-72 rounded-xl" />

            <div className="w-1/2 text-left font-semibold text-3xl">
                <p className="font-light text-lg mb-1">
                    Habilidades
                </p>

                <h2 className="font-bold uppercase">Meu objetivo é desenvolver as 
                    <span className="
                    text-blue-500 uppercase font-bold"> Melhores </span>
                    aplicações Web
                </h2>

                <div className="
                    flex flex-row justify-between
                    w-full h-3/4 mt-10">
                    <div className="h-44 w-44 bg-blue-500 mt-16 rounded-lg">JavaScript</div>
                    <div className="h-44 w-44 bg-blue-500 mt-16 rounded-lg">Next Js</div>
                    <div className="h-44 w-44 bg-blue-500 mt-16 rounded-lg">Nest Js</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;