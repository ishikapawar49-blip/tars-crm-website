import "./IndiaBusinessSection.css";

import {
  RiMoneyRupeeCircleLine,
  RiFileList3Line,
  RiBuilding2Line,
  RiWallet3Line,
  RiQrCodeLine,
  RiShieldCheckLine
} from "react-icons/ri";

const featureCards = [
  {
    icon: <RiMoneyRupeeCircleLine />,
    title: "GST-ready invoicing",
    text: "Auto-generate compliant tax invoices with CGST/SGST/IGST.",
  },
  {
    icon: <RiFileList3Line />,
    title: "HSN/SAC support",
    text: "Built-in HSN & SAC codes for products and services.",
  },
  {
    icon: <RiBuilding2Line />,
    title: "Tally integration",
    text: "Two-way sync with Tally Prime — no double entry.",
  },
  {
    icon: <RiWallet3Line />,
    title: "UPI payment links",
    text: "Send UPI/Razorpay links and track payments instantly.",
  },
  {
    icon: <RiQrCodeLine />,
    title: "IRN & e-invoice QR",
    text: "Generate IRN, signed QR codes, and e-way bills.",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "DPDP & PAN/GST validation",
    text: "Compliant data handling and real-time validation.",
  },
];

const workflow = [
  {
    no: "1",
    title: "Lead",
    text: "WhatsApp inquiry from Bangalore",
  },
  {
    no: "2",
    title: "Quotation",
    text: "GST quote with HSN sent in 30 sec",
  },
  {
    no: "3",
    title: "Approval",
    text: "Auto routing to sales head",
  },
  {
    no: "4",
    title: "Invoice",
    text: "e-Invoice with IRN + QR generated",
  },
  {
    no: "5",
    title: "Payment",
    text: "UPI link · Razorpay · auto-reconciled",
  },
  {
    no: "6",
    title: "Tally",
    text: "Synced as voucher in Tally Prime",
  },
];

const IndiaBusinessSection = () => {
  return (
    <section className="india-section">

      <div className="india-badge">
  <img
    src="https://flagcdn.com/w40/in.png"
    alt="India Flag"
    className="india-flag"
  />
  <span>Built in India, for India</span>
</div>

      <h2 className="india-heading">
        Designed for <span>Indian businesses</span>
      </h2>

      <p className="india-description">
        Every feature you need to run an Indian business —
        GST, Tally, UPI, e-invoicing and DPDP compliance,
        out of the box.
      </p>

      {/* TOP CARDS */}

      <div className="india-grid">

        {featureCards.map((card, index) => (
          <div className="india-card" key={index}>

            <div className="india-card-icon">
              {card.icon}
            </div>

            <div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>

          </div>
        ))}

      </div>

      {/* BOTTOM */}

      <div className="india-bottom">

        {/* INVOICE */}

        <div className="india-invoice-card">

          <div className="india-invoice-top">

            <div>
              <span>TAX INVOICE</span>
              <h3>INV-2026-0421</h3>
            </div>

            <div className="india-paid-tag">
              GST • Paid
            </div>

          </div>

          <div className="india-invoice-info">

            <div>
              <small>Bill to</small>
              <strong>Acme Pvt Ltd</strong>
              <p>GSTIN 27AAACA1234F1Z5</p>
            </div>

            <div>
              <small>Place of supply</small>
              <strong>Maharashtra (27)</strong>
            </div>

          </div>

          <table className="india-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>HSN</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Growth plan · annual</td>
                <td>998314</td>
                <td>30</td>
                <td>₹ 8,82,000</td>
              </tr>

              <tr>
                <td>Onboarding & training</td>
                <td>998313</td>
                <td>1</td>
                <td>₹ 25,000</td>
              </tr>

              <tr>
                <td>CGST 9%</td>
                <td></td>
                <td></td>
                <td>₹ 81,630</td>
              </tr>

              <tr>
                <td>SGST 9%</td>
                <td></td>
                <td></td>
                <td>₹ 81,630</td>
              </tr>
            </tbody>
          </table>

          <div className="india-total">
            <span>Total</span>
            <strong>₹ 10,70,260</strong>
          </div>

        </div>

        {/* WORKFLOW */}

        <div className="india-workflow-card">

          <h3>Indian business workflow</h3>

          <div className="india-workflow-list">

            {workflow.map((item) => (
              <div className="india-step" key={item.no}>

                <div className="india-step-no">
                  {item.no}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default IndiaBusinessSection;