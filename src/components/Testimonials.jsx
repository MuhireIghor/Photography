import React, { useState } from 'react'
import bgImg from '../../src/assets/mainPage.png';
import { testimonials } from '../Data/testimonials';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import {ImQuotesLeft} from 'react-icons/im';
import { Fade, Slide } from 'react-reveal';
const Testimonials = () => {
  const [position, setPosition] = useState(0);
  const [change, setChange] = useState(false);
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(false);
  const handleReverse = () => {
    if (position > 0) {
      setPosition(position - 1)
      setChange(false);
      setForward(true);
    }
    else {
      setPosition(0);
      setForward(false);

    }
  }
  const handleAdvance = () => {
    if (position >= 0 && position < testimonials.length - 1) {
      setPosition(position + 1);
      setChange(true)
      setBackward(true)
    }
    else {
      setBackward(false)
    }

  }
  return (
    <div className='flex flex-col items-center justify-center relative w-full'>
      <img className='z-10 h-[24rem] w-full object-cover' src={bgImg} />
      <div className='absolute z-20 flex flex-col items-center justify-center bg-white/20 backdrop-saturate-150 h-full w-full gap-6 '>
        <p className='text-xl text-white font-bold font-sans'>LET'S WORK TOGETHER</p>
        <p className='text-3xl text-white font-extrabold font-sans'>Contact Us For Pricing Availability</p>
        <button className='p-4 bg-[#d7aa92] text-white hover:text-white hover:bg-black flex w-1/4  items-cente justify-center w-1/6'>MORE ABOUT ME</button>
        <div className='flex flex-col absolute left-16 top-[328px] bg-white p-10  w-1/3'>

          <div className='gap-12 flex flex-col p-auto '>
            { 
              change ? ( 
                <>
                  <Fade left spy={testimonials[position].name}>
                    <p className='text-[#6b6b6b] text-md font-light font-serif'>{testimonials[position].message}</p>
                    <div className='flex  justify-between'>
                      <div className='flex flex-col  items-center justify-center basis-3/4 gap-2'>
                        <p className='text-md font-semibold text-[#6b6b6b]'>{testimonials[position].date}</p>
                        <div className='flex gap-2'>
                          <ImQuotesLeft className='text-4xl -ml-4 -mt-4 text-[#d7aa92]'  />
                        <p className='text-2xl font-extrabold text-[#6b6b6b] -ml-1' >{testimonials[position].name}</p>
                        </div>
                      </div>
                      <div className='flex gap-12 basis-1/4'>
                        <FaChevronLeft onClick={handleReverse} className={backward ? "text-black" : "text-[gray]"} />
                        <FaChevronRight onClick={handleAdvance} className={forward ? "text-black" : "text-[gray]"} />
                      </div>
                    </div>
                  </Fade>
                </>
              ) : (
                <>
                  <Fade right spy={testimonials[position].name}>
                    <p className='text-[#6b6b6b] text-md font-light font-serif'>{testimonials[position].message}</p>
                    <div className='flex justify-between'>
                      <div className='flex flex-col items-center justify-center basis-3/4 gap-2 '>
                        <p className='text-md font-semibold text-[#6b6b6b]'>{testimonials[position].date}</p>
                        <div className='flex gap-2'>
                <ImQuotesLeft className='text-4xl -ml-4 -mt-4 text-[#d7aa92]' />
                        <p className='text-2xl font-extrabold text-[#6b6b6b] -ml-1 '>{testimonials[position].name}</p>
                        </div>
                      </div>
                      <div className='flex gap-12 basis-1/4'>
                        <FaChevronLeft onClick={handleReverse} />
                        <FaChevronRight onClick={handleAdvance} />
                      </div>
                    </div>
                  </Fade>
                </>
              )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials