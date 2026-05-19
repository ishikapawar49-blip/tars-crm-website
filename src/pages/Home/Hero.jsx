import "./Hero.css";

import {
  HiOutlineSparkles,
  HiArrowRight,
  HiOutlinePlayCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import {
  BsWhatsapp,
  BsStars,
} from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT */}
      <div className="hero-left">

        <div className="hero-badge">
          <HiOutlineSparkles />
          India's first AI-powered CRM platform
        </div>

        <h1 className="hero-title">
          India's Smartest <br />

          CRM for
          <span className="hero-blue-text">
            {" "}Sales, GST
          </span>

          <br />

          <span className="hero-invoice-text">
            Invoicing
          </span>

          {" "} & Growth
        </h1>

        <p className="hero-description">
          Capture leads, manage pipelines, automate follow-ups,
          send quotations, invoices, and close deals faster —
          all from one AI-powered platform built for Indian businesses.
        </p>

        <div className="hero-buttons">

          <button className="hero-trial-btn">
            Start Free Trial
            <HiArrowRight />
          </button>

          <button className="hero-demo-btn">
            <HiOutlinePlayCircle />
            Book Live Demo
          </button>

        </div>

        <div className="hero-features">

          <div className="hero-feature-item">
            <HiOutlineCheckCircle />
            GST-ready
          </div>

          <div className="hero-feature-item">
            <HiOutlineCheckCircle />
            WhatsApp integrated
          </div>

          <div className="hero-feature-item">
            <HiOutlineCheckCircle />
            AI automation
          </div>

          <div className="hero-feature-item">
            <HiOutlineCheckCircle />
            Trusted by 500+ businesses
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="hero-right">

        <div className="hero-dashboard-card">

          {/* TOP BAR */}
          <div className="hero-dashboard-topbar">

            <div className="hero-mac-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>app.tarscrm.in / pipeline</p>

            <div className="hero-top-search"></div>

          </div>

          {/* STATS */}
          <div className="hero-stats-grid">

            <div className="hero-stat-card">
              <p>PIPELINE</p>
              <h3>₹ 1.84 Cr</h3>
            </div>

            <div className="hero-stat-card">
              <p>WON THIS MO.</p>
              <h3>₹ 32.1 L</h3>
              <span className="hero-green-text">+8.2%</span>
            </div>

            <div className="hero-stat-card">
              <p>OPEN DEALS</p>
              <h3>184</h3>
              <span className="hero-green-text">+24</span>
            </div>

          </div>

          {/* HEADINGS */}
          <div className="hero-pipeline-headings">

            <div className="hero-head">
              Lead
              <span className="hero-purple">18</span>
            </div>
            
            <div className="hero-head">
              Lead
              <span className="hero-purple">18</span>
            </div>


            <div className="hero-head">
              Proposal
              <span className="hero-orange">12</span>
            </div>

            <div className="hero-head">
              Won
              <span className="hero-green">9</span>
            </div>

          </div>

          {/* CARDS */}
          <div className="hero-pipeline-grid">

            {[...Array(8)].map((_, index) => (
              <div className="hero-pipeline-card" key={index}>

                <div className="hero-line"></div>
                <div className="hero-line short"></div>

                <div className="hero-blue-dot"></div>

              </div>
            ))}

          </div>

          {/* FORECAST */}
          <div className="hero-forecast-box">

            <h4>Revenue forecast</h4>
            <p>Next 90 days</p>

            <svg
  className="hero-forecast-graph"
  viewBox="0 0 420 120"
  preserveAspectRatio="none"
>

  <defs>

    <linearGradient
      id="forecastGradient"
      x1="0"
      y1="0"
      x2="0"
      y2="1"
    >
      <stop
        offset="0%"
        stopColor="#4F6BFF"
        stopOpacity="0.22"
      />

      <stop
        offset="100%"
        stopColor="#4F6BFF"
        stopOpacity="0"
      />
    </linearGradient>

  </defs>

  {/* AREA */}
  <path
    d="
      M 0 95
      C 60 90, 90 45, 150 38
      C 200 34, 250 78, 310 72
      C 350 68, 390 42, 420 48
      L 420 120
      L 0 120
      Z
    "
    fill="url(#forecastGradient)"
  />

  {/* LINE */}
  <path
    d="
      M 0 95
      C 60 90, 90 45, 150 38
      C 200 34, 250 78, 310 72
      C 350 68, 390 42, 420 48
    "
    fill="none"
    stroke="#4169FF"
    strokeWidth="4"
    strokeLinecap="round"
  />

</svg>

          </div>

        </div>

        {/* WHATSAPP CARD */}
        <div className="hero-floating-card hero-whatsapp-card">

          <div className="hero-icon-circle hero-whatsapp-bg">
            <BsWhatsapp />
          </div>

          <div>

            <h5>New WhatsApp lead</h5>

            <p>Rohit Sharma · Mumbai</p>

            <small>
              "Need a quote for 50 licenses, urgent."
            </small>

          </div>

        </div>

        {/* AI CARD */}
        <div className="hero-floating-card hero-ai-card">

          <div className="hero-icon-circle hero-ai-bg">
            <RiRobot2Line />
          </div>

          <div>

            <h5>AI Assistant</h5>

            <p>
              Next best action: Send GST invoice to
            </p>

            <strong>
              Acme 
              Pvt Ltd 
            </strong>

            <small>
              — 92% close probability.
            </small>

          </div>

        </div>

        {/* INVOICE */}
        <div className="hero-invoice-pill">

          <FaRupeeSign />

          GST invoice generated

          <span>#INV-2041</span>

        </div>

      </div>

    </section>
  );
};

export default Hero;