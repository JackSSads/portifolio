import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const imgList = [
  {
    nameProject: "Dunas Comanda",
    url: "assets/img/projeto-dunas.png",
    link: "https://github.com/JackSSads/comanda-menu"
  },
  {
    nameProject: "Tela do computador",
    url: "assets/img/image1.jpg",
    link: "/"
  },
  {
    nameProject: "Notebook",
    url: "assets/img/image2.jpg",
    link: "/"
  },
  {
    nameProject: "Notebook, só que de cima",
    url: "assets/img/image3.jpg",
    link: "/"
  },
];

export const CarroselProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgList.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imgList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-[1400px] w-full h-[780px] m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${imgList[currentIndex].url})` }}
        className="w-full h-full flex flex-row rounded-2xl bg-center bg-cover duration-500 group"
      >
        
      </div>

      <div className="flex justify-between items-center">
        <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
          <BsChevronCompactLeft size={30} />
        </div>

        <a className="underline" 
        href={`${imgList[currentIndex].link}`}>{imgList[currentIndex].nameProject}</a>

        <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};
