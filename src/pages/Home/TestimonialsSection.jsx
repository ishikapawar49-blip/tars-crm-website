import "./TestimonialsSection.css";

import { RiStarFill } from "react-icons/ri";

const testimonials = [
  {
    quote:
      '"TARS CRM cut our quote-to-cash time by 60%. The Tally + GST integration is unmatched."',
    metric: "+42% revenue",
    initials: "AM",
    name: "Aarav Mehta",
    role: "Founder, Saffron Foods",
  },

  {
    quote:
      '"WhatsApp CRM is a game changer. Our reps now respond to leads in under 2 minutes."',
    metric: "3.2× conversion",
    initials: "SI",
    name: "Sneha Iyer",
    role: "Head of Sales, Indus Retail",
  },

  {
    quote:
      '"We replaced HubSpot, Tally add-ons and a separate ticketing tool — TARS does it all."',
    metric: "₹18L saved/yr",
    initials: "RK",
    name: "Rohit Kapoor",
    role: "CEO, Bharat Logistics",
  },

  {
    quote:
      '"The AI forecasting is scarily accurate. Board reviews are 10× faster now."',
    metric: "94% accuracy",
    initials: "AV",
    name: "Anjali Verma",
    role: "RevOps, Nimbus Tech",
  },

  {
    quote:
      '"From WhatsApp lead to GST e-invoice in 4 minutes. Our sales team finally smiled at a CRM."',
    metric: "2× pipeline",
    initials: "VS",
    name: "Vikram Singh",
    role: "Director, Kerala Spices Co.",
  },

  {
    quote:
      '"Premium quality at Indian pricing. The onboarding team handheld us throughout."',
    metric: "1-day setup",
    initials: "PM",
    name: "Priya Mehta",
    role: "Founder, Studio Lumen",
  },
];

export default function CustomerLoveSection() {
  return (
    <section className="love-section">
      <div className="love-container">

        <h2 className="love-heading">
          Loved by <span>Indian businesses</span>
        </h2>

        <p className="love-description">
          From early-stage startups to growing enterprises —
          teams across India trust TARS CRM.
        </p>

        <div className="love-grid">

          {testimonials.map((item, index) => (
            <div className="love-card" key={index}>

              <div className="love-stars">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} />
                ))}
              </div>

              <p className="love-quote">
                {item.quote}
              </p>

              <div className="love-metric">
                {item.metric}
              </div>

              <div className="love-divider"></div>

              <div className="love-user">

                <div className="love-avatar">
                  {item.initials}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}