import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Conference from './pages/Conference'
import DealersMeet from './pages/DealersMeet'
import CulturalEvents from './pages/CulturalEvents'
import StageandMusic from './pages/StageandMusic'
import CsrActivities from './pages/CsrActivities'
import CorporateGift from './pages/CorporateGift'
import EventCatering from './pages/EventCatering'
import Wedding from './pages/Wedding'
import MarriageCard from './pages/MarriageCard'
import StageFlowerDecoration from './pages/StageFlowerDecoration'
import Entertainment from './pages/Entertainment'
import MehndiDesigner from './pages/MehndiDesigner'
import Orchestra from './pages/Orchestra'
import Beautician from './pages/Beautician'
import CatersService from './pages/CatersService'
import ReturnGift from './pages/ReturnGift'
import LiveStreaming from './pages/LiveStreaming'
import Schoolevent from './pages/Schoolevent'
import Lightandsound from './pages/Lightandsound'
import Shedortent from './pages/Shedortent'
import Carnival from './pages/Carnival'
import Choreography from './pages/Choreography'
import Videographyandphotography from './pages/Videographyandphotography'
import Bannerandarch from './pages/Bannerandarch'
import Trophiesandgift from './pages/Trophiesandgift'
import Stage from './pages/Stage'
import ScrollToTop from './components/ScrollToTop'





function App() {

  return (
    <>
    
     <Navbar/>
     <ScrollToTop/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/conference' element={<Conference/>}/>
      <Route path='/wedding-events' element={<Wedding/>}/>
      <Route path='/dealersmeet' element={<DealersMeet/>}/>
      <Route path='/culturalevents' element={<CulturalEvents/>}/>
      <Route path='/stageandmusic' element={<StageandMusic/>}/>
      <Route path='/csractivities' element={<CsrActivities/>}/>
      <Route path='/corporategift' element={<CorporateGift/>}/>
      <Route path='/eventscatering' element={<EventCatering/>}/>
      <Route path='/marriagecard' element={<MarriageCard/>}/>
      <Route path='/stageflowerdecoration' element={<StageFlowerDecoration/>}/>
      <Route path='/entertainment' element={<Entertainment/>}/>
      <Route path='/mehndidesigner' element={<MehndiDesigner/>}/>
      <Route path='/orchestra' element={<Orchestra/>}/>
      <Route path='/beautician' element={<Beautician/>}/>
      <Route path='/catersservice' element={<CatersService/>}/>
      <Route path='/returngift' element={<ReturnGift/>}/>
      <Route path='/livestreaming' element={<LiveStreaming/>}/>
      <Route path='/schoolevent' element={<Schoolevent/>}/>
      <Route path='/stage' element={<Stage/>}/>
      <Route path='/lightandsound' element={<Lightandsound/>}/>
      <Route path='/shedortent' element={<Shedortent/>}/>
      <Route path='/carnival' element={<Carnival/>}/>
      <Route path='/choreography' element={<Choreography/>}/>
      <Route path='/videographyandphotography' element={<Videographyandphotography/>}/>
      <Route path='/bannerandarch' element={<Bannerandarch/>}/>
      <Route path='/trophiesandgift' element={<Trophiesandgift/>}/>
     </Routes>
     <Footer/>
     
      
    </>
  )
}

export default App
