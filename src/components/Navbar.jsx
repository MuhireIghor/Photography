import React from 'react'
import { navLinks } from '../Data/NavabarLinks';
import logo from '../assets/wedding-logo.png'
const Navbar = () => {
    return (
        <div className='flex justify-center space-x-4 p-4 sticky top-4 bg-red-900 items-baseline'>
            {navLinks.map((navLink, index) => {
                if (index == 2) {
                    return (
                        <>
                            <div className='flex items-baseline'>
                                <p className='text-xl'>{navLink.name}</p>
                                <img src={logo} className='h-8' />
                            </div>
                        </>
                    )
                }
                return (
                    <p className='text-xl' key={index}>{navLink.name}</p>
                )
            })}

        </div>
    )
}

export default Navbar