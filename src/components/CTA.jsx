import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta" aria-label="Take the first step">
      <div className="container cta__inner">
        <div className="cta__copy">
          <span className="cta__pill">Make a start today</span>
          <h2>You do not need to tackle debt by yourself.</h2>
          <p>
            A single complimentary, private call is enough to begin making progress. Our approachable
            UK advisers are here to listen — no judgement, no pushy sales talk, and nothing to sign up for.
          </p>
        </div>
        <div className="cta__actions">
          <a href="tel:01915004548" className="btn btn-accent cta__btn">
            <FiPhoneCall aria-hidden /> Ring 0191 500 4548
          </a>
          <a href="#contact-form" className="btn cta__btn cta__btn--ghost">
            Ask for a callback <FiArrowRight aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
