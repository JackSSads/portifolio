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

                <img src="assets/img/my.jpg"
                    alt=""
                    className="h-96 w-48 rounded-xl"
                />

                <div className="w-full flex flex-col justify-center items-start 
                    mt-10 text-start text-gray-500 md:w-1/2">
                    <p>
                        Olá! 👋 Sou <span className="underline">Jackson Souza</span>, um desenvolvedor Full Stack de 23 anos.
                        Atuo como freelancer há mais de três anos, buscando constantemente aprimorar meus conhecimentos.
                    </p>

                    <p className="mb-2 mt-5 font-semibold">Habilidades:</p>
                    <p>• JavaScript</p>
                    <p>• Node.js</p>
                    <p>• React.js</p>
                    <p>• Next.js</p>

                    <p className="mb-2 mt-5 font-semibold">Formação:</p>
                    <p>Bacharel em Análise e Desenvolvimento de Sistemas.</p>
                    
                    <p className="mb-2 mt-5 font-semibold">Compromisso:</p>
                    <p>Comprometido em entregar excelência em cada projeto e acompanhar as últimas tendências tecnológicas.</p>
                    
                    <p className="mb-2 mt-5 font-semibold">Objetivo:</p>
                    <p>Busco oportunidades desafiadoras para crescer como profissional e contribuir para projetos inovadores.</p>
                    
                    <div className="mb-2 mt-10 font-semibold self-center">
                        <a href="assets/pdf/CV_Jackson_Souza_da_Silva.pdf"
                            download={"CV Jackson Souza"}
                            className="
                            font-bold
                            w-full h-1 p-5 text-white bg-blue-500 rounded-lg
                            shadow-lg  shadow-blue-300 dark:shadow-md dark:shadow-blue-400">
                            Baixar currículo
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;