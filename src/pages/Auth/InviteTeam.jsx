import "./InviteTeam.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";

import {
  FiHelpCircle,
  FiGlobe,
  FiMapPin,
  FiShield,
  FiCheck,
} from "react-icons/fi";

import {
  RiMoonLine,
  RiTeamLine,
  RiUserSettingsLine,
} from "react-icons/ri";

import {
  MdOutlineFileUpload,
} from "react-icons/md";

const InviteTeam = () => {
  return (
    <div className="invite-page">

      {/* LEFT */}

      <div className="invite-left">

        <div className="invite-content">

          <div className="invite-badge">
            Collaboration Suite
          </div>

          <h1>
            Scale your team with
            <br />
            precision
          </h1>

          <p>
            Seamlessly onboard sales, support,
            and finance departments into one
            intelligent platform.
          </p>

          <div className="invite-card invite-card-one">

            <div className="invite-card-header">

              <div className="invite-icon">
                <RiTeamLine />
              </div>

              <div>
                <h3>Hierarchical Controls</h3>

                <span>
                  Manage global, regional, and
                  team-level access with granular
                  precision.
                </span>
              </div>

            </div>

            <div className="invite-members">

              <div className="invite-avatars">
  <img src={avatar1} alt="" />
  <img src={avatar2} alt="" />
  <img src={avatar3} alt="" />
  <span>+12</span>
</div>

              <p>8 Departments Active</p>

            </div>

          </div>

          <div className="invite-card invite-card-two">

            <div className="invite-bottom-left">

              <div className="invite-icon">
                <FiShield />
              </div>

              <h4>Dynamic Permissions</h4>

              <span>
                AI-suggested roles based on
                department.
              </span>

            </div>

            <div className="invite-tags">

              <span>Sales Executive</span>
              <span>Admin Lead</span>
              <span>Finance Reviewer</span>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="invite-right">

        <div className="invite-top-icons">
          <FiHelpCircle />
          <RiMoonLine />
        </div>

        <div className="invite-form">

          <h2>Invite your team</h2>

          <p>
            Define how your colleagues will
            interact with TARS CRM.
          </p>

          <label>EMAIL ADDRESSES</label>

          <div className="invite-input-wrap">

            <input
              placeholder="Separate emails with commas"
            />

            <a href="/">
              <MdOutlineFileUpload />
              Import from CSV
            </a>

          </div>

          <label>SELECT ACCESS ROLE</label>

          <select>
            <option>Sales Representative</option>
          </select>

          <div className="invite-role-box">

            <div className="role-header">

              <div>
                <FiShield />
                Role Capabilities
              </div>

              <span>
                VERIFIED STANDARD
              </span>

            </div>

            <ul>

              <li>
                <FiCheck />
                Access to shared lead pipeline
                and CRM contact database.
              </li>

              <li>
                <FiCheck />
                View analytics dashboards for
                personal and team performance.
              </li>

              <li className="disabled">
                <FiCheck />
                Restricted from modifying
                organizational billing settings.
              </li>

            </ul>

          </div>

          <label>ACCESS SCOPE</label>

          <div className="invite-scope">

            <div className="scope-card active">

              <FiGlobe />

              <h4>Global</h4>

              <span>All regions</span>

            </div>

            <div className="scope-card">

              <FiMapPin />

              <h4>Regional</h4>

              <span>Specific territory</span>

            </div>

          </div>

          <button>
            Send Invitations →
          </button>

          <small>
            Your team will receive a secure
            onboarding link via email.
          </small>

        </div>

        <div className="invite-footer">

          <div>
            <a href="/">Privacy Hub</a>
            <a href="/">Legal Terms</a>
          </div>

          <span>
            © 2024 TARS TECHNOLOGIES.
            POWERED BY AI.
          </span>

        </div>

      </div>

    </div>
  );
};

export default InviteTeam;