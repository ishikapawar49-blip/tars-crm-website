import "./WhatsAppSection.css";

import {
  RiWhatsappLine,
  RiRobot2Line,
  RiTeamLine,
  RiCheckDoubleLine
} from "react-icons/ri";

const WhatsAppCRMSection = () => {
  return (
    <section className="wa-section">

      {/* LEFT */}

      <div className="wa-left">

        <div className="wa-badge">
          <RiWhatsappLine />
          WhatsApp-first CRM
        </div>

        <h2 className="wa-heading">
          Built for businesses that
          <br />
          <span>run on WhatsApp</span>
        </h2>

        <p className="wa-description">
          Capture leads from WhatsApp, automate replies with AI chatbots,
          and keep your entire customer conversation history in one timeline.
          India runs on WhatsApp — your CRM should too.
        </p>

        <div className="wa-features-grid">

          <div className="wa-feature-card">
            <RiWhatsappLine />
            <h4>Auto lead capture</h4>
            <p>Every WhatsApp message becomes a lead</p>
          </div>

          <div className="wa-feature-card">
            <RiRobot2Line />
            <h4>AI chatbots</h4>
            <p>Qualify leads 24/7 with smart bots</p>
          </div>

          <div className="wa-feature-card">
            <RiTeamLine />
            <h4>Team inbox</h4>
            <p>Shared WhatsApp inbox for sales teams</p>
          </div>

          <div className="wa-feature-card">
            <RiCheckDoubleLine />
            <h4>Follow-up automation</h4>
            <p>Drip messages that convert</p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="wa-chat-card">

        {/* HEADER */}

        <div className="wa-chat-header">

          <div className="wa-chat-user">

            <div className="wa-avatar">
              <RiWhatsappLine />
            </div>

            <div>
              <h4>Priya Mehta</h4>
              <p>online · WhatsApp lead</p>
            </div>

          </div>

          <div className="wa-hot-tag">
            Hot • 92
          </div>

        </div>

        <div className="wa-divider" />

        {/* CHAT */}

        <div className="wa-chat-body">

          <div className="wa-msg wa-msg-left">
            Hi! Saw your ad — need 30 user CRM for our agency.
          </div>

          <div className="wa-msg wa-msg-right">

            <span>AI ASSISTANT</span>

            Hi Priya! I'm TARS AI. Happy to help —
            could you share your monthly lead volume?

          </div>

          <div className="wa-msg wa-msg-left">
            About 800 leads/month, mostly from Meta ads.
          </div>

          <div className="wa-msg wa-msg-right">

            <span>AI ASSISTANT</span>

            Perfect fit for our Growth plan.
            Sharing a 14-day free trial + GST quotation now.

          </div>

          <div className="wa-quote-row">
            Quotation #QT-1109 sent ✓
          </div>

          <div className="wa-suggestion">

            <strong>AI suggestion:</strong>

            Schedule a demo call tomorrow at 11:00 AM IST.

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhatsAppCRMSection;