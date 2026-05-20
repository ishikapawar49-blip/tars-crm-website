import "./OTPVerification.css";
import shieldImage from "../../assets/security-shield.png";
import {
  FiHelpCircle,
  FiLock,
  FiShield,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiTimerFlashLine,
} from "react-icons/ri";

const OTPVerification = () => {
  return (
    <div className="otpx-page">

      {/* LEFT */}

      <div className="otpx-left">

        <div className="otpx-overlay" />

        <div className="otpx-content">

          <div className="otpx-badge">
            <FiShield />
            <span>IDENTITY PROTECTION PROTOCOL</span>
          </div>

          <h1>
            Verify your
            <span> Identity</span>
          </h1>

          <p>
            Secure your business data. We've sent a 6-digit
            verification code to your registered device.
          </p>

          <div className="otpx-features">

            <div className="otpx-feature-card">
              <div className="otpx-icon">
                <FiLock />
              </div>

              <div>
                <h4>MFA Enabled</h4>
                <span>
                  Multi-factor authentication protects
                  your CRM pipeline.
                </span>
              </div>
            </div>

            <div className="otpx-feature-card">
              <div className="otpx-icon">
                <FiShield />
              </div>

              <div>
                <h4>Encrypted Data</h4>
                <span>
                  End-to-end encryption for all
                  session activities.
                </span>
              </div>
            </div>

          </div>

          <div className="otpx-image-box">
            <img src={shieldImage} alt="security" />
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="otpx-right">

        <div className="otpx-top-icons">
          <FiHelpCircle />
          <RiMoonLine />
        </div>

        <div className="otpx-card">

          <div className="otpx-tabs">
            <button className="active">
              SMS Verification
            </button>

            <button>
              Email Verification
            </button>
          </div>

          <div className="otpx-head">

            <label>
              Authentication Code
            </label>

            <div className="otpx-timer">
              <RiTimerFlashLine />
              01:59
            </div>

          </div>

          <div className="otpx-inputs">

            <input value="4" readOnly />
            <input />
            <input />
            <input />
            <input />
            <input />

          </div>

          <button className="otpx-btn">
            Verify Identity →
          </button>

          <div className="otpx-resend">
            <span>Didn't receive the code?</span>
            <a href="/">Resend via SMS</a>
          </div>

          <div className="otpx-divider" />

          <div className="otpx-security">

            <span>
              <FiLock />
              256-BIT SSL
            </span>

            <span>
              <FiShield />
              GDPR READY
            </span>

            <span>
              <FiShield />
              ISO 27001
            </span>

          </div>

        </div>

        <div className="otpx-footer">
          <span>
            © 2024 TARS CRM. AI-Powered Growth.
          </span>

          <div>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">System Status</a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default OTPVerification;