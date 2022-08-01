import styled from 'styled-components';
import ImgBg from '../../images/townbg.jpg';

export const InfoSec=styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
    background-repeat: no-repeat;
    color:#fff;
    padding:40px 0;
`;


export const InfoRow=styled.div`
    display:flex;
    margin:0 -15px -15px --15px;
   flex-wrap:wrap;
   align-items:center;
   flex-direction: 'row';
   `;

export const InfoColumn=styled.div`
    /* margin-bottom:15px; */
    /* padding-right:15px;
    padding-left:15px; */
   // display:flex;
    flex:1;
    max-width:50%;
    flex-basis:50%;

    @media screen and (max-width:768px){
        max-width:100%;
        flex-basis:100%;
        display:flex;
        justify-content:center;
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
    line-height:30px;
    letter-spacing:2.4px;
    margin-bottom:16px;
    font-size: 2rem;

`;


export const Heading=styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    color:${({lightText})=>(lightText?'#f7f8fa':'#1c2237')};
`;


export const SubTitle=styled.p`
    max-width:440px;
    font-size:30px;
    margin-bottom:35px;
    line-height:40px;
    color:${({lightTextDesc})=>(lightTextDesc?'#a9b3c1':'#1c2237')};
`;

export const SubTitle1=styled.p`
    max-width:440px;
    font-size:20px;
    margin-bottom:35px;
    line-height:40px;
    color:'#fff';
`;

export const ImgWrapper=styled.div`
    max-width:455px;
    display:flex;
    //justify-content:${({start})=>(start? 'flex-start':'flex-end')};   
`;

export const Img=styled.img`
  //  padding-right:0;
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

export const HeadingContainer= styled.div`
    justify-content:center ;
    display: flex;
    margin-bottom: 30px;
`

