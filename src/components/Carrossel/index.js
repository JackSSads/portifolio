import { useRef, useState, useEffect } from "react"

import { motion } from "framer-motion"

import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiNestjs, SiSequelize, SiHandlebarsdotjs, SiMysql, SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";

const html = <div className="flex flex-col justify-around items-center"><p className="text-lg">HTML</p><ImHtmlFive2 /> <p className="text-sm">3 ANOS</p></div>
const css = <div className="flex flex-col justify-around items-center"><p className="text-lg">CSS</p><DiCss3 /> <p className="text-sm">3 ANOS</p></div>
const js = <div className="flex flex-col justify-around items-center"><p className="text-lg">JS</p><SiJavascript /> <p className="text-sm">3 ANOS</p></div>
const node = <div className="flex flex-col justify-around items-center"><p className="text-lg">NODE</p><FaNode /> <p className="text-sm">3 ANOS</p></div>
const mysql = <div className="flex flex-col justify-around items-center"><p className="text-lg">MySQL</p><SiMysql /> <p className="text-sm">3 ANOS</p></div>
const sequelize = <div className="flex flex-col justify-around items-center"><p className="text-lg">ORM</p><SiSequelize /> <p className="text-sm">2 ANOS</p></div>
const handlebars = <div className="flex flex-col justify-around items-center"><p className="text-lg">HBS</p><SiHandlebarsdotjs /> <p className="text-sm">2 ANOS</p></div>
const react = <div className="flex flex-col justify-around items-center"><p className="text-lg">REACT</p><SiReact /> <p className="text-sm">1 ANOS</p></div>
const next = <div className="flex flex-col justify-around items-center"><p className="text-lg">NEXT</p><TbBrandNextjs /> <p className="text-sm">1 ANOS</p></div>
const nest = <div className="flex flex-col justify-around items-center"><p className="text-lg">NEST</p><SiNestjs /> <p className="text-sm">1 ANOS</p></div>

const loop = [html, css, js, node, mysql, sequelize, handlebars, react, next, nest]

export default function Carrossel() {

    const slide = useRef(0);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(slide.current?.scrollWidth - slide.current?.offsetWidth)
    }, [])

    return (
        <motion.div className="mt-20 overflow-x-hidden"> {/* movieRow */}
            <motion.div
                ref={slide}
                className="transition-all ease-out delay-100"
            >
                <motion.div
                    className="flex"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {loop.map((item, key) => (
                        <motion.div
                            className="
                                h-40 px-14 text-6xl bg-blue-500 mb-5
                                text-white rounded-xl hover:shadow-lg hover:shadow-blue-400
                                flex justify-center items-center
                                scale-90 hover:scale-100 cursor-pointer
                                transition-all ease-in duration-100"
                            key={key}>
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};