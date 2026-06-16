import { useState } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonials.css";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Manchester",
    debt: "\u00A322,400 of debt",
    rating: 5,
    quote:
      "I was drowning in credit card debt after my divorce. The team at Debt Free Helpline listened, never judged, and helped me set up an IVA that I could actually afford. Two years in and I sleep at night again.",
    solution: "IVA Solution",
  },
  {
    name: "James R.",
    location: "Glasgow",
    debt: "\u00A331,800 of debt",
    rating: 5,
    quote:
      "After being made redundant, the calls and letters were relentless. One phone call to DRF and within a week the creditors had stopped contacting me. The Trust Deed they arranged is the best decision I have made.",
    solution: "Scottish Trust Deed",
  },
  {
    name: "Emma & Daniel P.",
    location: "Birmingham",
    debt: "\u00A348,200 of debt",
    rating: 5,
    quote:
      "We thought bankruptcy was our only option. Their adviser walked us through every alternative and we ended up with an IVA that protects our home. Honest, friendly, and not at all what we expected.",
    solution: "IVA Solution",
  },
  {
    name: "Priya K.",
    location: "London",
    debt: "\u00A39,600 of debt",
    rating: 5,
    quote:
      "I qualified for a DRO and they actually told me a free charity could help me too. That kind of honesty is rare. I went with DRF because of how they treated me — and I am now debt free.",
    solution: "Debt Relief Order",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % REVIEWS.length);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section className="tst section" aria-label="Client testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Client Stories</span>
          <h2>Real people. Real debt-free futures.</h2>
          <p>
            We are honoured to have helped thousands of UK families take back control of their
            finances. Here are just a few of their stories.
          </p>
        </div>

        <div className="tst__stage">
          <button
            className="tst__nav tst__nav--prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          <article className="tst__card" key={r.name}>
            <div className="tst__rating" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, k) => (
                <FiStar key={k} aria-hidden />
              ))}
            </div>
            <blockquote className="tst__quote">"{r.quote}"</blockquote>
            <div className="tst__meta">
              <div className="tst__author">
                <strong>{r.name}</strong>
                <span>{r.location} · {r.debt}</span>
              </div>
              <span className="tst__solution">{r.solution}</span>
            </div>
          </article>

          <button className="tst__nav tst__nav--next" onClick={next} aria-label="Next testimonial">
            <FiChevronRight />
          </button>
        </div>

        <div className="tst__dots" role="tablist">
          {REVIEWS.map((_, k) => (
            <button
              key={k}
              className={`tst__dot ${k === i ? "is-active" : ""}`}
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              aria-selected={k === i}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
