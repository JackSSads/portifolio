const About = () => {
    return (
        <div id="about" 
            className="flex flex-col justify-center mt-80 h-full">

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
                    w-full flex justify-center items-center mt-10
                    md:w-1/2">
                    <p>
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing
                        elit. Aliquid sapiente rem
                        sunt velit, cumque et veritatis
                        fugiat atque porro eveniet
                        cum repellendus exercitationem,
                        recusandae officia! Ut deserunt
                        tempora cumque illum!
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing
                        elit. Aliquid sapiente rem
                        sunt velit, cumque et veritatis
                        fugiat atque porro eveniet
                        cum repellendus exercitationem,
                        recusandae officia! Ut deserunt
                        tempora cumque illum!
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing
                        elit. Aliquid sapiente rem
                        sunt velit, cumque et veritatis
                        fugiat atque porro eveniet
                        cum repellendus exercitationem,
                        recusandae officia! Ut deserunt
                        tempora cumque illum!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;