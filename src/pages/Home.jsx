import React from 'react'
import About from '../components/About'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <MainPage />
        <About />
    </div>
  )
}

export default Home