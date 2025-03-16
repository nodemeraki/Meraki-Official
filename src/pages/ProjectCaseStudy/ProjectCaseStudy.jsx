// import { useParams } from "react-router-dom";
import Header from "/src/components/Header";
import CaseHead from "./CaseHead";
import CaseBody from "./CaseBody";
import Footer from "/src/components/Footer";

const ProjectCaseStudy = () => {
  //   const { id } = useParams();

  return (
    <section className="bg-body">
      <Header />
      <CaseHead />
      <CaseBody />
      <Footer />
    </section>
  );
};

export default ProjectCaseStudy;
