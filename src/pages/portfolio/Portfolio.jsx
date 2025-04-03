import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Hero from "./Hero";
import Showcase from "./Showcase";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main className="bg-body">
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
