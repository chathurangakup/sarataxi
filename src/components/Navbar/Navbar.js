import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  HeroBtn,
  HeroBtnAnchor
} from "./NavbarElements";
// import {Button, Container} from '../../globalStyles';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
 import {callNum} from '../../utils/basicInfo'
// import styled from 'styled-components';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [linkName, setLinkName] = useState("home");
  const [button, setButton] = useState(true);
  const [top, setTop] = useState(true);

  const handleClick = () => {
    window.scrollTo(0, 0);
    setClick(!click);
  };

  const clickNav = (linkname) => {
    setLinkName(linkname);
    // if(linkName=='home'){
    //     window.scrollTo(0, 0);
    // }else if(linkName=='aboutus'){
    //     window.scrollTo(0, 500);
    // }else if(linkName=='services'){
    //     window.scrollTo(0, 1000);
    // }else if(linkName=='products'){
    //     window.scrollTo(0, 1500);
    // }
    // console.log('kkk');
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setTop(false);
    } else {
      setTop(true);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrolltop={top}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              SaraTaxi
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem isborderbottom={linkName == "home"}>
                <NavLinks
                  to="/"
                  exact
                  onClick={() => clickNav("home")}
                  isactive={linkName == "home"}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem isborderbottom={linkName == "booktaxi"}>
                <NavLinks
                  to="/booktaxi"
                  exact
                  onClick={() => clickNav("booktaxi")}
                  isactive={linkName == "booktaxi"}
                >
                  Book Taxi
                </NavLinks>
              </NavItem>
              <NavItem isborderbottom={linkName == "aboutus"}>
                <NavLinks
                  to="/aboutus"
                  exact
                  onClick={() => clickNav("aboutus")}
                  isactive={linkName == "aboutus"}
                >
                  About Me
                </NavLinks>
              </NavItem>
              <NavItem isborderbottom={linkName == "packages"}>
                <NavLinks
                  to="/packages"
                  exact
                  onClick={() => clickNav("packages")}
                  isactive={linkName == "packages"}
                >
                  Packages
                </NavLinks>
              </NavItem>
              <HeroBtn ><HeroBtnAnchor href={"tel:0740848338"}> Call Now</HeroBtnAnchor></HeroBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
