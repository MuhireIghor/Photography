    import React from 'react'
    import { navLinks } from '../Data/NavabarLinks';
    import { address } from '../Data/address';
    import { socialMedia } from '../Data/weblinks';
    import { data } from 'autoprefixer';
    const Footbar = () => {
    return (
        <div className='flex gap-24 md:gap-12 p-20 md:px-10 bg-[#f5f4f2]'>
            <div className='basis-1/3 flex flex-col gap-4'>
                <p className='text-[#6b6b6b] font-serif font-bold text-xl'>WEDDING</p>
                <div className='flex flex-col gap-6 '>
                    <p className='text-[#6b6b6b] font-serif font-bold text-md'>VISIT US :</p>
                    <div className='flex flex-col gap-4'>
    {socialMedia.map((media,index)=>{
        return(
            <div className='flex gap-8'>
                <div className='w-12 md:w-6 h-12 md:h-6 rounded-full bg-white flex items-center justify-center hover:bg-[#c16839]'>
                <>
                <p className='hover:text-white hover:cursor-pointer text-2xl'>{media.icon}</p>
                </>
                </div>
                <p className='text-[#c16839] font-sans font-light text-xl flex  items-center hover:cursor-pointer hover:font-semibold'>{media.name}</p>

            </div>
        )
    })}
                    </div>

                </div>
            </div>
            <div className='basis-1/3 flex flex-col gap-4'>
                <p className='text-[#6b6b6b] font-serif font-bold text-xl'>Office Address</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-md font-sans font-medium text-[#6b6b6b]'>{address.name}</p>
                    <p className='text-md font-sans font-medium text-[#6b6b6b]'>{address.roadAve}</p>
                    <p className='text-md font-sans font-medium text-[#6b6b6b]'>{address.city}</p>
                    <p className='text-md font-sans font-medium text-[#6b6b6b]'>{address.zipCode}</p>

                </div>
                <div className='flex flex-col'>
                    <p className='text-xl font-sans font-bold text-[#6b6b6b] md:text-sm'>Let us capture your beautiful moments</p>
                    <p><a className='text-xl font-sans font-bold text-[#c06535] hover:cursor-pointer md:text-sm'>Contact us </a>now.</p>
                    </div>
            </div>
            <div className='basis-1/3 flex flex-col gap-4'> 
            <p className='text-[#6b6b6b] font-serif font-bold text-xl'>Quick Links</p>
            <div className='flex flex-col gap-4 items-start'>
    {navLinks.map((nav,index)=>{
        return(
            <p className='text-[#c06535] text-md font-sans font-semibold hover:text-black cursor-pointer'>{nav.name}</p>
        )
    })}
            </div>
            </div>


        </div>
    )
    }

    export default Footbar