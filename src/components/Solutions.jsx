import { FiArrowRight, FiAward } from "react-icons/fi";
import "./Solutions.css";

const SOLUTIONS = [
  {
    name: "Individual Voluntary Arrangement",
    short: "IVA",
    pitch: "Our core offering. A formal, legally binding plan to repay what you can manage over 5–6 years, with the remainder written off.",
    features: [
      "Clear unaffordable debt",
      "Single monthly payment",
      "Halts creditor enforcement",
      "Offered in England, Wales & NI",
    ],
    flag: "Most popular",
    region: "England · Wales · NI",
  },
  {
    name: "Debt Management Plan",
    short: "DMP",
    pitch: "An informal setup to repay debts at a reduced monthly level while retaining flexibility.",
    features: [
      "Reduced monthly repayments",
      "Informal and adaptable",
      "Repay the full balance over time",
      "Interest may still be applied",
    ],
    region: "Across the UK",
  },
  {
    name: "Debt Relief Order",
    short: "DRO",
    pitch: "Designed for people on low income with limited assets and debts below £30,000. Qualifying debts are often cleared after 12 months.",
    features: [
      "Suited to lower incomes",
      "Debts up to £30,000",
      "12-month qualifying window",
      "Lower setup fees",
    ],
    region: "England · Wales · NI",
  },
  {
    name: "Trust Deed",
    short: "Scottish Trust Deed",
    pitch: "Scotland's equivalent of an IVA — a binding arrangement to pay what you can afford, with the rest usually written off after 4 years.",
    features: [
      "Scotland's IVA equivalent",
      "Typically a 4-year term",
      "Stops creditor contact",
      "Safeguards qualifying assets",
    ],
    region: "Scotland",
  },
  {
    name: "Bankruptcy",
    short: "Bankruptcy",
    pitch: "A formal insolvency route when other options are not suitable. We outline every consequence clearly before you decide.",
    features: [
      "Most debts discharged",
      "Usually concludes in 12 months",
      "Impacts credit rating",
      "Certain assets may be sold",
    ],
    region: "Across the UK",
  },
  {
    name: "Consolidation Guidance",
    short: "Loan / Consolidation",
    pitch: "In some cases, a consolidation loan is the right move. We help you weigh up the effects before you commit.",
    features: [
      "Merge multiple debts",
      "One fixed monthly sum",
      "Preserves credit choices",
      "Impartial comparison advice",
    ],
    region: "Across the UK",
  },
];

export default function Solutions() {
  return (
    <section className="solutions section" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Debt Relief Options</span>
          <h2>The best fit for your circumstances.</h2>
          <p>
            Debt has no single right answer. We guide you through each UK option on the table,
            outline the benefits and drawbacks, and support you in picking the route that suits
            your life — not our interests.
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
                  Find out more <FiArrowRight aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
