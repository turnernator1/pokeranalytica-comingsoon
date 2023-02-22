import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data' 
import Services from '../components/Services';
import Footer from '../components/Footer';
import { height } from '@mui/system';
import { Box } from '@mui/material';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <Box height="100%">
    {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    {/* <Navbar toggle={toggle}/> */}
    <HeroSection />
    {/* <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services /> */}
    {/* <Footer /> */}
    </Box>
  );
}

export default Home
