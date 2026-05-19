import "./PricingSection.css";

import { useState } from "react";
import { RiSparklingLine } from "react-icons/ri";
import {
  FiCheck,
} from "react-icons/fi";

const PricingSection = () => {

  const [yearly, setYearly] = useState(true);

  const plans = [
    {
      name: "STARTER",
      description:
        "For small teams getting started with CRM.",

      price: yearly ? "399" : "499",

      features: [
        "Up to 3 users",
        "Lead & deal management",
        "WhatsApp inbox (1 number)",
        "GST quotations",
        "Email support",
      ],
    },

    {
      name: "GROWTH",
      description:
        "For scaling sales teams that need automation.",

      price: yearly ? "1,199" : "1,499",

      popular: true,

      features: [
        "Up to 25 users",
        "Visual sales pipeline",
        "AI assistant + lead scoring",
        "GST invoicing & payments",
        "Tally + Razorpay integration",
        "Workflow automation",
        "Priority support",
      ],
    },

    {
      name: "ENTERPRISE",
      description:
        "For large organizations with custom needs.",

      price: yearly ? "3,199" : "3,999",

      features: [
        "Unlimited users",
        "Advanced AI & forecasting",
        "Custom roles & permissions",
        "Dedicated success manager",
        "SLA & 99.99% uptime",
        "On-prem & VPC options",
        "DPDP audit support",
      ],
    },
  ];

  return (
    <section className="pricing-section">

      <div className="pricing-container">

        <h2 className="pricing-heading">
          Simple, transparent{" "}
          <span>pricing</span>
        </h2>

        <p className="pricing-description">
          Start free for 14 days. No credit card
          required. Cancel anytime.
        </p>

        {/* TOGGLE */}

        <div className="pricing-toggle">

          <button
            className={!yearly ? "active" : ""}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>

          <button
            className={yearly ? "active" : ""}
            onClick={() => setYearly(true)}
          >
            Yearly · save 20%
          </button>

        </div>

        {/* PLANS */}

        <div className="pricing-grid">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
            >

              {plan.popular && (
                <div className="popular-badge">
                 <RiSparklingLine />
                  Most popular
                </div>
              )}

              <span className="plan-name">
                {plan.name}
              </span>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="plan-price">

                <h3>
                  ₹{plan.price}
                </h3>

                <span>
                  /user/month
                </span>

              </div>

              <small>
                Billed annually · 18% GST extra
              </small>

              <button
                className={`plan-button ${
                  plan.popular
                    ? "primary"
                    : ""
                }`}
              >
                Start free trial
              </button>

              <ul>

                {plan.features.map(
                  (feature, i) => (

                    <li key={i}>

                      <FiCheck />

                      {feature}

                    </li>
                  )
                )}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default PricingSection;