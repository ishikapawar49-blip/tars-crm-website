import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-circle">
          ✦
        </div>

        <h1 className="logo-text">
          TARS<span>CRM</span>
        </h1>
      </div>

      <div className="navbar-center">
        <a href="#">Features</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Integrations</a>
        <a href="#">Resources</a>
      </div>

      <div className="navbar-right">
        <button
  className="login-btn"
  onClick={() => window.location.href = "/login"}
>
  Login
</button>

        <button className="demo-btn">
          Book Demo
        </button>

        <button className="trial-btn">
          Start Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;