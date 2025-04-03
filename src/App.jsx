import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/about/About.jsx";
import Service from "./pages/Service/Service.jsx";
import RequestQuote from "./pages/RequestQuote/RequestQuote.jsx";
// import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import ProjectCaseStudy from "./pages/ProjectCaseStudy/ProjectCaseStudy.jsx";
import ContactUs from "./pages/Contact-us/ContactUs.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/project-case-study/:id" element={<ProjectCaseStudy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
export default App;
