import React from 'react'
import HeroSection from '../components/HeroSection'
import OurMajorService from '../components/OurMajorService'
import Clients from '../components/Clients'
import ImageSlider from '../components/ImageSlider'


function Home() {
  return (
    <div>
       <HeroSection/>
       <OurMajorService/>
       <Clients/>
       <ImageSlider/>
    </div>
  )
}

export default Home