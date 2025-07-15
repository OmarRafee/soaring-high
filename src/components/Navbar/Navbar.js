import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiXLogo } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // close dropdown when toggling menu
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-main">
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-left">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                WHO WE ARE
              </Link>
            </li>
            <li className={`dropdown ${isServicesOpen ? "open" : ""}`}>
              <span onClick={toggleServicesDropdown}>SERVICES ▼</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/webmob">Web & Mobile Development</Link>
                </li>
                <li>
                  <Link to="/digital">360° Digital Campaigns</Link>
                </li>
                <li>
                  <Link to="/">Media Planning & Buying</Link>
                </li>
                <li>
                  <Link to="/">Content Creation</Link>
                </li>
                <li>
                  <Link to="/">Strategic Planning</Link>
                </li>
                <li>
                  <Link to="/">Branding & Rebranding</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav-right">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                CAREERS
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-left desktop-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">WHO WE ARE</Link>
          </li>
          <li className="dropdown">
            <span>SERVICES ▼</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/webmob">Web & Mobile Development</Link>
              </li>
              <li>
                <Link to="/digital">360° Digital Campaigns</Link>
              </li>
              <li>
                <Link to="/">Media Planning & Buying</Link>
              </li>
              <li>
                <Link to="/">Content Creation</Link>
              </li>
              <li>
                <Link to="/">Strategic Planning</Link>
              </li>
              <li>
                <Link to="/">Branding & Rebranding</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Soaring High Logo" />
          </Link>
        </div>

        <ul className="nav-right desktop-menu">
          <li>
            <Link to="/">CAREERS</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
