import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

// Asset imports (replace with your actual image paths)
import heroImage from "../../assets/dubai-hero.webp";
import mission from "../../assets/mission.webp";
import vision from "../../assets/vision.webp";
import valuesIcon from "../../assets/values-icon.webp";
import handshake from "../../assets/handshake.webp";
import bulb from "../../assets/bulb.webp";
import gearFist from "../../assets/gear-fist.webp";
import bookHeads from "../../assets/book-heads.webp";
import medal from "../../assets/medal-1.webp";
import diversity from "../../assets/diversity.webp";
import Logo from "../../assets/Logo.webp";
import dubaiMirror from "../../assets/dubai-mirror.webp";
import iconLocal from "../../assets/icon-local.webp";
import iconGrowth from "../../assets/icon-growth.webp";
import iconStrategy from "../../assets/icon-strategy.webp";
import iconSupport from "../../assets/icon-support.webp";
import provide1 from "../../assets/provide1.webp";
import provide2 from "../../assets/provide2.webp";
import provide3 from "../../assets/provide3.webp";
import provide4 from "../../assets/provide4.webp";
import provide5 from "../../assets/provide5.webp";
import provide6 from "../../assets/provide6.webp";
import Tower from "../../assets/Tower.webp";
import Logo1 from "../../assets/Logo1.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      ".hero-horizontal",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // About Section Animation
    gsap.from(".about-container p", {
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Services Section Animation
    gsap.from(".service-box", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Mission & Vision Animation
    gsap.from(".mission-section, .vision-section", {
      scrollTrigger: {
        trigger: ".hero-mission-vision",
        start: "top 80%",
      },
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -50 : 50),
      duration: 1,
      ease: "power3.out",
    });

    // Values Section Animation
    gsap.from(".value-item", {
      scrollTrigger: {
        trigger: ".values-grid",
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
    });

    // Why Choose Section Animation
    gsap.from(".feature", {
      scrollTrigger: {
        trigger: ".why-choose-content",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Elevate Section Animation
    gsap.from(".elevate-content, .elevate-image", {
      scrollTrigger: {
        trigger: ".ready-to-elevate-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Testimonial Section Animation
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // CTA Section Animation
    gsap.from(".cta-text, .cta-button", {
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Contact Section Animation
    gsap.from(".contact-left, .contact-form", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
      },
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -50 : 50),
      duration: 1,
      ease: "power3.out",
    });

    // Hover animations for buttons and social icons
    gsap.utils
      .toArray(".black-btn, .get-quote-btn, .cta-button")
      .forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

    gsap.utils.toArray(".social-sidebar a").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.2,
          color: "#d4af37",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1,
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <>
      <div className="hero-container">
        <img src={heroImage} alt="Dubai" className="hero-image" />
        <div className="hero-horizontal">
          <p className="hero-subtext">Powering Ambition in the UAE & Beyond</p>
          <h1 className="hero-title primary">SKY HIGH RESULTS</h1>
        </div>
      </div>

      <div className="hero-full-page">
        <section className="hero-about-sections">
          <div className="about-container">
            <p>
              At <strong>Soaring High</strong>, we are more than a service
              provider—we are your strategic growth partner. Based in the
              Emirates and proudly part of the BinRashid Group, which operates
              across the UAE, Saudi Arabia, and Egypt, we specialize in
              delivering integrated Digital Marketing solutions that elevate
              brands and drive real results.
            </p>
            <p>
              Our <strong>Digital Marketing services</strong> are designed to
              build impactful brands from the ground up—starting with deep
              market research, strategic planning, and concept creation, all the
              way to full-scale campaign execution across digital platforms.
            </p>
            <p>
              We help businesses craft compelling stories, manage their brand
              identity, and connect meaningfully with their audiences through:
              Website development, Content marketing, Social media management,
              Media buying, and Creative design.
            </p>
            <p>
              Driven by innovation and committed to excellence, Soaring High
              empowers your business to rise above the competition and achieve
              lasting success in the digital age.
            </p>
          </div>
        </section>

        <div className="hero-services-section exact-style">
          <div className="social-sidebar">
            <a href="/" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" aria-label="Snapchat">
              <i className="fab fa-snapchat-ghost"></i>
            </a>
            <a href="/" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" aria-label="X Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>

          <div className="services-content">
            <div className="services-title-outer">
              <div className="services-title-3d-wrapper">
                <h2 className="services-title-outline">WE PROVIDE FOR YOU</h2>
                <h2 className="services-title-primary">WE PROVIDE FOR YOU</h2>
              </div>
            </div>

            <div className="services-grid">
              <div className="service-box">
                <img src={provide1} alt="Web Icon" />
                <h3>Web & Mobile Development</h3>
                <p>
                  Responsive Website Design
                  <br />
                  Custom Web Development
                  <br />
                  E-Commerce Platforms
                  <br />
                  Mobile App Development
                  <br />
                  UX/Ui Design
                </p>
              </div>
              <div className="service-box">
                <img src={provide2} alt="Web Icon" />
                <h3>360° Digital Campaigns</h3>
                <p>
                  Social Media Marketing
                  <br />
                  Search Engine Optimization(SEO)
                  <br />
                  Email Marketing & Automation
                  <br />
                  Google Ads campaigns
                  <br />
                  Influencer Marketing
                </p>
              </div>
              <div className="service-box">
                <img src={provide3} alt="Web Icon" />
                <h3>Media Planning & Buying</h3>
                <p>
                  Media Buying Strategy & Budget Planning
                  <br />
                  Print and Digital Placements
                  <br />
                  Programmatic & Native Advertising
                  <br />
                  Performance Tracking & Optimization
                </p>
              </div>
              <div className="service-box">
                <img src={provide4} alt="Web Icon" />
                <h3>Content Creation</h3>
                <p>
                  Copywriting & Blogging
                  <br />
                  Social • Video Production & Editing
                  <br />
                  Social Media Content
                  <br />
                  Motion Graphics & Animations
                  <br />
                  Podcast
                </p>
              </div>
              <div className="service-box">
                <img src={provide5} alt="Web Icon" />
                <h3>Strategic Planning</h3>
                <p>
                  Marketing Strategy Development
                  <br />
                  Campaign Planning & Execution
                  <br />
                  Budget Allocation & ROI Optimization
                  <br />
                  Go-To-Market (GTM) Strategies
                  <br />
                  Digital Transformation Strategy
                </p>
              </div>
              <div className="service-box">
                <img src={provide6} alt="Web Icon" />
                <h3>Branding & Rebranding</h3>
                <p>
                  Logo & Identity Design
                  <br />
                  Brand Guidelines & Strategy
                  <br />
                  Visual Identity
                  <br />
                  Brand Storytelling & Positioning
                  <br />
                  Product & Packaging Design
                  <br />
                  Reputation Management & Brand Perception
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-mission-vision">
          <div className="mission-section">
            <img src={mission} alt="Mission Icon" />
            <h2>MISSION</h2>
            <div className="text-block">
              <p>
                At Soaring High, we empower brands to reach new heights by
                delivering innovative, results-driven digital marketing
                services. As a trusted partner within the BinRashid Group, we
                combine deep market insights, strategic creativity, and hands-on
                execution to build brand equity, engage audiences, and fuel
                measurable growth.
              </p>
              <p>
                We are committed to excellence as we navigate challenges, seize
                opportunities, and achieve enduring success in a fast-evolving
                digital world.
              </p>
            </div>
          </div>

          <div className="vision-section">
            <img src={vision} alt="vision Icon" />
            <h2>VISION</h2>
            <div className="text-block">
              <p>
                To be the premier digital marketing partner in the region,
                recognized for building impactful brands and delivering
                innovative, data-driven marketing solutions.
              </p>
              <p>
                We envision a future where every campaign we launch inspires
                action, every story we tell builds loyalty, and every brand we
                support rises above the noise to lead its industry.
              </p>
              <p>
                Through creativity, strategy, and cutting-edge technology, we
                aim to shape the digital landscape across the Middle East and
                beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-values-section">
          <img
            src={valuesIcon}
            alt="Values Icon"
            className="values-main-icon"
          />
          <h2 className="values-title">VALUES</h2>

          <div className="values-grid">
            <div className="value-item">
              <img src={handshake} alt="Thought Partnership" />
              <p>THOUGHT PARTNERSHIP</p>
            </div>
            <div className="value-item">
              <img src={bulb} alt="Be the Solution" />
              <p>BE THE SOLUTION</p>
            </div>
            <div className="value-item">
              <img src={gearFist} alt="Leadership" />
              <p>LEADERSHIP</p>
            </div>
            <div className="value-item">
              <img src={bookHeads} alt="Learn and Teach" />
              <p>LEARN AND TEACH</p>
            </div>
            <div className="value-item">
              <img src={medal} alt="Deliver with Excellence" />
              <p>DELIVER WITH EXCELLENCE</p>
            </div>
            <div className="value-item">
              <img src={diversity} alt="Diversity" />
              <p>DIVERSITY</p>
            </div>
          </div>
        </div>

        <div className="why-choose-section">
          <div
            className="why-choose-bg"
            style={{ backgroundImage: `url(${Logo1})` }}
          >
            <h2 className="why-choose-title">
              WHY CHOOSE <span>SOARING HIGH ?</span>
            </h2>
            <div className="why-choose-content">
              <div className="feature top-left">
                <img src={iconLocal} alt="Local Expertise" />
                <h4>Regional Strength, Local Expertise</h4>
                <p>
                  Part of the trusted BinRashid Group, with active operations in
                  the UAE, Saudi Arabia, and Egypt— giving us deep regional
                  insights and cross-border capabilities.
                </p>
              </div>

              <div className="feature top-right">
                <img src={iconGrowth} alt="Growth Partner" />
                <h4>End-to-End Growth Partner</h4>
                <p>
                  We don’t just offer services—we provide full-cycle support
                  from marketing and branding to business operations and legal
                  setup, ensuring your business scales seamlessly.
                </p>
              </div>

              <div className="feature bottom-left">
                <img src={iconStrategy} alt="Marketing Excellence" />
                <h4>Strategic Marketing & Advertising Excellence</h4>
                <p>
                  From concept creation to campaign execution, we offer complete
                  solutions in digital marketing, branding, event marketing, and
                  media management to build impactful, data-driven strategies.
                </p>
              </div>

              <div className="feature bottom-right">
                <img src={iconSupport} alt="Industry Support" />
                <h4>Tailored Industry Support</h4>
                <p>
                  Whether you’re a startup, SME, or multinational, our advisory
                  and operational services are customized to match your market,
                  goals, and scale.
                </p>
              </div>

              <div className="mirror-image-container">
                <img src={dubaiMirror} alt="Dubai Mirror" />
                <button className="get-quote-btn">GET FREE QUOTE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="ready-to-elevate-section">
          <div className="elevate-content">
            <h2>Ready to Elevate your Business?</h2>
            <p className="subtext">
              Partner with Soaring High for comprehensive digital marketing
              services in the UAE.
            </p>
            <ul className="elevate-list">
              <li>
                Customised strategies tailored to your unique business need
              </li>
              <li>Expert guidance from experienced consultants</li>
              <li>Proven track record of success in the UAE market</li>
            </ul>
            <div className="button-row">
              <button className="black-btn">Get a Free Consultation</button>
              <button className="black-btn">Contact us</button>
            </div>
          </div>
          <div className="elevate-image">
            <img src={Tower} alt="Burj Khalifa" />
          </div>

          <div className="testimonial-section">
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  Soaring High elevated our brand visibility and helped us
                  engage with a wider audience in the UAE. Highly recommended
                  for digital marketing!
                </p>
                <div className="testimonial-author">
                  <FaUserCircle size={40} className="author-icon" />
                  <div>
                    <strong>Ahmed Al Falasi</strong>
                    <div className="author-role">CEO, Dubai Trading Co.</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-text">
                  Their digital marketing expertise boosted our online presence
                  and drove measurable results. Outstanding service!
                </p>
                <div className="testimonial-author">
                  <FaUserCircle size={40} className="author-icon" />
                  <div>
                    <strong>Sarah Khan</strong>
                    <div className="author-role">
                      Marketing Director, Abu Dhabi Corp.
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <p className="testimonial-text">
                  Soaring High made our digital campaigns impactful and
                  stress-free. We truly value their support and creativity!
                </p>
                <div className="testimonial-author">
                  <FaUserCircle size={40} className="author-icon" />
                  <div>
                    <strong>Omar Sharif</strong>
                    <div className="author-role">
                      Founder, Sharjah Enterprises
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="cta-section">
          <div className="cta-text">
            <p>Let us help you succeed in the UAE</p>
            <p>
              Reach out to our experts to start a successful business in the
              UAE.
            </p>
          </div>
          <button className="cta-button">GET EXPERT ADVICE</button>
        </section>
      </div>
    </>
  );
};

export default Home;
