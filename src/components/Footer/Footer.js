import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="contact-section">
        <div className="contact-left">
          <h2>GET IN TOUCH</h2>
          <p>
            Please fill in the quick form and we will be in touch with you as
            soon as possible
          </p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
          </div>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>

          {/* ✅ Add Contact Us Button */}
          <button type="submit" className="contact-submit-button">
            CONTACT US
          </button>
        </form>
      </section>

      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Soaring High Logo" className="footer-logo" />
          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaSnapchatGhost />
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Phone</h4>
            <p>+971585862261</p>
          </div>
          <div className="footer-column">
            <h4>Email Address</h4>
            <p>info@soaringhigh-ae.com</p>
          </div>
          <div className="footer-column">
            <h4>Address</h4>
            <p>
              Meydan Grandstand, 6th floor, Meydan Road, Nad Al
              Sheba, Dubai, U.A.E.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2025 All Rights Reserved, Developed and Designed by Soaring High
          Team
        </span>
      </div>
    </footer>
  );
};

export default Footer;
