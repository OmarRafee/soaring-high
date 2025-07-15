import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import Webmob from "./components/webmob/webmob"; // ✅ Capitalized
import Portfolio from "./components/Portfolio/Portfolio";
import Digital from "./components/Digital/Digital";

const App = () => {
  return (
    <div id="root">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webmob" element={<Webmob />} /> {/* ✅ Capitalized */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/digital" element={<Digital />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
