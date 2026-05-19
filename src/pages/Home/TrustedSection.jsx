import "./TrustedSection.css";

const companies = [
  "Zerodha",
  "Razorpay",
  "Cred",
  "Meesho",
  "Urban Co.",
  "Boat",
  "Lenskart",
  "Paytm",
  "Swiggy",
];

const TrustedSection = () => {
  return (
    <section className="trusted-section">

      {/* TOP TEXT */}
      <p className="trusted-heading">
        TRUSTED BY GROWING INDIAN BUSINESSES
      </p>

      {/* MARQUEE */}
      <div className="marquee">

        <div className="marquee-track">

          {[...companies, ...companies].map((company, index) => (
            <span key={index}>
              {company}
            </span>
          ))}

        </div>

      </div>

      {/* STATS */}
      <div className="stats-container">

        <div className="stat-item">
          <h2>10,000+</h2>
          <p>Leads managed daily</p>
        </div>

        <div className="stat-item">
          <h2>500+</h2>
          <p>Indian businesses</p>
        </div>

        <div className="stat-item">
          <h2>99.9%</h2>
          <p>Uptime SLA</p>
        </div>

        <div className="stat-item">
          <h2>₹120 Cr+</h2>
          <p>Revenue tracked</p>
        </div>

      </div>

    </section>
  );
};

export default TrustedSection;