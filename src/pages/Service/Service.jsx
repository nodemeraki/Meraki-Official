import Header from "/src/components/Header.jsx";
import Servhero from "/src/pages/Service/Servhero/Servhero.jsx";
import Brand from "/src/pages/Service/Brand/Brand.jsx";
import ServiceSelect from "./ServSelection/ServiceSelect.jsx";
import Footer from "/src/components/Footer.jsx";

function Service() {
  return (
    <>
      <Header />
      <Servhero />
      <Brand />
      <ServiceSelect />
      <Footer />
    </>
  );
}

export default Service;
