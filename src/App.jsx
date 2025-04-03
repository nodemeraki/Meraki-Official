import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/about/About";
import Service from "./pages/Service/Service";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectCaseStudy from "./pages/ProjectCaseStudy/ProjectCaseStudy";
import ContactUs from "./pages/Contact-us/ContactUs";
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project-case-study/:id" element={<ProjectCaseStudy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
export default App;
