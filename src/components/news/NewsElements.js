import styled, {css} from 'styled-components/macro';
import {colors} from '../../utils/styles';
import { FiPhoneCall} from 'react-icons/fi'

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
 // padding: 5rem calc((100vw - 1300px) / 2);
  /* background: #fff; */
  color: #fff;
 background: #ffe6e6;;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 25rem;


@media screen and (max-width: 768px){
  margin-top: 5rem;
}


`;

export const ProductCard = styled.div`
  margin: 1rem 1rem;
  line-height: 2;
  width: 200px;
  height: 300px;
  background: #fff;
  padding: 0rem 0rem 1rem 0rem;
  /* z-index: 10; */
  position: relative;
  border:'2px solid #000' ;
  border-radius: 3px;


`;

export const ProductImg = styled.img`
  height: 200px;
  width: 200px;
  min-width: 60px;
  /* max-width: 100%; */
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(3rem, 3vw, 3rem);
  text-align: center;
  color: #000;
`;


export const ProductsSubHeading = styled.h3`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  text-align: center;
  color: #000;
`;



export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  color: #F4B400;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 2rem; */
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.5rem;
  justify-content:left;
  text-align:left;
  line-height: 1;
  color: #000;
`;

export const ProductTec=styled.strong`
    margin-bottom: 1rem;
    justify-content:left;
    text-align:left
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  display:${({isdisplayprice})=>isdisplayprice?'block':'none'};
`;

export const Anchor = styled.a`
  color: green;
  background-color: transparent;
  text-decoration: none;
  margin: 20;




`;

export const ProductButton1 = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  display:${({isdisplaybtn})=>isdisplaybtn?'block':'none'};
  border: none;
  background: ${colors.primaryColor2};
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 10ch;

  &:hover {
    background: ${colors.primaryColor1};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: ${colors.white};
  }
`;

export const ProductButton2 = styled.button`
font-size: 1rem;
  padding: 1rem 4rem;
  display:${({isdisplaybtn})=>isdisplaybtn?'block':'none'};
  border: none;
  background: ${colors.primaryColor2};
  color: #fff;
  transition: 0.2 ease-out;
  border: 1ch;
  border-radius: 10ch;

  &:hover {
    background: ${colors.primaryColor1};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: ${colors.white};
  }
`;

const arrowButton= css`


    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
    background: green;
    border-radius: 50px;
    position: absolute;

    padding: 10px;
    ${'' /* margin-right: 0.4rem; */}
    border: 1px solid #fff;
    user-select: none;
    transition: 0.3s;
    align-self: flex-end;
    bottom:0.5rem;
    right:10;
    margin-top: 40;
    justify-content: flex-end;
   

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`

export const NextArrow = styled(FiPhoneCall)`
    ${arrowButton}
`


export const HeroImage=styled.img` 
  position: absolute;
  top: 10;
  left: 0;
  width: 100vw;
  /* height: 80vh; */
  /* object-fit: cover; */
`
export const HeroContect = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100%- 100px);
    color: #fff;

    h1{
        font-size: clamp(1rem, 8vw, 4rem);
        font-weight: 800;
        text-transform: uppercase;
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
        align-items: center;
        justify-content: center;
        align-self: center;
        margin-top: 3rem;
        margin-bottom: 0.8rem;
    }
`;

export const ProductsHeadingContainer=styled.div`
    background-color: #F4B400;
    padding: 20px;
`;



