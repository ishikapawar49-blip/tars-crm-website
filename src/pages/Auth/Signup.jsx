import "./Signup.css";

import signupLaptop from "../../assets/signup.png";

import {
  FiHelpCircle,
  FiEyeOff,
  FiArrowRight,
  FiShield,
  FiLock,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiGoogleFill,
  RiMicrosoftFill,
} from "react-icons/ri";

const Signup = () => {
  return (
    <div className="signupx-page">

      {/* LEFT SIDE */}

      <div className="signupx-left">

        <div className="signupx-content">

          <h1>
            Grow your business with
            <span> intelligent </span>
            automation.
          </h1>

          <p>
            India's smartest CRM for Sales,
            Invoicing, & Support.
            Join 500+ Indian businesses
            scaling with TARS.
          </p>

          <div className="signupx-image-card">

            <div className="signupx-image-top">
              <div className="signupx-image-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="signupx-image-line" />
            </div>

            <img
              src={signupLaptop}
              alt="Dashboard"
            />

          </div>

          <div className="signupx-badges">

            <span>
              <FiShield />
              GDPR COMPLIANT
            </span>

            <span>
              <FiLock />
              256-BIT SSL
            </span>

            <span>
              ISO 27001 CERTIFIED
            </span>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="signupx-right">

        <div className="signupx-top-icons">

          <button>
            <FiHelpCircle />
          </button>

          <button>
            <RiMoonLine />
          </button>

        </div>

        <div className="signupx-form-wrap">

          <span className="signupx-small-tag">
            GETTING STARTED
          </span>

          <div className="signupx-header-row">

            <h2>
              Account Creation
            </h2>

            <span>
              STEP 01 OF 03
            </span>

          </div>

          <div className="signupx-progress">
            <div />
          </div>

          <p className="signupx-subtext">
            Start your 14-day premium free trial.
            No payment method required to explore.
          </p>

          {/* SOCIAL */}

          <div className="signupx-socials">

            <button>
              <RiGoogleFill />
              Google
            </button>

            <button>
              <RiMicrosoftFill />
              Microsoft
            </button>

          </div>

          <div className="signupx-divider">
            OR CONTINUE WITH EMAIL
          </div>

          {/* FORM */}

          <div className="signupx-row">

            <div>
              <label>FULL NAME</label>

              <input
                type="text"
                placeholder="Arjun Singh"
              />
            </div>

            <div>
              <label>COMPANY</label>

              <input
                type="text"
                placeholder="TARS Tech"
              />
            </div>

          </div>

          <label>WORK EMAIL</label>

          <input
            type="email"
            placeholder="arjun@tarstech.com"
          />

          <label>PHONE NUMBER</label>

          <div className="signupx-phone">

            <span>+91</span>

            <input
              type="text"
              placeholder="98765 43210"
            />

          </div>

          <label>SET PASSWORD</label>

          <div className="signupx-password">

            <input
              type="password"
              placeholder="••••••••••"
            />

            <FiEyeOff />

          </div>

          <div className="signupx-strength">

            <span className="active" />
            <span className="active" />
            <span />
            <span />

          </div>

          <div className="signupx-strength-text">
            STRENGTH: FAIR
          </div>

          <div className="signupx-check">

  <input
    type="checkbox"
    id="terms"
  />

  <label htmlFor="terms">
    I agree to the
    <a href="/"> Terms of Service </a>
    and
    <a href="/"> Privacy Policy</a>
  </label>

</div>

          <button className="signupx-main-btn">

            Next: Business Details

            <FiArrowRight />

          </button>

          <div className="signupx-login-link">

            Already have a TARS account?

            <a href="/login">
              Log in
            </a>

          </div>

        </div>

        <div className="signupx-footer">

          <span>
            © 2024 TARS TECHNOLOGIES
          </span>

          <div>
            <a href="/">SECURITY</a>
            <a href="/">PRIVACY</a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;