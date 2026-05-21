import "./TwoFactorAuth.css";
import qrImage from "../../assets/qr-security.jpg";

import {
  FiHelpCircle,
  FiCopy,
  FiMonitor,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiShieldCheckLine,
} from "react-icons/ri";

import {
  MdSecurity,
  MdWarning,
} from "react-icons/md";

import {
  BsQrCodeScan,
} from "react-icons/bs";

const TwoFactorAuth = () => {
  return (
    <div className="twoxfa-page">

      {/* LEFT SIDE */}

      <div className="twoxfa-left">

        <div className="twoxfa-overlay"></div>

        <div className="twoxfa-content">

          <div className="twoxfa-badge">
            <MdSecurity />
            <span>SECURITY ARCHITECTURE</span>
          </div>

          <h1>
            Protect your business
            <span>with 2FA</span>
          </h1>

          <p>
            Enterprise-grade security for your CRM.
            Add an extra layer of defense to keep
            your vault-secured data protected from
            unauthorized access.
          </p>

          <div className="twoxfa-feature-grid">

            {/* CARD 1 */}

            <div className="twoxfa-feature-card">

              <div className="twoxfa-feature-icon shield">
                <RiShieldCheckLine />
              </div>

              <div>

                <h4>AES-256</h4>

                <span>
                  ACTIVE PROTECTION
                </span>

                <div className="twoxfa-progress">
                  <div></div>
                </div>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="twoxfa-feature-card">

              <div className="twoxfa-feature-icon danger">
                <MdWarning />
              </div>

              <div>

                <h4>Threat Monitor</h4>

                <span>
                  GLOBAL SCAN
                </span>

                <p>
                  Live monitoring of all active
                  sessions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="twoxfa-right">

        {/* TOP ICONS */}

        <div className="twoxfa-top-icons">

          <button>
            <FiHelpCircle />
          </button>

          <button>
            <RiMoonLine />
          </button>

        </div>

        {/* SECURITY HEALTH */}

        <div className="twoxfa-health">

          <div className="twoxfa-health-left">

            <RiShieldCheckLine />

            <span>
              Security Health
            </span>

          </div>

          <div className="twoxfa-health-right">

            <span className="red-dot"></span>

            <span>
              ACTION REQUIRED
            </span>

          </div>

        </div>

        {/* MAIN CARD */}

        <div className="twoxfa-card">

          <h2>
            Two-Factor Authentication
          </h2>

          <p>
            Scan the QR code below with your
            preferred authenticator app to get
            started.
          </p>

          {/* QR */}

          <div className="twoxfa-qr-wrap">

            <div className="twoxfa-qr-box">

              <img
                src={qrImage}
                alt="QR Code"
              />

            </div>

          </div>

          <button className="twoxfa-scan-btn">

            <BsQrCodeScan />

            SCAN NOW

          </button>

          {/* CODE HEADER */}

          <div className="twoxfa-code-header">

            <label>
              VERIFICATION CODE
            </label>

            <span>
              TIME REMAINING 2:45
            </span>

          </div>

          {/* OTP */}

          <div className="twoxfa-otp">

            <input
              type="text"
              maxLength="1"
              defaultValue="•"
            />

            <input
              type="text"
              maxLength="1"
              defaultValue="•"
            />

            <input
              type="text"
              maxLength="1"
              defaultValue="•"
            />

            <input
              type="text"
              maxLength="1"
              defaultValue="•"
            />

            <input
              type="text"
              maxLength="1"
              defaultValue="•"
            />

            <input
              type="text"
              maxLength="1"
              defaultValue="•"
            />

          </div>

          {/* BUTTON */}

          <button className="twoxfa-main-btn">
            Enable 2FA Securely
          </button>

        </div>

        {/* BACKUP CODES */}

        <div className="twoxfa-backup">

          <div className="twoxfa-backup-head">

            <h4>
              Emergency Backup Codes
            </h4>

            <a href="/">
              Download Securely
            </a>

          </div>

          <div className="twoxfa-backup-grid">

            <div className="twoxfa-code-card">

              <span>
                78K9-QW21
              </span>

              <FiCopy />

            </div>

            <div className="twoxfa-code-card">

              <span>
                PL02-XM99
              </span>

              <FiCopy />

            </div>

          </div>

        </div>

        {/* DEVICE */}

        <div className="twoxfa-device">

          <div className="twoxfa-device-top">

            <div>

              <h4>
                Remember this device
              </h4>

              <p>
                Don't ask for codes on this
                browser for 30 days.
              </p>

            </div>

            <label className="twoxfa-switch">

              <input
                type="checkbox"
                defaultChecked
              />

              <span></span>

            </label>

          </div>

          {/* ACTIVE SESSION */}

          <div className="twoxfa-session">

            <div className="twoxfa-session-left">

              <div className="session-icon">
                <FiMonitor />
              </div>

              <div>

                <h5>
                  MacBook Pro M2
                </h5>

                <span>
                  San Francisco, CA • Chrome
                </span>

              </div>

            </div>

            <div className="session-badge">
              CURRENT DEVICE
            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="twoxfa-footer">

          <div>

            <a href="/">
              Privacy Hub
            </a>

            <a href="/">
              Security Standards
            </a>

            <a href="/">
              Compliance
            </a>

          </div>

          <span>
            © 2024 TARS CRM PLATFORM
          </span>

        </div>

      </div>

    </div>
  );
};

export default TwoFactorAuth;