import React from 'react';
import { BsCamera } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlinePicture } from 'react-icons/ai';
import leaf from '../assets/leaf-blue-ornament-54x64.png';

const Services = () => {
    return (
        <div className='flex flex-col  bg-white gap-8 py-20'>

            <div className='flex flex-col items-center justify-center md:justify-start gap-8 '>
                <img src={leaf} />
                <p className='text-2xl font-semibold text-[#6b6b6b] md:text-sm'>WE TELL STORIES</p>
                <p className='text-3xl font-bold text-[#6b6b6b] md:w-1/2 md:text-[18px]'>We are here to connect and document your love story the way you want it told</p>
            </div>
            <div className='flex flex-row p-12 md:flex-col'>
                <div className='basis-1/3 flex flex-col items-center justify-center gap-4'>
                    <BsCamera className='text-6xl text-[#d9af98]' />
                    <p className='text-2xl font-bold text-[#6b6b6b]'>Capturing Weddings</p>
                    <p className='text-[#6b6b6b] w-3/4'>We make sure we connect with the couple and ensure that the memories that speaks of your love story are preserved. </p>
                </div>
                <div className='basis-1/3 flex flex-col items-center justify-center gap-4'>
                    <AiOutlineHeart className='text-6xl text-[#d9af98]' />
                    <p className='text-2xl font-bold text-[#6b6b6b]'>Fine Retouching</p>
                    <p className='text-[#6b6b6b] w-3/4'>Our fine retouching is to ensure each photo and each moments are enhanced, not alter. No moments will be fabricated.    </p>
                </div>
                <div className='basis-1/3 flex flex-col items-center justify-center gap-4'>
                    <AiOutlinePicture className='text-6xl text-[#d9af98]' />
                    <p className='text-2xl font-bold text-[#6b6b6b]'>Editing Style</p>
                    <p className='text-[#6b6b6b] w-3/4'>Everything we create is a reflection of the real feelings and the raw interactions during your special day.  </p>
                </div>
              

            </div>

        </div>
    )
}

export default Services