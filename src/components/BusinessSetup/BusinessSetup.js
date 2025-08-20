import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BusinessSetup.css";

// 🔁 Reuse your existing background video to keep the same look
import webmobbackground from "../../assets/webmobbackground.mp4";

gsap.registerPlugin(ScrollTrigger);

const BusinessSetup = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Title letters animation
    const letters = titleRef.current?.querySelectorAll(".letter") || [];
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    // Intro section
    gsap.from(".biz-text-section > *", {
      scrollTrigger: {
        trigger: ".biz-text-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });

    // Services list
    gsap.from(".biz-feature-list .feature-item", {
      scrollTrigger: {
        trigger: ".biz-feature-list",
        start: "top 80%",
      },
      opacity: 0,
      x: -30,
      stagger: 0.12,
      duration: 0.7,
      ease: "power2.out",
    });

    // Process timeline
    gsap.from(".biz-process-section .process-step", {
      scrollTrigger: {
        trigger: ".biz-process-section",
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.6,
      ease: "power2.out",
    });

    // Why choose us
    gsap.from(".biz-why-section .why-item", {
      scrollTrigger: {
        trigger: ".biz-why-section",
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.6)",
    });

    // CTA
    gsap.from(".biz-cta", {
      scrollTrigger: {
        trigger: ".biz-cta",
        start: "top 90%",
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const title = "BUSINESS SETUP";

  return (
    <>
      {/* 🔁 Full Background Video */}
      <video className="biz-back" autoPlay muted loop playsInline>
        <source src={webmobbackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="biz-page">
        {/* 🔝 Hero */}
        <section className="biz-hero-section">
          <div className="biz-hero-content">
            <h1 className="biz-gradient-title" ref={titleRef}>
              {title.split("").map((char, i) => (
                <span key={i} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="biz-subtitle">Start Your Business in the UAE with Ease</p>
          </div>
        </section>

        {/* 🧾 Intro */}
        <section className="biz-text-section">
          <h2 className="biz-heading">End-to-End Company Formation</h2>
          <p className="biz-paragraph">
            The UAE is a global hub for entrepreneurs and investors, but setup can feel
            overwhelming—licenses, structures, and approvals. Our experts simplify the
            journey and guide you through every step so your company is established
            quickly and compliantly.
          </p>
        </section>

        {/* ✅ Services */}
        <section className="biz-feature-list">
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Free Zone Setup:</strong> 100% foreign ownership, tax benefits,
              and simplified regulations.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Mainland Company Formation:</strong> Operate anywhere in the UAE
              and access local markets and government contracts.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Offshore Setup:</strong> Asset protection and access to
              international markets.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Trade License & Registration:</strong> We handle paperwork,
              approvals, and renewals—end to end.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Visa & PRO Services:</strong> Investor, partner, and employee
              visas; full government liaison.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Corporate Bank Accounts:</strong> Support choosing and opening
              UAE bank accounts with trusted partners.
            </p>
          </div>
        </section>

        {/* 🔁 Process Timeline */}
        <section className="biz-process-section">
          <h2 className="biz-heading">Our Process</h2>
          <ol className="process-timeline">
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Consultation</h3>
                <p>Understand your goals and recommend the best structure.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Activity & Legal Structure</h3>
                <p>Select Free Zone, Mainland, or Offshore based on your needs.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Document Preparation</h3>
                <p>Collect and submit all required paperwork accurately.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Approvals & Licensing</h3>
                <p>We liaise with authorities to secure fast approvals.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Business Launch</h3>
                <p>Receive trade license and final documents—ready to operate.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* ⭐ Why Choose Us */}
        <section className="biz-why-section">
          <h2 className="biz-heading">Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-item">End-to-end solutions</div>
            <div className="why-item">Strong local networks</div>
            <div className="why-item">Transparent pricing</div>
            <div className="why-item">Fast turnaround</div>
          </div>
        </section>

        {/* 📣 CTA */}
        <section className="biz-cta">
          <h3>Ready to start your UAE journey?</h3>
          <p>Contact us to simplify your company setup today.</p>
          <a href="#contact" className="biz-btn">Get Started</a>
        </section>
      </div>
    </>
  );
};

export default BusinessSetup;
