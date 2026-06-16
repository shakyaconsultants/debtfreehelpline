import { FiHeart, FiBriefcase, FiCompass } from "react-icons/fi";
import "./About.css";

const VALUES = [
  {
    icon: FiHeart,
    title: "Empathetic, never judgemental",
    body: "We listen first. Our advisers are trained to understand life's difficulties — illness, redundancy, divorce, the cost of living — without prejudice.",
  },
  {
    icon: FiBriefcase,
    title: "Authorised UK specialists",
    body: "We work hand-in-hand with licensed UK Insolvency Practitioners and operate transparently within FCA-aware standards of conduct.",
  },
  {
    icon: FiCompass,
    title: "A clear, honest path",
    body: "We won't recommend a solution that isn't right for you. If a free debt charity option suits you better, we'll point you to it.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__media" aria-hidden>
          <div className="about__photo">
            <img
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=70"
              alt="Friendly UK debt adviser speaking with a client"
              loading="lazy"
            />
          </div>
          <div className="about__photo-accent">
            <strong>13+</strong>
            <span>Years helping UK families</span>
          </div>
        </div>

        <div className="about__copy">
          <span className="eyebrow">About Us</span>
          <h2>Real people, real debt help — since 2013.</h2>
          <p>
            Debt Free Helpline was founded with one simple belief: that anyone struggling
            with debt deserves clear, honest, professional advice — without shame, hidden fees, or
            sales pressure. Today, we are proud to be one of the UK's most trusted debt-help
            services, supporting individuals and families across England, Wales, Scotland and
            Northern Ireland.
          </p>
          <p>
            We specialise in <strong>Individual Voluntary Arrangements (IVAs)</strong> and partner
            with FCA-aware, licensed Insolvency Practitioners to give every client a personal,
            confidential assessment and a tailored route out of debt.
          </p>

          <ul className="about__values">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <span className="about__value-icon" aria-hidden>
                  <Icon />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
