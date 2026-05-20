import { Link } from "react-router-dom";
import "./ForgotPassword.css";

import {
  FiHelpCircle,
  FiMail,
  FiArrowRight,
  FiArrowLeft,
  FiLock,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiShieldCheckLine,
  RiKey2Line,
} from "react-icons/ri";

const ForgotPassword = () => {
  return (
    <div className="forgotx-page">

      {/* LEFT */}

      <div className="forgotx-left">

        <div className="forgotx-bg" />

        <div className="forgotx-content">

          <div className="forgotx-illustration">

            <div className="forgotx-card">
              <RiShieldCheckLine />
            </div>

            <div className="forgotx-float forgotx-top">
              <RiKey2Line />
            </div>

            <div className="forgotx-float forgotx-bottom">
              <FiLock />
            </div>

          </div>

          <h1>
            Securing Your <br />
            Enterprise Intelligence
          </h1>

          <p>
            TARS CRM employs military-grade encryption and
            AI-driven threat detection to ensure your data
            remains your most secure asset.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="forgotx-right">

        <div className="forgotx-icons">

          <button>
            <FiHelpCircle />
          </button>

          <button>
            <RiMoonLine />
          </button>

        </div>

        <div className="forgotx-card-wrap">

          <h2>Forgot your password?</h2>

          <p>
            We'll send you a secure reset link to help you
            regain access to your workspace.
          </p>

          <label>EMAIL ADDRESS</label>

          <div className="forgotx-input">

            <FiMail />

            <input
              type="email"
              placeholder="name@company.com"
            />

          </div>

          <button className="forgotx-btn">

            Send reset link

            <FiArrowRight />

          </button>

          <div className="forgotx-divider" />

          <a
            href="/login"
            className="forgotx-back"
          >
            <FiArrowLeft />
            Back to login
          </a>

          <div className="forgotx-support">

            Having trouble?

            <a href="/">
              Contact Enterprise Support
            </a>

          </div>

        </div>

        <div className="forgotx-footer">
          © 2024 TARS CRM. AI-Powered Excellence.
        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;