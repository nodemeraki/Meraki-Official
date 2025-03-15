// import { useParams } from "react-router-dom";
import Header from "/src/components/Header/Header";
import CaseHead from "./CaseHead";
import CaseBody from "./CaseBody";
import Footer from "/src/components/Footer/Footer";

const ProjectCaseStudy = () => {
  //   const { id } = useParams();

  return (
    <section>
      <Header />
      <CaseHead />
      <CaseBody />
      <Footer />
    </section>
  );
};

export default ProjectCaseStudy;
