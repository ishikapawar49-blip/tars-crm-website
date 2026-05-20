import { Link } from "react-router-dom";
import "./Login.css";

import {
  FiMail,
  FiLock,
  FiEye,
  FiHelpCircle,
  FiDollarSign,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiGoogleFill,
  RiMicrosoftFill,
  RiKey2Line,
  RiBarChartGroupedLine,
  RiNodeTree,
  RiSparklingFill,
} from "react-icons/ri";

const Login = () => {
  return (
    <div className="loginx-page">

      {/* LEFT PANEL */}

      <div className="loginx-left">

        <div className="loginx-overlay" />

        <div className="loginx-content">

          <h1>
            Welcome back to TARS CRM.
          </h1>

          <p>
            Manage leads, sales, GST invoicing,
            and customer operations from one platform.
            Empower your team with India-first AI intelligence.
          </p>

          {/* MOCK DASHBOARD */}

          <div className="loginx-dashboard">

            <div className="loginx-top-card">
              <div className="loginx-dots">
                <span />
                <span />
              </div>

              <div className="loginx-mini-grid">

  <div className="loginx-mini-card">
    <FiDollarSign />
    <span />
  </div>

  <div className="loginx-mini-card">
    <RiBarChartGroupedLine />
    <span />
  </div>

  <div className="loginx-mini-card">
    <RiNodeTree />
    <span />
  </div>

</div>
            </div>

            <div className="loginx-bottom">

              <div className="loginx-chart-card">
                <span>PIPELINE VELOCITY</span>

                <div className="loginx-bars">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>

              <div className="loginx-ai-card">

  <RiSparklingFill className="loginx-ai-star" />

  <span>AI INSIGHT</span>

                <p>
                  Revenue forecast is up
                  12% for this quarter.
                </p>
              </div>

            </div>

          </div>

          <small>
            Trusted by 2,000+ Indian Enterprises.
            ISO 27001 Certified.
          </small>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="loginx-right">

        <div className="loginx-top-icons">

          <button>
            <FiHelpCircle />
          </button>

          <button>
            <RiMoonLine />
          </button>

        </div>

        <div className="loginx-card">

          <h2>Welcome back</h2>

          <p>
            Enter your credentials to access your dashboard.
          </p>

          {/* EMAIL */}

          <label>Email Address</label>

          <div className="loginx-input">

            <FiMail />

            <input
              type="email"
              placeholder="name@company.com"
            />

          </div>

          {/* PASSWORD */}

          <label>Password</label>

          <div className="loginx-input">

            <FiLock />

            <input
              type="password"
              placeholder="••••••••"
            />

            <FiEye />

          </div>

          {/* OPTIONS */}

          <div className="loginx-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">
  Forgot password?
</Link>

          </div>

          {/* LOGIN BTN */}

          <button className="loginx-login-btn">
            Login
          </button>

          {/* DIVIDER */}

          <div className="loginx-divider">
            <span>OR CONTINUE WITH</span>
          </div>

          {/* SOCIAL */}

          <div className="loginx-socials">

            <button>
              <RiGoogleFill />
              Google
            </button>

            <button>
              <RiMicrosoftFill />
              Microsoft
            </button>

          </div>

          {/* SSO */}

          <button className="loginx-sso-btn">

            <RiKey2Line />

            SSO Login

          </button>

          {/* FOOTER */}

          <div className="loginx-register">

            Don't have an account?

            <a href="/signup">Create account</a>

          </div>

        </div>

        <div className="loginx-footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Contact Support</a>
        </div>

      </div>

    </div>
  );
};

export default Login;