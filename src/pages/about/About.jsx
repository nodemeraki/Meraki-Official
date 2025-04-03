import Header from "/src/components/Header";
import HeroSection from "/src/pages/About/HeroSection/HeroSection";
import PrinciplesSection from "/src/pages/About/PrincipleSec/principle";
import TeamSection from "/src/pages/About/TeamSection/TeamSection";
import Footer from "/src/components/Footer";

function About() {
  return (
    <>
      <Header />
      <HeroSection />
      <PrinciplesSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default About;
