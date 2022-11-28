import React from 'react'
import { images } from '../Data/images';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Gallery = () => {

    return (
        <div className='flex flex-col items-center justify-center mt-[400px] bg-[#f5f4f2] gap-2 p-8'>
            <p className='text-[#6b6b6b] font-serif font-bold text-xl'>Gallery</p>
            <p className='text-[#6b6b6b] text-md font-light font-serif'>Follow us on our web platforms for more details and information</p>
            <div className='flex flex-col items-center justify-center w-full '>
                <div className='w-12 h-[2px] bg-black mt-2'></div>
            </div>
            <SlideShow />

        </div>
    )
}

export default Gallery;
export const SlideShow = () => {
    const slide1 = images.slice(0, 3);
    const slide2 = images.slice(3, 6);
    const slide3 = images.slice(6, 9);
    const slide4 = images.slice(9, 12);
    return (
        <Carousel showThumbs={false} infiniteLoop autoPlay labels={{}}
            showStatus={false} stopOnHover swipeable showIndicators={false}>
            <div className='w-full h-full p-12 flex grid grid-cols-3 gap-4'>
                {slide1.map((s1, index) => {
                    return (
                        <div className='flex items-center justify-center p-4'>
                            <img key={index} src={s1} className='w-full h-full'  />
                        </div>
                    )
                })}
            </div>
            <div className='w-full h-full p-12 flex grid grid-cols-3 gap-4'>
                {slide2.map((s2, index) => {
                    return (
                        <div className='flex items-center justify-center p-4'>
                            <img key={index} src={s2} className='w-full h-full' />
                        </div>
                    )
                })}
            </div>
            <div className='w-full h-full p-12 flex grid grid-cols-3 gap-4'>
                {slide3.map((s3, index) => {
                    return (
                        <div className='flex items-center justify-center p-4'>
                            <img key={index} src={s3} className='w-full h-full' />
                        </div>
                    )
                })}
            </div>
            <div className='w-full h-full p-12 flex grid grid-cols-3 gap-4'>
                {slide4.map((s4, index) => {
                    return (
                        <div className='flex items-center justify-center p-4'>
                            <img key={index} src={s4} className='w-full h-full' />
                        </div>
                    )
                })}
            </div>
        </Carousel>

    )
}