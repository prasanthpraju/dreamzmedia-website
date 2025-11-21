import React from 'react'
 
import OurMajorService from '../components/OurMajorService'
import Clients from '../components/Clients'
import Hero from "../components/Hero"


function Home() {
  return (
    <div>
       <Hero/>
       <OurMajorService/>
       <Clients/>
       
    </div>
  )
}

export default Home