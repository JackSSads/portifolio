
const Salutation = () => {
    return (
        <div className="
            flex flex-col items-center
            h-full md:flex-row md:justify-between ">

            <div className="
                text-left w-full 
                md:w-1/3">

                <h2 class="text-left text-3xl font-bold sm:text-5xl mt-10">
                    Seja bem-vindo(a) ao meu humilde espaço!
                </h2>

                <p className="">Quero que meus clientes se sintam incríveis e únicos. Levando seus projetos a outro nível!</p>

                <a type="button" href="https://wa.me/5584994015772" rel="" 
                    className="
                        flex justify-center items-center font-bold
                        w-full h-1 p-5 mt-10 text-white bg-blue-500 rounded-lg md:w-2/3
                        shadow-lg  shadow-blue-300 dark:shadow-md dark:shadow-blue-400
                        hover:bg-blue-600 md:transition-all md:duration-100 md:delay-100 md:animate-bounce
                        ">
                    Fazer Orçamento
                </a>
            </div>
            
            <img 
                src="img/image1.jpg" alt=""
                className="h-full rounded-lg mt-10 
                    md:h-72 lg:h-80 xl:h-96" />
        </div>
    );
};

export default Salutation;