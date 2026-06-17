import { useState } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonials.css";

const REVIEWS = [
  {
    name: "Rachel T.",
    location: "Manchester",
    debt: "\u00A322,400 of debt",
    rating: 5,
    quote:
      "Credit card debt piled up after my divorce and felt overwhelming. Debt Free Helpline heard me out without judgement and arranged an IVA I could genuinely afford. Two years on, I finally rest easy at night.",
    solution: "IVA Route",
  },
  {
    name: "Michael H.",
    location: "Glasgow",
    debt: "\u00A331,800 of debt",
    rating: 5,
    quote:
      "Losing my job meant endless calls and letters from creditors. One conversation with the team and, within a week, the contact stopped. The Trust Deed they set up has been the best call I have made.",
    solution: "Scottish Trust Deed",
  },
  {
    name: "Laura & Tom W.",
    location: "Birmingham",
    debt: "\u00A348,200 of debt",
    rating: 5,
    quote:
      "We assumed bankruptcy was the only way forward. Their adviser talked us through every alternative and we chose an IVA that keeps our home safe. Warm, honest, and nothing like we feared.",
    solution: "IVA Route",
  },
  {
    name: "Anika S.",
    location: "London",
    debt: "\u00A39,600 of debt",
    rating: 5,
    quote:
      "I was eligible for a DRO and they were upfront that a free charity could help too. That honesty stood out. I stayed with them because of how I was treated — and I am debt-free now.",
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
      <div className="tst__bg" aria-hidden />
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Client Stories</span>
          <h2>Real lives. Real paths to freedom from debt.</h2>
          <p>
            We are proud to have supported thousands of UK families in regaining control of their
            money. Below are a handful of their experiences.
          </p>
        </div>

        <div className="tst__slider">
          <article className="tst__card" key={r.name}>
            <div className="tst__card-top">
              <div className="tst__rating" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, k) => (
                  <FiStar key={k} aria-hidden />
                ))}
              </div>
              <span className="tst__mark" aria-hidden>&ldquo;</span>
            </div>

            <blockquote className="tst__quote">&ldquo;{r.quote}&rdquo;</blockquote>

            <div className="tst__meta">
              <div className="tst__author">
                <span className="tst__avatar" aria-hidden>
                  {r.name.charAt(0)}
                </span>
                <div className="tst__author-info">
                  <strong>{r.name}</strong>
                  <span>{r.location} · {r.debt}</span>
                </div>
              </div>
              <span className="tst__solution">{r.solution}</span>
            </div>
          </article>

          <div className="tst__controls">
            <button
              className="tst__nav tst__nav--prev"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>

            <div className="tst__dots" role="tablist">
              {REVIEWS.map((review, k) => (
                <button
                  key={review.name}
                  className={`tst__dot ${k === i ? "is-active" : ""}`}
                  onClick={() => setI(k)}
                  aria-label={`Go to testimonial ${k + 1}`}
                  aria-selected={k === i}
                  role="tab"
                />
              ))}
            </div>

            <button
              className="tst__nav tst__nav--next"
              onClick={next}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
