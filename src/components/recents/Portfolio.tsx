"use client"
import { child, main } from "@/lib/utils"
import { Button } from "../ui/Button"
import {motion} from "framer-motion"

const recentProjects = [
    {
        imgUrl: "https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
        title: "Wedding of a lifetime."
    },
    {
        imgUrl: "https://images.unsplash.com/flagged/photo-1573585808609-26146616378d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        title: "Concert of Son Paolo."
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1602786195490-c785a218df40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
        title: "Flying at the speed of light."
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  }
  
const item = {
    hidden: { x: "-20px", opacity: 0},
    show: { x: "0px", opacity: 1, transition: {duration: 1, ease: [0.32, 0.72, 0, 1]}  }
}

const Portfolio = () => {
  return (
    <>
        <motion.div initial="hidden" whileInView="show" variants={main} className="my-20 overflow-hidden">
            <motion.h1 variants={child} className='text-5xl font-medium leading-normal text-center text-transparent md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-gray-50 to-gray-400'>Posledné projekty.</motion.h1>
        </motion.div>
        <motion.div variants={container}
    initial="hidden"
    whileInView="show" className="relative grid w-full grid-cols-1 lg:grid-cols-3">
            {recentProjects.map((project, index) => (
                <motion.div variants={item} key={index} className="aspect-[2/3] relative flex cursor-pointer overflow-hidden group">
                    <img src={project.imgUrl} className="object-cover w-full duration-300 group-hover:scale-105 grayscale"/>
                    <div className="absolute z-[1] flex md:gap-3 px-5 pt-3 md:pt-6">
                        <h1 className="order-2 text-2xl font-extralight md:text-5xl lg:text-4xl">{project.title}</h1>
                        <h2 className="order-1 mr-3 font-bold text-7xl md:text-9xl lg:text-8xl">0{index + 1}</h2>
                    </div>
                    <div className="absolute z-[1] left-12 top-28 md:top-44 lg:top-36">
                        <svg width="4" height="286" viewBox="0 0 4 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2" y1="0.996582" x2="2" y2="285.997" stroke="white" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30">

                    </div>
                </motion.div>
            ))}
            
            <Button href="/portfolio" className="absolute bottom-5 right-5">Portfolio</Button>
        </motion.div>
    </>
  )
}
export default Portfolio