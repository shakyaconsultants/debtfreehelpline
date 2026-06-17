import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./FAQ.css";

const FAQS = [
  {
    q: "Does it cost anything to contact Debt Free Helpline?",
    a: "No. Your first consultation, eligibility review and tailored debt guidance are completely free. We only charge if you decide to move ahead with a formal solution such as an IVA — and every fee is set out plainly in writing before you agree to anything.",
  },
  {
    q: "Will choosing a debt solution harm my credit rating?",
    a: "Most formal routes — IVAs, DROs, Trust Deeds and bankruptcy included — appear on your credit file and can limit borrowing during the arrangement and for up to six years from when it begins. Our advisers spell out how each path could affect you so you can decide with confidence.",
  },
  {
    q: "How soon can creditor calls and letters end?",
    a: "After an IVA proposal is submitted and an interim order takes effect, creditors are legally barred from contacting you or taking further steps. For most people this falls within a few weeks of beginning — and the steady stream of calls and letters often eases almost as soon as we start handling things for you.",
  },
  {
    q: "Could I qualify for an IVA?",
    a: "An IVA is usually an option if you are based in England, Wales or Northern Ireland, owe £6,000 or more to at least two creditors, and earn enough to make a regular monthly payment. Scotland has a similar route through a Trust Deed. The simplest way to check is a complimentary, no-pressure conversation with one of our advisers.",
  },
  {
    q: "What if a free debt charity is the better choice?",
    a: "When a no-cost service such as StepChange, National Debtline or Citizens Advice suits your situation better, we will say so. Integrity guides everything we do — we would sooner point you elsewhere than suggest something that is not right for you.",
  },
  {
    q: "Will my personal details stay confidential?",
    a: "Yes, without question. Everything you tell us is stored safely in line with UK GDPR. We never sell or pass on your data to outside parties unless you clearly agree — and only to the authorised Insolvency Practitioner or provider you select.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <span className="eyebrow">Common Questions</span>
          <h2>Straight answers to what you want to know.</h2>
          <p>
            These come up all the time — and we are always glad to explain. If you cannot find
            yours below, ring us on{" "}
            <a href="tel:01915004548">0191 500 4548</a> and we will gladly assist.
          </p>
          <a href="#contact-form" className="btn btn--primary faq__cta">
            Talk to an Adviser
          </a>
        </div>

        <ul className="faq__list">
          {FAQS.map((item, idx) => {
            const isOpen = idx === open;
            return (
              <li key={item.q} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div className="faq__a" aria-hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
