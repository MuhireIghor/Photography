import React, { useState } from 'react'
import bgImg from '../../src/assets/mainPage.png';
import { testimonials } from '../Data/testimonials';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Fade } from 'react-reveal';
const Testimonials = () => {
  const [position, setPosition] = useState(0);
  const handleReverse = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
    else {
      setPosition(0);
    }
  }
  const handleAdvance = () => {
    if (position >= 0 && position < testimonials.length - 1) {
      setPosition(position + 1);
    }

  }
  return (
    <div className='flex flex-col items-center justify-center relative w-full'>
      <img className='z-10 h-[24rem] w-full object-cover' src={bgImg} />
      <div className='absolute z-20 flex flex-col items-center justify-center bg-white/20 backdrop-saturate-150 h-full w-full gap-6 '>
        <p className='text-xl text-white font-bold font-sans'>LET'S WORK TOGETHER</p>
        <p className='text-3xl text-white font-extrabold font-sans'>Contact Us For Pricing Availability</p>
        <button className='p-4 bg-[#d7aa92] text-white hover:text-white hover:bg-black flex w-1/4  items-cente justify-center w-1/6'>MORE ABOUT ME</button>
        <div className='flex flex-col absolute left-2 top-[328px] bg-white p-10  w-1/3'>
        <Fade left>
          <div className='gap-12 flex flex-col'>
          <p>{testimonials[position].message}</p>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <p>{testimonials[position].date}</p>
              <p>{testimonials[position].name}</p>
            </div>
            <div className='flex gap-12'>
              <FaChevronLeft onClick={handleReverse} />
              <FaChevronRight onClick={handleAdvance} />
            </div>
          </div>
          </div>
        </Fade>
        </div>
      </div>

    </div>
  )
}

export default Testimonials