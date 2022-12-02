import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { navLinks } from '../Data/NavabarLinks';
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/wedding-logo.png'
const Navbar = () => {
    const [isActive, setIsActive] = useState("Home");
    const [scroll, setScroll] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const dropNav = useRef();
    const handleResponsive = () => {
        setResponsive((prev) => !prev)
    }
    document.onscroll = (e) => {
        if (window.scrollY > 140) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    useEffect(() => {
        const activeListener = document.addEventListener("mousedown", (e) => {
            if (!dropNav.current.contains(e.target)) {
                setResponsive(false);
            }
        })
        return document.removeEventListener("mousedown", () => activeListener)
    })
    return (
        <div className={scroll ? 'flex justify-center gap-12 py-6 fixed bg-white z-40  w-screen xl:bg-[blue]  md:bg-[orange] ' : 'flex justify-center gap-12 fixed py-12 w-screen bg-white z-20 xl:bg-[blue] md:bg-[orange]'}>
            {navLinks.map((navLink, index) => {
                if (index == 2) {
                    return (
                        <>
                            <div className='flex gap-8 md:hidden'>
                                <p onClick={() => setIsActive(navLink.name)} className={isActive === navLink.name ? "text-[#c16839] text-xl hover:cursor-pointer" : "text-xl hover:cursor-pointer hover:text-[#c16839]"}>{navLink.name}</p>
                                <p className='text-xl text-[#6b6b6b] font-bold lg:text-md lg:ml-4 '>NEW HEAVEN &nbsp;PROTOCOL</p>
                            </div>
                        </>
                    )
                }
                return (
                    <p className={isActive === navLink.name ? "text-[#c16839] text-xl hover:cursor-pointer md:hidden" : "text-xl hover:cursor-pointer hover:text-[#c16839] md:hidden"} onClick={() => setIsActive(navLink.name)} key={index}>{navLink.name}</p>
                )
            })}
            <div className={scroll ? 'hidden md:flex justify-between  z-40  w-full px-2' : 'hidden md:flex  justify-between z-10  w-full px-2'}>
                <p className='text-2xl font-serif  text-[#6b6b6b] font-bold sm:text-xl'>NEW HEAVEN PROTOCOL</p>
                <div className='flex flex-col relative '>
                    <button onClick={handleResponsive}><AiOutlineMenu className='text-[#6b6b6b] hover:text-[#c16839] text-2xl' /></button>
                    {responsive && (
                        <div ref={dropNav} className='flex flex-col divide-y-2 divide-[#6b6b6b] absolute right-2 bg-white p-2 -z-20 '>
                            {navLinks.map((nav, index) => {
                                return (
                                    <p className='hover:cursor-pointer hover:text-[#c16839] text-[#6b6b6b] font-serif' key={index}>{nav.name}</p>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Navbar