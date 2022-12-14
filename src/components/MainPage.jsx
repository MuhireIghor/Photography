import React,{useState} from 'react'

import leaf from '/assets/leaf-white.png'
const MainPage = () => {
    const [scroll, setScroll] = useState(false);
    document.onscroll = (e) => {
        if (window.scrollY > 140) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    return (
        <div className=' flex flex-col relative overflow-x-hidden '>
                    <img src={'https://res.cloudinary.com/dpk9zrwl2/image/upload/v1669982610/nhnMenStaff_ba8hda.png'} className=' w-full h-full z-10 md:object-contain' />
                <div className={scroll?'flex  w-full md:w-full h-full  absolute':'flex  w-full md:w-full h-full z-10 absolute'}>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-4 sm:mt-12 xl:mt-16 '>
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