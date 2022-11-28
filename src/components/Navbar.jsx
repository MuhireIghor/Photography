import React from 'react';
import{useState} from 'react';
import { navLinks } from '../Data/NavabarLinks';
import logo from '../assets/wedding-logo.png'
const Navbar = () => {
    const[isActive,setIsActive] = useState("Home");
    const[scroll,setScroll] = useState(false);
    document.onscroll = (e)=>{
if(window.scrollY>140){
    setScroll(true);
}else{
    setScroll(false);
}
    }
    return (
        <div className={scroll?'flex justify-center gap-12 py-6 sticky top-0 bg-white z-40  w-screen':'flex justify-center gap-12 sticky top-0 py-12 w-screen bg-white z-10'}>
            {navLinks.map((navLink, index) => {
                if (index == 2) {
                    return (
                        <>
                            <div className='flex gap-8 '>
                                <p onClick={()=>setIsActive(navLink.name)} className={isActive === navLink.name?"text-[#c16839] text-xl hover:cursor-pointer":"text-xl hover:cursor-pointer"}>{navLink.name}</p>
                             <p className='text-xl text-[#6b6b6b] font-bold '>NEW HEAVEN &nbsp;PROTOCOL</p>
                            </div>
                        </>
                    )
                }
                return (
                    <p className={isActive === navLink.name?"text-[#c16839] text-xl hover:cursor-pointer":"text-xl hover:cursor-pointer"} onClick={()=>setIsActive(navLink.name)} key={index}>{navLink.name}</p>
                )
            })}
        </div>
    )
}
export default Navbar