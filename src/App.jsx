import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import "./index.css";
import React from "react";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
    </Router>
  );
}
export default App;
