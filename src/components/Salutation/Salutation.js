
const Salutation = () => {
    return (
        <div className="
            flex flex-col items-center
            h-full md:flex-row md:justify-between ">

            <div className="
                text-left w-full 
                md:w-1/3">

                <h2 class="text-left text-3xl sm:text-5xl font-bold mt-10 md:">
                    Seja bem-vindo(a) ao meu humilde espaço!
                </h2>

                <p className="">Quero que meus clientes se sintam incríveis e únicos. Levando seus projetos a outro nível!</p>

                <a type="button" href="https://wa.me/5584994015772" target="_blanck" className="
                    flex justify-center items-center w-2/3
                    p-5 mt-10 bg-blue-500 h-1 hover:bg-blue-600
                    rounded-lg text-white shadow-xl shadow-blue-500
                    transition-all duration-200 delay-100 animate-bounce">
                    Fazer orçamento
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