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
    title: "Brief Initial Review",
    body: "We cover a handful of straightforward questions on your debts, earnings and spending — plain language, no criticism. About 5 minutes.",
  },
  {
    icon: FiPhone,
    title: "Complimentary Consultation",
    body: "A supportive UK adviser examines your complete circumstances and sets out every route open to you, in everyday terms.",
  },
  {
    icon: FiFileText,
    title: "Tailored Proposal Drafting",
    body: "When an IVA suits your needs, we connect you with an authorised Insolvency Practitioner to prepare a personalised proposal.",
  },
  {
    icon: FiCheckCircle,
    title: "Agreement by Creditors",
    body: "Your creditors cast their votes on the IVA. After approval, they must honour its conditions — contact and interest charges stop.",
  },
  {
    icon: FiCreditCard,
    title: "Single Monthly Instalment",
    body: "You pay one realistic amount each month — shaped by what you can manage, not what lenders insist upon.",
  },
  {
    icon: FiSmile,
    title: "A Fresh Start",
    body: "Usually after 5 or 6 years, any outstanding eligible debt is cleared. You move forward — entirely free of debt.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how section" id="how">
      <div className="how__bg" aria-hidden />
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Process</span>
          <h2>Six clear stages on your path to becoming debt-free.</h2>
          <p>
            Our approach is built to feel reassuring and personal. From your opening conversation
            through to your final payment, you will always understand where you stand — at every
            stage.
          </p>
        </div>

        <ol className="how__timeline">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li className="how__step" key={title}>
              <div className="how__marker" aria-hidden>
                <span className="how__dot">
                  <Icon />
                </span>
                <span className="how__step-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <article className="how__card">
                <span className="how__label">Stage {String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
