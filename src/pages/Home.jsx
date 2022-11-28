import React,{useState} from 'react'
import About from '../components/About'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar';
import {ImCross} from 'react-icons/im';
import { useRecoilState } from 'recoil';
import { showModal } from '../atoms'
import Services from '../components/Services';
import OurWorks from '../components/OurWorks';
import Testimonials from '../components/Testimonials';
import Footbar from '../components/Footbar';
import Gallery from '../components/Gallery';

const Home = () => {
const [modal,setModal] = useRecoilState(showModal);
  return (
    <div className=''>
      {
        !modal?(
          <>
          <Navbar />
          <MainPage />
          <About modal={modal} />
          <Services />
          <OurWorks />
          <Testimonials />
          <Gallery />
          <Footbar />
          </>
        ):(
          <div className='bg-white  h-screen w-screen flex items-center justify-center'>
<div className='w-1/2 h-1/2 bg-black relative p-4'>
  <button onClick={()=>setModal(false)}>
<ImCross className='text-xl text-white right-4 absolute ' />
  </button>
</div>
          </div>
        )
      }
    </div>
  )
}

export default Home