/* Após implementação dos projetos, remover mt-32 */

const Baseboard = () => {
    return (
        <div className="
            bg-gray-700 h-60 w-full mt-32 bg-cover bg-center
            relative flex justify-center md:justify-start items-center overscroll-contain">

            <img src="img/image3.jpg" alt=""
                className="h-full w-full object-cover
                absolute mix-blend-overlay"/>

            <h3 className="mx-10 text-5xl shadow-gray-700 shadow-2xl
                text-black font-semibold bg-blue-200 rounded-2xl p-5
                mix-blend-screen">
                Venha Criar seu Site!</h3>

        </div>
    );
};

export default Baseboard;