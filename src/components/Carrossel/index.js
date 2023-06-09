import React from "react"
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiNestjs, SiSequelize, SiHandlebarsdotjs, SiMysql, SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: ImHtmlFive2, experience: "3 ANOS" },
  { name: "CSS", icon: DiCss3, experience: "3 ANOS" },
  { name: "JS", icon: SiJavascript, experience: "3 ANOS" },
  { name: "NODE", icon: FaNode, experience: "3 ANOS" },
  { name: "MySQL", icon: SiMysql, experience: "3 ANOS" },
  { name: "ORM", icon: SiSequelize, experience: "2 ANOS" },
  { name: "HBS", icon: SiHandlebarsdotjs, experience: "2 ANOS" },
  { name: "REACT", icon: SiReact, experience: "1 ANO" },
  { name: "NEXT", icon: TbBrandNextjs, experience: "1 ANO" },
  { name: "NEST", icon: SiNestjs, experience: "1 ANO" },
];

export default function Carrossel() {
  const slide = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (slide.current) {
      setWidth(slide.current.scrollWidth - slide.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div className="mt-20 overflow-x-hidden">
      <motion.div ref={slide} className="transition-all ease-out delay-100">
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, key) => (
            <motion.div
              className="
                h-40 px-14 text-6xl bg-blue-500 mb-5
                text-white rounded-xl hover:shadow-lg hover:shadow-blue-400
                flex justify-center items-center
                scale-90 hover:scale-100 cursor-pointer
                transition-all ease-in duration-100"
              key={key}
            >
              <div className="flex flex-col justify-around items-center">
                <p className="text-lg">{skill.name}</p>
                {React.createElement(skill.icon)}
                <p className="text-sm">{skill.experience}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
