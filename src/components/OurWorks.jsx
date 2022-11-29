import React from 'react';
import { clientStories } from '../Data/clinetStories';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Fade } from 'react-reveal';
import { Carousel } from "react-responsive-carousel";
const OurWorks = () => {
  return (
    <div className='flex flex-col p-24 bg-[#edf5f7]'>
      <div className='w-full flex flex-col items-start justify-center px-8'>
      <p className='text-[#6b6b6b] text-xl font-serif font-extrabold'>RECENT WORK</p>
      <p className='text-[#6b6b6b] text-3xl font-serif font-bold'>Featured weddings featuring real-life love stories</p>
      </div>
      <Slideshow />
    </div>
  )
}
export default OurWorks;
export const Slideshow = () => {
  const slide1 = clientStories.slice(0, 3);
  const slide2 = clientStories.slice(3, 6);
  const slide3 = clientStories.slice(6, 9);
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay labels={{}}
      showStatus={false} stopOnHover swipeable showIndicators={false}>    
      <div className='flex gap-2 '>
        {
          slide1.map((slide) => {
            return (
              <div className='flex flex-col justify-center items-center relative basis-1/3 p-8 group hover:cursor-pointer'>
                <img src={slide.imgaeUrl} className='z-10' />
                <Fade bottom>
                <div className='absolute z-20 flex w-3/4 justify-center items-center bg-white h-1/6 bottom-12 hidden group-hover:flex '>
                <p className='text-[#bd5e2b] font-semibold'>{slide.event}</p>
                </div>
                </Fade>
              </div>
            )
          })
        }
      </div>
      <div className='flex gap-2'>
        {slide2.map((slicer) => {
          return (
            <div className='flex flex-col items-center justify-center relative basis-1/3 p-8 group hover:cursor-pointer '>
              <img src={slicer.imgaeUrl} className='z-10' />
              <Fade bottom>
              <div className='absolute z-20 flex w-3/4 justify-center items-center bg-white h-1/6 bottom-12 hidden group-hover:flex'>
                <p className='text-[#bd5e2b] font-semibold'>{slicer.event}</p>
                </div>
              </Fade>
            </div>
          )
        })}
      </div>
      <div className='flex gap-2 '>
        {slide3.map((slicer1) => {
          return (
            <div className='flex flex-col items-center justify-center relative basis-1/3 p-8 group hover:cursor-pointer'>
              <img src={slicer1.imgaeUrl} className='z-10' alt="woo" />
              <Fade bottom>
              <div className='absolute z-20 flex w-3/4 justify-center items-center bg-white h-1/6 bottom-12 hidden group-hover:flex'>
                <p className='text-[#bd5e2b] font-semibold'>{slicer1.event}</p>
                </div>
              </Fade>
            </div>
          )
        })}

      </div>
    </Carousel>
  )
}