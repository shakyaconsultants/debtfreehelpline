import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./FAQ.css";

const FAQS = [
  {
    q: "Is contacting Debt Free Helpline free?",
    a: "Yes. Your initial consultation, eligibility check and personalised debt advice are 100% free of charge. We will only ever charge a fee if you choose to proceed with a formal debt solution like an IVA, and any fees are explained clearly and in writing before you commit to anything.",
  },
  {
    q: "Will a debt solution affect my credit rating?",
    a: "Most formal debt solutions, including IVAs, DROs, Trust Deeds and bankruptcy, will be recorded on your credit file and will affect your ability to obtain credit during their term and for up to 6 years from the start date. Our advisers will explain exactly how each option will impact you so you can make an informed decision.",
  },
  {
    q: "How quickly can creditor calls and letters stop?",
    a: "Once an IVA proposal is filed and an interim order is in place, creditors are legally prevented from contacting you or pursuing further action. For most clients, this happens within a few weeks of starting the process — and the constant contact stops almost immediately when we begin liaising on your behalf.",
  },
  {
    q: "Am I eligible for an IVA?",
    a: "An IVA is generally suitable if you live in England, Wales or Northern Ireland, owe at least £6,000 to two or more creditors, and have a regular income that allows you to make some monthly contribution. There are equivalents available in Scotland (Trust Deed). The best way to find out is a free, no-obligation chat with one of our advisers.",
  },
  {
    q: "What if a free debt charity could help me instead?",
    a: "If a free service like StepChange, National Debtline or Citizens Advice is the better option for your circumstances, we will tell you. Honesty is at the heart of how we work — we would rather lose a client than recommend something that is not in your best interest.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. All information you share with us is held securely under UK GDPR. We will never sell, share or disclose your details to third parties without your explicit consent — and only ever to the licensed Insolvency Practitioner or solution provider you choose to work with.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>Your questions, answered honestly.</h2>
          <p>
            We get the same questions every day — and we love answering them. If yours is not
            covered here, give us a call on{" "}
            <a href="tel:03330916630">0333 091 6630</a> and we will be happy to help.
          </p>
          <a href="#contact-form" className="btn btn--primary faq__cta">
            Speak to an Adviser
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
