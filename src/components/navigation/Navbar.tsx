"use client"
import { useEffect, useState } from "react"
import Burger from "./Burger"
import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link"
import { useSearchParams} from 'next/navigation';

const Navbar = () => {
  const [active, setActive] = useState(false)
  const pathname = useSearchParams();

  useEffect(() => {
    setActive(false)
  }, [pathname])
  
  return (
    <motion.nav initial={{y: "-10%", opacity: 0}} animate={{y: "0%", opacity: 1, transition: {duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1]}}} className="fixed inset-0 z-50 w-full px-10 py-4 h-max">
      <div className="relative z-50 flex items-center justify-between w-full">
        <img src="/imgs/logo.svg" className="h-10 xl:h-14"/>
        <Burger active={active} setActive={setActive}/>
      </div>
      <AnimatePresence>
        {active && 
          <motion.ul initial={{opacity: 0, x: "10%"}} animate={{opacity: 1, x: "0%", transition: {duration: 1, ease: [0.32, 0.72, 0, 1]}}} exit={{opacity:0, x: "-10%", transition: {duration: 0.5, ease: [0.32, 0.72, 0, 1]}}} className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-[100dvw] h-[100dvh] gap-5 text-4xl bg-black/90 backdrop-blur-lg font-extralight">
            <li>
              <Link href={"/#home"}>Domov</Link>
            </li>
            <li>
              <Link href={"#portfolio"}>Portfolio</Link>
            </li>
          </motion.ul>
        }
      </AnimatePresence>
    </motion.nav>
  )
}
export default Navbar