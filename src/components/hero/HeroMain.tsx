"use client"

import { child, main } from "@/lib/utils"
import { Button } from "../ui/Button"
import { SecondaryButton } from "../ui/SecondaryButton"
import {motion} from "framer-motion"

const HeroMain = () => {
  return (
    <>
      <motion.div initial="hidden" whileInView="show" variants={main} className="max-w-6xl overflow-hidden">
        <motion.h1 variants={child} className="font-medium text-5xl leading-tight md:leading-snug lg:leading-[1.15] text-center text-transparent md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-gray-50 to-gray-500">Kreatívna Videografická Agentúra.</motion.h1>
      </motion.div>
      <motion.div className="p-2 overflow-hidden">
        <motion.p initial={{y: "160%", skewY: "4deg"}} whileInView={{y: "0%", skewY: "0deg", transition: { duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.3}}} className="text-xl text-center md:text-3xl lg:text-5xl font-extralight">Tvoríme videá, ktoré Vašej značke</motion.p>
      </motion.div>
      <motion.div className="overflow-hidden">
        <motion.p initial={{y: "120%", skewY: "4deg"}} whileInView={{y: "0%", skewY: "0deg", transition: { duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.3}}} className="text-xl text-center md:text-3xl lg:text-5xl font-extralight">zvýšia sebavedomie.</motion.p>
      </motion.div>
      <motion.div initial={{y: "10%", opacity: 0}} whileInView={{y: "0%", opacity: 1, transition: { duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.5}}} className="flex gap-5 mt-10 md:gap-10 relative z-[1]">
        <Button>Portfolio</Button>
        <SecondaryButton>Kontakt</SecondaryButton>
      </motion.div>
    </>
  )
}

export default HeroMain