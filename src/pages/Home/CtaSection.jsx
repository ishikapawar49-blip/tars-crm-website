import "./CtaSection.css";

import {
  RiArrowRightLine,
  RiPlayCircleLine,
} from "react-icons/ri";

const FinalCtaSection = () => {
  return (
    <section className="finalcta-section">

      <div className="finalcta-box">

        {/* Glow */}

        <div className="finalcta-glow"></div>

        {/* Heading */}

        <h2 className="finalcta-heading">
          Ready to scale your business with
          <br />
          TARS CRM?
        </h2>

        {/* Description */}

        <p className="finalcta-description">
          Join 500+ Indian businesses using TARS to manage leads,
          sales, GST invoices and customer communication —
          all in one AI-powered platform.
        </p>

        {/* Buttons */}

        <div className="finalcta-buttons">

          <button className="finalcta-primary">

            Start Free Trial

            <RiArrowRightLine />

          </button>

          <button className="finalcta-secondary">

            <RiPlayCircleLine />

            Book Live Demo

          </button>

        </div>

        {/* Bottom text */}

        <p className="finalcta-note">
          14-day free trial · No credit card · GST invoice provided
        </p>

      </div>

    </section>
  );
};

export default FinalCtaSection;