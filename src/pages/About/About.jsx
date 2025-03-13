import React from "react";
import Header from "/src/components/Header/Header";
import HeroSection from "/src/pages/About/HeroSection/HeroSection";
import PrinciplesSection from "/src/pages/About/PrincipleSec/principle";
import TeamSection from "/src/pages/About/TeamSection/TeamSection";
import Base from "/src/pages/About/Base/Base";
import Footer from "/src/components/Footer/Footer";

function About() {
  return (
    <>
      <Header />
      <HeroSection />
      <PrinciplesSection />
      <TeamSection />
      <Footer />
      <Base />
    </>
  );
}

export default About;
