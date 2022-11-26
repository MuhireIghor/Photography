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
        <div className={scroll?'flex justify-evenly py-12 sticky top-0 bg-white z-10 w-screen':'flex justify-evenly sticky top- py-6 w-screen bg-[red] z-10'}>
            {navLinks.map((navLink, index) => {
                if (index == 2) {
                    return (
                        <>
                            <div className='flex '>
                                <p onClick={()=>setIsActive(navLink.name)} className={isActive === navLink.name?"text-[#c16839] text-xl hover:cursor-pointer":"text-xl hover:cursor-pointer"}>{navLink.name}</p>
                                <img src={logo} className='h-8 ml-28' />
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