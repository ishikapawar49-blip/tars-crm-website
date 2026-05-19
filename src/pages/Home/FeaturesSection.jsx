import "./FeaturesSection.css";

import {
  HiOutlineUsers,
  HiOutlinePhone,
  HiOutlineSparkles,
  HiOutlineReceiptPercent,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi2";

import {
  FiMessageCircle,
  FiMail,
  FiCalendar,
  FiBell,
  FiFileText,
  FiCreditCard,
  FiBox,
  FiFolder,
} from "react-icons/fi";

import {
  RiRobot2Line,
  RiFileChartLine,
} from "react-icons/ri";

import {
  TbTargetArrow,
  TbReceiptDollar, 
} from "react-icons/tb";

import {
  LuWorkflow,
} from "react-icons/lu";

const cards = [
  {
    icon: <HiOutlineUsers />,
    iconClass: "blue-azure",
    title: "CRM & Sales",
    points: [
      "Lead management",
      "Contacts & companies",
      "Visual sales pipeline",
      "Deals & opportunities",
      "Lead scoring",
      "Assignment automation",
    ],
    tags: [],
  },

  {
    icon: <HiOutlinePhone />,
    iconClass: "blue-cyan",
    title: "Communication",
    points: [
      "WhatsApp CRM",
      "Email campaigns",
      "SMS notifications",
      "Meeting scheduling",
      "Tasks & reminders",
    ],
    tags: [
      { icon: <FiMessageCircle />, text: "WhatsApp" },
      { icon: <FiMail />, text: "Email" },
      { icon: <FiCalendar />, text: "Meetings" },
    ],
  },

  {
    icon: <RiRobot2Line  />,
    iconClass: "violet-azure",
    title: "Automation",
    points: [
      "Workflow automation",
      "AI assistant",
      "Smart alerts",
      "Drip campaigns",
    ],
    tags: [
  { icon: <LuWorkflow />, text: "Workflows" },
  { icon: <FiBell />, text: "Alerts" },
  { icon: <LuWorkflow />, text: "Triggers" },
],
  },

  {
    icon: <TbReceiptDollar />,
    iconClass: "blue-azure",
    title: "Finance",
    points: [
      "GST invoicing",
      "Quotations",
      "Payment tracking",
      "Products catalog",
    ],
    tags: [
      { icon: <FiFileText />, text: "Quotes" },
      { icon: <FiCreditCard />, text: "Payments" },
      { icon: <FiBox />, text: "Catalog" },
    ],
  },

  {
    icon: <HiOutlineBriefcase />,
    iconClass: "blue-cyan",
    title: "Operations",
    points: [
      "Projects management",
      "Support tickets",
      "Complaints handling",
      "Documents module",
    ],
    tags: [
      { icon: <FiMessageCircle />, text: "Support" },
      { icon: <FiFolder />, text: "Projects" },
    ],
  },

  {
    icon: <HiOutlineChartBar />,
    iconClass: "violet-azure",
    title: "Analytics",
    points: [
      "Reports builder",
      "Forecasting",
      "KPI dashboards",
      "Team activity analytics",
    ],
    tags: [
  { icon: <RiFileChartLine />, text: "Reports" },
  { icon: <TbTargetArrow />, text: "Forecasts" },
],
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">

      {/* BADGE */}

      <div className="features-badge">
        One platform · Everything you need
      </div>

      {/* TITLE */}

      <h2 className="features-title">
        Your entire business,{" "}
        <span>connected</span>
      </h2>

      {/* DESCRIPTION */}

      <p className="features-description">
        CRM, sales, quotations, GST invoicing,
        projects and support — all in one intelligent
        platform built for Indian SMBs and enterprises.
      </p>

      {/* GRID */}

      <div className="features-grid">

        {cards.map((card, index) => (

          <div className="feature-card" key={index}>

            {/* ICON */}

            <div className={`feature-icon ${card.iconClass}`}>
              {card.icon}
            </div>

            {/* TITLE */}

            <h3>{card.title}</h3>

            {/* POINTS */}

            <ul>

              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}

            </ul>

            {/* TAGS */}

            {card.tags.length > 0 && (

              <div className="feature-tags">

                {card.tags.map((tag, i) => (

                  <span key={i}>

                    {tag.icon}

                    {tag.text}

                  </span>

                ))}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturesSection;