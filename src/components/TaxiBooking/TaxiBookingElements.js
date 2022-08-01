import styled from 'styled-components';

export const InfoSec=styled.div`
    color:#fff;
    padding:40px 0;
    background:${({lightBg})=>(lightBg?'#fff':'#d0def5')};
    top: 200;
    /* justify-content: center;
    align-items: center;
    align-self: center; */
    
   
   
`;


export const InfoRow=styled.div`
    display:flex;
   // margin:0 -15px -15px --15px;
   flex-wrap:wrap;
   justify-content: center;
   align-items:center;
   flex-direction: 'row';
   width: 100%;
   @media screen and (max-width: 750px) {
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-left: 2rem;
  }

   `;

export const InfoColumn=styled.div`
  //  margin-bottom:15px;
    /* padding-right:15px;
    padding-left:15px; */
    /* display:flex; */
    flex:1;
    max-width:50%;
    flex-basis:30%;
    margin-top: 10px;
    color: #000;
   

    @media screen and (max-width:768px){
        max-width:90%;
        flex-basis:100%;
        /* display:flex; */
        /* justify-content:center; */
    }
    h1{
        margin-left: 20%;
        font-size: 25;
        color: black;
    }
`;
export const TextWrapper =styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`;


export const TopLine=styled.div`
    color:${({lightTopLine})=>(lightTopLine?'#a9b3c1':'#4b59f7')};
    line-height:16px;
    letter-spacing:1.4px;
    margin-bottom:16px;
    font-size:18px;

`;

export const TopLine1=styled.div`
    color:#fff;
    line-height:16px;
    letter-spacing:1.4px;
    margin-bottom:16px;
    font-size:18px;

`;


export const Heading=styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    color:${({lightText})=>(lightText?'#f7f8fa':'#1c2237')};
`;


export const SubTitle=styled.p`
    max-width:440px;
    font-size:18px;
    margin-bottom:35px;
    line-height:24px;
    color:${({lightTextDesc})=>(lightTextDesc?'#a9b3c1':'#1c2237')};
`;

export const ImgWrapper=styled.div`
    max-width:555px;
    display:flex;
    justify-content:${({start})=>(start? 'flex-start':'flex-end')};   
`;

export const Img=styled.img`
    padding-right:0;
    border:0;
    max-width:90%;
    vertical-align:middle;
    display:inline-block;
    max-height:500px;
`;

export const RatingWrapper=styled.div`
     display:flex;
     flex-direction:row;
`;

export const RatingSideLeft=styled.div`
  float: left;
  width: 20%;
  margin-top: 8px;
`;

export const RatingName=styled.div`
   font-size:2vh;
   `;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  align-content: center;
  border: none;
  background: #e31837;
  margin: 4rem;
  color: #fff;
  transition: 0.2s ease-out;
  align-items:center;
  justify-content: center;
  align-self: center;
  align-content: center;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const HeroBtnContainer = styled.div`
             flex:1;
             display:flex;
            justify-content: center;
            align-self: center;
            align-content: center;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

export const InfoTitle = styled.h1`
     font-size:48px;
     text-align: center;
     margin-bottom: 4rem;
     color: #000;

     @media screen and (max-width: 650px) {
        text-align:left;
  }
`;

export const ErrorMessageP = styled.p`
    color: red;
    margin-bottom: 10;


`;

