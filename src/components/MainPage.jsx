import React from 'react'
import mainPage from '../assets/mainPage.png';
import leaf from '../assets/leaf-white.png'
import '../styles/mainPage.css'
const MainPage = () => {
    return (
        <div className=' flex flex-col '>
            <div className='main1 h-[41rem] flex flex-col items-center justify-center'>
                <div className=' backdrop-saturate-125 bg-white/20 w-full h-full flex flex-col items-center justify-center opacity-90 space-y-6'>
                    <img src={leaf} />
                    <div className='flex space-x-2'>

                        <p className='text-xl text-white font-semibold'>  COUPLES  | </p>
                        <p className='text-xl text-white font-semibold'>  WEDDINGS  | </p>
                        <p className='text-xl text-white font-semibold'> ELOPEMENTS </p>
                    </div>
                    <p className='text-4xl text-white font-bold leading-relaxed tracking-relaxed '>CAPTURING MOMENTS ONE PHOTO AT A TIME</p>
                    <button className='p-4 bg-[#d7aa92] text-white hover:text-white hover:bg-black'>Read More</button>
                </div>
            </div>


        </div>
    )
}

export default MainPage;