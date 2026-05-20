import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

import {
  FiHelpCircle,
  FiEye,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

import { LuKeyRound } from "react-icons/lu";

const ResetPassword = () => {
   const navigate = useNavigate();
   
  return (
    <div className="resetx-page">

      {/* LEFT */}

      <div className="resetx-left">

        <div className="resetx-wave"></div>

        <div className="resetx-left-content">

 <div className="resetx-icon-box">
  <LuKeyRound />
</div>

          <h1>
            Create a <span>new password</span>
          </h1>

          <p>
            Strengthen your account security with our
            AI-driven encryption protocols. Your data
            protection is our top priority.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="resetx-right">

        <div className="resetx-top-icons">
          <FiHelpCircle />
          <RiMoonLine />
        </div>

        <div className="resetx-card">

          <label>NEW PASSWORD</label>

          <div className="resetx-input">
            <input
              type="password"
              value="•••••••••••"
              readOnly
            />
            <FiEye />
          </div>

          <label>CONFIRM PASSWORD</label>

          <div className="resetx-input">
            <input
              type="password"
              value="•••••••••••"
              readOnly
            />
            <FiEye />
          </div>

          <div className="resetx-strength">

            <div className="resetx-strength-head">
              <span>Password strength</span>
              <strong>EXCELLENT</strong>
            </div>

            <div className="resetx-bars">
              <span />
              <span />
              <span />
              <span />
            </div>

          </div>

          <div className="resetx-rules">

            <div>
              <RiCheckboxCircleFill />
              <span>Min. 8 characters</span>
            </div>

            <div>
              <RiCheckboxCircleFill />
              <span>Upper & lowercase</span>
            </div>

            <div>
              <span className="circle"></span>
              <span>One number</span>
            </div>

            <div>
              <span className="circle"></span>
              <span>Special symbol</span>
            </div>

          </div>

          <button
  className="resetx-btn"
  onClick={() => navigate("/otp-verification")}
>
  Update Password
</button>

        </div>

        <div className="resetx-links">
          <a href="/">Help Center</a>
          <a href="/">Security Architecture</a>
        </div>

        <div className="resetx-footer">
          <span>
            © 2024 TARS CRM. POWERED BY AI EXCELLENCE.
          </span>

          <div>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ResetPassword;