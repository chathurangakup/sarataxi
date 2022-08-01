import React,{useState} from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductTec,
  ProductPrice,
  ProductButton1,
  ProductButton2,
  ProductsSubHeading,
  NextArrow,
  HeroImage,
  HeroContect,
  Anchor,
  ProductsHeadingContainer
} from './NewsElements';
import { useNavigate } from "react-router-dom";
import {Button} from '../Button';
import styled, {css} from 'styled-components/macro';
import {callNum} from '../../utils/basicInfo';

import Footer from '../../../src/components/footer/Footer';

export const News = ({ heading, data,isShowmainLearnMore }) => {
  // const [displaymodel,setIsDiaplay]=useState(false);
  const navigate = useNavigate();

  const nextSlide=(ourCreations)=>{
    // navigate("/choirnewsmore", { state: { ourCreationsItem: ourCreations } } )
    return(
      <a href={"tel:0740848338"}>sss</a>
    )
 }


 const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top:  ${(isShowmainLearnMore? '2rem': '30rem')};


  @media screen and (max-width: 768px){
    margin-top: 5rem;
  }
`;

  return (
    <div>
    <ProductsContainer>
     <ProductsHeadingContainer>
       <ProductsHeading>{'Our packages'}</ProductsHeading>   
     </ProductsHeadingContainer>
  

      <ProductWrapper>
        {data.map((ourCreations, index) => {
          return (
            <ProductCard key={index}>
               <img src={ourCreations.images[0]} style={{width: 200, height:120,alignContent:'center'}}/>
              <ProductInfo>
                <ProductTitle>{ourCreations.citytocity}</ProductTitle>
                <ProductDesc>{ourCreations.price}</ProductDesc>
                {/* <ProductButton1  isdisplaybtn={ourCreations.isdisplaybtn}  onClick={()=> navigate("/choirnewsmore", { state: { ourCreationsItem: ourCreations } } )}>{ourCreations.button}</ProductButton1> */}
                <Anchor href={"tel:0740848338"}><NextArrow onClick={()=>nextSlide(ourCreations)} /></Anchor>
          
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      {isShowmainLearnMore == true?
       <div style={{ display: 'flex',justifyContent:'center',alignItems:'center'}}>
       {/* <ProductButton2  isdisplaybtn={true} onClick={()=> navigate("/choirnews")}>{'Learn More'}</ProductButton2> */}
       {/* <Button to='/homes' primary={false} onClick={()=> navigate("/choirnews")}>{'View All'}</Button> */}
    </div>
    :null
      }
     

    </ProductsContainer>

    {isShowmainLearnMore == true?
  null:
  <Footer/>}
    </div>
  );
};

// export default Products;
