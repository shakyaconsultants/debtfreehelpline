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
    title: "UK advisers who genuinely care",
    body: "Authentic conversations with real people — no scripted call centres. Our UK team is here to listen and understand.",
  },
  {
    icon: FiUserCheck,
    title: "Personalised, never one-size-fits-all",
    body: "Each suggestion reflects your finances, your household and your goals — not a standard sales funnel.",
  },
  {
    icon: FiLock,
    title: "Fully private & secure",
    body: "Your information is encrypted, never traded, and shared only with the authorised Insolvency Practitioner you agree to work with.",
  },
  {
    icon: FiTag,
    title: "Upfront, honest pricing",
    body: "We explain every fee clearly from the outset — and will say when a free charity service is the smarter option.",
  },
  {
    icon: FiThumbsUp,
    title: "Over 13 years of expertise",
    body: "Since 2013, more than 12,000 UK households have gone from money worries to greater financial freedom with our help.",
  },
  {
    icon: FiClock,
    title: "Quick, straightforward steps",
    body: "Most people have a defined plan within a week of calling — and pressure from creditors eases straight away.",
  },
];

export default function WhyUs() {
  return (
    <section className="why section" id="why">
      <div className="why__bg" aria-hidden />
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Choose Us</span>
          <h2>A UK debt service that always puts you first.</h2>
          <p>
            Six reasons families across the UK rely on Debt Free Helpline to lead them out of debt
            — with calm guidance, plain language, and zero judgement.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <article className="why__item" key={title}>
              <span className="why__index" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="why__icon" aria-hidden>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
