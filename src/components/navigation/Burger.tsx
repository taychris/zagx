"use client"
interface ChildProps { 
  active: boolean; 
  setActive: (str: boolean) => void;
}

const Burger : React.FC<ChildProps> = ({active, setActive}) => {

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <button className={`flex flex-col items-end ${active ? "space-y-0 justify-center" : "space-y-2 justify-center"} group min-h-[22px]`} onClick={toggleMenu}>
        <span className={`block w-6 h-[3px] rounded-full bg-gray-100 group-hover:w-10 duration-300 ${active && "rotate-45 !w-10 absolute"}`}></span>
        <span className={`block w-10 h-[3px] rounded-full bg-gray-100 ${active && "opacity-0"}`}></span>
        <span className={`block w-6 h-[3px] rounded-full bg-gray-100 group-hover:w-10 duration-300 ${active && "-rotate-45 !w-10 absolute"}`}></span>
    </button>
  )
}
export default Burger