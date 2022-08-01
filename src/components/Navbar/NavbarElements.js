import styled from 'styled-components';
import {Container} from '../../globalStyles'
import {FaMagento} from 'react-icons/fa';
import {Link} from 'react-router-dom'


export const Nav=styled.nav`
    background:black;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;

  top: ${({scrolltop})=>(scrolltop? 0:'-80px')}; //Position the navbar at the top of the page
  top:0;
  width: 100%;
    z-index:999;
    transition: top 0.3s;

`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.5rem 3rem;
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

export const HeroBtnAnchor = styled.a`
  color: white;
  background-color: transparent;
  text-decoration: none;

`;

export const NavbarContainer=styled(Container)`
  
    height:80px;
    display:flex;
    justify-content:space-between;

  
  ${Container}

`;

export const NavLogo=styled(Link)`
    color:#fff;
    justify-content:flex-start;
    cursor:pointer;
    text-decoration:none;
    font-size: 4vh;
    display:flex;
    align-items:center;

`

export const NavIcon=styled(FaMagento)`
    margin-right:0.5rem;
`;

export const MobileIcon=styled.div`
    display:none;

    @media screen and (max-width:960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;

    @media screen and (max-width:960px){
        display:flex;
        position:absolute;
        top:80px;
      flex-direction:column;
      width:90%;
      height:90vh;
      left:${({click})=>(click?0:'-120%')};
      opacity:1;
      transition:all 0.5s ease;
      background:#000;


    }
`;

export const NavItem=styled.li`
    height:80px;
    border-bottom:${({isborderbottom})=>isborderbottom?'2px solid #F4B400':'2px solid transparent'} ;

    &:hover{
        border-bottom:2px solid #b7b7b7;
    }

   
 


    @media screen and (max-width:960px){
        width:80%;

        &:hover{
            border:none
        }
    }
`

export const NavLinks=styled(Link)`
    color:${({isactive})=>isactive? '#e31837':'#fff'};
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0.5rem 1rem;
    height:100%;

    @media screen and (max-width:960px){
      text-align:center;
      padding:2rem;
      width:100%;
      display:table;

     &:hover{
        color:#4b59f7;
        transition:all 0.3s ease;
     }

/* &:hover:active{
      //  background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #3a3535;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
       
     } */
     
    }
`;


export const StyledLink = styled(NavLinks)`
  color: blue;

  &:active {
    color: red;
  }
`;


export const NavItemBtn=styled.li`
           @media screen and (max-width:960px){
               display:flex;
               justify-content:center;
               align-items:center;
               width:100%;
               height:120px;
           }       
`;


 export const NavBtnLink=styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    padding:8px 16px;
    height:100%;
    width:100%;  
    border:none;
    outline:none
 `;

// export const NavMenu=styled.ul`
//     display:flex;
//     align-items:center;
//     list-style:none;
//     text-align:center;

//     @media screen and (max-width:960px){
//         display:flex;
//         flex-direction:column;
//         width:100%;
//         height:90vh;
//         position:absolute;
//         top:80px;
//         left:${({click})=>(click? 0:'-100%')};
//         opacity:1;
//         transition: all 0.5s ease;
//         background:#101522;

//     }
// `;


// export const NavItem=styled.li`
//     height:80px;
//     border-bottom:2px solid transparent;

//     &:hover{
//         border-bottom:2px solid #4b59f7;
//     }

//     @media screen and (max-width:960px){
//         width:100%;

//         &hover{
//             border:none;
//         }
//     }
// `;


// export const NavLinks=styled(Link)`
//     color:#fff;
//     display:flex;
//     align-items:center;
//     text-decoration:none;
//     padding:0.5rem 1rem;
//     height:100%;

//     @media screen and (max-width:960px){
//         text-align:center;
//         padding:2rem;
//         width:100%;
//         display:table;

//     }

//     &:hover{
//         color:#4b59f7;
//         transition:all 0.3s ease;

//     }
// `;










