import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const imgList = [
  {
    url: "assets/img/code.png"
  },
  {
    url: "assets/img/image1.jpg"
  },
  {
    url: "assets/img/image2.jpg"
  },
  {
    url: "assets/img/image3.jpg"
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
    <div className="max-w-[1400px] w-full h-[780px] m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${imgList[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="flex justify-between">
        <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
          <BsChevronCompactLeft size={30} />
        </div>

        <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};
