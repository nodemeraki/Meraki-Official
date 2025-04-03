import Header from "/src/components/Header.jsx";
import HeroSection from "/src/pages/Homepage/HeroSection/HeroSection.jsx";
import Trust from "/src/pages/Homepage/Trust/Trust.jsx";
import Numerals from "./Numerals/Numerals.jsx";
import WorkDone from "./workDoneRIght/WorkDone.jsx";
import Work from "./HowWeWork/Work.jsx";
import Clients from "./Clients/Clients.jsx";
import Footer from "/src/components/Footer.jsx";
import SubscribeBox from "./SubscribeBox/SubscribeBox.jsx";

function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Trust />
      <Numerals />
      <WorkDone />
      <Work />
      <Clients />
      <SubscribeBox />
      <Footer />
    </>
  );
}

export default Homepage;
