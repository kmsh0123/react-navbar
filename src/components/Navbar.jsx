import React, { useState } from 'react'
import {SiIonic} from "react-icons/si"
import {GrMenu} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
    const menuLinks = [
        {name : "HOME", link:"/"},
        {name : "ABOUT", link:"/about"},
        {name : "SKILLS",link:"/skills"},
        {name : "PROJECTS",link:"/projects"},
        {name : "CONTACT",link:"/contact"}
    ]
    const [open,setOpen] = useState(false);
    
  return (
    <>
    <div className="md:flex md:justify-between md:items-center md:shadow-lg md:p-5 p-0 mt-1 fixed-top rounded-lg">
        <h1 className='text-2xl font-bold flex items-center gap-1 shadow-lg md:shadow-none p-3 md:p-0'>
        <SiIonic className='text-violet-900'/>
            Nav
            <div onClick={()=>setOpen(!open)} className="ms-auto md:hidden">
            {
                open ? <AiOutlineClose/> : <GrMenu/>
            }
            </div>
        </h1>
        <ul className={`flex flex-col justify-center md:flex-row md:z-auto z-[-1] absolute md:static w-full md:w-auto items-center md:space-x-8 shadow-2xl md:shadow-none py-5 md:bg-white bg-slate-800 text-white md:text-black h-screen md:h-auto transition-all duration-500 ease-in md:py-0 space-y-10 md:space-y-0 text-center md:text-start ${open ? "left-0": "left-[-1024px]"}`}>
        {
            menuLinks.map(menu => {
                return (
                <li key={menu.name}>{menu.name}</li>
                )
            })
        }
        </ul>
    </div>
</>
  )
}

export default Navbar