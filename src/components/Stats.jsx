import "./Stats.css";

const STATS = [
  { value: "12,400+", label: "UK clients helped since 2013" },
  { value: "\u00A387M+", label: "Of unaffordable debt resolved" },
  { value: "94%", label: "Client satisfaction rating" },
  { value: "4.9\u2605", label: "Average Trustpilot review" },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Key statistics">
      <div className="container stats__inner">
        {STATS.map((s) => (
          <div className="stats__item" key={s.label}>
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
