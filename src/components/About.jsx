import React from 'react';
import bride from '../assets/bride.png'

const About = () => {
  return (
    <div className='bg-[#f5f4f2] flex items-center justify-between h-[40.9rem]'>
<div className='basis-1/2  flex justify-end'>
<img src={bride} className='h-[28rem] mt-20 ' />
</div>
<div className='flex flex-col justify-end basis-1/2 gap-8 '>
<p className='text-2xl font-semibold text-[#6b6b6b]'>YOUR LOVE STORY</p>
<p className='text-3xl font-bold text-[#6b6b6b]'>CAPTURED BEHIND THE CAMERA</p>
<p className='text-md text-[#6b6b6b]'>Creating images, both candid and staged, with all the laughs and the in-betweens. We are here to capture the real you and the real love. Together, let us document your day and create images which you could relive for years to come. You deserve the love-filled and unforgettable wedding of your dreams and I am here to help!</p>
<div className='w-full items-center justify-center'>
<button className='p-4 bg-[#d7aa92] text-white hover:text-white hover:bg-black flex w-1/4  items-cente justify-center'>MORE ABOUT ME</button>
</div>
</div>




    </div>
  )
}

export default About