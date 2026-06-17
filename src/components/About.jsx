import { FiHeart, FiBriefcase, FiCompass } from "react-icons/fi";
import "./About.css";

const VALUES = [
  {
    icon: FiHeart,
    title: "Compassionate, never critical",
    body: "We hear you out first. Our advisers are skilled at recognising life's hardships — sickness, job loss, separation, rising living costs — without bias.",
  },
  {
    icon: FiBriefcase,
    title: "Trusted UK professionals",
    body: "We collaborate closely with authorised UK Insolvency Practitioners and uphold open, FCA-aligned standards in everything we do.",
  },
  {
    icon: FiCompass,
    title: "Straightforward, truthful guidance",
    body: "We will never suggest an option that does not fit your situation. When a free charity service is the better choice, we will guide you there.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__bg" aria-hidden />
      <div className="container">
        <div className="about__top">
          <div className="about__copy">
            <span className="eyebrow">About Us</span>
            <h2>Genuine support, practical debt relief — since 2013.</h2>
            <div className="about__body">
              <p>
                Debt Free Helpline began with a straightforward conviction: everyone facing debt
                should receive straightforward, truthful, expert guidance — free from embarrassment,
                surprise costs, or pushy selling. We now stand among the UK's most relied-on debt
                support providers, helping people and households throughout England, Wales, Scotland
                and Northern Ireland.
              </p>
              <p>
                Our focus is <strong>Individual Voluntary Arrangements (IVAs)</strong>, and we work
                alongside FCA-aligned, authorised Insolvency Practitioners to offer each client a
                private, one-to-one review and a customised path away from debt.
              </p>
            </div>
          </div>

          <div className="about__media">
            <div className="about__photo-wrap">
              <div className="about__photo">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=70"
                  alt="Professional UK advisers discussing debt support options"
                  loading="lazy"
                />
              </div>
              <div className="about__photo-accent">
                <strong>13+</strong>
                <span>Years helping UK families</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="about__values">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <span className="about__value-icon" aria-hidden>
                <Icon />
              </span>
              <div className="about__value-text">
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
