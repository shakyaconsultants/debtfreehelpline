import { FiArrowRight, FiAward } from "react-icons/fi";
import "./Solutions.css";

const SOLUTIONS = [
  {
    name: "Individual Voluntary Arrangement",
    short: "IVA",
    pitch: "Our specialist solution. A formal, legally binding agreement to repay what you can afford over 5–6 years. Remaining debt is written off.",
    features: [
      "Write off unaffordable debt",
      "One monthly payment",
      "Stops creditor action",
      "Available in England, Wales & NI",
    ],
    flag: "Most chosen",
    region: "England · Wales · NI",
  },
  {
    name: "Debt Management Plan",
    short: "DMP",
    pitch: "An informal arrangement to pay off your debts at a more affordable monthly rate while keeping things flexible.",
    features: [
      "Lower monthly payments",
      "Informal & flexible",
      "Pay back full amount over time",
      "Creditors can still add interest",
    ],
    region: "UK-wide",
  },
  {
    name: "Debt Relief Order",
    short: "DRO",
    pitch: "For those with low income, few assets and debts under £30,000. After 12 months, qualifying debts are typically written off.",
    features: [
      "Low income solution",
      "Debts up to £30,000",
      "12-month qualifying period",
      "Lower setup costs",
    ],
    region: "England · Wales · NI",
  },
  {
    name: "Trust Deed",
    short: "Scottish Trust Deed",
    pitch: "The Scottish equivalent of an IVA — a legally binding way to repay what you can afford, with the rest typically written off after 4 years.",
    features: [
      "Scotland's IVA equivalent",
      "Typically 4-year term",
      "Stops creditor action",
      "Protects qualifying assets",
    ],
    region: "Scotland",
  },
  {
    name: "Bankruptcy",
    short: "Bankruptcy",
    pitch: "A formal insolvency procedure that may be appropriate when other solutions are not suitable. We will explain the implications fully.",
    features: [
      "Most debts written off",
      "Typically lasts 12 months",
      "Affects credit rating",
      "Some assets may be sold",
    ],
    region: "UK-wide",
  },
  {
    name: "Consolidation Advice",
    short: "Loan / Consolidation",
    pitch: "Sometimes a simple consolidation loan is the right choice. We help you compare and understand the impact before committing.",
    features: [
      "Combine multiple debts",
      "One fixed monthly payment",
      "Keeps your credit options open",
      "Honest comparison advice",
    ],
    region: "UK-wide",
  },
];

export default function Solutions() {
  return (
    <section className="solutions section" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Debt Solutions</span>
          <h2>The right solution for your situation.</h2>
          <p>
            There is no one-size-fits-all answer to debt. We will walk you through every UK debt
            solution available, explain the pros and cons, and help you choose the path that fits
            your life — not ours.
          </p>
        </div>

        <div className="solutions__grid">
          {SOLUTIONS.map((s) => (
            <article className="sol-card" key={s.name}>
              {s.flag && (
                <span className="sol-card__flag">
                  <FiAward aria-hidden /> {s.flag}
                </span>
              )}
              <span className="sol-card__short">{s.short}</span>
              <h3>{s.name}</h3>
              <p className="sol-card__pitch">{s.pitch}</p>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="sol-card__foot">
                <span className="sol-card__region">{s.region}</span>
                <a href="#contact-form" className="sol-card__link">
                  Learn more <FiArrowRight aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
