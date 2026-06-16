import { FiCheck, FiPhoneCall, FiShield, FiArrowRight } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__pill">
            <FiShield aria-hidden /> Regulated UK Debt Help &amp; IVA Specialists
          </span>
          <h1>
            Get out of debt — <span className="hero__accent">with dignity, not judgement.</span>
          </h1>
          <p className="hero__lede">
            Since 2013, Debt Free Helpline has helped thousands of people across the UK
            take back control of their finances. Free, confidential advice from friendly experts —
            and a clear, achievable path to a debt-free future.
          </p>

          <ul className="hero__bullets">
            <li>
              <FiCheck aria-hidden /> One affordable monthly payment
            </li>
            <li>
              <FiCheck aria-hidden /> Stop interest, charges &amp; creditor calls
            </li>
            <li>
              <FiCheck aria-hidden /> Write off a large portion of unaffordable debt
            </li>
            <li>
              <FiCheck aria-hidden /> Protected under UK insolvency legislation
            </li>
          </ul>

          <div className="hero__ctas">
            <a href="#contact-form" className="btn btn--primary">
              Start Free Assessment <FiArrowRight aria-hidden />
            </a>
            <a href="tel:03330916630" className="btn btn--outline-dark">
              <FiPhoneCall aria-hidden /> 0333 091 6630
            </a>
          </div>

          <p className="hero__fineprint">
            100% free, confidential advice · No obligation · FCA-aware service
          </p>
        </div>

      </div>
    </section>
  );
}
