import { FiCheck, FiPhoneCall, FiShield, FiArrowRight } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__layout">
          <div className="hero__intro">
            <span className="hero__pill">
              <FiShield aria-hidden /> Authorised UK Debt Support &amp; IVA Experts
            </span>
            <h1>
              Leave debt behind —{" "}
              <span className="hero__accent">with respect, not shame.</span>
            </h1>
            <p className="hero__lede">
              For more than a decade, Debt Free Helpline has guided thousands of UK residents
              toward stronger financial footing. Caring advisers provide no-cost, private support —
              and help you map out a practical plan for lasting freedom from debt.
            </p>

            <div className="hero__ctas">
              <a href="#contact-form" className="btn btn-accent">
                Begin Your Free Review <FiArrowRight aria-hidden />
              </a>
              <a href="tel:01915004548" className="btn btn--outline-dark">
                <FiPhoneCall aria-hidden /> 0191 500 4548
              </a>
            </div>

            <p className="hero__fineprint">
              100% free, confidential advice · No obligation · FCA-aware service
            </p>
          </div>

          <div className="hero__panel">
            <ul className="hero__bullets">
              <li>
                <span className="hero__bullet-icon" aria-hidden>
                  <FiCheck />
                </span>
                One manageable payment each month
              </li>
              <li>
                <span className="hero__bullet-icon" aria-hidden>
                  <FiCheck />
                </span>
                Halt interest, fees and contact from creditors
              </li>
              <li>
                <span className="hero__bullet-icon" aria-hidden>
                  <FiCheck />
                </span>
                Have a significant share of unmanageable debt written off
              </li>
              <li>
                <span className="hero__bullet-icon" aria-hidden>
                  <FiCheck />
                </span>
                Safeguarded by UK insolvency law
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
