import "./PipelineSection.css";

import {
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

import {
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";

const pipelineData = [
  {
    title: "New",
    color: "#22C7F6",
    dot: "#22C7F6",

    deals: [
      {
        company: "Acme Pvt Ltd",
        owner: "RS",
        amount: "₹ 4.2L",
        progress: "20%",
      },

      {
        company: "Nimbus Tech",
        owner: "AK",
        amount: "₹ 1.8L",
        progress: "25%",
      },
    ],
  },

  {
    title: "Qualified",
    color: "#B180FC",
    dot: "#B180FC",

    deals: [
      {
        company: "Bharat Logistics",
        owner: "PM",
        amount: "₹ 8.5L",
        progress: "45%",
      },

      {
        company: "Saffron Foods",
        owner: "RS",
        amount: "₹ 3.1L",
        progress: "50%",
      },
    ],
  },

  {
    title: "Proposal",
    color: "#F6B322",
    dot: "#F6B322",

    deals: [
      {
        company: "Tata Hi-Tech",
        owner: "AK",
        amount: "₹ 22L",
        progress: "65%",
        warning: true,
      },

      {
        company: "Indus Retail",
        owner: "PM",
        amount: "₹ 6.7L",
        progress: "60%",
      },
    ],
  },

  {
    title: "Won",
    color: "#22C55E",
    dot: "#22C55E",

    deals: [
      {
        company: "Kerala Spices Co.",
        owner: "RS",
        amount: "₹ 11.4L",
        progress: "100%",
      },

      {
        company: "Mumbai Realty",
        owner: "AK",
        amount: "₹ 18L",
        progress: "100%",
      },
    ],
  },
];

const PipelineSection = () => {
  return (
    <section className="pipe-section">

      {/* TOP */}

      <div className="pipe-badge">
        Visual sales pipeline
      </div>

      <h2 className="pipe-heading">
        Track every deal with a{" "}

        <span>
          powerful visual pipeline
        </span>

      </h2>

      <p className="pipe-description">

        Drag-and-drop deals across stages,
        spot stuck opportunities instantly,
        and forecast revenue with AI-powered
        probability scoring.

      </p>

      {/* BOARD */}

      <div className="pipe-board">

        {/* HEADER */}

        <div className="pipe-board-top">

          <div>

            <h3>
              Q4 Pipeline · All teams
            </h3>

            <p>
              63 active deals · ₹ 1.84 Cr weighted
            </p>

          </div>

          <div className="pipe-board-actions">

            <button className="pipe-filter-btn">

              <HiOutlineAdjustmentsHorizontal />

              Filter

            </button>

            <button className="pipe-newdeal-btn">

              + New deal

            </button>

          </div>

        </div>

        {/* COLUMNS */}

        <div className="pipe-columns">

          {pipelineData.map((column, index) => (

            <div
              className="pipe-column"
              key={index}
            >

              {/* COLUMN HEADER */}

              <div className="pipe-column-header">

                <div className="pipe-column-left">

                  <span
                    className="pipe-column-dot"

                    style={{
                      background: column.dot,
                    }}
                  />

                  <h4>
                    {column.title}
                  </h4>

                </div>

                <span className="pipe-deal-count">
                  2
                </span>

              </div>

              {/* DEAL CARDS */}

              {column.deals.map((deal, i) => (

                <div
                  className="pipe-deal-card"
                  key={i}
                >

                  <div className="pipe-deal-top">

                    <h5>
                      {deal.company}
                    </h5>

                    {deal.warning && (

                      <FiAlertTriangle />

                    )}

                  </div>

                  <p>
                    Owner · {deal.owner}
                  </p>

                  <div className="pipe-deal-bottom">

                    <span className="pipe-amount">
                      {deal.amount}
                    </span>

                    <span
                      className="pipe-percentage"

                      style={{
                        color: column.color,
                      }}
                    >

                      {deal.progress}

                    </span>

                  </div>

                  {/* PROGRESS */}

                  <div className="pipe-progress-track">

                    <div
                      className="pipe-progress-fill"

                      style={{
                        width: deal.progress,
                        background: column.color,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          ))}

        </div>

        {/* STATS */}

        <div className="pipe-stats">

          <div className="pipe-stat-box">

            <p>
              Forecast accuracy
            </p>

            <div className="pipe-stat-row">

              <div>

                <h3>
                  94%
                </h3>

                <span>
                  vs last quarter
                </span>

              </div>

              <FiTrendingUp />

            </div>

          </div>

          <div className="pipe-stat-box">

            <p>
              Avg deal velocity
            </p>

            <div className="pipe-stat-row">

              <div>

                <h3>
                  12 days
                </h3>

                <span>
                  -3 days MoM
                </span>

              </div>

              <FiTrendingUp />

            </div>

          </div>

          <div className="pipe-stat-box pipe-warning-box">

            <p>
              Stuck deals
            </p>

            <div className="pipe-stat-row">

              <div>

                <h3>
                  4
                </h3>

                <span className="pipe-warning-text">
                  Need attention
                </span>

              </div>

              <FiAlertTriangle />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PipelineSection;