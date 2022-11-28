import React from 'react'
import mainPage from '../assets/mainPage.png';
import leaf from '../assets/leaf-white.png'
import '../styles/mainPage.css'
const MainPage = () => {
    return (
        <div className=' flex flex-col '>
            <div className='main1 h-[41rem] flex flex-col items-center justify-center'>
                <div className=' w-full h-full flex flex-col items-center justify-center opacity-90 relative'>
                    <img src={leaf} className='z-10' />
                    <div className='flex  w-full h-full backdrop-saturate-125 z-30 bg-white/20 absolute'>
                        <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
                            <div className='flex gap-4'>
                                <p className='text-xl text-white font-semibold'>  COUPLES  | </p>
                                <p className='text-xl text-white font-semibold'>  WEDDINGS  | </p>
                                <p className='text-xl text-white font-semibold'> ELOPEMENTS </p>
                            </div>  
                            <p className='text-4xl text-white font-bold leading-relaxed tracking-relaxed '>CAPTURING MOMENTS ONE PHOTO AT A TIME</p>
                            <button className='p-4 bg-[#d7aa92] text-white hover:text-white hover:bg-black'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MainPage;