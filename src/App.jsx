import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

// --- Corporate Events (Updated Paths) ---
import Conference from "./pages/Corporatevents/Conference";
import DealersMeet from "./pages/Corporatevents/DealersMeet";
import CulturalEvents from "./pages/Corporatevents/CulturalEvents";
import StageandMusic from "./pages/Corporatevents/StageandMusic";
import CsrActivities from "./pages/Corporatevents/CsrActivities";
import CorporateGift from "./pages/Corporatevents/CorporateGift";
import EventCatering from "./pages/Corporatevents/EventCatering";

// --- Wedding Events (Updated Paths) ---

import MarriageCard from "./pages/Weddingevents/MarriageCard";
import StageFlowerDecoration from "./pages/Weddingevents/StageFlowerDecoration";
import Entertainment from "./pages/Weddingevents/Entertainment";
import MehndiDesigner from "./pages/Weddingevents/MehndiDesigner";
import Orchestra from "./pages/Weddingevents/Orchestra";
import Beautician from "./pages/Weddingevents/Beautician";
import CatersService from "./pages/Weddingevents/CatersService";
import ReturnGift from "./pages/Weddingevents/ReturnGift";
import LiveStreaming from "./pages/Weddingevents/LiveStreaming";

// --- School Events (Updated Paths) ---
import Schoolevent from "./pages/Schoolevents/Schoolevent";
import Lightandsound from "./pages/Schoolevents/Lightandsound";
import Shedortent from "./pages/Schoolevents/Shedortent";
import Carnival from "./pages/Schoolevents/Carnival";
import Choreography from "./pages/Schoolevents/Choreography";
import Videographyandphotography from "./pages/Schoolevents/Videographyandphotography";
import Bannerandarch from "./pages/Schoolevents/Bannerandarch";
import Trophiesandgift from "./pages/Schoolevents/Trophiesandgift";
import Stage from "./pages/Schoolevents/Stage";

import ScrollToTop from "./components/ScrollToTop";
import WhatWeDo from "./components/WhatWeDo";
import Events from "./pages/Events";

import Anchor from "./pages/Birthdayparties/Anchor";
import BalloonDecoration from "./pages/Birthdayparties/BalloonDecoration";
import CartoonCharacters from "./pages/Birthdayparties/cartooncharacters";
import KidsDelicious from "./pages/Birthdayparties/KidsDelicious";
import MagicShow from "./pages/Birthdayparties/MagicShow";
import SoundAndLight from "./pages/Birthdayparties/SoundAndLight";
import StageAndBackdrop from "./pages/Birthdayparties/StageAndBackdrop";
import Tattoos from "./pages/Birthdayparties/Tattoos";

import Themes from "./pages/Birthdayparties/Themes";
 


 

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/WhatWeDo" element={<WhatWeDo />} />
        <Route path="/events" element={<Events />} />
        {/* Corporate Routes */}
        <Route path="/conference" element={<Conference />} />{" "}
        {/* Note: You mapped '/conference' to CorporateGift in your code. Should this be <Conference/>? */}
        <Route path="/wedding-events" element={<MarriageCard />} />
        <Route path="/dealersmeet" element={<DealersMeet />} />
        <Route path="/culturalevents" element={<CulturalEvents />} />
        <Route path="/stageandmusic" element={<StageandMusic />} />
        <Route path="/csractivities" element={<CsrActivities />} />
        <Route path="/corporategift" element={<CorporateGift />} />
        <Route path="/eventscatering" element={<EventCatering />} />
        {/* Wedding Routes */}
        <Route path="/marriagecard" element={<MarriageCard />} />
        <Route
          path="/stageflowerdecoration"
          element={<StageFlowerDecoration />}
        />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/mehndidesigner" element={<MehndiDesigner />} />
        <Route path="/orchestra" element={<Orchestra />} />
        <Route path="/beautician" element={<Beautician />} />
        <Route path="/catersservice" element={<CatersService />} />
        <Route path="/returngift" element={<ReturnGift />} />
        <Route path="/livestreaming" element={<LiveStreaming />} />
        {/* School Routes */}
        <Route path="/schoolevent" element={<Stage />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/lightandsound" element={<Lightandsound />} />
        <Route path="/shedortent" element={<Shedortent />} />
        <Route path="/carnival" element={<Carnival />} />
        <Route path="/choreography" element={<Choreography />} />
        <Route
          path="/videographyandphotography"
          element={<Videographyandphotography />}
        />
        <Route path="/bannerandarch" element={<Bannerandarch />} />
        <Route path="/trophiesandgift" element={<Trophiesandgift />} />
        {/* {Birthday parties} */}
        <Route path="/birthdayparty" element={<Anchor />} />
        <Route path="/anchor" element={<Anchor />} />
        <Route path="/balloondecoration" element={<BalloonDecoration />} />
        <Route path="/cartooncharacters" element={<CartoonCharacters />} />
      
        <Route path="/kidsdelicious" element={<KidsDelicious />} />
        <Route path="/magicshow" element={<MagicShow />} />
        {/* <Route path="/returngiftbp" element={<ReturnGifts />} /> */}
        <Route path="/soundandlight" element={<SoundAndLight />} />
        <Route path="/stageandbackdrop" element={<StageAndBackdrop />} />
        <Route path="/tattoos" element={<Tattoos />} />
        
        <Route path="/themes" element={<Themes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
