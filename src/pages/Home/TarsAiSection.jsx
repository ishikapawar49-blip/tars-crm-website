import "./TarsAiSection.css";

import {
  RiMailLine,
  RiBrainLine,
  RiSparklingLine,
  RiLineChartLine,
  RiRobot2Line
} from "react-icons/ri";

import { TbTarget } from "react-icons/tb";

import { PiMagicWandBold } from "react-icons/pi";

const aiFeatures = [
  {
    icon: <RiMailLine />,
    title: "AI email drafting",
    text: "Personalized outreach written in your tone.",
  },

  {
    icon: <TbTarget />,
    title: "Lead scoring",
    text: "Predict close probability for every lead.",
  },

  {
    icon: <RiBrainLine />,
    title: "Sales insights",
    text: "Find at-risk deals and bottlenecks instantly.",
  },

  {
    icon: <PiMagicWandBold />,
    title: "Next best action",
    text: "Tells your reps exactly what to do next.",
  },

  {
    icon: <RiSparklingLine />,
    title: "Smart summaries",
    text: "Auto-summarize calls, emails and chats.",
  },

  {
    icon: <RiLineChartLine />,
    title: "AI forecasting",
    text: "Forecasts you can actually trust.",
  },
];

const TarsAiSection = () => {
  return (
    <section className="ai-section">

      <div className="ai-container">

        {/* Badge */}

        <div className="ai-badge">
          <RiRobot2Line />
          TARS AI
        </div>

        {/* Heading */}

        <h2 className="ai-heading">
          AI that helps your sales team{" "}
          <span>close faster</span>
        </h2>

        {/* Description */}

        <p className="ai-description">
          An AI co-pilot trained on your pipeline.
          From drafting emails to forecasting revenue —
          TARS AI turns CRM data into action.
        </p>

        {/* Cards */}

        <div className="ai-grid">

          {aiFeatures.map((item, index) => (

            <div
              className="ai-card"
              key={index}
            >

              <div className="ai-card-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TarsAiSection;