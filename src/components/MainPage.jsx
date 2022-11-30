import React from 'react'
import mainPage from '../assets/nhnMenStaff.png';
import leaf from '../assets/leaf-white.png'
const MainPage = () => {
    return (
        <div className=' flex flex-col relative overflow-x-hidden '>
                    <img src={mainPage} className=' w-full h-full z-10 md:object-contain' />
                <div className='flex  w-full md:w-full h-full z-20 absolute'>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
                        <div className='flex gap-4 md:gap-2'>
                            <p className='text-xl text-white font-semibold'>  COUPLES  | </p>
                            <p className='text-xl text-white font-semibold'>  WEDDINGS  | </p>
                            <p className='text-xl text-white font-semibold'> ELOPEMENTS </p>
                        </div>
                        <p className='text-4xl text-white font-bold leading-relaxed tracking-relaxed md:tracking-wide leading-wide md:text-[22px] sm:text-[16px] sm:[font-semibold]'>CAPTURING MOMENTS ONE PHOTO AT A TIME</p>
                        <button className='p-4 md:p-2 bg-[#d7aa92] text-white hover:text-white hover:bg-black'>Read More</button>
                    </div>
                </div>


        </div>
    )
}

export default MainPage;