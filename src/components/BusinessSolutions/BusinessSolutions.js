import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BusinessSolutions.css";

// Reuse your existing background video for visual consistency
import webmobbackground from "../../assets/webmobbackground.mp4";

gsap.registerPlugin(ScrollTrigger);

const BusinessSolutions = () => {
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

    // Intro
    gsap.from(".bsol-text-section > *", {
      scrollTrigger: { trigger: ".bsol-text-section", start: "top 80%" },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });

    // Services
    gsap.from(".bsol-feature-list .feature-item", {
      scrollTrigger: { trigger: ".bsol-feature-list", start: "top 80%" },
      opacity: 0,
      x: -30,
      stagger: 0.12,
      duration: 0.7,
      ease: "power2.out",
    });

    // Process
    gsap.from(".bsol-process-section .process-step", {
      scrollTrigger: { trigger: ".bsol-process-section", start: "top 85%" },
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.6,
      ease: "power2.out",
    });

    // Why Choose Us
    gsap.from(".bsol-why-section .why-item", {
      scrollTrigger: { trigger: ".bsol-why-section", start: "top 85%" },
      opacity: 0,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.6)",
    });

    // CTA
    gsap.from(".bsol-cta", {
      scrollTrigger: { trigger: ".bsol-cta", start: "top 90%" },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const title = "BUSINESS SOLUTIONS";

  return (
    <>
      {/* Background Video */}
      <video className="bsol-back" autoPlay muted loop playsInline>
        <source src={webmobbackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bsol-page">
        {/* Hero */}
        <section className="bsol-hero-section">
          <div className="bsol-hero-content">
            <h1 className="bsol-gradient-title" ref={titleRef}>
              {title.split("").map((char, i) => (
                <span key={i} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="bsol-subtitle">Transform Your Business with Smart Solutions</p>
          </div>
        </section>

        {/* Intro */}
        <section className="bsol-text-section">
          <h2 className="bsol-heading">Operate Smoothly. Scale Confidently.</h2>
          <p className="bsol-paragraph">
            Once your company is established, the real challenge begins: running operations
            efficiently, staying competitive, and adapting to market change. Our business
            solutions equip you with strategies, tools, and systems that make operations more
            effective and sustainable—so you can focus on growth.
          </p>
        </section>

        {/* Services */}
        <section className="bsol-feature-list">
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Workflow & Process Optimization:</strong> Map and streamline processes
              to remove bottlenecks and boost productivity.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Business Strategy & Consulting:</strong> Tailored strategies aligned
              with your goals and market conditions.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>IT & System Integration:</strong> CRM implementation, ERP solutions,
              and cloud tools to support scalable growth.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Training & Development:</strong> Custom programs for marketing, sales,
              operations, and digital skills.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p>
              <strong>Back-office & Support Services:</strong> Administrative assistance, HR
              support, and operational outsourcing.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="bsol-process-section">
          <h2 className="bsol-heading">Our Process</h2>
          <ol className="process-timeline">
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Assessment & Audit</h3>
                <p>Understand current challenges, gaps, and KPIs.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Solution Design</h3>
                <p>Build customized solutions tailored to your model.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Implementation</h3>
                <p>Integrate systems, tools, and optimized processes.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Training</h3>
                <p>Equip your team with the skills to succeed.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Monitoring & Support</h3>
                <p>Continuous improvements to keep performance high.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Why Choose Us */}
        <section className="bsol-why-section">
          <h2 className="bsol-heading">Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-item">UAE insights, global standards</div>
            <div className="why-item">Tailored, business-first solutions</div>
            <div className="why-item">Technology-focused & future-proof</div>
            <div className="why-item">Long-term partnership approach</div>
          </div>
        </section>

        {/* CTA */}
        <section className="bsol-cta">
          <h3>Streamline your operations.</h3>
          <p>Let’s build the systems that power your success.</p>
          <a href="#contact" className="bsol-btn">Talk to an Expert</a>
        </section>
      </div>
    </>
  );
};

export default BusinessSolutions;
