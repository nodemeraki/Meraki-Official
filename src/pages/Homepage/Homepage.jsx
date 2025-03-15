import React from "react";
import Header from "/src/components/Header/Header";
import HeroSection from "/src/pages/Homepage/HeroSection/HeroSection";
import Trust from "/src/pages/Homepage/Trust/Trust";
import Numerals from "./Numerals/Numerals";
import WorkDone from "./workDoneRIght/WorkDone";
import Work from "./HowWeWork/Work";
import Clients from "./Clients/Clients";
import Footer from "/src/components/Footer/Footer";
import SubscribeBox from "./SubscribeBox/SubscribeBox";

function Homepage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Trust />
      <Numerals />
      <WorkDone />
      <Work />
      <Clients />
      <SubscribeBox />
      <Footer />
    </div>
  );
}

export default Homepage;
