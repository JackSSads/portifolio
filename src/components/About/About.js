const About = () => {
    return (
        <div id="about" 
            className="flex flex-col justify-center mt-32 h-full">

            <div className="text-left">
                <p className="font-light text-lg">Sobre</p>
                <h3 className="
                    text-blue-500 font-semibold text-2xl
                    mb-16">Saiba um pouco sobre mim</h3>
            </div>
            <div className="
                flex flex-col items-center
                md:flex-row md:justify-around">

                <img src="img/my.jpg" 
                alt="" 
                className="h-96 w-48 rounded-xl"
                />

                <div className="
                    w-full flex flex-col justify-center items-center 
                    mt-10 text-start text-gray-500
                    md:w-1/2">
                    <p>
                        Olá! Meu nome é <span className="underline">Jackson Souza</span>, tenho 22 anos,
                        sou desenvolvedor Fullstack Web Js. Atuo na 
                        área a pouco mais de um ano como freelancer.
                        Estou me reinventando a cada dia, sempre procurando
                        melhorar e focado no meu objetivo: fazer o melhor!
                        Aplico meus conhecimento em projetos pessoais e proficionais.
                    </p>
                    <p className="my-5">
                        No decorrer da minha carreira, adquiri conhecimento em cursos como:</p>
                    <p>• Curso JavaScript</p>
                    <p>• Curso Node Js</p>
                    <p>• Curso HTML5, CSS3 & Bootstrap5</p>
                    <p>• Curso React Js</p>
                    <p>• Curso Next Js</p>
                    <p>• Curso Nest Js</p>
                    <p className="mt-5">
                        Também sou bacharel em Analise e Desenvolvimento de Sistemas.</p>                    
                </div>
            </div>

        </div>
    );
};

export default About;