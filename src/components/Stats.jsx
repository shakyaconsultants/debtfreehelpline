import "./Stats.css";

const STATS = [
  { value: "12,400+", label: "UK residents supported since 2013" },
  { value: "\u00A387M+", label: "In unmanageable debt cleared" },
  { value: "94%", label: "Overall client satisfaction" },
  { value: "4.9\u2605", label: "Typical Trustpilot score" },
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
