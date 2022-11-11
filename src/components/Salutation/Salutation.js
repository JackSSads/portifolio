
const Salutation = () => {
    return (
        <div className="
            flex flex-row justify-between items-center
            h-full">

            <div className="text-left w-1/3">

                <h2 class="text-4xl font-bold">
                    Seja bem-vindo(a) ao meu humilde espaço!
                </h2>

                <p>Quero que meus clientes se sintam incríveis e únicos. Levando seus projetos a outro nível!</p>

                <a type="button" href="https://wa.me/5584994015772" target="_blanck" className="
                    flex justify-center items-center
                    p-5 mt-10 bg-blue-500 h-1 hover:bg-blue-600
                    rounded-lg text-white shadow-xl shadow-blue-500
                    transition-all duration-200 delay-100 animate-bounce">
                    Fazer orçamento
                </a>

            </div>
            
            <img 
            src="img/image1.jpg" 
            className="h-96 rounded-lg" />
        </div>
    );
};

export default Salutation;