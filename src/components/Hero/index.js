import React, { useState } from 'react';
 import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroP1,
  HeroBtn,
  HeroBtnLink,
  HeroBtnContainer,
  HeroBtnAnchor,
  HeroBtnWhatsApp
} from './HeroElements';

import ReactWhatsapp from 'react-whatsapp';
import {callNum} from '../../utils/basicInfo';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
       {/* <Navbar toggle={toggle} /> */}
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */} 
      <HeroContent>
        <HeroItems> 
          <HeroH1>Sara Taxi</HeroH1>
          <HeroP>The premier taxi service in sri lanka</HeroP>
          <HeroP1>Call Now {callNum}</HeroP1>
          <HeroBtnContainer>
          <HeroBtn ><HeroBtnLink to='/booktaxi'>Book Taxi</HeroBtnLink></HeroBtn>
          <HeroBtn ><HeroBtnAnchor href={"tel:0740848338"}> Call Now</HeroBtnAnchor></HeroBtn>
           <HeroBtnWhatsApp number={'+94716074311'} message="Welcome to Saranga taxi service !!" >Whats App</HeroBtnWhatsApp>
          </HeroBtnContainer>
       
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

// export default Hero;
