import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MarketingAdvertising.css";

// Reuse your background video for visual consistency
import webmobbackground from "../../assets/webmobbackground.mp4";

gsap.registerPlugin(ScrollTrigger);

const MarketingAdvertising = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Letter-by-letter title
    const letters = titleRef.current?.querySelectorAll(".letter") || [];
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.1, stagger: 0.05, ease: "power3.out", delay: 0.4 }
    );

    // Intro
    gsap.from(".mad-text-section > *", {
      scrollTrigger: { trigger: ".mad-text-section", start: "top 80%" },
      opacity: 0, y: 30, stagger: 0.15, duration: 0.8, ease: "power2.out",
    });

    // Services
    gsap.from(".mad-feature-list .feature-item", {
      scrollTrigger: { trigger: ".mad-feature-list", start: "top 80%" },
      opacity: 0, x: -30, stagger: 0.12, duration: 0.7, ease: "power2.out",
    });

    // Process
    gsap.from(".mad-process-section .process-step", {
      scrollTrigger: { trigger: ".mad-process-section", start: "top 85%" },
      opacity: 0, y: 20, stagger: 0.12, duration: 0.6, ease: "power2.out",
    });

    // Why Choose Us
    gsap.from(".mad-why-section .why-item", {
      scrollTrigger: { trigger: ".mad-why-section", start: "top 85%" },
      opacity: 0, scale: 0.95, stagger: 0.1, duration: 0.6, ease: "back.out(1.6)",
    });

    // CTA
    gsap.from(".mad-cta", {
      scrollTrigger: { trigger: ".mad-cta", start: "top 90%" },
      opacity: 0, y: 20, duration: 0.6, ease: "power2.out",
    });
  }, []);

  const title = "MARKETING & ADVERTISING";

  return (
    <>
      {/* Background Video */}
      <video className="mad-back" autoPlay muted loop playsInline>
        <source src={webmobbackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="mad-page">
        {/* Hero */}
        <section className="mad-hero-section">
          <div className="mad-hero-content">
            <h1 className="mad-gradient-title" ref={titleRef}>
              {title.split("").map((c, i) => (
                <span key={i} className="letter">{c === " " ? "\u00A0" : c}</span>
              ))}
            </h1>
            <p className="mad-subtitle">Make Your Brand Unforgettable in the UAE</p>
          </div>
        </section>

        {/* Intro */}
        <section className="mad-text-section">
          <h2 className="mad-heading">Integrated Marketing That Delivers</h2>
          <p className="mad-paragraph">
            The UAE is one of the most competitive markets in the region—where brands are
            constantly fighting for visibility and attention. You need more than just a marketing
            agency; you need a partner that understands your audience, speaks their language, and
            uses data-driven creativity to convert attention into loyal customers.
          </p>
        </section>

        {/* Services (no images) */}
        <section className="mad-feature-list">
          <div className="feature-item">
            <div className="feature-line" />
            <p><strong>Digital Marketing Strategy:</strong> Custom strategies aligned with your
              objectives, industry trends, and customer behavior in the Emirates.</p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p><strong>Social Media Management:</strong> Engaging content and day-to-day
              community management to keep your brand active and relevant.</p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p><strong>Paid Advertising (PPC):</strong> Target the right people at the right time
              via Google Ads, Meta (Facebook/Instagram), LinkedIn, and more.</p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p><strong>Search Engine Optimization (SEO):</strong> Sustainable, long-term organic
              traffic and higher visibility for your website.</p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p><strong>Content Creation & Branding:</strong> Impactful visuals, videos, and
              copywriting that resonate with your audience.</p>
          </div>
          <div className="feature-item">
            <div className="feature-line" />
            <p><strong>Event Marketing & Offline Advertising:</strong> Booth design, activations,
              and campaigns that leave lasting impressions.</p>
          </div>
        </section>

        {/* Process */}
        <section className="mad-process-section">
          <h2 className="mad-heading">Our Process</h2>
          <ol className="process-timeline">
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Understanding Your Business</h3>
                <p>Full brand and competitor analysis to set a solid foundation.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Planning the Strategy</h3>
                <p>A clear roadmap designed around measurable KPIs.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Creative Development</h3>
                <p>Crafting visuals, ads, and content tailored to your audience.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Execution & Monitoring</h3>
                <p>Launching campaigns across platforms with ongoing optimization.</p>
              </div>
            </li>
            <li className="process-step">
              <span className="dot" />
              <div>
                <h3>Measuring Results</h3>
                <p>Monthly reports and ROI analysis to track success.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Why Choose Us */}
        <section className="mad-why-section">
          <h2 className="mad-heading">Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-item">Expertise in the UAE market</div>
            <div className="why-item">Strong creative & technical team</div>
            <div className="why-item">Transparent communication & reporting</div>
            <div className="why-item">End-to-end campaign management</div>
          </div>
        </section>

        {/* CTA */}
        <section className="mad-cta">
          <h3>Your brand deserves the spotlight.</h3>
          <p>Let’s create campaigns that deliver real results.</p>
          <a href="#contact" className="mad-btn">Start a Project</a>
        </section>
      </div>
    </>
  );
};

export default MarketingAdvertising;
