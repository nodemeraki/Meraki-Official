import Header from "/src/components/Header";
import Servhero from "/src/pages/Service/Servhero/Servhero";
import Brand from "/src/pages/Service/Brand/Brand";
import ServiceSelect from "./ServSelection/ServiceSelect";
import Footer from "/src/components/Footer";

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
