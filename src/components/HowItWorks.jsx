import {
  FiClipboard,
  FiPhone,
  FiFileText,
  FiCheckCircle,
  FiCreditCard,
  FiSmile,
} from "react-icons/fi";
import "./HowItWorks.css";

const STEPS = [
  {
    icon: FiClipboard,
    title: "Quick Assessment",
    body: "We ask a few simple questions about your debts, income and outgoings — no jargon, no judgement. Takes around 5 minutes.",
  },
  {
    icon: FiPhone,
    title: "Free Consultation",
    body: "A friendly UK-based specialist reviews your full situation and explains every option available to you, in plain English.",
  },
  {
    icon: FiFileText,
    title: "Proposal Preparation",
    body: "If an IVA is right for you, we refer you to a licensed Insolvency Practitioner who prepares a tailored proposal.",
  },
  {
    icon: FiCheckCircle,
    title: "Creditor Approval",
    body: "Your creditors vote on the IVA. Once approved, they are legally bound to its terms — no more chasing or interest.",
  },
  {
    icon: FiCreditCard,
    title: "One Monthly Payment",
    body: "You make a single, affordable payment each month — based on what you can realistically afford, not what creditors demand.",
  },
  {
    icon: FiSmile,
    title: "Debt-Free Future",
    body: "After 5 or 6 years (typically), any remaining qualifying debt is written off. You start fresh — completely debt-free.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how section" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2>Six simple steps to becoming debt-free.</h2>
          <p>
            Our process is designed to feel calm and human. From the first phone call to your final
            payment, you will know exactly where you stand — every step of the way.
          </p>
        </div>

        <ol className="how__grid">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li className="how__card" key={title}>
              <span className="how__number">Step {String(i + 1).padStart(2, "0")}</span>
              <span className="how__icon" aria-hidden>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
