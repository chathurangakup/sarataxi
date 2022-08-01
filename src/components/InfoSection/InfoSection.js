import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine1,
  Heading,
  SubTitle,
  SubTitle1,
  Img,
  ImgWrapper,
  HeadingContainer,
} from "./InfoSectionElements";
import { Container, Button } from "../../globalStyles";
import {callNum} from '../../utils/basicInfo'


export const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lineTopLine,
  lightText,
  lightTextDesc,
  description,
  headline,
  topLine,
  buttonLable,
  img,
  alt,
  start,
  service1,
  service2,
  service3,
  service4,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <HeadingContainer>
           <Heading lightText={lightText}>{headline}</Heading>
        </HeadingContainer>
       
        <Container>
       
          <InfoRow imgStart={imgStart}>
          
            <InfoColumn>
           
              <TextWrapper>
               
                <TopLine1 lineTopLine={lineTopLine}>{topLine}</TopLine1>

                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                <SubTitle1 lightTextDesc={lightTextDesc}>{service1}</SubTitle1>
                <SubTitle1 lightTextDesc={lightTextDesc}>{service2}</SubTitle1>
                <SubTitle1 lightTextDesc={lightTextDesc}>{service3}</SubTitle1>
                <SubTitle1 lightTextDesc={lightTextDesc}>{service4}</SubTitle1>
                <p style={{fontSize:40}}>
                  <strong>Contact: {callNum}</strong>
                </p>
               
             
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

// export default InfoSection;
