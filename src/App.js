import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { TaxiBooking } from "./components/TaxiBooking/TaxiBooking";
import Footer from "./components/footer/Footer";
import { News } from "./components/news/index";

import styled from "styled-components"; 
import ScrollToTop from './components/ScrollToTop'


import { homeObjOne } from "./components/InfoSection/Data";
import { newsData } from "./components/news/data";

const MainContainer = styled.div`
  position: fixed;
`;

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <div>
              <Hero  />
              <TaxiBooking {...homeObjOne} />
              <InfoSection {...homeObjOne} />
              <News data={newsData} isShowmainLearnMore={true} />
              <Footer />
            </div>
          }
        ></Route>

        <Route
          path="/booktaxi"
          exact
          element={
            <div>
              <TaxiBooking {...homeObjOne} />
              <InfoSection {...homeObjOne} />
              <News data={newsData} isShowmainLearnMore={true} />
              <Footer />
            </div>
          }
        ></Route>

        <Route
          path="/aboutus"
          exact
          element={
            <div>
              <InfoSection {...homeObjOne} />
              <News data={newsData} isShowmainLearnMore={true} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/packages"
          exact
          element={
            <div>
              <News data={newsData} isShowmainLearnMore={true} />
              <Footer />
            </div>
          }
        ></Route>
      </Routes>

      {/* <p style={{fontSize : 25}}>hjhjhjhj</p> */}
    </Router>
  );
}

export default App;
