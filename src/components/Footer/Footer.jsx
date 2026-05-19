import "./Footer.css";

import {
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiGithubLine,
  RiSparklingLine,
} from "react-icons/ri";

const FooterSection = () => {
  return (
    <footer className="footerx-section">

      <div className="footerx-container">

        {/* TOP */}

        <div className="footerx-top">

          {/* LEFT */}

          <div className="footerx-brand">

            <div className="footerx-logo">

              <div className="footerx-logo-icon">
                <RiSparklingLine />
              </div>

              <h2>
                TARS<span>CRM</span>
              </h2>

            </div>

            <p className="footerx-description">
              India's all-in-one business operating system.
              CRM, sales, GST invoicing, projects and support —
              powered by AI.
            </p>

            {/* SOCIAL */}

            <div className="footerx-socials">

              <a href="#">
                <RiTwitterXLine />
              </a>

              <a href="#">
                <RiLinkedinBoxLine />
              </a>

              <a href="#">
                <RiYoutubeLine />
              </a>

              <a href="#">
                <RiGithubLine />
              </a>

            </div>

            {/* STATUS */}

            <div className="footerx-status">

              <span className="footerx-dot"></span>

              All systems operational · 99.99% uptime

            </div>

          </div>

          {/* LINKS */}

          <div className="footerx-links">

            <div className="footerx-column">

              <h4>Product</h4>

              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Integrations</a>
              <a href="#">Sales pipeline</a>
              <a href="#">GST invoicing</a>
              <a href="#">WhatsApp CRM</a>
              <a href="#">AI assistant</a>

            </div>

            <div className="footerx-column">

              <h4>Solutions</h4>

              <a href="#">For SMBs</a>
              <a href="#">For enterprises</a>
              <a href="#">For agencies</a>
              <a href="#">For startups</a>
              <a href="#">For real estate</a>
              <a href="#">For manufacturing</a>

            </div>

            <div className="footerx-column">

              <h4>Resources</h4>

              <a href="#">Documentation</a>
              <a href="#">API reference</a>
              <a href="#">Blog</a>
              <a href="#">Customer stories</a>
              <a href="#">Webinars</a>
              <a href="#">Help center</a>
              <a href="#">Changelog</a>

            </div>

            <div className="footerx-column">

              <h4>Company</h4>

              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Press</a>
              <a href="#">Partners</a>
              <a href="#">Security</a>
              <a href="#">Trust center</a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="footerx-divider"></div>

        {/* BOTTOM */}

        <div className="footerx-bottom">

          <p>
            © 2026 TARS CRM Technologies Pvt Ltd · Made in India 🇮🇳
          </p>

          <div className="footerx-bottom-links">

            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">DPDP compliance</a>
            <a href="#">Cookies</a>
            <a href="#">Status</a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default FooterSection;