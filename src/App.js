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
import BusinessSetup from "./components/BusinessSetup/BusinessSetup"; // ✅ Capitalized
import BusinessSolutions from "./components/BusinessSolutions/BusinessSolutions"; // ✅ Capitalized
import MarketingAdvertising from "./components/MarketingAdvertising/MarketingAdvertising"; // ✅ Capitalized
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
          <Route path="/business-setup" element={<BusinessSetup />} /> {/* ✅ Capitalized */}
          <Route path="/business-solutions" element={<BusinessSolutions />} /> {/* ✅ Capitalized */}
          <Route path="/marketing-advertising" element={<MarketingAdvertising />} /> {/* ✅ Capitalized */}
         
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
