import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ImgBg from '../../images/carbg.jpg';
import ReactWhatsapp from 'react-whatsapp';
import {callNum} from '../../utils/basicInfo'

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;

  
  //position:absolute;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 80%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  padding-top: 5rem;
  padding-left: 1rem;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: -2rem;
  padding-left: 1rem;
`;

export const HeroP1 = styled.p`
  font-size: clamp(2rem, 6vw, 3rem);
  padding: 1rem;
  /* margin-bottom: 2rem; */
`;
export const HeroBtnContainer = styled.div`
  flex-direction: row;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #25D366;
  border-radius: 2rem;
  margin: 1rem;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const HeroBtnWhatsApp = styled(ReactWhatsapp)`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #25D366;
  border-radius: 2rem;
  margin: 1rem;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const HeroBtnLink = styled(Link)`
  font-size: 1.4rem;
 
  border: none;

  color: #fff;
  transition: 0.2s ease-out;

`;

export const HeroBtnAnchor = styled.a`
  color: white;
  background-color: transparent;
  text-decoration: none;

`;
