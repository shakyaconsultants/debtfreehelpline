import {
  FiHeadphones,
  FiUserCheck,
  FiLock,
  FiTag,
  FiThumbsUp,
  FiClock,
} from "react-icons/fi";
import "./WhyUs.css";

const REASONS = [
  {
    icon: FiHeadphones,
    title: "UK-based, human advisers",
    body: "Real people, real conversations — never call centres or scripts. Our team is based in the UK and trained to listen.",
  },
  {
    icon: FiUserCheck,
    title: "Tailored, never templated",
    body: "Every recommendation is built around your numbers, your family, your future — not a generic sales pipeline.",
  },
  {
    icon: FiLock,
    title: "Strictly confidential",
    body: "Your details are encrypted, never sold, and only shared with the licensed Insolvency Practitioner you choose to work with.",
  },
  {
    icon: FiTag,
    title: "No hidden fees",
    body: "We are transparent about every cost up front — and we will always tell you if a free debt charity is a better fit.",
  },
  {
    icon: FiThumbsUp,
    title: "13+ years of experience",
    body: "Founded in 2013, we have helped over 12,000 UK households move from financial stress to financial freedom.",
  },
  {
    icon: FiClock,
    title: "Fast, simple process",
    body: "Most clients have a clear plan in place within 7 days of their first call — and creditor pressure stops in its tracks.",
  },
];

export default function WhyUs() {
  return (
    <section className="why section" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Choose Us</span>
          <h2>The UK debt-help service that puts people first.</h2>
          <p>
            Six reasons thousands of UK families have trusted Debt Free Helpline to guide
            them out of debt — calmly, clearly, and without judgement.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div className="why__item" key={title}>
              <span className="why__icon" aria-hidden>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
