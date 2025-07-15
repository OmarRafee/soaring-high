import React, { useEffect, useRef } from "react"; // Added useRef
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./webmob.css";
import web1 from "../../assets/web1.webp";
import web2 from "../../assets/web2.webp";
import web3 from "../../assets/web3.webp";
import web4 from "../../assets/web4.webp";
import web5 from "../../assets/web5.webp";
import web6 from "../../assets/web6.webp";
import webmobbackground from "../../assets/webmobbackground.mp4";

gsap.registerPlugin(ScrollTrigger);

const Webmob = () => {
  const titleRef = useRef(null); // Added ref for title

  useEffect(() => {
    // Letter-by-Letter Animation for Title
    const letters = titleRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Text Section Animation
    gsap.from(".webmob-text-section > *", {
      scrollTrigger: {
        trigger: ".webmob-text-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Feature List Animation
    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: ".webmob-feature-list",
        start: "top 80%",
      },
      opacity: 0,
      x: -30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });

    // Our Work Section Animation
    gsap.from(".our-work-title, .our-work-gallery img", {
      scrollTrigger: {
        trigger: ".our-work-section",
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Hover animations for gallery images
    gsap.utils.toArray(".our-work-gallery img").forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <>
      {/* 🔁 Full Background Video */}
      <video className="webmobback" autoPlay muted loop playsInline>
        <source src={webmobbackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔽 Page Content that scrolls over the video */}
      <div className="webmob-page">
        {/* 🔝 Full-screen Hero */}
        <div className="web webmob-hero-section">
          <div className="webmob-hero-content">
            <h1 className="webmob-gradient-title" ref={titleRef}>
              {"SOARING HIGH".split("").map((char, index) => (
                <span key={index} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="webmob-subtitle">For E-Marketing Solutions</p>
          </div>
        </div>
        {/* 🧾 Text Section */}
        <div className="webmob-text-section">
          <h2 className="webmob-heading">Web & Mob Development</h2>
          <p className="webmob-paragraph">
            Our <span className="highlight">Web & Mobile Development</span>{" "}
            services focus on creating innovative, high-performance digital
            experiences that are tailored to the needs of modern consumers. We
            design and develop responsive websites that adapt seamlessly across
            desktops, tablets, and smartphones, ensuring accessibility and
            usability for every user. Our custom web development solutions are
            built using the latest technologies and frameworks to support
            advanced functionalities such as e-commerce, booking systems,
            membership portals, and interactive dashboards. For businesses
            looking to tap into the mobile market, we offer native and
            cross-platform mobile app development that prioritizes intuitive
            navigation, smooth performance, and attractive UI/UX design to
            enhance user engagement and satisfaction. We also place a strong
            emphasis on security, scalability, and search engine optimization to
            ensure digital products not only look great but also perform
            exceptionally in real-world environments. By delivering cutting-edge
            web and mobile solutions, we help brands strengthen their digital
            presence, improve customer interactions, and drive business growth
            through technology.
          </p>
        </div>
        {/* ✅ Features Section */}
        <div className="webmob-feature-list">
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Responsive Website Design:</strong> Creating websites that
              automatically adjust their layout and functionality for optimal
              viewing across all devices, including desktops, tablets, and
              smartphones.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Custom Web Development:</strong> Building tailored web
              solutions using modern frameworks to meet unique business
              requirements and support integrated features such as booking,
              e-commerce, or user dashboards.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>E-commerce Platforms:</strong> Designing and developing
              secure, user-friendly online stores with features such as product
              catalogs, shopping carts, and payment gateways.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Mobile App Development:</strong> Creating native and
              cross-platform mobile applications that deliver smooth
              performance, intuitive navigation, and powerful functionality for
              Android and iOS users.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>UX/UI Design:</strong> Focusing on user experience and
              user interface design to ensure digital products are both
              aesthetically pleasing and easy to navigate, enhancing customer
              satisfaction.
            </p>
          </div>
        </div>
        <div className="our-work-section">
          <h2 className="our-work-title">
            <span>SOME OF</span> <span className="italic">OUR WORK</span>
          </h2>

          <div className="our-work-gallery">
            <img src={web1} alt="Web 1" />
            <img src={web2} alt="Web 2" />
            <img src={web3} alt="Web 3" />
            <img src={web4} alt="Web 4" />
            <img src={web5} alt="Web 5" />
            <img src={web6} alt="Web 6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Webmob;
