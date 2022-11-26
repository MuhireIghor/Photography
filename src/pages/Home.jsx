import React,{useState} from 'react'
import About from '../components/About'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar';
import {ImCross} from 'react-icons/im';
import { useRecoilState } from 'recoil';
import { showModal } from '../atoms'
import Services from '../components/Services';

const Home = () => {
const [modal,setModal] = useRecoilState(showModal);
  return (
    <div className=''>
      {
        modal?(
          <>
          <Navbar />
          <MainPage />
          <About modal={modal} />
          <Services />
          </>
        ):(
          <div className='bg-white  h-screen w-screen flex items-center justify-center'>
<div className='w-1/2 h-1/2 bg-black relative p-4'>
  <button onClick={()=>setModal(true)}>
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