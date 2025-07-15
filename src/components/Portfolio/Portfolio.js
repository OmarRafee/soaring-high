// src/pages/Portfolio.jsx
import React from "react";
import "./Portfolio.css";
import portfolioImage from "../../assets/portfolio.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />
    </div>
  );
};

export default Portfolio;
