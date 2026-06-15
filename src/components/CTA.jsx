import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta" aria-label="Take the first step">
      <div className="container cta__inner">
        <div className="cta__copy">
          <span className="cta__pill">Take the first step today</span>
          <h2>You do not have to face debt alone.</h2>
          <p>
            One free, confidential phone call is all it takes to start moving forward. Our friendly
            UK advisers are ready to listen — with no judgement, no pressure, and no obligation.
          </p>
        </div>
        <div className="cta__actions">
          <a href="tel:03330916630" className="btn btn-accent cta__btn">
            <FiPhoneCall aria-hidden /> Call 0333 091 6630
          </a>
          <a href="#contact-form" className="btn cta__btn cta__btn--ghost">
            Request a callback <FiArrowRight aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
