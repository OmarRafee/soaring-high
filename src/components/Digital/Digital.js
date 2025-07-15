import React from "react";
import { motion } from "framer-motion";
import "./Digital.css";
import digitalVideo from "../../assets/digitalvid.mp4";
import digital1 from "../../assets/digital1.webp";
import digital2 from "../../assets/digital2.webp";
import digital3 from "../../assets/digital3.webp";
import digital4 from "../../assets/digital4.webp";
import digital5 from "../../assets/digital5.webp";
import digital6 from "../../assets/digital6.webp";
import digitalwork1 from "../../assets/digitalwork1.webp";
import digitalwork2 from "../../assets/digitalwork2.webp";
import digitalwork3 from "../../assets/digitalwork3.webp";
import digitalwork4 from "../../assets/digitalwork4.webp";
import digitalwork5 from "../../assets/digitalwork5.webp";
import digitalwork6 from "../../assets/digitalwork6.webp";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 },
};

const tapEffect = {
  scale: 0.98,
};

const Digital = () => {
  return (
    <motion.div
      className="digital-wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 🔁 Background Video */}
      <div className="digital-video-container">
        <video className="digital-video" autoPlay muted loop playsInline>
          <source src={digitalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 📄 360 Campaign Text Section */}
      <motion.div className="digital-text-section" variants={containerVariants}>
        <motion.h2 className="digital-heading" variants={itemVariants}>
          360° Digital Campaigns
        </motion.h2>
        <motion.p className="digital-paragraph" variants={itemVariants}>
          Our 360° Digital Campaigns provide an all-encompassing approach that
          seamlessly integrates various digital marketing channels to create a
          unified and powerful brand presence. We combine the power of social
          media marketing, search engine optimization (SEO), search engine
          marketing (SEM), pay-per-click advertising (PPC), email marketing and
          automation, influencer partnerships, and affiliate marketing into a
          single, coherent strategy designed to engage audiences at every
          touchpoint. Each campaign is built on in-depth market research and
          data analysis to precisely target the right audiences and deliver
          personalized messaging that resonates. By using advanced analytics and
          continuous performance monitoring, we adjust and refine campaigns in
          real-time to ensure maximum effectiveness and return on investment.
          The result is a highly coordinated, multi-channel effort that not only
          boosts brand awareness but also drives customer loyalty, enhances
          conversion rates, and ultimately fuels long-term business growth.
        </motion.p>
      </motion.div>

      {/* 🪟 Services Section */}
      <motion.div
        className="digital-services-section"
        variants={containerVariants}
      >
        <motion.h2 className="digital-services-title" variants={itemVariants}>
          <span className="hollow">OUR</span>{" "}
          <span className="highlight">SERVICES</span>
        </motion.h2>

        <motion.div
          className="digital-service-box"
          variants={slideInFromLeft}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="service-left">
            <motion.img
              src={digital1}
              alt="Social Media"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>
              Social Media
              <br />
              <span>Marketing</span>
            </p>
          </div>
          <div className="service-right">
            This involves promoting a brand, product, or service on various
            social media platforms such as Facebook, Instagram, LinkedIn,
            Twitter, TikTok, Snapchat, and YouTube. The objective is to engage
            users, build brand awareness, drive traffic to websites, and
            generate leads or sales through organic and paid content.
          </div>
        </motion.div>

        <motion.div
          className="digital-service-box"
          variants={slideInFromRight}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="service-left">
            <motion.img
              src={digital2}
              alt="Social Media"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>
              Search Engine Optimization (SEO) & Search
              <br />
              <span>Engine Marketing (SEM)</span>
            </p>
          </div>
          <div className="service-right">
            SEO focuses on optimizing website content and structure to rank
            higher in organic search engine results. SEM, on the other hand,
            involves paid advertising such as Google Ads to appear prominently
            in search results, helping attract targeted traffic quickly.
          </div>
        </motion.div>

        <motion.div
          className="digital-service-box"
          variants={slideInFromLeft}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="service-left">
            <motion.img
              src={digital3}
              alt="Social Media"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>
              Pay-Per-Click Advertising (PPC) &
              <br />
              <span>Google Ads</span>
            </p>
          </div>
          <div className="service-right">
            PPC is a model where advertisers pay a fee each time their ad is
            clicked. Google Ads is the most popular platform for PPC, allowing
            businesses to target specific audiences based on keywords, location,
            interests, and more to drive immediate traffic and conversions.
          </div>
        </motion.div>

        <motion.div
          className="digital-service-box"
          variants={slideInFromRight}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="service-left">
            <motion.img
              src={digital4}
              alt="Social Media"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>
              Email Marketing &
              <br />
              <span>Automation</span>
            </p>
          </div>
          <div className="service-right">
            This strategy uses email to send targeted messages to customers and
            prospects. Automation tools help schedule emails, segment audiences,
            and create workflows that deliver relevant messages at the right
            time, increasing engagement and nurturing leads.
          </div>
        </motion.div>

        <motion.div
          className="digital-service-box"
          variants={slideInFromLeft}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="service-left">
            <motion.img
              src={digital5}
              alt="Social Media"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>
              Influencer Marketing & Affiliate
              <br />
              <span>Marketing</span>
            </p>
          </div>
          <div className="service-right">
            Influencer marketing leverages social media personalities with large
            followings to promote products authentically. Affiliate marketing
            involves partnerships where affiliates earn a commission for driving
            traffic or sales to your business, extending your reach and
            performance-based growth.
          </div>
        </motion.div>

        <motion.div
          className="digital-service-box"
          variants={slideInFromRight}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="service-left">
            <motion.img
              src={digital6}
              alt="Social Media"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p>
              Web Analytics & Performance
              <br />
              <span>Tracking</span>
            </p>
          </div>
          <div className="service-right">
            This involves collecting and analyzing data from digital campaigns
            to measure success, identify trends, and make data-driven decisions.
            Tools like Google Analytics help marketers track user behavior,
            campaign performance, and ROI effectively.
          </div>
        </motion.div>
      </motion.div>

      {/* 🎯 Our Work Section */}
      <motion.div
        className="digital-gallery-section"
        variants={containerVariants}
      >
        <motion.h2 className="gallery-heading" variants={itemVariants}>
          <span className="empty-text">OUR</span>{" "}
          <span className="filled-text">WORK</span>
        </motion.h2>
        <motion.div className="gallery-grid" variants={containerVariants}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.img
              key={i}
              src={require(`../../assets/digitalwork${i}.webp`)}
              alt={`Portfolio ${i}`}
              className="gallery-image"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(189, 162, 124, 0.8)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Digital;
