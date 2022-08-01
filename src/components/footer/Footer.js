import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { callNum } from "../../utils/basicInfo";

const FooterContainer = styled.div`
  background-color: #f7f7f7;
  padding: 2rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    /* height: 120%; */
    padding: 5rem;
  }
`;
const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 14px;
  color: #000;
`;

const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
`;
const FooterLinkContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 35px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkItems1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px;
  text-align: left;
  width: 360px;
  box-sizing: border-box;
  color: #000;

  img {
    margin: 10;
  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 1rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

const FooterText = styled.p`
  color: #000;
  text-decoration: none;
  margin-top: 2rem;
`;

export const SocialLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 16px; */
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  margin: 10px;
`;

export const ContactParm = styled.p`
  color: #fff;
  font-size: 14px;
  padding: 0px 0px 10px 0px;
`;

export const Logo = styled.img`
  width: 15rem;
  height: 5rem;

  /* @media screen and (max-width: 720px){
      width: '40%';
     height: '30%';
   } */
`;

export const HeroBtnWhatsApp = styled(ReactWhatsapp)`


  border: none;

`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      {/* <FooterSubscription>
            <FooterSubHeading>
                gggggg ggghyhyhyyguhhhh hbhjhj kjkjkjkj
            </FooterSubHeading>
            <FooterSubText>
                gggggg ggghyhyhyyguhhhh hbhjhj kjkjkjkj
            </FooterSubText>

            <Form>
                <FormInput>

                </FormInput>
            </Form>

        </FooterSubscription> */}
      <FooterLinkContainer>
        <FooterLinkWrapper>
          <FooterLinkItems1>
            {/* <Logo src={img2} />  */}
            <FooterLinkTitle>About Us</FooterLinkTitle>

            <FooterText to="">
              We provide safe and low price taxi service.WE ARE THE BEST IN TOWN
            </FooterText>
          </FooterLinkItems1>

          <FooterLinkItems>
            <FooterLinkTitle>Quick links</FooterLinkTitle>
            <FooterLink to="/">HOME</FooterLink>
            <FooterLink to="/booktaxi">BOOK TAXI</FooterLink>
            <FooterLink to="/aboutus">ABOUT ME</FooterLink>
            <FooterLink to="/packages">PACKAGES</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Contact us</FooterLinkTitle>
            <FooterLink to="">{callNum}</FooterLink>
            <FooterLink to=""></FooterLink>
            <FooterLink to="">
              Faculty of science, university of colombo,Cumarathunga Munidasa
              Mawatha,Colombo 00300, Sri Lanka
            </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Follow us</FooterLinkTitle>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/parakrama.saranga"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <HeroBtnWhatsApp number={'+94716074311'} message="Welcome to Saranga taxi service !!" >
              <SocialIconLink
                href=""
                target="_blank"
                aria-label="Whatsapp"
              >
                <FaWhatsapp /> 
              
              </SocialIconLink>
                
              </HeroBtnWhatsApp>
             

              {/* <SocialIconLink
                  href='//www.twitter.com/briandesignz'
                  target='_blank'
                  aria-label='Twitter'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </SocialIconLink> */}
            </SocialIcons>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinkContainer>
    </FooterContainer>
  );
};

export default Footer;
