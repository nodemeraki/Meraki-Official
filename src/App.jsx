import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectCaseStudy from "./pages/ProjectCaseStudy/ProjectCaseStudy";
import ContactUs from "./pages/Contact-us/ContactUs";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project-case-study/:id" element={<ProjectCaseStudy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
export default App;
